import Lottie from 'lottie-react';
import nothing2 from '../../assets/nothing2.json';

const Contact = () => {
	return (
		<>
			<div className=" mx-auto md:w-[500px] md:h-auto  flex justify-center items-center">
				<Lottie animationData={nothing2} loop:true></Lottie>
			</div>
			<div className=" text-center py-10">
				<h1 className=" text-2xl font-semibold">Nothing to show here.....😥</h1>
			</div>
		</>
	);
};

export default Contact;
