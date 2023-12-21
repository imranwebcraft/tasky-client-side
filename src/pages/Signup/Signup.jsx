import { Link, useLocation, useNavigate } from 'react-router-dom';
import FixWidth from '../../UI/FixWidth';
import PageAnimation from '../../UI/PageAnimation';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { MdErrorOutline } from 'react-icons/md';
import { AiOutlineLoading } from 'react-icons/ai';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosPublic from '../../hook/useAxiosPublic';
import toast from 'react-hot-toast';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const image_hosting_key = import.meta.env.VITE_IMAGE_UPLOAD_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Signup = () => {
	const [loading, setLoading] = useState(false);
	const { createUser, updateUserProfile } = useContext(AuthContext);
	const axiosPublic = useAxiosPublic();

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

	const onSubmit = async (data) => {
		setLoading(true);
		// Image as form data
		const formData = { image: data.image[0] };
		console.log(formData);
		const res = await axiosPublic.post(image_hosting_api, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		console.log(res);
		if (res?.data?.success) {
			createUser(data?.email, data?.password)
				.then((result) => {
					const user = result.user;
					console.log(user);
					toast.success('User create successfully');
					updateUserProfile(data.name, res?.data?.data?.display_url)
						.then(toast.success('User profile update successfull'))
						.catch(() => {
							toast.error('Unable to update user profile');
						});
					reset();
					setLoading(false);
					navigate('/dashboard/taskmanager');
				})
				.catch((error) => {
					console.log(error);
					toast.error(error.message);
					setLoading(false);
				});
		}
	};

	return (
		<PageAnimation>
			<Helmet>
				<title>Tasky | Sign Up</title>
			</Helmet>
			<div className="py-32">
				<FixWidth>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="w-[80%] max-w-[400px] mx-auto"
					>
						{/* Form Heading */}
						<h1 className=" text-4xl capitalize text-center font-medium mb-10">
							Join Us Today
						</h1>
						<div className=" relative my-2">
							<input
								{...register('fullname', { required: true })}
								type="text"
								className=" relative w-full border rounded border-gray-500 px-10 py-3 focus:bg-slate-100 focus:border-indigo-500 placeholder:text-gray-600"
								placeholder="Fullname"
							/>
							<i className="fi fi-rr-user icon"></i>
						</div>
						{errors.fullname?.type === 'required' && (
							<span className=" text-red-600 text-sm flex items-center gap-[2px]">
								<MdErrorOutline />
								Name is required
							</span>
						)}
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
						<div className=" relative my-5">
							<input
								{...register('image', { required: true })}
								type="file"
								className=" w-full border rounded border-gray-500 px-10 py-3 focus:bg-slate-100 focus:border-indigo-500 placeholder:text-gray-600"
								placeholder="Password"
							/>
							<i className="fi fi-rr-folder-open icon"></i>
						</div>
						{errors.image?.type === 'required' && (
							<span className=" text-red-600 text-sm flex items-center gap-[2px]">
								<MdErrorOutline />
								Image is required
							</span>
						)}
						{/* Button */}
						<div className=" flex justify-center my-5">
							<button className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-lg rounded transition-all duration-300 flex gap-1 items-center">
								{loading ? (
									<AiOutlineLoading className="animate-spin text-white" />
								) : undefined}
								Sign Up
							</button>
						</div>
						<div className="relative w-[100%] flex items-center gap-2 my-5 opacity-20 uppercase text-black">
							<hr className="w-1/2 border-black" />
							<p>or</p>
							<hr className="w-1/2 border-black" />
						</div>

						{/* Social Log in */}
						<SocialLogin />

						<p className=" text-dark-grey mt-6 text-center">
							Already have an account?
							<Link
								to="/login"
								className=" underline decoration-2 ml-1 hover:decoration-indigo-500 underline-offset-4 decoration-transparent  transition-all duration-300"
							>
								Log In
							</Link>
						</p>
					</form>
				</FixWidth>
			</div>
		</PageAnimation>
	);
};

export default Signup;
