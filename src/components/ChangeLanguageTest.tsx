import { useChangeLanguage } from "hooks/useChangeLanguage";

export const ChangeLanguageTest = () => {
  const { changeLanguage } = useChangeLanguage();

  return (
    <div className="App">
      <button
        className="btn btn-primary m-1"
        onClick={() => changeLanguage("en")}
      >
        English
      </button>
      <button
        className="btn btn-secondary m-1"
        onClick={() => changeLanguage("fr")}
      >
        French
      </button>
    </div>
  );
};
