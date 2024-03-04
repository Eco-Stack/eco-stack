// Import pages
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ProjectOverview from './pages/ProjectOverview';
import CloudOverview from './pages/CloudOverview';
import { Link, createBrowserRouter } from 'react-router-dom';
import App from 'App';

export const ROUTES = {
  signin: '/auth/signin',
  signup: '/auth/signup',
  projectOverview: '/project',
  cloudOverview: '/cloud',
  dashboard: '/test',
  error: '*',
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
      {
        path: ROUTES.error,
        element: (
          <div className="w-full h-[90vh] flex justify-center items-center font-bold uppercase text-2xl">
            <Link to={ROUTES.cloudOverview}>Error</Link>
          </div>
        ),
      },
    ],
  },
]);
