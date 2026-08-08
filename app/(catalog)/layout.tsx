import { MobileNavigation } from '@/components/layout/mobile-navigation';
import { SiteSidebar } from '@/components/layout/site-sidebar';

interface CatalogLayoutProps {
  children: React.ReactNode;
}

export default function CatalogLayout({
  children,
}: CatalogLayoutProps) {
  return (
    <div className='min-h-screen bg-[#101010] text-white'>
      <MobileNavigation />

      <main className='min-h-screen px-6 py-10 sm:px-10 sm:py-14 lg:mr-[360px] lg:px-14 lg:py-16 xl:px-20'>
        {children}
      </main>

      <SiteSidebar />
    </div>
  );
}
