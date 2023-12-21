import { Link } from 'react-router-dom';
import FixWidth from '../../UI/FixWidth';
import { FcGoogle } from 'react-icons/fc';
import PageAnimation from '../../UI/PageAnimation';
import { Helmet } from 'react-helmet-async';

const Login = () => {
	return (
		<PageAnimation>
			<Helmet>
				<title>Tasky|Login</title>
			</Helmet>
			<div className="py-32">
				<FixWidth>
					<form className="w-[80%] max-w-[400px] mx-auto">
						{/* Form Heading */}
						<h1 className=" text-4xl capitalize font-medium text-center mb-10">
							Welcome Back
						</h1>

						<div className=" relative my-5">
							<input
								type="email"
								className=" w-full border rounded border-gray-500 px-10 py-3 focus:bg-slate-100 focus:border-indigo-500 focus:outline-indigo-500 placeholder:text-gray-600"
								placeholder="Email"
							/>
							<i className="fi fi-rr-envelope icon"></i>
						</div>
						<div className=" relative my-5">
							<input
								type="password"
								className=" w-full border rounded border-gray-500 px-10 py-3 focus:bg-slate-100 focus:border-indigo-500 focus:outline-indigo-500 placeholder:text-gray-600"
								placeholder="Password"
							/>
							<i className="fi fi-rr-lock icon"></i>
						</div>

						{/* Button */}
						<div className="text-center">
							<button className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-lg rounded transition-all duration-300">
								Sign Up
							</button>
						</div>
						<div className="relative w-[100%] flex items-center gap-2 my-5 opacity-20 uppercase text-black">
							<hr className="w-1/2 border-black" />
							<p>or</p>
							<hr className="w-1/2 border-black" />
						</div>

						<button className="bg-slate-800 hover:bg-opacity-80 transition-all duration-300 py-3 text-white center flex items-center justify-center gap-2 w-[100%] rounded-sm">
							<FcGoogle className=" text-xl" />
							Continue with google
						</button>

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
