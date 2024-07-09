import React from "react";
import { UsersIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { socials } from "../data/socials_data";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

export default function Socials() {
  const { t } = useTranslation();
  return (
    <section id="social" style={{ scrollMarginTop: "100px" }}>
      <div className="container-fluid px-5 py-10 mx-auto text-center bg-gray-900">
        <div className="flex flex-col w-full mb-20">
          <UsersIcon className="mx-auto w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            {t("social.header")}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {t("social.subtitle")}
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <Fade>
            {socials.map((social) => (
              <a
                href={social.href}
                key={social.name}
                className="p-2 sm:w-1/2 w-full"
              >
                <div className="bg-gray-800 rounded flex p-4 h-full items-center justify-between  rounded-full">
                  <span className="title-font font-medium text-white">
                    {social.name}
                  </span>
                  <ArrowRightIcon className="text-green-400 ml-2 -mr-1 w-5 h-5" />
                </div>
              </a>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
}
