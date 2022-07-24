import Images from "../../Static";
function LeftButtons(): JSX.Element {
  return (
    <div className="mk__leftbuttons">
      <button className="mk__acount">
        <img src={Images.UserIcon} alt="User Account Icon" />
        <p>Account</p>
      </button>
      <button className="mk__order">
        <img src={Images.OrderIcon} alt="Order Icon" />
        <p>Orders</p>
      </button>
      <button className="mk__cart">
        <img src={Images.Cart} alt="Nav Cart Icon" />
        <p>Cart</p>
      </button>
    </div>
  );
}

export default LeftButtons;
