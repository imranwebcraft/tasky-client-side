import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout/Mainlayout';
import HomePage from '../pages/HomePage/HomePage';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Offer from '../pages/Offer/Offer';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Signup from '../pages/Signup/Signup';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Mainlayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
			{
				path: 'offer',
				element: <Offer />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: '/signup',
				element: <Signup />,
			},
		],
	},
]);

export default router;
