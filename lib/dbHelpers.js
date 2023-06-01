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

    // Create a subcollection for interactions
    const interactionsCollection = collection(userDocRef, 'interactions');
    // Add a new document to the interactions subcollection with an auto-generated ID
    const interactionDocRef = doc(interactionsCollection);
    await setDoc(interactionDocRef, userData);

    console.log('User data saved successfully');
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};