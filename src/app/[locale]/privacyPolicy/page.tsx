import { useTranslations } from "next-intl";
import type { FC } from "react";

interface Props {
  params: { locale: string };
}

const PrivacyPage: FC<Readonly<Props>> = ({ params: {} }) => {
  const t = useTranslations("privacyPolicy");

  return (
    <main className=" p-4 md:p-10">
      <div className="bg-gray shadow rounded-lg p-6 md:p-8 lg:p-10 max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
          {t("metadata.title")}
        </h1>
        <div className="space-y-4 text-justify">
          <p>
            INK STUDIO (“INK STUDIO”) facilita a los usuarios (el “Usuario” o
            los “Usuarios”) del presente sitio web www.inkstudio.com (el “Sitio
            Web) los siguientes datos de información general, de acuerdo con el
            artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
            Sociedad de la Información y de Comercio Electrónico (la “LSSI”).
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Denominación social: Lucio Gimenez</li>
            <li>Número de Identificación Fiscal: 78050206721K</li>
            <li>Domicilio social: Salguero 781, CABA</li>
            <li>Email de contacto: inkstudio@inkstudio.com.ar</li>
            <li>Teléfono de contacto: +54-11-22510771</li>
          </ul>

          <p>
            Esta Declaración de Privacidad a la que usted accede es porque está
            visitando una página web o está utilizando una aplicación móvil de
            la empresa INK STUDIO. Por ende, esta empresa está tratando
            información sobre usted que constituye datos personales y INK STUDIO
            considera que la protección de sus datos personales y su privacidad
            es de máxima importancia.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">
            CUESTIONES SOBRE EL RGPD
          </h2>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿Qué es el RGPD?
          </h3>
          <p>
            El Reglamento General de Protección de Datos REGLAMENTO (UE)
            2016/679 (“RGPD”) es una nueva normativa europea que adapta la
            gestión de los datos personales a los entornos digitales e internet.
            Su objetivo es garantizar que las personas físicas tengan un mayor
            control sobre sus datos y lo que las entidades efectúan con ellos.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿Cuándo se aplica la nueva normativa?
          </h3>
          <p>
            La Unión Europea aprobó el Reglamento en 2016. Aunque para Los
            Estados miembros entra en vigor a partir del 25 de mayo del 2018.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿Qué cambios va a suponer para los usuarios?
          </h3>
          <p>
            El RGPD añade nuevos derechos a los recogidos en la actual normativa
            española. El principal es que el usuario debe estar informado en
            todo momento de lo que se está haciendo con sus datos.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿Qué es un tratamiento de datos de carácter personal?
          </h3>
          <p>
            Se considera tratamiento de datos cualquier uso de los datos, que
            implique la recogida, grabación, conservación, elaboración,
            modificación, consulta, utilización, bloqueo, modificación,
            cancelación o supresión, así como las cesiones de datos que resulten
            de comunicaciones, consultas, interconexiones y transferencias.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿Cómo modificar la modificación de consentimientos?
          </h3>

          <p>
            Se considera tratamiento de datos cualquier uso de los datos, que
            implique la recogida, grabación, conservación, elaboración,
            modificación, consulta, utilización, bloqueo, modificación,
            cancelación o supresión, así como las cesiones de datos que resulten
            de comunicaciones, consultas, interconexiones y transferencias.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿Cuáles son los consentimientos que tiene que completar el cliente?
          </h3>

          <p>
            Necesitaremos el consentimiento expreso del cliente para llevar a
            cabo determinados tratamiento. <br />
            • Envío de comunicaciones comerciales cuando así lo estime la
            normativa. <br />
            • Envío de comunicaciones comerciales generales o adaptadas al
            perfil del interesado, sobre servicios y productos distintos a los
            que éste tiene contratados. <br />
            • Cesión de datos personales a otras empresas. <br />
            • ¿El cliente tiene queaceptar todos los consentimientos? <br />
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿El cliente tiene que aceptar todos los consentimientos?{" "}
          </h3>

          <p>
            Consentir todos los tratamientos permite a INK STUDIO ofrecer un
            servicio lo más adaptado a sus necesidades posible, pero también
            puede no hacerlo. Aunque, si el cliente opta por esto último, la Web
            debe tratar obligatoriamente sus datos personales para el
            mantenimiento del producto o servicio que tenga contratado y/o
            cumplimiento legal.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿Es lo mismo no dar los consentimientos a no contestar el
            formulario?
          </h3>

          <p>
            En la práctica, sí. El cliente que no complete los consentimientos
            se entenderá como si los hubiera rechazado todos, por lo que no
            recibirá aquellas comunicaciones que sólo se puedan personalizar por
            consentimiento.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿Cómo se realiza la portabilidad de datos?{" "}
          </h3>

          <p>
            A través del área de usuario, el cliente accede a portabilidad de
            datos y elige qué datos quiere portar. El receptor (él mismo o un
            tercero) recibe un email con la información y un SMS con una clave
            única necesaria para solicitar la descarga de los datos
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿Cómo puede el cliente dejar de recibir TODAS las comunicaciones?
          </h3>

          <p>
            El cliente debe solicitarlo mediante email {"  "}
            <a
              href="mailto:inkstudio@inkstudio.com.ar"
              className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              pinchando aquí.
            </a>
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿Qué derechos tiene el cliente sobre sus datos?
          </h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Derecho de Acceso</li>
            <li>Derecho de Rectificación</li>
            <li>Derecho de Oposición</li>
            <li>Derecho de Portabilidad</li>
            <li>Derecho de Limitación de Tratamientos</li>
            <li>Derecho de Supresión</li>
            <li>
              Derecho a no ser objeto de una decisión basada únicamente en el
              tratamiento automatizado de sus datos.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿Qué es el Derecho de Acceso?{" "}
          </h3>

          <p>
            Regulado en el artículo 15 RGPD. Derecho que tienen los interesados
            de cara a poder obtener información sobre si sus datos están siendo
            objeto de tratamiento, la finalidad del tratamiento, el origen de
            los datos, las comunicaciones o cesiones realizadas o previstas.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿Qué es el Derecho de Rectificación?{" "}
          </h3>

          <p>
            Regulado en el artículo 16 RGPD. Derecho que tienen los interesados
            a pedir que se modifiquen aquellos de sus datos que resulten ser
            inexactos o incompletos.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿Qué es el Derecho de Oposición?{" "}
          </h3>

          <p>
            Regulado en el artículo 21 RGPD. Derecho de los interesados a
            solicitar que no se haga un determinado tratamiento de datos de
            carácter personal. Los interesados sólo podrán oponerse a
            tratamientos de datos que se realicen por interés legítimo según lo
            expresado en el referido artículo.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿Qué es el Derecho de Portabilidad?{" "}
          </h3>

          <p>
            Regulado en el artículo 20 RGPD. Derecho de los interesados a
            solicitar a la Web que facilite sus datos a otra empresa, o a sí
            mismo, si así lo solicitase. Se debe entregar en un formato
            estructurado, de uso común y lectura mecánica. Dicha solicitud solo
            se podrá realizar sobre datos cuyo tratamiento esté basado en el
            consentimiento expreso o en un contrato entre ambas partes, y
            siempre que el tratamiento se efectúe por medios automatizados.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿Qué es el Derecho de Limitación de Tratamientos?{" "}
          </h3>

          <p>
            Regulado en el artículo 18 y 19 RGPD. Derecho a solicitar por parte
            del interesado que no se apliquen a sus datos personales las
            operaciones de tratamiento que en cada caso corresponderían. Este
            derecho sólo podrá ejercitarse en determinados casos restrictivos.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿Qué es el Derecho de Supresión (el derecho al olvido)?{" "}
          </h3>

          <p>
            Regulado en el artículo 17 RGPD. Derecho que permite a las personas
            dirigirse a inkstudio@inkstudio.com.ar para que supriman sus datos
            personales cuando ya no sean necesarios, cuando se retire el
            consentimiento, hayan sido tratados ilícitamente, etc. Deberán poder
            bloquear los datos y, posteriormente, eliminar cualquier copia,
            enlace y réplica de los datos, siempre que lo permitan los medios
            técnicos. Todo ello, siempre que no lo impida una obligación legal,
            o sea necesario para la el ejercicio o defensa de reclamaciones.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            ¿Qué es el Derecho a no ser objeto de una decisión basada únicamente
            en el tratamiento automatizado de sus datos?
          </h3>

          <p>
            Regulado en el artículo 22 RGPD. Derecho que permite a los
            interesados solicitar que no se lleve a cabo un tratamiento de datos
            de carácter personal que implique por parte del propietario de la
            Web una toma de decisiones que les afecte significativamente, y que
            se realice de forma automática y sin intervención humana.{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;
