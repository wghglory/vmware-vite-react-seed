import 'react-toastify/dist/ReactToastify.css';

import {RefObject, Suspense, useRef} from 'react';
import {Outlet} from 'react-router';
import {toast, ToastContainer} from 'react-toastify';

import TheNav from './TheNav';

export default function Layout() {
  const containerRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  return (
    <Suspense fallback={<div className="h-screen bg-gray-100 dark:bg-gray-900"></div>}>
      <div className="flex h-screen flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-300">
        <TheNav />
        {/* <main className="mt-[64px] flex-1 overflow-auto" ref={containerRef} onScroll={scroll}> */}
        <main className="mt-[64px] flex-1 overflow-auto">
          <Outlet />
        </main>

        <ToastContainer />
      </div>
    </Suspense>
  );
}
