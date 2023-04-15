import { auth } from '../firebase'

export default function Login() {
  const handleLogin = async (provider) => {
    await auth.signInWithPopup(provider)
  }

  return (
    <div>
      <button onClick={() => handleLogin(new firebase.auth.GoogleAuthProvider())}>Sign in with Google</button>
      <button onClick={() => handleLogin(new firebase.auth.FacebookAuthProvider())}>Sign in with Facebook</button>
    </div>
  )
}
