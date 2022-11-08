import { useState } from "react"
import { initializeApp } from "firebase/app"
import { getAuth,signInWithEmailAndPassword } from "firebase/auth"

    const firebaseConfig = {
        apiKey: "AIzaSyA0n9g3eSSAy7ozrF317mYvjPkF1wi_KCc",
        authDomain: "fb-auth-gk.firebaseapp.com",
        projectId: "fb-auth-gk",
        storageBucket: "fb-auth-gk.appspot.com",
        messagingSenderId: "261496738396",
        appId: "1:261496738396:web:a22b415830782e5885cc99"
      };



export default function Login({ setUser }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async (e) => {
        e.preventDefault()
        const app = initializeApp(firebaseConfig) //connects to firebase
        const auth = getAuth(app) //connects us to Firebase auth
        const response = await signInWithEmailAndPassword(auth, email, password) 
        .catch(alert); // line to sign us in
        setUser(response.user)
    }
    return (
        <>
        <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email:{' '}
                <input type="email name=" email 
                value={email} onChange={e => setEmail(e.target.value)}
                placeholder="yourname@domain.com" />
                </label><br />
                <label htmlFor="password">Password: {' '}
                 <input type="password" name="password"
                    value={password} onChange={e => setPassword(e.target.value)}
                        placeholder="***********" />
                </label><br />
                <button type="submit">Login</button>
            </form>
        </>
    )
}