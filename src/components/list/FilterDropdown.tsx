"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { FC } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
    <div
      className="flex flex-col items-center justify-center relative"
      ref={dropDownRef}
    >
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
        } custom-scroll animate-fadeInDown flex-col absolute mt-5 min-w-44 top-full gap-3 py-2 bg-primary-active rounded-xl z-10 overflow-y-auto h-52`}
      >
        {items.map(({ label, id, value }, idx) => (
          <Link
            key={`${id}${idx}`}
            scroll={false}
            href={`${pathname}?${createQueryString(id, value)}`}
            className="text-center capitalize hover:opacity-50"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default FilterDropdown;
