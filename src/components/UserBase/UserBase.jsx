import FixWidth from '../../UI/FixWidth';
import programmer from '../../assets/programmer.jpg';
import youtuber from '../../assets/youtuber.jpg';
import teacher from '../../assets/teacher.jpg';
import business from '../../assets/business.jpg';
import reading from '../../assets/reading.jpg';

const UserBase = () => {
	return (
		<FixWidth>
			{/* Section Title */}
			<div className=" text-center">
				<h1 className="text-3xl font-bold">Our User Base</h1>
				<p className="font-medium">Across The World</p>
				<div className=" flex justify-center mt-2">
					<div className=" w-12 bg-indigo-400 h-[2px]"></div>
					<div className=" w-12 bg-gray-100 h-[2px]"></div>
					<div className=" w-12 bg-indigo-400 h-[2px]"></div>
				</div>
			</div>
			{/* User Base Card */}
			<div className="flex flex-row flex-wrap gap-5 items-center justify-center py-16">
				<div className=" text-center hover:scale-105 duration-200">
					<figure className="border-4 rounded-md border-indigo-500 outline outline-4 outline-gray-200">
						<img className="w-[200px]" src={programmer} alt="programmer" />
					</figure>
					<p className="text-lg font-semibold mt-2">Programmer</p>
				</div>
				<div className=" text-center hover:scale-105 duration-200">
					<figure className="border-4 rounded-md border-indigo-500 outline outline-4 outline-gray-200">
						<img className="w-[200px]" src={youtuber} alt="programmer" />
					</figure>
					<p className="text-lg font-semibold mt-2">Content Creator</p>
				</div>
				<div className=" text-center hover:scale-105 duration-200">
					<figure className="border-4 rounded-md border-indigo-500 outline outline-4 outline-gray-200">
						<img
							className="w-[200px] bg-cover bg-center h-[132px]"
							src={teacher}
							alt="programmer"
						/>
					</figure>
					<p className="text-lg font-semibold mt-2">Teacher</p>
				</div>
				<div className=" text-center hover:scale-105 duration-200">
					<figure className="border-4 rounded-md border-indigo-500 outline outline-4 outline-gray-200">
						<img
							className="w-[200px] h-[130px]"
							src={business}
							alt="programmer"
						/>
					</figure>
					<p className="text-lg font-semibold mt-2">Business</p>
				</div>
				<div className=" text-center hover:scale-105 duration-200">
					<figure className="border-4 rounded-md border-indigo-500 outline outline-4 outline-gray-200">
						<img className="w-[200px]" src={reading} alt="programmer" />
					</figure>
					<p className="text-lg font-semibold mt-2">Student</p>
				</div>
			</div>
		</FixWidth>
	);
};

export default UserBase;
