import { MdErrorOutline, MdOutlineTaskAlt } from 'react-icons/md';
import { AiOutlineLoading, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoMdDoneAll } from 'react-icons/io';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hook/useAxiosPublic';
import useTodos from '../../../hook/useTodos';
import FTodos from './FTodos';
import { useDrop } from 'react-dnd';
import FOngoin from './FOngoin';
import FCompleted from './FCompleted';

const Taskmanager = () => {
	const [loading, setLoading] = useState(false);
	const { logOut, user } = useContext(AuthContext);
	const axiosPublic = useAxiosPublic();

	// Use todos
	const [todos, refetch] = useTodos();

	const [{ isOver }, drop] = useDrop(() => ({
		accept: 'task',
		drop: (item) => addItemToSection(item.id),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	const addItemToSection = async (id) => {
		console.log(id);
		try {
			const res = await axiosPublic.put(`/todos/${id}`, {
				status: 'todo',
			});
			console.log(res);
			if (res.data) {
				refetch();
			}
		} catch (error) {
			console.log(error);
		}
		console.log('droped', id);
	};

	// Filter State
	const ftodos = todos.filter((task) => task.status === 'todo');
	const fongoing = todos.filter((task) => task.status === 'ongoing');
	const fcompleted = todos.filter((task) => task.status === 'completed');

	const navigate = useNavigate();
	const userEmail = user.email;

	const handleLogOut = () => {
		setLoading(true);
		logOut()
			.then(() => {
				toast.success('Log out successfull');
				navigate('/');
			})
			.catch((err) => {
				toast.error(err.message);
			});
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		setLoading(true);
		const todosData = {
			userEmail,
			task_name: data.task_name,
			task_description: data.task_description,
			deadline: data.deadline,
			priority: data.priority,
			status: 'todo',
		};
		console.log(todosData);
		try {
			const res = await axiosPublic.post('/todos', todosData);
			if (res.data) {
				toast.success('Task created successfully');
				refetch();
				reset();
				setLoading(false);
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const handleDeleteTask = (id) => {
		setLoading(true);
		axiosPublic
			.delete(`/todos/${id}`)
			.then(() => {
				toast.success('💀Task deleted successfully');
				refetch();
				setLoading(false);
			})
			.catch((err) => {
				toast.error(err.message);
			});
	};

	return (
		<div className=" w-[100%]">
			{/* ----------Top-------- */}
			<div className="py-10 w-full pr-10">
				<div className=" flex justify-between items-center">
					{/* Search */}
					<div className="relative">
						<input
							type="text"
							placeholder="Search for..."
							className="w-full rounded-md border-gray-200 focus:border-indigo-500 py-2.5 pe-10 shadow-sm sm:text-sm"
						/>

						<span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
							<button
								type="button"
								className="text-gray-600 hover:text-gray-700"
							>
								<span className="sr-only">Search</span>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="h-4 w-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
									/>
								</svg>
							</button>
						</span>
					</div>
					<div className=" flex gap-5">
						<div className="relative flex-shrink-0">
							<span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
							<img
								src={user.photoURL}
								alt="userImage"
								className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
							/>
						</div>
						{/* LogOut Button */}
						<button
							onClick={handleLogOut}
							className=" group flex gap-1 items-center hover:bg-red-500 px-2 py-1 rounded-md border border-red-500 transition-all duration-300"
						>
							<p className=" group-hover:text-white transition-all duration-300">
								Log Out
							</p>
							<i className="fi fi-rr-power rotate-90 group-hover:text-white text-red-500 font-semibold text-xl transition-all duration-300"></i>
						</button>
					</div>
				</div>
			</div>

			{/* ----- Task Add Form -------- */}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-[80%] max-w-[400px] mx-auto"
			>
				{/* Form Heading */}
				<div className="mb-5 text-center">
					<h1 className=" text-3xl capitalize font-bold">Add Task</h1>
					<p className=" text-gray-600">Hey, What&apos;s your plan today?</p>
				</div>
				<div className="my-2">
					<input
						{...register('task_name', { required: true })}
						type="text"
						className="w-full border rounded border-gray-500 py-2 focus:bg-slate-100 focus:border-indigo-500  placeholder:text-gray-600"
						placeholder="Task Name"
					/>
					{errors.task_name?.type === 'required' && (
						<span className=" text-red-600 text-sm flex items-center gap-[2px]">
							<MdErrorOutline />
							Task Name is required
						</span>
					)}
				</div>
				<div className="my-2">
					<textarea
						{...register('task_description', { required: true })}
						type="text"
						className="w-full border rounded border-gray-500 py-2 focus:bg-slate-100 focus:border-indigo-500  placeholder:text-gray-600"
						placeholder="Task Description....."
					/>
					{errors.task_description?.type === 'required' && (
						<span className=" text-red-600 text-sm flex items-center gap-[2px]">
							<MdErrorOutline />
							Task Description is required
						</span>
					)}
				</div>
				<div className="my-2">
					<input
						{...register('deadline', { required: true })}
						type="date"
						className="w-full border rounded border-gray-500 py-2 focus:bg-slate-100 focus:border-indigo-500  placeholder:text-gray-600"
						placeholder="Task Name"
					/>
					{errors.deadline?.type === 'required' && (
						<span className=" text-red-600 text-sm flex items-center gap-[2px]">
							<MdErrorOutline />
							Deadline is required
						</span>
					)}
				</div>
				<div className="my-2">
					<select
						{...register('priority', { required: true })}
						className="w-full border rounded border-gray-500 py-2 focus:bg-slate-100 focus:border-indigo-500  placeholder:text-gray-600"
						defaultValue="Select Priority"
					>
						<option disabled>Select Priority</option>
						<option value="High">High</option>
						<option value="Medium">Medium</option>
						<option value="Low">Low</option>
					</select>
					{errors.priority?.type === 'required' && (
						<span className=" text-red-600 text-sm flex items-center gap-[2px]">
							<MdErrorOutline />
							Priority is required
						</span>
					)}
				</div>

				{/* Add Task Button */}
				<div className="flex justify-center mt-5">
					<button className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-lg rounded transition-all duration-300 flex gap-1 items-center">
						{loading ? (
							<AiOutlineLoading className="animate-spin text-white" />
						) : undefined}
						Add Task
					</button>
				</div>
			</form>

			{/*--------- Show Task -------- */}

			<div
				ref={drop}
				className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 pr-10 mb-10"
			>
				{/* -------- Todo -------- */}
				<div className="p-5 md:p-5 bg-[#EEF2F5] rounded-lg">
					{/* -------- Header ------- */}
					<h3 className=" text-center text-xl font-semibold flex gap-2 items-center justify-center bg-indigo-500 py-2 text-white rounded">
						<MdOutlineTaskAlt />
						<span>Todo</span>
						<span className=" text-sm text-black flex justify-center items-center bg-white rounded-full w-5 h-5">
							{ftodos?.length}
						</span>
					</h3>
					{/* -------- TODO TASK ------- */}
					{ftodos?.map((todo, index) => (
						<FTodos
							key={index}
							todo={todo}
							handleDeleteTask={handleDeleteTask}
						></FTodos>
					))}
				</div>
				{/*-------- Ongoing ---------- */}
				<div className="p-5 md:p-5 bg-[#EEF2F5] rounded-lg ">
					{/* -------- Header ------- */}
					<h3 className=" text-center text-xl font-semibold flex gap-2 items-center justify-center bg-cyan-500 py-2 text-white rounded">
						<AiOutlineLoading3Quarters />
						<span>On Going</span>
						<span className=" text-sm text-black flex justify-center items-center bg-white rounded-full w-5 h-5">
							{fongoing?.length}
						</span>
					</h3>
					{/* -------- ONGOING TASK ------- */}
					{fongoing?.map((todo, index) => (
						<FOngoin
							key={index}
							todo={todo}
							handleDeleteTask={handleDeleteTask}
						></FOngoin>
					))}
				</div>
				{/* --------- Complete ---------- */}
				<div className="p-5 md:p-5 bg-[#EEF2F5] rounded-lg">
					{/* -------- Header ------- */}
					<h3 className=" text-center text-xl font-semibold flex gap-2 items-center justify-center bg-green-500 py-2 text-white rounded">
						<IoMdDoneAll />
						<span>Completed</span>
						<span className=" text-sm text-black flex justify-center items-center bg-white rounded-full w-5 h-5">
							{fcompleted?.length}
						</span>
					</h3>
					{/* -------- COMPLETED TASK ------- */}
					{fcompleted?.map((todo, index) => (
						<FCompleted
							key={index}
							todo={todo}
							handleDeleteTask={handleDeleteTask}
						></FCompleted>
					))}
				</div>
			</div>
		</div>
	);
};

export default Taskmanager;
