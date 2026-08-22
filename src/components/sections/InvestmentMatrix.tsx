'use client';

import React, { useState } from 'react';
import { useCurrency } from '@/context/CurrencyContext';

export const InvestmentMatrix: React.FC = () => {
  const { formatPrice } = useCurrency();

  const [price, setPrice] = useState<number>(36000000);
  const [downPercent, setDownPercent] = useState<number>(25);
  const [termYears, setTermYears] = useState<number>(30);
  const [interestRate, setInterestRate] = useState<number>(4.8);
  const [grossYield, setGrossYield] = useState<number>(6.2);

  // Calculations
  const downPayment = price * (downPercent / 100);
  const loanAmount = price - downPayment;
  const monthlyRate = (interestRate / 100) / 12;
  const numPayments = termYears * 12;

  let monthlyMortgage = 0;
  if (monthlyRate > 0) {
    monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
  } else {
    monthlyMortgage = loanAmount / numPayments;
  }

  const monthlyTaxAndHOA = (price * 0.0085) / 12;
  const totalMonthlyCommitment = monthlyMortgage + monthlyTaxAndHOA;
  const monthlyRentalInflow = (price * (grossYield / 100)) / 12;
  const netMonthlyCashflow = monthlyRentalInflow - totalMonthlyCommitment;
  const future10YrValuation = price * Math.pow(1.065, 10);

  const maxVal = Math.max(totalMonthlyCommitment, monthlyRentalInflow, 1);
  const mortWidth = Math.min(100, Math.round((totalMonthlyCommitment / maxVal) * 100));
  const rentWidth = Math.min(100, Math.round((monthlyRentalInflow / maxVal) * 100));

  return (
    <section id="calculator-section" className="py-24 px-4 md:px-8 border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 block mb-2">
            Financial Intelligence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            PORTFOLIO &amp; <span className="font-editorial italic font-normal text-gold-gradient">Yield Matrix</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mb-4" />
          <p className="text-sm md:text-base opacity-75 font-light">
            Simulate acquisition structures, private banking mortgage amortization, holding yields, and 10-year capital appreciation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 md:p-8 space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <h3 className="font-serif text-xl font-bold">Acquisition Parameters</h3>
              <div className="flex gap-1.5">
                <button onClick={() => setPrice(25000000)} className="text-[11px] px-2.5 py-1 rounded bg-white/5 hover:bg-gold-400/20 text-gold-300 font-mono">$25M</button>
                <button onClick={() => setPrice(36000000)} className="text-[11px] px-2.5 py-1 rounded bg-white/5 hover:bg-gold-400/20 text-gold-300 font-mono">$36M</button>
                <button onClick={() => setPrice(50000000)} className="text-[11px] px-2.5 py-1 rounded bg-white/5 hover:bg-gold-400/20 text-gold-300 font-mono">$50M</button>
              </div>
            </div>

            {/* Price Slider */}
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="uppercase tracking-wider opacity-75 font-medium">Estate Valuation</span>
                <span className="font-serif text-lg font-bold text-gold-300">{formatPrice(price)}</span>
              </div>
              <input
                type="range"
                min="5000000"
                max="100000000"
                step="1000000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Down Payment */}
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="uppercase tracking-wider opacity-75 font-medium">Equity Down Payment</span>
                <span className="font-mono text-sm text-gold-300">
                  {downPercent}% <span className="opacity-70">({formatPrice(downPayment)})</span>
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="5"
                value={downPercent}
                onChange={(e) => setDownPercent(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Loan Term & Interest */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider opacity-75 font-medium mb-2">Private Loan Term</label>
                <select
                  value={termYears}
                  onChange={(e) => setTermYears(Number(e.target.value))}
                  className="w-full bg-neutral-900/80 border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none"
                >
                  <option value="15">15 Years (Fixed Private Rate)</option>
                  <option value="20">20 Years</option>
                  <option value="30">30 Years (Jumbo Portfolio)</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="uppercase tracking-wider opacity-75 font-medium">Interest Rate</span>
                  <span className="font-mono text-gold-300">{interestRate.toFixed(2)}%</span>
                </div>
                <input
                  type="range"
                  min="2.5"
                  max="8.0"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            {/* Target Yield */}
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="uppercase tracking-wider opacity-75 font-medium">Projected Gross Yield</span>
                <span className="font-mono text-gold-300">{grossYield.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="3.0"
                max="12.0"
                step="0.2"
                value={grossYield}
                onChange={(e) => setGrossYield(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          {/* Outputs */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 md:p-8 space-y-6 border border-gold-400/30">
            <h3 className="font-serif text-xl font-bold pb-3 border-b border-white/10">Cashflow &amp; Valuation Forecast</h3>

            <div className="space-y-4 text-xs">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="opacity-75">Monthly Principal &amp; Interest</span>
                <span className="font-serif text-base font-bold text-white">{formatPrice(monthlyMortgage)}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="opacity-75">Monthly Holding, Tax &amp; HOA</span>
                <span className="font-serif text-base font-bold text-white">{formatPrice(monthlyTaxAndHOA)}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-white/5 bg-white/5 px-3 rounded-xl">
                <span className="font-semibold uppercase tracking-wider text-gold-300">Total Monthly Commitment</span>
                <span className="font-serif text-lg font-bold text-gold-gradient">{formatPrice(totalMonthlyCommitment)}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="opacity-75">Gross Rental Inflow / Mo</span>
                <span className="font-serif text-base font-bold text-emerald-400">{formatPrice(monthlyRentalInflow)}</span>
              </div>

              <div className="flex justify-between items-center py-2 bg-neutral-900/60 px-3 rounded-xl border border-white/10">
                <span className="font-semibold uppercase tracking-wider">Net Monthly Yield Spread</span>
                <span className={`font-serif text-lg font-bold ${netMonthlyCashflow >= 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {netMonthlyCashflow >= 0 ? '+' : '-'}{formatPrice(Math.abs(netMonthlyCashflow))}
                </span>
              </div>
            </div>

            {/* Visualizer Bar */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-[11px] font-mono">
                <span className="text-gray-400">Commitment vs Inflow</span>
              </div>
              <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden flex gap-1">
                <div className="bg-gold-500 transition-all duration-300" style={{ width: `${mortWidth}%` }} />
                <div className="bg-emerald-500 transition-all duration-300" style={{ width: `${rentWidth}%` }} />
              </div>
            </div>

            {/* 10-Yr Callout */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-gold-500/15 via-gold-500/5 to-transparent border border-gold-400/20">
              <span className="text-[10px] uppercase tracking-widest text-gold-300 font-semibold block mb-1">
                10-Year Compounded Valuation (@6.5% p.a.)
              </span>
              <span className="font-grand text-2xl md:text-3xl font-bold text-gold-gradient">
                {formatPrice(future10YrValuation)}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
