import BackwardIcon from "@/components/icons/BackwardIcon";
import ForwardIcon from "@/components/icons/ForwardIcon";
import DocDelimiter from "@/components/ui/DocDelimiter";
import GradientBorder from "@/components/ui/GradientBorder";
import type { AppointmentContent } from "@/content/functions/types";
import { fourthTitle } from "@/utils";

interface Props {
  content: AppointmentContent["steps"];
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const AppointmentStepsBar: React.FC<Props> = ({ content, step, setStep }) => {
  return (
    <DocDelimiter containerClassName="flex items-center justify-center">
      <GradientBorder className="rounded p-0.5">
        <ul className="hidden lg:flex justify-center rounded bg-primary-bgD">
          {content.map(({ id, label }, idx) => (
            <li
              key={id}
              className={`${fourthTitle} w-40 text-center ${
                step === idx ? "bg-primary-accent" : ""
              } ${idx === 0 ? "rounded-l" : ""} ${
                idx === content.length - 1 ? "rounded-r" : ""
              }`}
            >
              <button onClick={() => setStep(idx)}>{label}</button>
            </li>
          ))}
        </ul>

        <ul className="flex justify-center rounded bg-primary-bgD lg:hidden">
          {content.map(({ id, label }, idx) => (
            <li
              key={id}
              className={`${fourthTitle} flex items-center justify-between w-52 rounded ${
                idx === step ? "block" : "hidden"
              }`}
            >
              <button
                onClick={() =>
                  setStep((prev) => (prev === 0 ? prev : prev - 1))
                }
              >
                <BackwardIcon className="w-10 fill-white" />
              </button>
              {label}
              <button
                onClick={() =>
                  setStep((prev) =>
                    prev === content.length - 1 ? prev : prev + 1
                  )
                }
              >
                <ForwardIcon className="w-10 fill-white" />
              </button>
            </li>
          ))}
        </ul>
      </GradientBorder>
    </DocDelimiter>
  );
};

export default AppointmentStepsBar;
