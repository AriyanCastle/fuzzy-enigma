import { firestore } from '../lib/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

export const saveUserData = async (
  userId,
  inputForClinicalHistory,
  voiceRecording,
  transcribedText,
  summary,
  clinicalHistory
) => {
  try {
    console.log('Firestore instance:', firestore);
    const usersCollection = collection(firestore, 'users');
    console.log('Users collection:', usersCollection);
    const userDocRef = doc(usersCollection, userId);
    console.log('User document reference:', userDocRef);

    const userData = {
      inputForClinicalHistory,
      voiceRecording,
      transcribedText,
      summary,
      clinicalHistory,
      timestamp: new Date(),
    };

    await setDoc(userDocRef, userData, { merge: true });
    console.log('User data saved successfully');
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};