import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { VipInquiry, PropertySubmission } from './types';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'mock-api-key',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'mock-app.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'mock-project',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'mock-storage.appspot.com',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '123456789',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:123456789:web:abcdef',
};

// Singleton Firebase initialization
let app: FirebaseApp;
let db: Firestore | null = null;

const isConfigured = !!(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

try {
  app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  if (isConfigured) {
    db = getFirestore(app);
  }
} catch (err) {
  console.warn('Firebase initialized in fallback mock mode:', err);
}

export { app, db, isConfigured };

/**
 * Record a VIP Consultation inquiry in Firestore leads collection
 */
export async function saveVipInquiry(inquiry: Omit<VipInquiry, 'createdAt'>): Promise<{ success: boolean; id?: string }> {
  try {
    if (db && isConfigured) {
      const docRef = await addDoc(collection(db, 'vip_inquiries'), {
        ...inquiry,
        createdAt: serverTimestamp(),
      });
      return { success: true, id: docRef.id };
    } else {
      // Local fallback mock
      console.log('[Firebase Mock] Saved VIP Consultation Inquiry:', inquiry);
      return { success: true, id: `mock-${Date.now()}` };
    }
  } catch (error) {
    console.error('Error saving VIP inquiry to Firestore:', error);
    return { success: false };
  }
}

/**
 * Record an Off-Market Property Submission in Firestore
 */
export async function savePropertySubmission(submission: Omit<PropertySubmission, 'createdAt'>): Promise<{ success: boolean; id?: string }> {
  try {
    if (db && isConfigured) {
      const docRef = await addDoc(collection(db, 'property_submissions'), {
        ...submission,
        createdAt: serverTimestamp(),
      });
      return { success: true, id: docRef.id };
    } else {
      // Local fallback mock
      console.log('[Firebase Mock] Saved Property Submission:', submission);
      return { success: true, id: `mock-prop-${Date.now()}` };
    }
  } catch (error) {
    console.error('Error saving property submission to Firestore:', error);
    return { success: false };
  }
}
