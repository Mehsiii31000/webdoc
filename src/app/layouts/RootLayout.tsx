import { Outlet } from 'react-router';
import { ScrollToTop } from '../components/ScrollToTop';
import { BackToTop } from '../components/BackToTop';
import { GlobalNavigation } from '../components/GlobalNavigation';

export function RootLayout() {
  return (
    <>
      <div className="min-h-screen bg-[#0d1117] text-white">
        <ScrollToTop />
        <BackToTop />
        <Outlet />
        <GlobalNavigation />
      </div>
    </>
  );
}
