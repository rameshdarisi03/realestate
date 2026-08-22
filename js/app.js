/**
 * L'ÉTOILE REAL ESTATE - Flagship Application Core
 * Haute-Couture Architectural Real Estate
 */

// Global State
window.currentTheme = localStorage.getItem('letoile_theme') || 'dark';
window.currentCurrency = localStorage.getItem('letoile_currency') || 'USD';
window.activeCategoryFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initThemeSystem();
  initCurrencySystem();
  initNavigation();
  renderCategoriesSection();
  renderPropertiesGrid();
  initHeroSearch();
  initModals();
  initStatCounters();
  initScrollEffects();
});

/* ==========================================================================
   1. Theme Management (Dark & Light Modes + Hero Crossfade)
   ========================================================================== */
function initThemeSystem() {
  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  const heroDarkImg = document.getElementById('hero-img-dark');
  const heroLightImg = document.getElementById('hero-img-light');

  function applyTheme(theme, isUserAction = false) {
    window.currentTheme = theme;
    localStorage.setItem('letoile_theme', theme);

    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      if (heroDarkImg) heroDarkImg.style.opacity = '0';
      if (heroLightImg) heroLightImg.style.opacity = '1';
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      if (heroDarkImg) heroDarkImg.style.opacity = '1';
      if (heroLightImg) heroLightImg.style.opacity = '0';
    }

    // Update toggle icons and labels
    themeToggles.forEach(btn => {
      const isDark = theme === 'dark';
      const iconSun = btn.querySelector('.theme-icon-sun');
      const iconMoon = btn.querySelector('.theme-icon-moon');
      const textSpan = btn.querySelector('.theme-text');
      
      if (iconSun && iconMoon) {
        iconSun.style.display = isDark ? 'inline-block' : 'none';
        iconMoon.style.display = isDark ? 'none' : 'inline-block';
      }
      if (textSpan) {
        textSpan.textContent = isDark ? 'Solarium (Light)' : 'Nocturne (Dark)';
      }
      btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    });

    if (isUserAction) {
      showToast(`Switched to ${theme === 'dark' ? 'Nocturne Luxe (Dark)' : 'Solarium Elegance (Light)'} mode`);
    }
  }

  themeToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const nextTheme = window.currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme, true);
    });
  });

  // Apply initial theme
  applyTheme(window.currentTheme, false);
}

/* ==========================================================================
   2. Currency Management
   ========================================================================== */
function initCurrencySystem() {
  const currencyPickers = document.querySelectorAll('.currency-selector');

  function setCurrency(curr) {
    window.currentCurrency = curr;
    localStorage.setItem('letoile_currency', curr);

    currencyPickers.forEach(sel => {
      sel.value = curr;
    });

    // Re-render properties and recalculate calculator
    renderPropertiesGrid();
    if (window.recalculateLuxuryInvestment) {
      window.recalculateLuxuryInvestment();
    }
  }

  currencyPickers.forEach(sel => {
    sel.value = window.currentCurrency;
    sel.addEventListener('change', (e) => {
      setCurrency(e.target.value);
    });
  });
}

function formatCurrency(amountUSD) {
  const curr = window.currentCurrency || 'USD';
  const rateObj = (window.CURRENCY_RATES && window.CURRENCY_RATES[curr]) || { symbol: '$', rate: 1.0, prefix: '$', suffix: '' };
  const converted = amountUSD * rateObj.rate;
  
  if (converted >= 1000000) {
    return `${rateObj.prefix}${(converted / 1000000).toFixed(1)}M${rateObj.suffix}`;
  }
  return `${rateObj.prefix}${Math.round(converted).toLocaleString()}${rateObj.suffix}`;
}

/* ==========================================================================
   3. Navigation & Glass Header
   ========================================================================== */
function initNavigation() {
  const navbar = document.getElementById('main-navbar');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const closeMobile = document.getElementById('mobile-menu-close');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeMobile && mobileDrawer) {
    closeMobile.addEventListener('click', () => {
      mobileDrawer.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // Smooth scroll anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        if (mobileDrawer) {
          mobileDrawer.classList.add('hidden');
          document.body.style.overflow = '';
        }
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ==========================================================================
   4. Categories Section (Elevated from Reference)
   ========================================================================== */
function renderCategoriesSection() {
  const container = document.getElementById('categories-grid-container');
  if (!container || !window.CATEGORIES_DATA) return;

  container.innerHTML = window.CATEGORIES_DATA.map(cat => `
    <div class="category-card group relative overflow-hidden rounded-2xl cursor-pointer" data-category-id="${cat.id}">
      <div class="category-img-wrapper absolute inset-0">
        <img src="${cat.image}" alt="${cat.title}" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" />
        <div class="category-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 transition-colors"></div>
      </div>
      
      <div class="relative z-10 p-6 md:p-8 h-full min-h-[280px] md:min-h-[320px] flex flex-col justify-between">
        <div class="flex justify-between items-start">
          <span class="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-gold-300 font-medium border border-gold-400/20">
            ${cat.badge}
          </span>
          <span class="text-xs text-white/70 font-mono">
            ${cat.count} Properties
          </span>
        </div>

        <div>
          <h3 class="font-serif text-2xl md:text-3xl text-white font-semibold mb-1 group-hover:text-gold-300 transition-colors">
            ${cat.title}
          </h3>
          <p class="text-xs md:text-sm text-gray-300 mb-4 line-clamp-1">
            ${cat.subtitle}
          </p>

          <div class="category-action-link inline-flex items-center text-xs uppercase tracking-widest font-semibold text-gold-400 group-hover:text-white transition-all transform group-hover:translate-x-2">
            <span>Explore Collection</span>
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Click on category filters the properties section
  container.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const catId = card.getAttribute('data-category-id');
      window.activeCategoryFilter = catId;
      
      // Update filter tabs UI
      document.querySelectorAll('.filter-tab-btn').forEach(btn => {
        if (btn.getAttribute('data-filter') === catId) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      renderPropertiesGrid();

      // Scroll smoothly to properties section
      const propSection = document.getElementById('portfolio-section');
      if (propSection) {
        propSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ==========================================================================
   5. Filterable Masterpiece Properties Grid
   ========================================================================== */
function renderPropertiesGrid(filteredList = null) {
  const container = document.getElementById('properties-grid-container');
  const countLabel = document.getElementById('properties-count-label');
  if (!container || !window.PROPERTIES_DATA) return;

  const dataToRender = filteredList || (
    window.activeCategoryFilter === 'all' 
      ? window.PROPERTIES_DATA 
      : window.PROPERTIES_DATA.filter(p => p.category === window.activeCategoryFilter)
  );

  if (countLabel) {
    countLabel.textContent = `Showing ${dataToRender.length} Curated Residences`;
  }

  if (dataToRender.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <h3 class="font-serif text-2xl font-semibold mb-2">No Bespoke Estates Match Your Filter</h3>
        <p class="text-sm opacity-70 mb-6 max-w-md mx-auto">Adjust your criteria or connect with our private acquisition desk for unlisted off-market opportunities.</p>
        <button class="btn-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = dataToRender.map(prop => {
    const badgeColorClass = prop.badgeType === 'ruby' ? 'badge-ruby' : prop.badgeType === 'emerald' ? 'badge-emerald' : 'badge-gold';

    return `
      <div class="property-card group relative rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-500 flex flex-col justify-between" data-id="${prop.id}">
        <!-- Image & Gallery Container -->
        <div class="relative overflow-hidden aspect-[4/3] rounded-t-3xl">
          <img src="${prop.heroImage}" alt="${prop.title}" class="property-card-img w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108" loading="lazy" />
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

          <!-- Top Badges -->
          <div class="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none">
            <span class="custom-badge ${badgeColorClass} backdrop-blur-md">
              ${prop.badge}
            </span>
            <span class="bg-black/60 backdrop-blur-md text-white text-xs font-mono px-3 py-1 rounded-full border border-white/10">
              ${prop.categoryLabel}
            </span>
          </div>

          <!-- Quick Action Hover Overlay -->
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
            <button class="quick-view-trigger px-4 py-2 rounded-full bg-white text-gray-900 text-xs font-semibold uppercase tracking-wider hover:bg-gold-400 hover:text-black transition-colors shadow-xl" data-id="${prop.id}">
              Inspect Estate
            </button>
            <button class="private-tour-trigger px-4 py-2 rounded-full bg-black/80 text-white text-xs font-semibold uppercase tracking-wider hover:bg-gold-500 hover:text-black transition-colors border border-white/20 shadow-xl" data-id="${prop.id}">
              Book Tour
            </button>
          </div>

          <!-- Price Overlay on Image bottom -->
          <div class="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
            <div>
              <span class="text-[11px] uppercase tracking-widest text-gold-300 font-semibold block">Asking Price</span>
              <span class="font-serif text-2xl md:text-3xl text-white font-bold tracking-tight drop-shadow-md">
                ${formatCurrency(prop.priceUSD)}
              </span>
            </div>
            <span class="text-xs text-white/80 font-mono bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-md">
              ${prop.sqft.toLocaleString()} sq.ft
            </span>
          </div>
        </div>

        <!-- Details Container -->
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center text-xs text-gold-400 font-medium mb-1.5">
              <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>${prop.location}</span>
            </div>

            <h3 class="font-serif text-xl font-bold mb-2 group-hover:text-gold-400 transition-colors line-clamp-1">
              ${prop.title}
            </h3>

            <p class="text-xs opacity-75 line-clamp-2 mb-4 leading-relaxed">
              ${prop.tagline}
            </p>
          </div>

          <div>
            <!-- Key Specs Grid -->
            <div class="grid grid-cols-3 gap-2 py-3 border-y border-current/10 text-center mb-4">
              <div>
                <span class="block text-xs font-semibold font-serif text-gold-400">${prop.beds > 0 ? prop.beds : 'Studio'}</span>
                <span class="text-[10px] uppercase tracking-wider opacity-60">Bedrooms</span>
              </div>
              <div>
                <span class="block text-xs font-semibold font-serif text-gold-400">${prop.baths}</span>
                <span class="text-[10px] uppercase tracking-wider opacity-60">Bathrooms</span>
              </div>
              <div>
                <span class="block text-xs font-semibold font-serif text-gold-400">${prop.yearBuilt}</span>
                <span class="text-[10px] uppercase tracking-wider opacity-60">Completed</span>
              </div>
            </div>

            <!-- Card Actions -->
            <div class="flex items-center justify-between pt-1">
              <button class="quick-view-trigger text-xs uppercase tracking-widest font-semibold text-gold-400 hover:text-gold-300 transition-colors inline-flex items-center" data-id="${prop.id}">
                <span>View Dossier</span>
                <svg class="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>

              <button class="private-tour-trigger text-xs font-medium px-3.5 py-1.5 rounded-full border border-gold-400/40 hover:bg-gold-400 hover:text-black transition-all" data-id="${prop.id}">
                Inquire VIP
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Bind Quick View & VIP Booking Triggers
  container.querySelectorAll('.quick-view-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openPropertyModal(id);
    });
  });

  container.querySelectorAll('.private-tour-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openVipViewingModal(id);
    });
  });

  // Filter tab buttons
  document.querySelectorAll('.filter-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      window.activeCategoryFilter = btn.getAttribute('data-filter');
      renderPropertiesGrid();
    });
  });
}

function resetFilters() {
  window.activeCategoryFilter = 'all';
  document.querySelectorAll('.filter-tab-btn').forEach(b => {
    if (b.getAttribute('data-filter') === 'all') b.classList.add('active');
    else b.classList.remove('active');
  });
  renderPropertiesGrid();
}

/* ==========================================================================
   6. Hero Live Search & Filter Bar
   ========================================================================== */
function initHeroSearch() {
  const searchInput = document.getElementById('hero-search-location');
  const typeSelect = document.getElementById('hero-search-type');
  const priceSelect = document.getElementById('hero-search-price');
  const searchBtn = document.getElementById('hero-search-submit');

  function executeSearch() {
    const locQuery = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const typeVal = typeSelect ? typeSelect.value : 'all';
    const priceVal = priceSelect ? priceSelect.value : 'all';

    let results = window.PROPERTIES_DATA.filter(p => {
      // Location match
      const locMatch = !locQuery || 
        p.location.toLowerCase().includes(locQuery) || 
        p.city.toLowerCase().includes(locQuery) || 
        p.country.toLowerCase().includes(locQuery) ||
        p.title.toLowerCase().includes(locQuery);

      // Type match
      const typeMatch = typeVal === 'all' || p.category === typeVal;

      // Price match
      let priceMatch = true;
      if (priceVal === 'under-35m') priceMatch = p.priceUSD < 35000000;
      else if (priceVal === '35m-50m') priceMatch = p.priceUSD >= 35000000 && p.priceUSD <= 50000000;
      else if (priceVal === '50m-plus') priceMatch = p.priceUSD > 50000000;

      return locMatch && typeMatch && priceMatch;
    });

    renderPropertiesGrid(results);

    const propSection = document.getElementById('portfolio-section');
    if (propSection) {
      propSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', executeSearch);
  }

  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') executeSearch();
    });
  }
}

/* ==========================================================================
   7. Modals: Quick View, VIP Viewing, and Submit Property
   ========================================================================== */
function initModals() {
  // Modal background backdrops
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  });

  // Modal close buttons
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-backdrop');
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  });

  // Global CTA for Submit Property (From User's Rough Reference CTA)
  document.querySelectorAll('.submit-property-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openSubmitPropertyModal();
    });
  });

  // Global CTA for VIP Viewing
  document.querySelectorAll('.vip-consultation-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openVipViewingModal();
    });
  });

  // Forms submissions with feedback
  const vipForm = document.getElementById('vip-viewing-form');
  if (vipForm) {
    vipForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('VIP Consultation dossier generated. A Senior Partner will contact you discreetly within 2 hours.');
      document.getElementById('vip-viewing-modal').classList.add('hidden');
      document.body.style.overflow = '';
      vipForm.reset();
    });
  }

  const submitPropForm = document.getElementById('submit-property-form');
  if (submitPropForm) {
    submitPropForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Property credentials received. Our Confidential Acquisitions Board will review your dossier.');
      document.getElementById('submit-property-modal').classList.add('hidden');
      document.body.style.overflow = '';
      submitPropForm.reset();
    });
  }
}

function openPropertyModal(propertyId) {
  const prop = window.PROPERTIES_DATA.find(p => p.id === propertyId);
  if (!prop) return;

  const modal = document.getElementById('property-detail-modal');
  const title = document.getElementById('modal-prop-title');
  const tagline = document.getElementById('modal-prop-tagline');
  const location = document.getElementById('modal-prop-location');
  const price = document.getElementById('modal-prop-price');
  const mainImg = document.getElementById('modal-prop-main-img');
  const gallery = document.getElementById('modal-prop-gallery-thumbs');
  const features = document.getElementById('modal-prop-features');
  const desc = document.getElementById('modal-prop-desc');
  const specsBeds = document.getElementById('modal-prop-beds');
  const specsBaths = document.getElementById('modal-prop-baths');
  const specsSqft = document.getElementById('modal-prop-sqft');
  const specsArchitect = document.getElementById('modal-prop-architect');
  const bookBtn = document.getElementById('modal-prop-book-btn');

  if (title) title.textContent = prop.title;
  if (tagline) tagline.textContent = prop.tagline;
  if (location) location.textContent = prop.location;
  if (price) price.textContent = formatCurrency(prop.priceUSD);
  if (desc) desc.textContent = prop.description;
  if (specsBeds) specsBeds.textContent = `${prop.beds} Suites`;
  if (specsBaths) specsBaths.textContent = `${prop.baths} Baths`;
  if (specsSqft) specsSqft.textContent = `${prop.sqft.toLocaleString()} Sq.Ft`;
  if (specsArchitect) specsArchitect.textContent = prop.architect;

  if (mainImg) {
    mainImg.src = prop.heroImage;
    mainImg.alt = prop.title;
  }

  if (gallery && prop.gallery) {
    gallery.innerHTML = prop.gallery.map((imgUrl, idx) => `
      <button class="gallery-thumb-btn rounded-xl overflow-hidden border-2 ${idx === 0 ? 'border-gold-400' : 'border-transparent'} hover:border-gold-400 transition-colors" data-src="${imgUrl}">
        <img src="${imgUrl}" class="w-full h-16 object-cover" alt="Gallery thumbnail ${idx + 1}" />
      </button>
    `).join('');

    gallery.querySelectorAll('.gallery-thumb-btn').forEach(thumb => {
      thumb.addEventListener('click', () => {
        gallery.querySelectorAll('.gallery-thumb-btn').forEach(t => t.classList.remove('border-gold-400'));
        thumb.classList.add('border-gold-400');
        if (mainImg) mainImg.src = thumb.getAttribute('data-src');
      });
    });
  }

  if (features && prop.features) {
    features.innerHTML = prop.features.map(f => `
      <li class="flex items-start text-xs opacity-90">
        <svg class="w-4 h-4 text-gold-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>${f}</span>
      </li>
    `).join('');
  }

  if (bookBtn) {
    bookBtn.onclick = () => {
      modal.classList.add('hidden');
      openVipViewingModal(prop.id);
    };
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function openVipViewingModal(propertyId = null) {
  const modal = document.getElementById('vip-viewing-modal');
  const propSelect = document.getElementById('vip-form-property');

  if (propSelect && window.PROPERTIES_DATA) {
    propSelect.innerHTML = `
      <option value="general">General Bespoke Portfolio Consultation</option>
      ${window.PROPERTIES_DATA.map(p => `
        <option value="${p.id}" ${propertyId === p.id ? 'selected' : ''}>
          ${p.title} (${formatCurrency(p.priceUSD)})
        </option>
      `).join('')}
    `;
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function openSubmitPropertyModal() {
  const modal = document.getElementById('submit-property-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   8. Stat Counters & Scroll Animations
   ========================================================================== */
function initStatCounters() {
  const statElements = document.querySelectorAll('.counter-value');
  let hasRun = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasRun) {
        hasRun = true;
        statElements.forEach(el => {
          const target = parseFloat(el.getAttribute('data-target'));
          const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 2000;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = (target * easeProgress).toFixed(decimals);

            el.textContent = `${prefix}${currentVal}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.2 });

  const ticker = document.getElementById('prestige-metrics-ticker');
  if (ticker) observer.observe(ticker);
}

function initScrollEffects() {
  const backToTop = document.getElementById('back-to-top-btn');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        backToTop.classList.remove('opacity-0', 'pointer-events-none');
        backToTop.classList.add('opacity-100');
      } else {
        backToTop.classList.add('opacity-0', 'pointer-events-none');
        backToTop.classList.remove('opacity-100');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   9. Toast Notification System
   ========================================================================== */
function showToast(message, type = 'gold') {
  let toastContainer = document.getElementById('luxury-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'luxury-toast-container';
    toastContainer.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none max-w-sm w-full';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'luxury-toast flex items-start gap-3 p-4 rounded-2xl bg-neutral-900/95 text-white border border-gold-400/40 shadow-2xl backdrop-blur-xl pointer-events-auto transform translate-y-4 opacity-0 transition-all duration-300';
  
  toast.innerHTML = `
    <div class="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <div class="flex-1">
      <p class="text-xs font-serif font-semibold text-gold-300 mb-0.5">L'ÉTOILE PRIVATE CONCIERGE</p>
      <p class="text-xs text-gray-200 leading-relaxed">${message}</p>
    </div>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

window.showToast = showToast;
window.resetFilters = resetFilters;
