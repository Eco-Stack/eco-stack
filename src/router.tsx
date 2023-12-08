// Import pages
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ProjectOverview from './pages/ProjectOverview';
import CloudOverview from './pages/CloudOverview';
import { createBrowserRouter } from 'react-router-dom';
import App from 'App';

export const ROUTES = {
  signin: '/auth/signin',
  signup: '/auth/signup',
  projectOverview: '/project',
  cloudOverview: '/cloud',
  dashboard: '/test',
} as const;

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Signin /> },
      { path: ROUTES.signin, element: <Signin /> },
      { path: ROUTES.signup, element: <Signup /> },
      { path: ROUTES.projectOverview, element: <ProjectOverview /> },
      { path: ROUTES.cloudOverview, element: <CloudOverview /> },
      { path: ROUTES.dashboard, element: <Dashboard /> },
    ],
  },
]);
