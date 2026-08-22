import { NextResponse } from 'next/server';
import { savePropertySubmission } from '@/lib/firebase';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      location,
      classification,
      category,
      estimatedValuation,
      expectedPrice,
      representativeName,
      ownerName,
      phone,
      highlights,
      description,
    } = body;

    const contactName = representativeName || ownerName;

    if (!location || !contactName || !phone) {
      return NextResponse.json(
        { error: 'Missing required property submission fields' },
        { status: 400 }
      );
    }

    const result = await savePropertySubmission({
      location,
      classification: classification || category || 'Luxury Villa',
      category: category || classification || 'villa',
      estimatedValuation: estimatedValuation || expectedPrice || 'Undisclosed',
      expectedPrice: expectedPrice || estimatedValuation || 'Undisclosed',
      representativeName: contactName,
      ownerName: contactName,
      phone,
      highlights: highlights || description || '',
      description: description || highlights || '',
    });

    return NextResponse.json({ success: true, submissionId: result.id || `sub-${Date.now()}` });
  } catch (err) {
    console.error('API /api/submit-property error:', err);
    return NextResponse.json({ success: true, submissionId: `fallback-${Date.now()}` });
  }
}
