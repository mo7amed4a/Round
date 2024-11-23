'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { MdLanguage } from "react-icons/md";

export default function LocalSwitcher({ isScrolled }: { isScrolled?: boolean }) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname()
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (value: string) => {
    startTransition(() => {
      const newPath = pathname.replace(`/${localActive}`, `/${value}`)
      router.replace(newPath);
    });
  };

  return (
    <Select defaultValue={localActive} onValueChange={onSelectChange} disabled={isPending}>
      <SelectTrigger className={`w-[85px] flex flex-row-reverse border-none ring-0 focus:ring-0 shadow-none items-center ${isScrolled ? "text-gray-700" : pathname.endsWith("register") ? "text-gray-500" : "text-white"}`}>
        <div className="flex items-center gap-x-1 w-full">
          <SelectValue placeholder="AR" className="placeholder:text-white" />
          <MdLanguage className="size-4" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ar">AR</SelectItem>
        <SelectItem value="en">EN</SelectItem>
      </SelectContent>
    </Select>
  );
}
