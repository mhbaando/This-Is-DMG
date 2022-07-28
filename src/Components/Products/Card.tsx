import Buttons from "../Common/Buttons";
import Desktop from "./Desktop";
import { Title, OeLogo, Stock, Model, Price, Total } from "./Extra";

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
function Card(props: Props): JSX.Element {
  return (
    <>
      <div className="mk__Oproduct">
        <div className="OproductData">
          <div className="left">
            <Title title={props.title} />
            <OeLogo img={props.img} />
            <Stock itemsLef={props.itemsLef} icon={props.icon} />
          </div>

          <div className="right">
            <Model Model={props.Model} />
            <Price price={props.price} />
            <Total total={props.total} discount={props.discount} />
          </div>
        </div>
        <Buttons />
      </div>
    </>
  );
}

export default Card;
