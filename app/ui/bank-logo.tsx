import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function BankLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
              src="/bank.png"
              alt="B&B Bank Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
      <p className="text-[30px]">B&B Bank</p>
    </div>
  );
}
