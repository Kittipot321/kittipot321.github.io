import { useTranslation } from "react-i18next";
import IconImg from "./IconImg";
import logoTH from "../../assets/icon/thai_icon.png";
import logoEN from "../../assets/icon/usa_icon.png";

export default function SwitchLanguages() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="flex justify-center">
      {i18n.language === "th" ? (
        <div
          onClick={() => changeLanguage("en")}
          className="transition inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg"
        >
          <IconImg src={logoTH} alt="thailand flag" className="w-10 h-10" />
        </div>
      ) : (
        <div
          onClick={() => changeLanguage("th")}
          className="transition inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg"
        >
          <IconImg src={logoEN} alt="usa flag" className="w-10 h-10" />
        </div>
      )}
    </div>
  );
}
