import { HalfCircleSpinner } from "react-epic-spinners";
import { primaryColor } from "theme/themeConfig";

const Spinner = ({ size = 40, showText = false }) => {
  return (
    <div className="my-4 flex justify-center flex-col items-center">
      <HalfCircleSpinner color={primaryColor} size={size} />
      {showText && (
        <p className="text-primary text-xl font-semibold ">Loading...</p>
      )}
    </div>
  );
};

export default Spinner;
