"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { FC } from "react";
import { useCallback, useState } from "react";
import DownIcon from "../icons/DownIcon";
import UpIcon from "../icons/UpIcon";
import GradientBorder from "../ui/GradientBorder";

interface Props {
  icon: React.ReactNode;
  title: string;
  items: { id: string; label: string; value: string }[];
  className: string;
  borderClassName: string;
}

const FilterDropdown: FC<Props> = ({
  icon,
  title,
  items,
  className,
  borderClassName,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const existingValues = params.getAll(name);

      if (!existingValues.includes(value)) existingValues.push(value);
      params.delete(name);
      existingValues.forEach((newValue) => params.append(name, newValue));

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex flex-col items-center justify-center relative">
      <GradientBorder
        as="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={borderClassName}
      >
        <div className={className}>
          {icon}
          {title}
          {isOpen ? (
            <UpIcon fill="white" className="w-5" />
          ) : (
            <DownIcon fill="white" className="w-5" />
          )}
        </div>
      </GradientBorder>
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } animate-fadeInDown flex-col absolute mt-5 top-full w-40 gap-3 py-2 bg-primary-active rounded-xl z-10`}
      >
        {items.map(({ label, id, value }) => (
          <Link
            scroll={false}
            key={id}
            href={`${pathname}?${createQueryString(id, value)}`}
            className="text-center capitalize"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default FilterDropdown;
