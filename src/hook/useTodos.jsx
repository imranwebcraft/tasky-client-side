import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useTodos = () => {
	const { user } = useContext(AuthContext);
	const axiosPublic = useAxiosPublic();

	const { data: todos = [], refetch } = useQuery({
		queryKey: ['todos'],
		queryFn: async () => {
			const res = await axiosPublic.get(`/todos/${user.email}`);
			return res.data;
		},
	});
	return [todos, refetch];
};

export default useTodos;
