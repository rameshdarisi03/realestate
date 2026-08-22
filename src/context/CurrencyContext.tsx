'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { CurrencyCode, CurrencyRate } from '@/lib/types';
import { CURRENCY_RATES } from '@/lib/propertiesData';

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  formatPrice: (priceUSD: number) => string;
  currentRate: CurrencyRate;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>('USD');

  useEffect(() => {
    const saved = localStorage.getItem('letoile_currency') as CurrencyCode | null;
    if (saved && CURRENCY_RATES[saved]) {
      setCurrencyState(saved);
    }
  }, []);

  const setCurrency = (code: CurrencyCode) => {
    setCurrencyState(code);
    localStorage.setItem('letoile_currency', code);
  };

  const formatPrice = (priceUSD: number): string => {
    const rateObj = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
    const converted = priceUSD * rateObj.rate;

    if (converted >= 1000000) {
      return `${rateObj.prefix}${(converted / 1000000).toFixed(1)}M${rateObj.suffix}`;
    }
    return `${rateObj.prefix}${Math.round(converted).toLocaleString()}${rateObj.suffix}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, currentRate: CURRENCY_RATES[currency] }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
