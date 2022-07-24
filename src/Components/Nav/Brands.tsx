import { useState, useEffect } from "react";
import Images from "../../Static";

function Brand(): JSX.Element {
  const [windowSize, setWindowSize] = useState<Number>();

  useEffect(() => {
    // extract the width from the window
    const { innerWidth } = window;
    function handleWindowResize() {
      setWindowSize(innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);

    // clean up function
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return (
    <div className="mk__brand">
      <div className="mk__settingicon">
        <img src={Images.SettingIcon} alt="Setting Icon" />
      </div>
      <div className="mk__logo">
        <img
          src={windowSize! > 850 ? Images.Logo : Images.ShortLogo}
          alt="Logo Icon"
        />
      </div>
    </div>
  );
}

export default Brand;
