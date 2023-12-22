import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import logo from '../../assets/TaskyLogo.svg';
import Footer from '../../components/Shared/Footer/Footer';
import { Helmet } from 'react-helmet-async';
import PageAnimation from '../../UI/PageAnimation';

const Dashboard = () => {
	// State
	const [open, setOpen] = useState(true);

	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			<PageAnimation>
				<div className="flex gap-10">
					<Helmet>
						<title>Tasky | Dashboard</title>
					</Helmet>
					<div className="bg-slate-900 min-h-screen">
						<div
							className={`${
								open ? 'w-72' : 'w-32'
							}  p-5  pt-8 relative duration-300`}
						>
							{/* Logo */}
							<Link
								to={'/'}
								className=" md:flex-1 justify-center flex gap-2 items-center mb-20"
							>
								<img src={logo} alt="website logo" />
								<div className=" text-2xl font-bold text-white">
									Task<span className=" text-indigo-500 font-bold">y</span>
								</div>
							</Link>

							<ul className="relative">
								<li
									className={`bg-slate-200 hover:bg-opacity-90 hover:cursor-pointer py-2 text-white text-lg rounded-lg flex items-center ${
										open ? 'justify-left ' : 'justify-center pr-5'
									}  gap-2 pl-5 transition-all duration-300`}
								>
									<div className="pt-1">
										<i className="fi fi-rr-note text-lg text-indigo-500"></i>
									</div>
									<NavLink
										to="/dashboard/taskmanager"
										className={({ isActive }) => (isActive ? ' active' : '')}
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
					<Outlet />
				</div>
				<Footer />
			</PageAnimation>
		</>
	);
};

export default Dashboard;
