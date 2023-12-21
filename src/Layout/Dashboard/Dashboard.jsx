import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/TaskyLogo.svg';

{
	/* <i class="fi fi-ss-angle-circle-right"></i> */
}
{
	/* <i class="fi fi-sr-angle-circle-left"></i> */
}
const Dashboard = () => {
	// State
	const [open, setOpen] = useState(true);

	return (
		<div className="relative">
			<div
				className={`${
					open ? 'w-72' : 'w-32'
				} bg-slate-900 min-h-screen p-5  pt-8 relative duration-300`}
			>
				{/* Logo */}
				<Link className=" md:flex-1 justify-center flex gap-2 items-center mb-20">
					<img src={logo} alt="website logo" />
					<div className=" text-2xl font-bold text-white">
						Task<span className=" text-indigo-500 font-bold">y</span>
					</div>
				</Link>

				<ul className="relative">
					<li className="bg-slate-700 hover:bg-opacity-90 hover:cursor-pointer py-2 text-white text-lg rounded-lg flex items-center justify-left gap-2 pl-5 transition-all duration-300">
						<div className="pt-1">
							<i className="fi fi-rr-note text-lg"></i>
						</div>
						<NavLink
							to="/dashboard"
							className={({ isActive }) => (isActive ? ' text-white' : '')}
						>
							{open ? ' Task Manager' : ''}
						</NavLink>
					</li>
				</ul>
				{/* Link */}
				<div onClick={() => setOpen(!open)}>
					{open ? (
						<i className="fi fi-ss-angle-circle-left text-2xl text-slate-500 absolute -right-2 top-2 hover:cursor-pointer"></i>
					) : (
						<i className="fi fi-ss-angle-circle-right text-2xl text-slate-500 absolute -right-2 top-2 hover:cursor-pointer"></i>
					)}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
