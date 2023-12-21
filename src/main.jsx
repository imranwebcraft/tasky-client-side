import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HelmetProvider>
			<AuthProvider>
				<RouterProvider router={router}></RouterProvider>
			</AuthProvider>
		</HelmetProvider>
	</React.StrictMode>
);
