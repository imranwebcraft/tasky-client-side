import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Shared/Navbar/Navbar';

const Mainlayout = () => {
	return (
		<div className=" font-primary tracking-wide">
			<Navbar />
			<Outlet></Outlet>
			<p>Footer</p>
		</div>
	);
};

export default Mainlayout;
