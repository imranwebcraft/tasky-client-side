import './news.css';

const Newsletter = () => {
	return (
		<div className=" py-20">
			<section className="bg bg-gray-50">
				<div className="p-8 md:p-12 lg:px-16 lg:py-24">
					<div className="mx-auto max-w-lg text-center">
						<h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
							Supercharge Your Productivity with Our Task Management Newsletter!
						</h2>

						<p className="hidden text-gray-500 sm:mt-4 sm:block">
							Ready to conquer your to-do list and boost your efficiency?
							Subscribe to our exclusive newsletter and unlock a world of task
							management insights. Learn expert tips,and stay in the know about
							the latest features to enhance your task management experience.
						</p>
					</div>

					<div className="mx-auto mt-8 max-w-xl">
						<form className="sm:flex sm:gap-4">
							<div className="sm:flex-1">
								<label htmlFor="email" className="sr-only">
									Email
								</label>

								<input
									type="email"
									placeholder="Email address"
									className="w-full rounded-md  bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-indigo-400 border-2 border-indigo-500"
								/>
							</div>

							<button
								type="submit"
								className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-blue-400 sm:mt-0 sm:w-auto"
							>
								<span className="text-sm font-medium"> Sign Up </span>

								<svg
									className="h-5 w-5 rtl:rotate-180"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Newsletter;
