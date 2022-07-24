import Images from "../../Static";
function LeftButtons(): JSX.Element {
  return (
    <div className="mk__leftbuttons">
      <button className="mk__acount">
        <img src={Images.UserIcon} alt="User Account Icon" />
      </button>
      <button className="mk__order">
        <img src={Images.OrderIcon} alt="Order Icon" />
      </button>
      <button className="mk__cart">
        <img src={Images.Cart} alt="Nav Cart Icon" />
      </button>
    </div>
  );
}

export default LeftButtons;
