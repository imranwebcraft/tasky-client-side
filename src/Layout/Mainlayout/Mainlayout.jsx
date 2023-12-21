import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Shared/Navbar/Navbar';
import Footer from '../../components/Shared/Footer/Footer';

const Mainlayout = () => {
	return (
		<div className=" font-primary tracking-wide">
			<Navbar />
			<Outlet></Outlet>
			<Footer />
		</div>
	);
};

export default Mainlayout;
