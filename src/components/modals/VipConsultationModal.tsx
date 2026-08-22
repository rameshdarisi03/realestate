'use client';

import React, { useState } from 'react';
import { PROPERTIES_DATA } from '@/lib/propertiesData';
import { X, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

interface VipConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPropertyId?: string;
}

export const VipConsultationModal: React.FC<VipConsultationModalProps> = ({
  isOpen,
  onClose,
  initialPropertyId,
}) => {
  const [propertyId, setPropertyId] = useState(initialPropertyId || 'general');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [requiresNda, setRequiresNda] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [leadId, setLeadId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          propertyId,
          name,
          phone,
          email,
          preferredDate,
          requiresNda,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setLeadId(data.leadId);
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#121212] border border-white/15 max-w-xl w-full p-8 relative rounded-2xl shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
            <h3 className="font-serif text-3xl font-bold">Consultation Registered</h3>
            <p className="text-sm opacity-80 max-w-md mx-auto">
              Your confidential portfolio consultation request has been routed to our Managing Director&apos;s desk.
            </p>
            {leadId && (
              <p className="text-xs text-gold-400 font-mono">Dossier Reference ID: {leadId}</p>
            )}
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-neutral-200 transition-colors"
              >
                Return to Showcase
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest font-semibold mb-2">
              <Lock className="w-3.5 h-3.5" />
              <span>Private Client Representation</span>
            </div>
            <h2 className="font-serif text-3xl font-bold mb-2">Schedule Private Consultation</h2>
            <p className="text-xs opacity-75 mb-6">
              Exclusive acquisitions, discreet transactions, and tailored off-market portfolio viewings.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <div>
                <label className="block uppercase tracking-wider font-semibold opacity-75 mb-1">Estate of Interest</label>
                <select
                  value={propertyId}
                  onChange={(e) => setPropertyId(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/15 rounded-xl p-3 text-white focus:outline-none focus:border-gold-400"
                >
                  <option value="general">General Bespoke Portfolio Consultation</option>
                  {PROPERTIES_DATA.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.priceDisplay})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block uppercase tracking-wider font-semibold opacity-75 mb-1">Full Legal Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Venkatesh"
                    className="w-full bg-neutral-900 border border-white/15 rounded-xl p-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block uppercase tracking-wider font-semibold opacity-75 mb-1">Direct Telephone</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98000 00000"
                    className="w-full bg-neutral-900 border border-white/15 rounded-xl p-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block uppercase tracking-wider font-semibold opacity-75 mb-1">Confidential Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full bg-neutral-900 border border-white/15 rounded-xl p-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block uppercase tracking-wider font-semibold opacity-75 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/15 rounded-xl p-3 text-white focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="nda"
                  checked={requiresNda}
                  onChange={(e) => setRequiresNda(e.target.checked)}
                  className="rounded border-white/20 bg-neutral-900 text-gold-500 focus:ring-0"
                />
                <label htmlFor="nda" className="text-[11px] opacity-80 cursor-pointer flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span>Execute Non-Disclosure Agreement (NDA) prior to dossier exchange</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#a2650c] hover:bg-[#8c5208] text-white py-4 rounded-xl font-bold uppercase tracking-[0.2em] transition-all shadow-xl mt-4 disabled:opacity-50"
              >
                {loading ? 'Transmitting Securely...' : 'Request Confidential Appointment'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
