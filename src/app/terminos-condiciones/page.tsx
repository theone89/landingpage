import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-24 relative bg-white">
      <h1 className="text-3xl font-bold text-center mb-4">
        Términos y Condiciones
      </h1>
      <p className="text-sm text-gray-600 text-center mb-8">
        Última actualización: 23 de enero de 2025
      </p>

      <p className="mb-4">
        Bienvenido/a a <strong>StrongFreeCode</strong>. Al acceder y utilizar
        nuestro sitio web, usted acepta cumplir con los siguientes términos y
        condiciones. Si no está de acuerdo con alguna parte de estos términos,
        por favor no utilice nuestro sitio.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Uso del Sitio</h2>
      <p className="mb-4">
        El contenido de este sitio web es solo para información general. Nos
        reservamos el derecho de modificar o retirar, temporal o
        permanentemente, el sitio web (o cualquier parte del mismo) sin previo
        aviso.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Propiedad Intelectual</h2>
      <p className="mb-4">
        Todo el contenido del sitio web, incluyendo textos, gráficos, logotipos,
        iconos, imágenes, clips de audio y software, es propiedad de{" "}
        <strong>StrongFreeCode</strong> o de sus proveedores de contenido y está
        protegido por las leyes de propiedad intelectual.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        3. Limitación de Responsabilidad
      </h2>
      <p className="mb-4">
        <strong>StrongFreeCode</strong> no será responsable por ningún daño
        directo, indirecto, incidental, especial o consecuente que resulte del
        uso o la imposibilidad de uso del sitio web, incluso si se ha advertido
        de la posibilidad de dichos daños.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Enlaces a Terceros</h2>
      <p className="mb-4">
        Este sitio web puede contener enlaces a sitios web de terceros. Estos
        enlaces se proporcionan únicamente para su conveniencia.{" "}
        <strong>StrongFreeCode</strong> no tiene control sobre el contenido de
        estos sitios y no asume responsabilidad alguna por ellos.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Modificaciones</h2>
      <p className="mb-4">
        Nos reservamos el derecho de modificar estos términos y condiciones en
        cualquier momento. Los cambios entrarán en vigor inmediatamente después
        de su publicación en el sitio web. Le recomendamos que revise esta
        página periódicamente para mantenerse informado.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Ley Aplicable</h2>
      <p className="mb-4">
        Estos términos y condiciones se regirán e interpretarán de acuerdo con
        las leyes de <strong>Cuba</strong>. Cualquier disputa relacionada con
        estos términos estará sujeta a la jurisdicción exclusiva de los
        tribunales de <strong>La Habana, Cuba</strong>.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Contacto</h2>
      <p className="mb-4">
        Si tiene alguna pregunta sobre estos términos y condiciones, puede
        contactarnos:
      </p>
      <ul className="list-disc pl-8 mb-8">
        <li className="mb-2">
          <p>
            Por correo electrónico:{" "}
            <a
              href="mailto:contact@strongfreecode.com"
              className="text-blue-500 hover:text-blue-700"
            >
              contact@strongfreecode.com
            </a>
          </p>
        </li>
        <li className="mb-2">
          <p>
            Visitando esta página en nuestro sitio web:{" "}
            <a
              href="https://web.strongfreecode.com/contact"
              rel="external nofollow noopener"
              target="_blank"
              className="text-blue-500 hover:text-blue-700"
            >
              https://web.strongfreecode.com/contact
            </a>
          </p>
        </li>
        <li className="mb-2">
          <p>Por número de teléfono: +52296110304</p>
        </li>
        <li className="mb-2">
          <p>Por correo postal: La Habana, Cuba, 10700</p>
        </li>
      </ul>
    </div>
  );
}
