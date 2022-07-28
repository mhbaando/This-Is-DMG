import { useState } from "react";
import Images from "../../Static";
import Buttons from "../Common/Buttons";

interface Props {
  label: string;
  title: string;
  mainImg: string;
  secImg: string;
  model: string;
  inStock: boolean | string;
  total: string;
  price: number;
}

function Card(props: Props): JSX.Element {
  return (
    <div className="mk__product">
      <div className="label">
        <p>{props.label}</p>
      </div>

      {/* mobile first design */}
      <div className="productDataHolder">
        <div className="productData">
          <div className="mainImg">
            <img src={props.mainImg} alt={props.title} />
          </div>

          <div className="actualData">
            <div className="title">
              <h2>{props.title}</h2>
            </div>

            <div className="datatext">
              <div className="secImage">
                <img src={props.secImg} alt={props.title} />
              </div>

              {/* Data text */}
              <div className="model">
                <p>{props.model}</p>
                <p>SUV</p>
              </div>

              <div className="stock">
                <div className="stockData">
                  <p>Stock</p>
                  <img src={Images.Tick} alt="Green Tick" />
                </div>
                <div className="stockPrice">
                  <p>Price</p>
                  <h3>₪{props.price}</h3>
                </div>
              </div>

              <div className="price">
                <p>Price</p>
                <h3>₪{props.price}</h3>
              </div>

              <div className="total">
                <p>Total</p>
                <h3>₪{props.total}</h3>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <Buttons />
      </div>
    </div>
  );
}
export default Card;
