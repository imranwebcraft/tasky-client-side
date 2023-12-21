import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
	const { googleSignIn } = useContext(AuthContext);

	const navigate = useNavigate();

	const handleGoogleSignIn = () => {
		googleSignIn()
			.then(() => {
				toast.success('Google sign in successfull');
				navigate('/dashboard/taskmanager');
			})
			.catch((err) => {
				console.log(err.message);
				toast.error(err.message);
			});
	};

	return (
		<button
			onClick={handleGoogleSignIn}
			className="bg-slate-800 hover:bg-opacity-80 transition-all duration-300 py-3 text-white center flex items-center justify-center gap-2 w-[100%] rounded-sm"
		>
			<FcGoogle className=" text-xl" />
			Continue with google
		</button>
	);
};

export default SocialLogin;
