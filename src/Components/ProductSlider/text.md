import { useState } from "react";
import Images from "../../Static";

interface Props {
label: string;
title: string;
mainImg: string;
secImg: string;
model: string;
inStock: boolean | string;
total: number;
price: number;
}

function Card(props: Props): JSX.Element {
const [value, setValue] = useState(0);

const minusHandle = () => {
if (value > 0) setValue((prev) => prev - 1);
return;
};

const plusHandle = () => {
setValue((prev) => prev + 1);
};

return (

<div className="mk__product">
<div className="label">
<p>{props.label}</p>
</div>

      <div className="productDataHolder">
        {/* main Image */}
        <div className="mainImage">
          <img src={props.mainImg} alt={props.title} />
        </div>

        {/* product Data */}
        <div className="productData">
          <h1>{props.title}</h1>

          <div className="dataText">
            <div className="secImage">
              <img src={props.secImg} alt={props.title} />
            </div>

            <div className="model">
              <p>{props.model}</p>
              <p>SUV</p>
            </div>

            <div className="stock">
              {props.inStock ? <p>Stock &nbsp; ✅ </p> : <p></p>}
              <p>
                Price &nbsp;<h3>₪{props.price}</h3>
              </p>
            </div>

            <div className="total">
              <p>Total</p>
              <h3>₪{props.total}</h3>
            </div>
          </div>

          {/* buttom buttons */}
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
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

);
}
export default Card;

## css

@import "../../scss/variables", "../../scss/mixins";

.mk\_\_products {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1;
grid-gap: 17px;

margin-top: 24px !important;
}

.mk\_\_product {
@include flex(space-between, flex-start, column);

position: relative;
background-color: $white;

box-shadow: 1px 1px 20px $shadow0;
}

.label {
position: absolute;
top: -5%;
left: 0%;

padding: 5px 24px;
background-color: $orange;

p {
@include font(16px, bold, 21px);
}
}

.productDataHolder {
@include flex(space-between, flex-start);
padding: 40px 20px;
width: 100%;

.mainImage {
flex: 1;
max-width: 205px;
max-height: 205px;

    img {
      width: 100%;
      height: 100%;
    }

}
}

.productData {
flex: 2;
@include flex(space-between, flex-start, column);

// Title
h1 {
@include font(20px, bold);
text-decoration: underline;
}

.dataText {
display: grid;
grid-template-columns: 1fr 1.5fr 1.5fr 1fr;

    grid-template-rows: 1fr;
    grid-gap: 10px;

    width: 100%;
    margin-top: 25px;
    margin-bottom: 25px;

    .secImage {
      width: 100px;

      img {
        width: 100%;
      }
    }

    // Text Data
    .model,
    .stock,
    .total {
      p {
        &:first-child {
          @include font(19px);

          margin-bottom: 15px;
          line-height: 21px;
        }

        @include font(17px, bold);
      }
      h3 {
        @include font(19px);
      }
    }

    .stock {
      p {
        @include flex(flex-start, center);
        &:last-child {
          @include font(19px);
        }
        h3 {
          @include font(19px);
        }
      }
    }

}

.buttons {
width: 100%;
@include flex(space-between, center);

    .plusMinusBtn {
      button {
        width: 40px;
        height: 40px;

        cursor: pointer;
        outline: none;

        border: 0.5px solid $gray3;
        background-color: transparent;

        @include font(20px, regular);
      }

      input {
        width: 40px;
        height: 40px;

        @include font(22px);
        text-align: center;
        background-color: $gray1;

        border: none;
        outline: none;

        &:focus {
          outline: none;
        }
      }
    }
    // add to cart button
    .addToCart {
      button {
        @include flex(space-between, flex-end);
        @include font(17px, bold);

        cursor: pointer;
        background-color: $orange;

        padding: 11px 17px;
        border-radius: 48px;

        border: none;
        outline: none;

        img {
          margin-right: 5px;
        }
      }
    }

}
}
