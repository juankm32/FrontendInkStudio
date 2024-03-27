import FaqCard from "@/components/cards/faqCard";
import DocDelimiter from "@/components/ui/DocDelimiter";
import GradientBorder from "@/components/ui/GradientBorder";
import { faqDevelopment } from "@/development";
import { mainTitleAdapt, secondaryTitle } from "@/utils";
import Image from "next/image";
import type { FC } from "react";

interface Props {
  params: { locale: string };
}

const FaqPage: FC<Props> = ({ params: {} }) => {
  return (
    <main className="flex flex-col items-center min-h-screen mb-20 gap-20">
      <div className="flex justify-center mx-auto w-full relative">
        <Image
          src={"/images/faq_background.jpg"}
          alt="Studio background"
          width={3000}
          height={1500}
          className="w-full h-semiScreen object-cover"
        />
        <div
          className={`flex flex-col justify-center items-center w-full h-full absolute`}
        >
          <h1 className={`${mainTitleAdapt} text-center uppercase`}>
            Quienes Somos
          </h1>
          <GradientBorder
            className={`lg:rounded-3xl cursor-pointer mx-auto w-3/4 lg:w-3/4 xl:w-3/4 mt-8`}
          >
            <div className="bg-primary-black relative lg:m-1.5 lg:rounded-3xl p-4">
              Ink estudio es un espacio artístico de tatuajes y ofrece una buena
              calidad artística y técnica de los mismos. El equipo humano de Ink
              estudio cuenta con artistas y profesionales con amplia experiencia
              en todo tipo de estilos, desde lo más vintage a lo más
              contemporáneo. Desde nuestra web, y en nombre de todos los que
              formamos Ink estudio, esperamos que descubras la inspiración en
              nuestros trabajos y te animes a visitarnos para contarnos qué te
              gustaría hacerte.
            </div>
          </GradientBorder>
        </div>
      </div>
      <DocDelimiter as="section" containerClassName="flex flex-col gap-10">
        <h1 className={`${secondaryTitle} text-center uppercase`}>
          Preguntas Frecuentes
        </h1>
        {faqDevelopment.map((faq) => (
          <FaqCard key={faq.id} faq={faq} hover />
        ))}
      </DocDelimiter>
    </main>
  );
};
export default FaqPage;
