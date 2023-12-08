import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';

import './css/style.css';
import './charts/ChartjsConfig';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html')!.style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html')!.style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
