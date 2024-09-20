import Nav from '@/app/ui/nav/nav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-row md:flex-col md:overflow-hidden">
      <div className="w-full flex-none h-20">
        <Nav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto pt-12">{children}</div>
    </div>
  );
}