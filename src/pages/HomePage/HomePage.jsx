import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';
import Newsletter from '../../components/Newsletter/Newsletter';
import UserBase from '../../components/UserBase/UserBase';

const HomePage = () => {
	return (
		<div>
			<Helmet>
				<title>Tasky | Home</title>
			</Helmet>
			<Banner />
			<UserBase />
			<Newsletter />
		</div>
	);
};

export default HomePage;
