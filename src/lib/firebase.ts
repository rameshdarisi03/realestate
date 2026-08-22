import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { VipInquiry, PropertySubmission } from './types';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyAwQVTchd4lRGr_E1Lgm0FBHgAI-jvA3JE',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'brp-properties.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'brp-properties',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'brp-properties.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '998487094427',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:998487094427:web:9c2738ca99f9b3608f423e',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-C8CFMTJQY6',
};

// Singleton Firebase initialization
let app: FirebaseApp;
let db: Firestore | null = null;

try {
  app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (err) {
  console.warn('Firebase initialized with error:', err);
}

export { app, db };

/**
 * Record a VIP Consultation inquiry in Firestore leads collection
 */
export async function saveVipInquiry(inquiry: Omit<VipInquiry, 'createdAt'>): Promise<{ success: boolean; id?: string }> {
  try {
    if (db) {
      const docRef = await addDoc(collection(db, 'vip_inquiries'), {
        ...inquiry,
        createdAt: serverTimestamp(),
      });
      console.log('[Firestore Live] Saved VIP Inquiry with ID:', docRef.id);
      return { success: true, id: docRef.id };
    } else {
      console.log('[Firestore Local Mock] Saved VIP Inquiry:', inquiry);
      return { success: true, id: `local-${Date.now()}` };
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
    if (db) {
      const docRef = await addDoc(collection(db, 'property_submissions'), {
        ...submission,
        createdAt: serverTimestamp(),
      });
      console.log('[Firestore Live] Saved Property Submission with ID:', docRef.id);
      return { success: true, id: docRef.id };
    } else {
      console.log('[Firestore Local Mock] Saved Property Submission:', submission);
      return { success: true, id: `local-prop-${Date.now()}` };
    }
  } catch (error) {
    console.error('Error saving property submission to Firestore:', error);
    return { success: false };
  }
}
