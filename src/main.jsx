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
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Tanstack query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<DndProvider backend={HTML5Backend}>
			<QueryClientProvider client={queryClient}>
				<HelmetProvider>
					<AuthProvider>
						<RouterProvider router={router}></RouterProvider>
					</AuthProvider>
					<Toaster />
				</HelmetProvider>
			</QueryClientProvider>
		</DndProvider>
	</React.StrictMode>
);
