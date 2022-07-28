import { useState } from "react";
import Images from "../../Static";
import "./Buttons.scss";

function Buttons(): JSX.Element {
  const [value, setValue] = useState(0);

  const minusHandle = () => {
    if (value > 0) setValue((prev) => prev - 1);
    return;
  };

  const plusHandle = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <>
      <div className="buttons">
        <div className="plusMinusBtn">
          <button type="button" onClick={minusHandle}>
            -
          </button>
          <input type="text" value={value} />
          <button type="button" onClick={plusHandle}>
            +
          </button>
        </div>

        {/* add to cart buttons */}
        <div className="addToCart">
          <button type="button">
            <img src={Images.CartBlack} alt="Cart Icon" />
            <p>Add To Cart</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Buttons;
