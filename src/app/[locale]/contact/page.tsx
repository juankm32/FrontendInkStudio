"use client";
import React, { useEffect, useRef } from "react";
import type { NextPage } from "next";
import type { ContactContent } from "../../../content/functions/types";
import GoogleMap from "@/components/ui/GoogleMap";
import { btnAccentColors, btnSm, transparentBg } from "@/utils";

const ContactPage: NextPage = () => {
  const contactContent: ContactContent = {
    location: {
      title: "Direccion",
      description: "JUAN RAMIREZ DE VELASCO 781, CABA",
    },
    openingHours: {
      title: "Horarios",
      description: "Lunes a Sábado de 11 a 20 hs",
    },
    phone: {
      title: "Telefono",
      description: "+541122510990  |  46758909 ",
    },
    email: {
      title: "Email",
      description: "info@inkstudio.com ",
    },
    form: {
      namePlaceholder: "Nombre",
      lastNamePlaceHolder: "Apellido",
      emailPlaceholder: "Email",
      phonePlaceholder: "Número de Teléfono",
      messagePlaceholder: "Mensaje",
      sendButton: "Enviar",
      cancelButton: "Cancelar",
    },
  };

  return (
    <div className="min-h-screen p-4 flex justify-center items-center">
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          {/* Mapa e Info */}
          <div className="p-1 rounded-xl bg-gradient-to-t from-primary-fromGradient to-primary-toGradient">
            <div
              className={`flex flex-col md:flex-row justify-between items-start rounded-xl p-4 bg-primary-bgD`}
            >
              <div className="md:w-1/2 mt-16">
                <div className="p-4">
                  <GoogleMap
                    longitude={37.52631462801488}
                    latitude={127.03710345767163}
                  />
                </div>
              </div>

              <div className="md:w-1/2 flex flex-col">
                <div className="p-4">
                  <h2 className="font-bold text-xl mb-2">
                    {contactContent.location.title}
                  </h2>
                  <p className="mb-4 text-pink-600 font-bold">
                    {contactContent.location.description}
                  </p>

                  <h2 className="font-bold text-xl mb-2">
                    {contactContent.openingHours.title}
                  </h2>
                  <p className="mb-4 text-pink-600 font-bold">
                    {contactContent.openingHours.description}
                  </p>

                  <h2 className="font-bold text-xl mb-2">
                    {contactContent.phone.title}
                  </h2>
                  <p className="mb-4 text-pink-600 font-bold">
                    {contactContent.phone.description}
                  </p>

                  <h2 className="font-bold text-xl mb-2">
                    {contactContent.email.title}
                  </h2>
                  <p className="mb-4 text-pink-600 font-bold">
                    {contactContent.email.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}

          <div className="mt-5 p-1 rounded-xl bg-gradient-to-t from-primary-fromGradient to-primary-toGradient">
            <div
              className={`flex flex-col items-center justify-center rounded-xl p-4 bg-primary-bgD`}
            >
              <h1 className="font-bold text-xl mb-4 text-center">Contacto</h1>
              <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="uppercase font-bold w-full"
                      htmlFor="name"
                    >
                      Nombre
                    </label>
                    <input
                      className="p-2 bg-gray-200 rounded-md w-full text-black"
                      id="name"
                      type="text"
                      placeholder={contactContent.form.namePlaceholder}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="uppercase font-bold w-full"
                      htmlFor="lastname"
                    >
                      Apellido
                    </label>
                    <input
                      className="p-2 bg-gray-200 rounded-md w-full text-black focus:bg-white focus:border-gray-500"
                      id="lastname"
                      type="text"
                      placeholder={contactContent.form.lastNamePlaceHolder}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-6">
                    <label
                      className="uppercase font-bold w-full"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="p-2 bg-gray-200 rounded-md w-full text-black focus:bg-white focus:border-gray-500"
                      id="email"
                      type="email"
                      placeholder={contactContent.form.emailPlaceholder}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mt-6">
                    <label
                      className="uppercase font-bold w-full"
                      htmlFor="phone"
                    >
                      Teléfono
                    </label>
                    <input
                      className="p-2 bg-gray-200 rounded-md w-full text-black focus:bg-white focus:border-gray-500"
                      id="phone"
                      type="tel"
                      placeholder={contactContent.form.phonePlaceholder}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    className="uppercase font-bold w-full"
                    htmlFor="message"
                  >
                    Mensaje
                  </label>
                  <textarea
                    className="p-2 bg-gray-200 rounded-md w-full text-black focus:bg-white focus:border-gray-500"
                    id="message"
                    placeholder={contactContent.form.messagePlaceholder}
                  ></textarea>
                </div>
                <p>Tenés un tatuaje para cotizar? leé las {" "} 
                  <a href="/Faq" className="text-blue-600">FAQS
                  </a> 
                  {" "} Adjuntar archivo...</p>
                <br />
                <p>Querés hacer una reserva? {" "} <a href="/reservas" className="text-blue-600">Ir a Reservas</a></p>
                <div className="flex justify-between mt-8 p-8">
                  <button
                    className={`${btnAccentColors} ${btnSm} uppercase font-bold `}
                    type="submit"
                  >
                    {contactContent.form.sendButton}
                  </button>
                  <button
                    className={`${btnAccentColors} ${btnSm} uppercase font-bold `}
                    type="button"
                  >
                    {contactContent.form.cancelButton}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
