import { fourthTitle, smoothTransition } from "@/utils";
import { useState } from "react";
import DownIcon from "../icons/DownIcon";
import UpIcon from "../icons/UpIcon";

interface Item<T extends string | number> {
  value: T;
  label: string;
}

interface Props<T extends string | number> {
  title: string;
  items: Item<T>[];
  getSelected: (value: T) => any;
  className?: string;
}

const Dropdown = <T extends string | number>({
  title,
  items,
  getSelected,
  className,
}: Props<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (value: T) => {
    getSelected(value);
  };

  return (
    <div className={`${className} flex flex-col items-center gap-5 relative`}>
      <button
        className={`${fourthTitle} capitalize flex justify-between w-48`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title}
        {isOpen ? (
          <UpIcon fill="white" className="w-7" />
        ) : (
          <DownIcon fill="white" className="w-7" />
        )}
      </button>
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col absolute top-full w-40 gap-3 py-2 mt-5 bg-primary-active rounded-xl z-10 overflow-y-auto h-52 custom-scroll`}
      >
        {items.map((item, idx) => (
          <li key={idx}>
            <button
              onClick={() => handleSelect(item.value)}
              className={`${smoothTransition} capitalize text-lg w-full hover:opacity-50`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
