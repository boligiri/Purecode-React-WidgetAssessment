import { a } from "react-router-dom";
import { LuPlus } from "react-icons/lu";

const GoToAddButton = ({ buttonText, buttonLink }) => {
  return (
    <a
      to={buttonLink}
      className="inline-flex rounded-md bg-primary px-6 py-2.5 text-sm text-white hover:bg-primary-500 "
    >
      <LuPlus size={20} className="me-2 inline-flex align-middle" />
      {buttonText}
    </a>
  );
};

export default GoToAddButton;
