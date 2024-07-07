import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';

import axios from 'axios';
import { backendUrl } from '../../url';

export default function OAuth() {
 
  
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
        const email = result.user.email;

        console.log(email);
        const res =  await axios.post(`${backendUrl}/api/v1/user/google` , email)

        console.log(res.data);
        

      
    } catch (error) {
      console.log('could not sign in with google', error);
    }
  };
  return (


  <button
  className="block w-full max-w-xs mx-auto bg-gray-500 hover:bg-gray-700 focus:bg-gray-700 text-white rounded-sm px-1 py-1 font-semibold text-center"
  type="submit"
  onClick={handleGoogleClick}
>
  Sign In with Google
</button>
  );
}