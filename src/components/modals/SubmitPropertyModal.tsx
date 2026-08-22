'use client';

import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface SubmitPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmitPropertyModal: React.FC<SubmitPropertyModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('Villa');
  const [expectedPrice, setExpectedPrice] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await fetch('/api/submit-property', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location,
          category,
          expectedPrice,
          ownerName,
          phone,
          description,
        }),
      });
    } catch {
      // ignore
    }
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#121212] text-white max-w-lg w-full p-8 border border-white/15 shadow-2xl relative">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#84cc16] block mb-1">
          Estate Representation
        </span>
        <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
          Submit Private Property
        </h3>
        <p className="text-xs opacity-70 mb-6 font-sans">
          List your luxury residence with our discreet private acquisitions portfolio.
        </p>

        {status === 'success' ? (
          <div className="p-6 bg-[#84cc16]/10 border border-[#84cc16] text-center space-y-2 text-xs">
            <Check className="w-8 h-8 text-[#84cc16] mx-auto" />
            <h4 className="font-serif text-lg font-bold text-white">Submission Received</h4>
            <p className="text-gray-300">Our senior valuation director will reach out within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
            <div>
              <label className="block uppercase tracking-wider font-semibold opacity-75 mb-1">Property Location</label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. South Mumbai, Lutyens' Delhi"
                className="w-full bg-transparent border-0 border-b border-white/20 py-2 text-white placeholder-gray-500 focus:ring-0 focus:border-[#84cc16]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block uppercase tracking-wider font-semibold opacity-75 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-neutral-900 border-0 border-b border-white/20 py-2 text-white focus:ring-0 focus:border-[#84cc16]"
                >
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Store</option>
                  <option>Restaurant</option>
                  <option>Spa</option>
                </select>
              </div>
              <div>
                <label className="block uppercase tracking-wider font-semibold opacity-75 mb-1">Expected Valuation</label>
                <input
                  type="text"
                  value={expectedPrice}
                  onChange={(e) => setExpectedPrice(e.target.value)}
                  placeholder="e.g. ₹25 Cr"
                  className="w-full bg-transparent border-0 border-b border-white/20 py-2 text-white placeholder-gray-500 focus:ring-0 focus:border-[#84cc16]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block uppercase tracking-wider font-semibold opacity-75 mb-1">Owner / Representative</label>
                <input
                  type="text"
                  required
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full bg-transparent border-0 border-b border-white/20 py-2 text-white placeholder-gray-500 focus:ring-0 focus:border-[#84cc16]"
                />
              </div>
              <div>
                <label className="block uppercase tracking-wider font-semibold opacity-75 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98000 00000"
                  className="w-full bg-transparent border-0 border-b border-white/20 py-2 text-white placeholder-gray-500 focus:ring-0 focus:border-[#84cc16]"
                />
              </div>
            </div>

            <div>
              <label className="block uppercase tracking-wider font-semibold opacity-75 mb-1">Architectural Highlights</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Key specs, views, bespoke features..."
                className="w-full bg-transparent border-0 border-b border-white/20 py-2 text-white placeholder-gray-500 focus:ring-0 focus:border-[#84cc16] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-[#84cc16] text-black font-bold uppercase tracking-[0.15em] py-3.5 mt-4 hover:bg-[#a3e635] transition-colors"
            >
              {status === 'submitting' ? 'Submitting...' : 'Submit Property Dossier'}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
