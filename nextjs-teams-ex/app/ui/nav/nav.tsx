import Link from 'next/link';
import NavLinks from '@/app/ui/nav/links';

export default function Nav() {
  return (
    <div className="flex w-full flex-row bg-gray-500 px-4 py-3">
      <div className="flex grow flex-row justify-left gap-4">
        <NavLinks />
      </div>
    </div>
  );
}
