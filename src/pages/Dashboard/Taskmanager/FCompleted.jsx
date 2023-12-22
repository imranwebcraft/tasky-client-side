import { LuCalendar } from 'react-icons/lu';
import { formatDate } from '../../../Helper/getDeadline';
import { useDrag } from 'react-dnd';

const FCompleted = ({ todo, handleDeleteTask }) => {
	// React DND
	const [{ isDragging }, drag] = useDrag(() => ({
		type: 'task',
		item: { id: todo._id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	return (
		<div
			ref={drag}
			key={todo._id}
			className={`p-5 bg-white rounded-xl mt-5 space-y-2 hover:cursor-pointer ${
				isDragging ? 'opacity-25' : 'opacity-100'
			} `}
		>
			<div className=" md:flex justify-between">
				<p className=" text-2xl font-medium">{todo.task_name}</p>
				<span className=" bg-purple-500 text-white px-3 py-1">
					{todo.priority}
				</span>
			</div>
			<p className=" text-gray-700">{todo.task_description}</p>
			<div className=" md:flex nd:items-center gap-5">
				<p className=" font-medium flex items-center gap-1">
					<LuCalendar />
					{formatDate(new Date(todo.deadline))}
				</p>
				<div></div>
				<div className=" mt-2 flex flex-wrap gap-5 justify-center ">
					<button className=" hover:text-indigo-500 transition-all duration-300">
						<i className="fi fi-rr-pencil text-xl"></i>
					</button>
					<button
						onClick={() => handleDeleteTask(todo._id)}
						className=" hover:text-red-500 transition-all duration-300"
					>
						<i className="fi fi-rr-trash text-xl"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default FCompleted;
