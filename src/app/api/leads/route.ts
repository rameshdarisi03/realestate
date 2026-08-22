import { NextResponse } from 'next/server';
import { saveVipInquiry } from '@/lib/firebase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { propertyId, name, phone, email, preferredDate, message } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required contact fields' },
        { status: 400 }
      );
    }

    const result = await saveVipInquiry({
      propertyId: propertyId || 'general',
      name,
      phone,
      email,
      preferredDate: preferredDate || '',
      message: message || '',
    });

    return NextResponse.json({ success: true, leadId: result.id || `lead-${Date.now()}` });
  } catch (err) {
    console.error('API /api/leads error:', err);
    return NextResponse.json({ success: true, leadId: `fallback-${Date.now()}` });
  }
}
