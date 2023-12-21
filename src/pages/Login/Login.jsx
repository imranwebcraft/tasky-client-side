import { Link, useLocation, useNavigate } from 'react-router-dom';
import FixWidth from '../../UI/FixWidth';
import PageAnimation from '../../UI/PageAnimation';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { MdErrorOutline } from 'react-icons/md';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
	const [loading, setLoading] = useState(false);
	const { logIn } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = (data) => {
		setLoading(true);
		logIn(data?.email, data.password)
			.then((result) => {
				console.log(result.user);
				toast.success('Login successfull');
				navigate('/dashboard/taskmanager');
				setLoading(false);
				reset();
			})
			.catch((err) => {
				toast.error(err.message);
				setLoading(false);
			});
	};

	return (
		<PageAnimation>
			<Helmet>
				<title>Tasky|Login</title>
			</Helmet>
			<div className="py-32">
				<FixWidth>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="w-[80%] max-w-[400px] mx-auto"
					>
						{/* Form Heading */}
						<h1 className=" text-4xl capitalize font-medium text-center mb-10">
							Welcome Back
						</h1>

						<div className="relative my-5">
							<input
								{...register('email', { required: true })}
								type="email"
								className=" w-full border rounded border-gray-500 px-10 py-3 focus:bg-slate-100 focus:border-indigo-500 placeholder:text-gray-600"
								placeholder="Email"
							/>
							<i className="fi fi-rr-envelope icon"></i>
						</div>
						{errors.email?.type === 'required' && (
							<span className=" text-red-600 text-sm flex items-center gap-[2px]">
								<MdErrorOutline />
								Email is required
							</span>
						)}
						<div className=" relative my-5">
							<input
								{...register('password', { required: true })}
								type="password"
								className=" w-full border rounded border-gray-500 px-10 py-3 focus:bg-slate-100 focus:border-indigo-500 placeholder:text-gray-600"
								placeholder="Password"
							/>
							<i className="fi fi-rr-lock icon"></i>
						</div>
						{errors.password?.type === 'required' && (
							<span className=" text-red-600 text-sm flex items-center gap-[2px]">
								<MdErrorOutline />
								Password is required
							</span>
						)}

						{/* Button */}
						<div className=" flex justify-center my-5">
							<button className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-lg rounded transition-all duration-300 flex gap-1 items-center">
								{loading ? (
									<AiOutlineLoading className="animate-spin text-white" />
								) : undefined}
								Sign In
							</button>
						</div>
						<div className="relative w-[100%] flex items-center gap-2 my-5 opacity-20 uppercase text-black">
							<hr className="w-1/2 border-black" />
							<p>or</p>
							<hr className="w-1/2 border-black" />
						</div>

						<SocialLogin />

						<p className=" text-dark-grey mt-6 text-center">
							Do not have an account?
							<Link
								to="/signup"
								className=" underline decoration-transparent decoration-2 ml-1 hover:decoration-indigo-500 underline-offset-4 transition-all duration-300"
							>
								Sign Up
							</Link>
						</p>
					</form>
				</FixWidth>
			</div>
		</PageAnimation>
	);
};

export default Login;
