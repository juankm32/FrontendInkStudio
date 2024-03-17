"use client";

import { useState, type FC } from 'react';
import GradientBorder from "../ui/GradientBorder";
import type { FaqSchema } from "@/settings/@types/schema/Faq";

interface Props {
  faq: FaqSchema;
  hover?: boolean;
  mainTitle?: boolean;
  as?: string;
}

const FaqCard: FC<Props> = ({ faq, hover = false }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);


    return (
        <GradientBorder
          className={`${hover ? "hover:opacity-50" : ""} lg:rounded-3xl cursor-pointer mx-auto w-3/4 lg:w-3/4 xl:w-3/4`}
          onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
        >
          <div className="bg-primary-black relative lg:m-1.5 lg:rounded-3xl p-4">
            <div className="text-lg font-bold mb-2">{faq.title}</div>
            {isDescriptionVisible && (
              <p className="text-sm text-white">{faq.description}
              </p>
            )}
          </div>
        </GradientBorder>
      );
    };

export default FaqCard;
