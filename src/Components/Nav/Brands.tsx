import Images from "../../Static";

function Brand(): JSX.Element {
  return (
    <div className="kt__brand">
      <div className="kt__settingicon">
        <img src={Images.SettingIcon} alt="Setting Icon" />
      </div>
      <div className="kt__logo">
        <img src={Images.Logo} alt="Logo Icon" />
      </div>
    </div>
  );
}

export default Brand;
