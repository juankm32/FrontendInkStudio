import type { FC } from "react";

interface Props {
  params: { locale: string };
}

const PrivacyPage: FC<Readonly<Props>> = ({ params: {} }) => {
  // const t = useTranslations("termsAndConditions");

  return (
    <main className=" p-4 md:p-10">
      <div className="bg-gray shadow rounded-lg p-6 md:p-8 lg:p-10 max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
          Términos y Condiciones
        </h1>

        <p>
          INK STUDIO (“INK STUDIO”) facilita a los usuarios (el “Usuario” o los
          “Usuarios”) del presente sitio web www.inkstudio.com (el “Sitio Web”)
          los siguientes datos de información general, de acuerdo con el
          artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y de Comercio Electrónico (la “LSSI”).
        </p>

        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Denominación social: Lucio Gimenez</li>
          <li>Número de Identificación Fiscal: 78050206721K</li>
          <li>Domicilio social: Salguero 781, CABA</li>
          <li>Email de contacto: inkstudio@inkstudio.com.ar</li>
          <li>Teléfono de contacto: +54-11-22510771</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">
          CONDICIONES GENERALES
        </h2>

        <p>
          INK STUDIO utiliza una tecnología denominada “cookies” para recabar
          información acerca del uso de nuestro sitio web.
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
          ¿Qué son las cookies?
        </h3>
        <p>
          Una cookie es una pequeña información enviada por un sitio web y
          almacenada en el navegador del usuario, de manera que el sitio web
          puede consultar la actividad previa del usuario.
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
          Consentimiento
        </h3>
        <p>
          Le informamos de que podemos utilizar cookies en su equipo a condición
          de que Usted haya dado su consentimiento, salvo en los supuestos en
          los que las cookies sean necesarias para la navegación por nuestro
          sitio web. En caso de que Usted preste su consentimiento, podremos
          utilizar cookies que nos permitirán tener más información acerca de
          sus preferencias y personalizar nuestro sitio web de conformidad con
          sus intereses individuales.
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
          ¿Para qué se utilizan las cookies en este sitio web? 
        </h3>
        <p>
          Utilizamos cookies propias y de terceros para mejorar nuestros
          servicios, personalizar nuestro sitio web, facilitar la navegación de
          nuestros usuarios, proporcionarle una mejor experiencia en el uso del
          sitio web, identificar problemas para mejorar el mismo, hacer
          mediciones y estadísticas de uso y mostrarle publicidad relacionada
          con sus preferencias mediante el análisis del uso del sitio web.
        </p>

        <section className=" shadow rounded-lg p-6 md:p-8 lg:p-10 max-w-3xl mx-auto my-6">
          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">
            Política de cookies
          </h2>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            Concepto de Cookies
          </h3>
          <p>
            Las cookies son ficheros que se almacenan en el ordenador del
            usuario que navega a través de Internet y que, en particular,
            contiene un número que permite identificar unívocamente el ordenador
            del usuario, aunque éste cambie de localización o de dirección IP.
          </p>
          <p>
            Las cookies son instaladas al navegar por Internet, ya sea por los
            sitios web que visita el usuario o bien por terceros con los que se
            relaciona el sitio web, permitiendo a éste conocer su actividad en
            el mismo sitio o en otros con los que este se relaciona. Por
            ejemplo: localización, duración de la conexión, tipo de dispositivo
            desde el que accede (fijo o móvil), el sistema operativo y navegador
            utilizados, las páginas más visitadas, el número de clicks
            realizados y de datos respecto al comportamiento del usuario en
            Internet.
          </p>
          <p>
            El sitio web es accesible sin necesidad de que las cookies estén
            activadas, aunque no tenerlas activadas puede impedir el correcto
            funcionamiento del mismo o que no funcione correctamente.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            Autorización para el uso de cookies
          </h3>
          <p>
            De conformidad con el aviso de cookies que aparece en el pie de
            página del sitio web, el usuario o visitante de los mismos acepta
            que, al navegar por el mismo, consiente expresamente el uso de
            cookies según la descripción que se detalla a continuación, excepto
            en la medida que haya modificado la configuración de su navegador
            para rechazar la utilización de las mismas.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
            Tipos de Cookies que se utilizan en la Web
          </h3>
          <h4 className="text-md font-bold text-gray-700 mt-4 mb-2">
            Según la entidad que las gestione
          </h4>
          <p>
            El usuario que navega por la Web puede encontrar cookies insertadas
            directamente por el Titular, o bien cookies insertadas por terceras
            entidades distintas a ésta.
          </p>

          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Cookies propias:</strong> aquéllas que se envían al equipo
              terminal del usuario desde un equipo o dominio gestionado por el
              titular de la página web y desde la que se presta el servicio
              solicitado por el usuario.
            </li>
            <li>
              <strong>Cookies de terceros:</strong> aquéllas que se envían al
              equipo terminal del usuario desde un equipo o dominio que no es
              gestionado por el titular de la página web desde la que se presta
              el servicio solicitado por el usuario, sino por otra entidad que
              trata los datos obtenidos a través de las cookies.
            </li>
          </ul>

          <h4 className="text-md font-bold text-gray-700 mt-4 mb-2">
            Según su duración
          </h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>De sesión:</strong> cookies diseñadas para recabar y
              almacenar datos mientras el usuario permanece a una página web.
            </li>
            <li>
              <strong>Permanentes:</strong> cookies en el que los datos siguen
              almacenados en el terminal del usuario, pudiendo ser accedidos y
              tratados cuando el usuario abandona la página web y también cuando
              se vuelva a conectar a ella.
            </li>
          </ul>

          <h4 className="text-md font-bold text-gray-700 mt-4 mb-2">
            Según la finalidad
          </h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Técnicas:</strong> aquéllas que permiten al usuario la
              navegación a través de una página web, plataforma o aplicación y
              la utilización de las diferentes opciones o servicios que en ella
              existan.
            </li>
            <li>
              <strong>Geolocalizadoras:</strong> Se utilizan para saber en qué
              lugar se encuentra un usuario cuando solicita un servicio.
            </li>
            <li>
              <strong>De personalización:</strong> Son aquéllas que permiten al
              usuario acceder al servicio con algunas características de
              carácter general predefinidas.
            </li>
            <li>
              <strong>De análisis:</strong> son aquéllas que permiten el
              seguimiento y análisis del comportamiento de los usuarios del
              sitio web.
            </li>
            <li>
              <strong>Publicitarias:</strong> permiten gestionar la oferta de
              los espacios publicitarios en la página web.
            </li>
            <li>
              <strong>De redes sociales:</strong> el Titular utiliza cookies de
              Twitter, Facebook, Linkedin, Whatsapp y Google Plus para que el
              usuario pueda compartir contenidos de la Web en las citadas redes
              sociales, o en su caso para facilitar el registro en la Web, de
              tal forma con los datos que los usuarios han facilitado las redes
              sociales puedan cumplimentar directamente los campos del
              formulario de registro en la Web.
            </li>
          </ul>
        </section>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">
          Desactivar cookies
        </h2>
        <p>
          El uso de cookies puede estar sujeto a su aceptación durante la
          instalación o actualización del navegador utilizado por éstos.
        </p>
        <p>
          Dicha aceptación podrá ser revocada mediante las opciones de
          configuración de contenidos y privacidad disponibles en el mismo. El
          Titular recomienda a sus usuarios que consulten la ayuda de su
          navegador o acceda a las páginas web de ayuda de los principales
          navegadores:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            Internet Explorer:{" "}
            <a
              href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
              className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eliminar y administrar cookies
            </a>
          </li>
          <li>
            Firefox:{" "}
            <a
              href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
              className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Habilitar y deshabilitar cookies
            </a>
          </li>
          <li>
            Chrome:{" "}
            <a
              href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform=Desktop&hl=es"
              className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gestión de cookies y datos de sitios
            </a>
          </li>
        </ul>

        <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
          Desactivación de cookies
        </h3>
        <p>
          La desactivación de las cookies no impide la navegación por el sitio
          web, aunque determinados servicios podrán no funcionar correctamente
          y, por tanto, su experiencia de navegación podrá ser menos
          satisfactoria.
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
          Retirada de consentimiento
        </h3>
        <p>
          El usuario en cualquier momento podrá retirar su consentimiento
          relacionado con la Política de Cookies. En caso de necesitar ayuda
          contacte con el Titular a través del email e indicando en el asunto de
          mensaje “Política de cookies”.
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
          Eliminación de cookies
        </h3>
        <p>
          Podrá eliminar las cookies almacenadas en su equipo a través de los
          ajustes y configuraciones de su navegador de Internet, indicados
          anteriormente.
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
          Cambios en la política{" "}
        </h3>
        <p>
          La actual Política de Cookies se podrá modificar cuando así lo exija
          la legislación vigente en cada momento o cuando hubiera alguna
          variación en el tipo de cookies utilizadas en el sitio web. En caso de
          que así sea, le aparecerá un nuevo aviso para que esté informado
          adecuadamente y pueda decidir si acepta de forma expresa.
        </p>
      </div>
    </main>
  );
};

export default PrivacyPage;
