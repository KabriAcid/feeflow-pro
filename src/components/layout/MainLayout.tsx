import { ReactNode } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { BottomNav } from './BottomNav';
import { motion } from 'framer-motion';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-body-bg">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <AppSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-auto pb-20 lg:pb-0">
          {/* Gradient Blobs Background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="blob-violet absolute top-0 -left-4 w-72 h-72" />
            <div className="blob-peach absolute top-20 right-20 w-96 h-96 animation-delay-2000" />
            <div className="blob-blue absolute -bottom-8 left-20 w-80 h-80 animation-delay-4000" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>

        {/* Mobile Bottom Navigation */}
        <BottomNav />
      </div>
    </SidebarProvider>
  );
}
