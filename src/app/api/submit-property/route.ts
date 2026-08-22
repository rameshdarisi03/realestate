import { NextResponse } from 'next/server';
import { savePropertySubmission } from '@/lib/firebase';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { location, classification, estimatedValuation, representativeName, phone, highlights } = body;

    if (!location || !representativeName || !phone) {
      return NextResponse.json(
        { error: 'Missing required property submission fields' },
        { status: 400 }
      );
    }

    const result = await savePropertySubmission({
      location,
      classification: classification || 'Sky Penthouse',
      estimatedValuation: estimatedValuation || 'Undisclosed',
      representativeName,
      phone,
      highlights: highlights || '',
    });

    if (result.success) {
      return NextResponse.json({ success: true, submissionId: result.id });
    } else {
      return NextResponse.json({ error: 'Failed to record submission' }, { status: 500 });
    }
  } catch (err) {
    console.error('API /api/submit-property error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
