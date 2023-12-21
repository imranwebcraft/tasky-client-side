import { Navigate, useLocation } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({ children }) => {
	const { loading, user } = useContext(AuthContext);

	const location = useLocation();

	if (loading) {
		return (
			<div className="w-full h-screen flex justify-center items-center">
				<ScaleLoader color="#1541c7" />
			</div>
		);
	}

	if (user) {
		return children;
	}

	return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
