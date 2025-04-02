
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider, useTheme } from '@/hooks/useTheme';
import ThemeSelector from '@/components/ThemeSelector';

interface LayoutProps {
  children: React.ReactNode;
}

const PageContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Header />
      <div className="fixed right-4 bottom-4 z-50">
        <ThemeSelector />
      </div>
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <PageContent>{children}</PageContent>
    </ThemeProvider>
  );
};

export default Layout;
