import { Outlet } from 'react-router';
import { NavBar } from '../components/NavBar';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { ProgressBar } from '../components/ProgressBar';
import { ScrollToTop } from '../components/ScrollToTop';
import { Footer } from '../components/Footer';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <AnnouncementBar />
      <NavBar variant="transparent" />
      <ProgressBar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}
