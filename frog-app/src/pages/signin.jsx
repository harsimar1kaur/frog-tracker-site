import { signInWithGooglePopup, signOutUser } from '../services/firebase';
import '../styles/signin.css';

export default function Signin() {
    return (
    <div className='signin-page'>
        <button onClick={signInWithGooglePopup}>Sign in!</button>
        <button onClick={signOutUser}>Sign out!</button>
    </div>
    );
}