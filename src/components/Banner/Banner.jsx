import { Link } from 'react-router-dom';
import FixWidth from '../../UI/FixWidth';
import banner from '../../assets/banner.svg';
import bannerbg from '../../assets/bannerbg.svg';

const Banner = () => {
	return (
		<FixWidth>
			<>
				<div className="flex flex-col md:flex-row md:items-center md:justify-center h-[calc(100vh - 81px)] py-10 md:py-20">
					{/* Left Side */}
					<div className="md:flex-1">
						<h1
							data-aos="fade-up"
							className="text-5xl md:text-7xl font-semibold mb-3"
						>
							Manage work <br />
							<span className=" text-indigo-500 font-bold">Efficiently.</span>
						</h1>
						<p data-aos="fade-left" className="text-lg text-gray-700">
							Create, Track and Organize your work.
						</p>
						<Link data-aos="fade-right" to="/dashboard/taskmanager">
							<button className="btn-white mt-5"> Let&apos;s Explore </button>
						</Link>
					</div>

					{/* Right Side */}
					<div data-aos="fade-up-right" className="md:flex-1">
						<img
							src={banner}
							alt="banner image"
							className="w-full h-full object-cover"
						/>
					</div>
					{/* Gradient BG */}
					<img src={bannerbg} alt="" className=" absolute -z-30" />
				</div>
			</>
		</FixWidth>
	);
};

export default Banner;
