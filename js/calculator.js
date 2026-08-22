/**
 * L'ÉTOILE REAL ESTATE - Luxury Portfolio & Investment Yield Calculator
 */

document.addEventListener('DOMContentLoaded', () => {
  initLuxuryCalculator();
});

function initLuxuryCalculator() {
  const priceSlider = document.getElementById('calc-price-slider');
  const priceDisplay = document.getElementById('calc-price-display');
  const downSlider = document.getElementById('calc-down-slider');
  const downDisplay = document.getElementById('calc-down-display');
  const downAmountDisplay = document.getElementById('calc-down-amount');
  const termSelect = document.getElementById('calc-term-select');
  const interestSlider = document.getElementById('calc-interest-slider');
  const interestDisplay = document.getElementById('calc-interest-display');
  const yieldSlider = document.getElementById('calc-yield-slider');
  const yieldDisplay = document.getElementById('calc-yield-display');

  // Outputs
  const monthlyAmortDisplay = document.getElementById('calc-monthly-amort');
  const monthlyTaxDisplay = document.getElementById('calc-monthly-tax');
  const totalMonthlyDisplay = document.getElementById('calc-monthly-total');
  const monthlyRentalDisplay = document.getElementById('calc-monthly-rental');
  const netCashflowDisplay = document.getElementById('calc-net-cashflow');
  const appreciation10YrDisplay = document.getElementById('calc-appreciation-10yr');
  const barMortgage = document.getElementById('calc-bar-mortgage');
  const barRental = document.getElementById('calc-bar-rental');

  if (!priceSlider) return;

  function formatMoney(amount) {
    const currentCurr = window.currentCurrency || 'USD';
    const rateObj = (window.CURRENCY_RATES && window.CURRENCY_RATES[currentCurr]) || { symbol: '$', rate: 1.0, prefix: '$', suffix: '' };
    const converted = amount * rateObj.rate;
    
    if (converted >= 1000000) {
      return `${rateObj.prefix}${(converted / 1000000).toFixed(2)}M${rateObj.suffix}`;
    }
    return `${rateObj.prefix}${Math.round(converted).toLocaleString()}${rateObj.suffix}`;
  }

  function calculate() {
    const price = parseFloat(priceSlider.value) || 36000000;
    const downPercent = parseFloat(downSlider.value) || 25;
    const termYears = parseInt(termSelect.value, 10) || 30;
    const annualInterest = (parseFloat(interestSlider.value) || 4.8) / 100;
    const grossYieldPercent = (parseFloat(yieldSlider.value) || 6.2) / 100;

    const downPayment = price * (downPercent / 100);
    const loanAmount = price - downPayment;
    const monthlyRate = annualInterest / 12;
    const numPayments = termYears * 12;

    // Standard Amortization Formula: M = P * [ r(1+r)^n ] / [ (1+r)^n - 1]
    let monthlyMortgage = 0;
    if (monthlyRate > 0) {
      monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    } else {
      monthlyMortgage = loanAmount / numPayments;
    }

    // Taxes & Luxury Estate Maintenance (~0.85% annual)
    const monthlyTaxAndHOA = (price * 0.0085) / 12;
    const totalMonthly = monthlyMortgage + monthlyTaxAndHOA;

    // Rental Yield Income
    const annualRentalIncome = price * grossYieldPercent;
    const monthlyRentalIncome = annualRentalIncome / 12;
    const netMonthlyCashflow = monthlyRentalIncome - totalMonthly;

    // 10-Year Future Valuation @ 6.5% Compounded Annual Capital Appreciation
    const futureValuation10Yr = price * Math.pow(1.065, 10);

    // Update UI
    if (priceDisplay) priceDisplay.textContent = formatMoney(price);
    if (downDisplay) downDisplay.textContent = `${downPercent}%`;
    if (downAmountDisplay) downAmountDisplay.textContent = `(${formatMoney(downPayment)})`;
    if (interestDisplay) interestDisplay.textContent = `${(annualInterest * 100).toFixed(2)}%`;
    if (yieldDisplay) yieldDisplay.textContent = `${(grossYieldPercent * 100).toFixed(1)}%`;

    if (monthlyAmortDisplay) monthlyAmortDisplay.textContent = formatMoney(monthlyMortgage);
    if (monthlyTaxDisplay) monthlyTaxDisplay.textContent = formatMoney(monthlyTaxAndHOA);
    if (totalMonthlyDisplay) totalMonthlyDisplay.textContent = formatMoney(totalMonthly);
    if (monthlyRentalDisplay) monthlyRentalDisplay.textContent = formatMoney(monthlyRentalIncome);

    if (netCashflowDisplay) {
      const isPositive = netMonthlyCashflow >= 0;
      netCashflowDisplay.textContent = (isPositive ? '+' : '-') + formatMoney(Math.abs(netMonthlyCashflow));
      netCashflowDisplay.className = `stat-number ${isPositive ? 'text-emerald-500' : 'text-amber-500'}`;
    }

    if (appreciation10YrDisplay) {
      appreciation10YrDisplay.textContent = formatMoney(futureValuation10Yr);
    }

    // Comparison Visualizer Bars
    if (barMortgage && barRental) {
      const maxVal = Math.max(totalMonthly, monthlyRentalIncome, 1);
      const mortWidth = Math.min(100, Math.round((totalMonthly / maxVal) * 100));
      const rentWidth = Math.min(100, Math.round((monthlyRentalIncome / maxVal) * 100));
      barMortgage.style.width = `${mortWidth}%`;
      barRental.style.width = `${rentWidth}%`;
    }
  }

  // Event Listeners
  [priceSlider, downSlider, interestSlider, yieldSlider].forEach(input => {
    if (input) input.addEventListener('input', calculate);
  });

  if (termSelect) {
    termSelect.addEventListener('change', calculate);
  }

  window.recalculateLuxuryInvestment = calculate;

  // Preset buttons
  document.querySelectorAll('.calc-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPrice = parseInt(btn.getAttribute('data-price'), 10);
      if (targetPrice && priceSlider) {
        priceSlider.value = targetPrice;
        calculate();
      }
    });
  });

  calculate();
}
