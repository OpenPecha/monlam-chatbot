import addNew from "../assets/icons/add-new.png";
import moon from "../assets/icons/moon.png";
import sun from "../assets/icons/sun.png";
import loadingSpinner from "../assets/icons/loading-spinner.svg";
import IconBotIcon from "../assets/icons/iconBot.png";
export const PlusIcon = () => (
  <img
    src={addNew}
    alt="Add New"
    style={{ position: "relative", top: "2px", width: "30px" }}
  />
);

export const IconBot = () => (
  <img
    src={IconBotIcon}
    alt="IconBot"
    style={{
      width: "50px",
      position: "relative",
      top: "10px",
      marginRight: "8px",
    }}
  />
);

export const MoonIcon = () => (
  <img
    src={moon}
    alt="Dark Mode"
    style={{ position: "relative", top: "2px", width: "30px" }}
  />
);

export const SunIcon = () => (
  <img
    src={sun}
    alt="Light Mode"
    style={{ position: "relative", top: "2px", width: "30px" }}
  />
);

export const LoadingSpinner = () => (
  <img src={loadingSpinner} alt="Loading..." />
);
