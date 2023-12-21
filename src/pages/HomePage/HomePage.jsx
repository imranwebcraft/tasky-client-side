import Banner from '../../components/Banner/Banner';
import Newsletter from '../../components/Newsletter/Newsletter';
import UserBase from '../../components/UserBase/UserBase';

const HomePage = () => {
	return (
		<div>
			<Banner />
			<UserBase />
			<Newsletter />
		</div>
	);
};

export default HomePage;
