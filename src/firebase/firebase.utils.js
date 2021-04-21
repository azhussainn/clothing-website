import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBpwZ8trT-DTBNYDcRPFfxxYWPMgr4hOkA",
    authDomain: "clothingwebsite-db.firebaseapp.com",
    projectId: "clothingwebsite-db",
    storageBucket: "clothingwebsite-db.appspot.com",
    messagingSenderId: "1070731891476",
    appId: "1:1070731891476:web:094f8bb626b023f6cf6801",
    measurementId: "G-V8FFMY138P"
}

firebase.initializeApp(config)

export const createUserProfileDocument = async(userAuth, additionalData) => {


    if(!userAuth){return}


    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShop = await userRef.get();

    if(!snapShop.exists){
        const {displayName, email} = userAuth

        const createdAt = Date.now()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error in creating user', error.message)
        }

    }
    return userRef
}



export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ 'prompt' : "select_account"  })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase