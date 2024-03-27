import { AppointmentContext } from "@/components/context";
import Separator from "@/components/ui/Separator";
import { useGetContext } from "@/hooks";
import type { StyleSchema } from "@/settings/@types";
import { btnAccentColors, fourthTitle } from "@/utils";

interface Props {
  styles: StyleSchema[];
}

const AppointmentSecondStep: React.FC<Props> = ({ styles }) => {
  const {
    register,
    content: {
      form: { submit },
    },
    setters: { setValue },
  } = useGetContext(AppointmentContext);

  return (
    <div className="flex flex-col gap-5 px-5">
      {styles.map(({ id, name }) => (
        <article key={id} className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h3 className={`${fourthTitle}`}>{name}</h3>
            <button
              onClick={() => setValue("styleId", id)}
              className={`${btnAccentColors} rounded px-2 py-1`}
              {...register("styleId")}
            >
              {submit}
            </button>
          </div>
          <Separator className="bg-primary-bgL h-0.5" />
        </article>
      ))}
    </div>
  );
};

export default AppointmentSecondStep;
