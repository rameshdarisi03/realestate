import { NextResponse } from 'next/server';
import { saveVipInquiry } from '@/lib/firebase';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { propertyId, name, phone, email, preferredDate, requiresNda } = body;

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
      requiresNda: !!requiresNda,
    });

    if (result.success) {
      return NextResponse.json({ success: true, leadId: result.id });
    } else {
      return NextResponse.json({ error: 'Failed to record lead' }, { status: 500 });
    }
  } catch (err) {
    console.error('API /api/leads error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
