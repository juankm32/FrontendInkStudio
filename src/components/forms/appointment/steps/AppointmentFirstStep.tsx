"use client";

import { AppointmentContext } from "@/components/context";
import { useGetContext } from "@/hooks";
import { findOnArray } from "@/lib";
import { btnAccentColors, fourthTitle } from "@/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import { IoIosAlert } from "react-icons/io";

const services = [
  {
    id: "1",
    price: 10000,
    name: "design",
  },
  {
    id: "2",
    price: 200000,
    name: "session",
  },
];

const AppointmentFirstStep: React.FC = () => {
  const {
    register,
    content: {
      form: {
        submit,
        fields: { service: serviceField },
      },
    },
    setters: { setValue },
  } = useGetContext(AppointmentContext);

  const locale = useParams().locale;

  const translatedServices = services.map((field) => {
    const translated = findOnArray(serviceField.content, {
      property: "id",
      value: field.name,
    });

    return {
      ...field,
      name: translated?.label || field.name,
    };
  });

  return (
    <div className="flex flex-col gap-5">
      {translatedServices.map(({ id, name, price }, idx) => (
        <article
          key={id}
          className="flex flex-col bg-primary-grayL gap-1 p-5 relative"
        >
          <Link href={`/${locale}/service/${id}`}>
            <IoIosAlert className="lg:hidden absolute fill-primary-active text-3xl right-0 top-0" />
          </Link>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            <h3 className={`${fourthTitle} capitalize`}>{name}</h3>
            <div className="flex flex-col lg:flex-row items-center gap-5 text-xl">
              ${price}
              <button
                type="submit"
                onClick={() => setValue("serviceId", id)}
                className={`${btnAccentColors} rounded px-2 py-1`}
                {...register(`serviceId`)}
              >
                {submit}
              </button>
            </div>
          </div>
          <Link
            href={`/${locale}/service/${id}`}
            className="hidden lg:flex items-center gap-1 text-primary-toGradient hover:opacity-50 self-start"
          >
            <IoIosAlert className="fill-primary-active text-2xl" />
            <span>{serviceField.moreInfo}</span>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default AppointmentFirstStep;
