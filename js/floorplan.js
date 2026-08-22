/**
 * L'ÉTOILE REAL ESTATE - Interactive Floorplan & Daylight Simulator
 */

document.addEventListener('DOMContentLoaded', () => {
  initFloorplanHotspots();
  initDaylightSimulator();
});

function initFloorplanHotspots() {
  const container = document.getElementById('floorplan-hotspots-layer');
  const detailsCard = document.getElementById('hotspot-details-card');
  const detailTitle = document.getElementById('hotspot-title');
  const detailArea = document.getElementById('hotspot-area');
  const detailSpecs = document.getElementById('hotspot-specs');
  const detailImage = document.getElementById('hotspot-image');

  if (!container || !window.FLOORPLAN_HOTSPOTS) return;

  container.innerHTML = '';

  window.FLOORPLAN_HOTSPOTS.forEach((spot, index) => {
    const pin = document.createElement('button');
    pin.className = `hotspot-pin ${index === 0 ? 'active' : ''}`;
    pin.style.left = `${spot.x}%`;
    pin.style.top = `${spot.y}%`;
    pin.setAttribute('data-id', spot.id);
    pin.setAttribute('aria-label', spot.name);

    pin.innerHTML = `
      <span class="hotspot-pulse"></span>
      <span class="hotspot-core"><span class="pin-number">${index + 1}</span></span>
      <span class="hotspot-tooltip">${spot.name}</span>
    `;

    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      setActiveHotspot(spot, pin);
    });

    pin.addEventListener('mouseenter', () => {
      setActiveHotspot(spot, pin);
    });

    container.appendChild(pin);
  });

  // Set initial hotspot
  if (window.FLOORPLAN_HOTSPOTS.length > 0) {
    setActiveHotspot(window.FLOORPLAN_HOTSPOTS[0], container.querySelector('.hotspot-pin'));
  }

  function setActiveHotspot(spot, activePin) {
    document.querySelectorAll('.hotspot-pin').forEach(p => p.classList.remove('active'));
    if (activePin) activePin.classList.add('active');

    if (detailTitle) detailTitle.textContent = spot.name;
    if (detailArea) detailArea.textContent = spot.area;
    if (detailSpecs) detailSpecs.textContent = spot.specs;
    if (detailImage) {
      detailImage.src = spot.image;
      detailImage.alt = spot.name;
    }
    if (detailsCard) {
      detailsCard.classList.remove('pulse-update');
      void detailsCard.offsetWidth; // trigger reflow
      detailsCard.classList.add('pulse-update');
    }
  }
}

function initDaylightSimulator() {
  const slider = document.getElementById('daylight-time-slider');
  const timeLabel = document.getElementById('daylight-time-label');
  const sunElevationLabel = document.getElementById('daylight-elevation-label');
  const floorplanVisual = document.getElementById('interactive-floorplan-svg');
  const timePresets = document.querySelectorAll('.daylight-preset-btn');
  const lightRays = document.getElementById('daylight-sun-rays');
  const previewBackdrop = document.getElementById('daylight-ambient-preview');

  const daylightStates = {
    dawn: {
      time: '06:45 AM',
      name: 'Alpine Dawn',
      elevation: '12° East',
      skyColor: 'linear-gradient(135deg, rgba(253, 186, 116, 0.35), rgba(244, 114, 182, 0.2), rgba(15, 23, 42, 0.8))',
      rayAngle: '45deg',
      rayOpacity: '0.45',
      windowGlow: 'rgba(251, 191, 36, 0.4)',
      ambientFilter: 'sepia(0.3) brightness(0.85) hue-rotate(-20deg)',
      sliderVal: 1
    },
    noon: {
      time: '12:30 PM',
      name: 'High Zenith',
      elevation: '78° South',
      skyColor: 'linear-gradient(135deg, rgba(219, 234, 254, 0.6), rgba(254, 240, 138, 0.35), rgba(255, 255, 255, 0.1))',
      rayAngle: '90deg',
      rayOpacity: '0.75',
      windowGlow: 'rgba(255, 255, 255, 0.8)',
      ambientFilter: 'brightness(1.1) contrast(1.05)',
      sliderVal: 2
    },
    sunset: {
      time: '06:15 PM',
      name: 'Golden Hour',
      elevation: '18° West',
      skyColor: 'linear-gradient(135deg, rgba(251, 146, 60, 0.5), rgba(225, 29, 72, 0.3), rgba(67, 24, 255, 0.15))',
      rayAngle: '135deg',
      rayOpacity: '0.85',
      windowGlow: 'rgba(245, 158, 11, 0.7)',
      ambientFilter: 'sepia(0.4) saturate(1.4) hue-rotate(-10deg)',
      sliderVal: 3
    },
    night: {
      time: '11:00 PM',
      name: 'Nocturne Luxe',
      elevation: 'Moonlight',
      skyColor: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 27, 75, 0.85), rgba(2, 6, 23, 0.98))',
      rayAngle: '180deg',
      rayOpacity: '0.2',
      windowGlow: 'rgba(234, 179, 8, 0.6)',
      ambientFilter: 'brightness(0.65) contrast(1.15) hue-rotate(190deg)',
      sliderVal: 4
    }
  };

  function applyDaylightState(key) {
    const state = daylightStates[key];
    if (!state) return;

    if (timeLabel) timeLabel.textContent = `${state.time} — ${state.name}`;
    if (sunElevationLabel) sunElevationLabel.textContent = state.elevation;
    if (slider) slider.value = state.sliderVal;

    timePresets.forEach(btn => {
      if (btn.getAttribute('data-preset') === key) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (floorplanVisual) {
      floorplanVisual.style.setProperty('--sun-ray-angle', state.rayAngle);
      floorplanVisual.style.setProperty('--window-glow', state.windowGlow);
    }

    if (previewBackdrop) {
      previewBackdrop.style.background = state.skyColor;
      previewBackdrop.style.filter = state.ambientFilter;
    }

    if (lightRays) {
      lightRays.style.opacity = state.rayOpacity;
      lightRays.style.transform = `rotate(${state.rayAngle})`;
    }
  }

  // Preset buttons
  timePresets.forEach(btn => {
    btn.addEventListener('click', () => {
      const preset = btn.getAttribute('data-preset');
      applyDaylightState(preset);
    });
  });

  // Slider change
  if (slider) {
    slider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      const keys = ['dawn', 'noon', 'sunset', 'night'];
      applyDaylightState(keys[val - 1]);
    });
  }

  // Initial State: Sunset (Golden Hour)
  applyDaylightState('sunset');
}
