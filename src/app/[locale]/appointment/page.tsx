import AppointmentForm from "@/components/forms/appointment/AppointmentForm";
import { getAppointmentContent } from "@/content";
import { urls } from "@/settings";
import type { StyleSchema } from "@/settings/@types";
import { getData, mainTitleAdapt, transparentBg } from "@/utils";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const { api } = urls;

interface Props {
  params: { locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const AppointmentPage: React.FC<Readonly<Props>> = async ({ params: {} }) => {
  const appointmentContent = getAppointmentContent(
    await getTranslations("appointment.page")
  );

  const styles =
    (await getData<StyleSchema[]>(`${api.base}${api.styles.base}`).catch(
      console.error
    )) || [];

  return (
    <main className="flex flex-col items-center min-h-screen mb-20 gap-20">
      <div className="flex justify-center mx-auto w-full relative">
        <Image
          src={"/images/AppointmentBackground.jpg"}
          alt="Studio background"
          width={600}
          height={600}
          className="h-semiScreen object-cover"
        />
        <div
          className={`${transparentBg} flex items-center justify-center w-full h-full absolute`}
        >
          <h2 className={`${mainTitleAdapt} text-center uppercase`}>
            {appointmentContent.title}
          </h2>
        </div>
      </div>

      <AppointmentForm content={appointmentContent} styles={styles} />
    </main>
  );
};

export default AppointmentPage;
