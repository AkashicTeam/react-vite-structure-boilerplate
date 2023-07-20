// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { connectDatabaseEmulator, getDatabase } from 'firebase/database'
import { connectStorageEmulator, getStorage } from 'firebase/storage'
const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_FIRE_BASE_KEY,
    authDomain: import.meta.env.VITE_REACT_APP_FIRE_BASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_REACT_APP_FIRE_BASE_DB_URL,
    projectId: import.meta.env.VITE_REACT_APP_FIRE_BASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_APP_FIRE_BASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_FIRE_BASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_REACT_APP_FIRE_BASE_APP_ID,
    measurementId: import.meta.env.VITE_REACT_APP_FIRE_BASE_MEASURMENT_ID
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const database = getFirestore(app)
const functions = getFunctions(app)
const auth = getAuth(app)
const db = getDatabase(app)
const storage = getStorage()

/**
 * If env is development, firebase will connect Local Emulator
 */
if (import.meta.env.VITE_ENV === 'development') {
    connectFunctionsEmulator(functions, '127.0.0.1', 5001)
    connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true })
    connectFirestoreEmulator(database, '127.0.0.1', 8080)
    connectDatabaseEmulator(db, '127.0.0.1', 9000)
    connectStorageEmulator(storage, '127.0.0.1', 9199)
}

export { app, database, functions, analytics, auth, db, storage }
