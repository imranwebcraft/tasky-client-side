import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/TaskyLogo.svg';
import { useState } from 'react';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<header className="border-b bg-slate-900 sticky top-0 z-50">
			<nav className="relative h-20 py-5 px-[20px] md:px-[30px] md:flex justify-between items-center max-w-7xl mx-auto">
				{/* Logo */}
				<Link className=" md:flex-1 flex gap-2 items-center">
					<img src={logo} alt="website logo" />
					<div className=" text-2xl font-bold text-white">
						Task<span className=" text-indigo-500 font-bold">y</span>
					</div>
				</Link>
				{/* Middle Portion - link */}

				{/* Mobile Menu Icons */}
				<div
					onClick={() => setOpen(!open)}
					className="absolute md:hidden text-lg right-5 top-1/2 -translate-y-1/2 hover:cursor-pointer"
				>
					{open ? (
						<i className="fi fi-sr-cross-small text-white"></i>
					) : (
						<i className="fi fi-sr-bars-staggered text-white"></i>
					)}
				</div>

				<div
					className={`absolute md:relative md:opacity-100 top-full md:inset-0 px-7 md:px-0 py-8 md:py-0 w-[100%] md:bg-transparent md:flex-1 md:flex justify-between items-center transition-all duration-500 ${
						open
							? 'left-0 opacity-100 bg-slate-800'
							: 'left-[-1000px] opacity-0'
					}`}
				>
					<ul className="flex flex-col md:flex-row gap-10 md:gap-16">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? 'active' : 'btn-inactive'
							}
						>
							Home
						</NavLink>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive ? 'active' : 'btn-inactive'
							}
						>
							About
						</NavLink>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive ? 'active' : 'btn-inactive'
							}
						>
							Contact
						</NavLink>
						<NavLink
							to="/offer"
							className={({ isActive }) =>
								isActive ? 'active' : 'btn-inactive'
							}
						>
							Offer
						</NavLink>
					</ul>
					{/* Button */}
					<Link to="/signup">
						<button className="btn mt-5 md:mt-0">Sign Up</button>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
