import { useState } from "react";
import Images from "../../Static";
import { Title, OeLogo, Stock, Model, Price, Total } from "./Extra";
import "./Desktop.scss";

interface Props {
  title: string;
  Model: string;
  img: string;
  price: string;
  total: string;
  discount: string;
  itemsLef: string | undefined;
  inStock: boolean;
  icon: string;
}

function Desktop(props: Props): JSX.Element {
  const [value, setValue] = useState(0);

  const minusHandle = () => {
    if (value > 0) setValue((prev) => prev - 1);
    return;
  };

  const plusHandle = () => {
    setValue((prev) => prev + 1);
  };
  return (
    <div className="mk__DProducts">
      <Title title={props.title} />

      {/* OELogo */}
      <OeLogo img={props.img} />

      {/* Model */}
      <Model Model={props.Model} />

      {/* Stock */}
      <Stock itemsLef={props.itemsLef} icon={props.icon} place="Desktop" />

      {/* price */}
      <Price price={props.price} />

      {/* MinusPlus Button */}
      <div className="plusMinusBtn">
        <button type="button" onClick={minusHandle}>
          -
        </button>
        <input type="text" value={value} />
        <button type="button" onClick={plusHandle}>
          +
        </button>
      </div>

      {/* total */}
      <Total total={props.total} discount={props.discount} />

      {/* Cart */}
      <div className="addToCart">
        <button type="button">
          <img src={Images.CartBlack} alt="Cart Icon" />
          <p>Add To Cart</p>
        </button>
      </div>
    </div>
  );
}

export default Desktop;
