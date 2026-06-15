import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Sidebar />
      <main className="flex-1 ml-0 lg:ml-64">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
