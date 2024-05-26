import { collection, getDocs, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firestore'

export const fetchData = async (collectionName) => {
  const dataCollection = await getDocs(collection(db, collectionName))
  return dataCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
}

export const updateDocument = async (collectionName, id, data) => {
  const docRef = doc(db, collectionName, id)
  await updateDoc(docRef, data)
}
