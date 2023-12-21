import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout/Mainlayout';
import HomePage from '../pages/HomePage/HomePage';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Offer from '../pages/Offer/Offer';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Mainlayout />,
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
		],
	},
]);

export default router;
