// Resuable Elements
// for desktop ,Tablet,& Mobile

interface Title {
  title: string;
}
export const Title = (props: Title): JSX.Element => {
  return (
    <div className="title">
      <h2>
        {props.title.split(" ")[0]}
        <br></br> {props.title.split(" ")[1]}
      </h2>
    </div>
  );
};

// OE Logo
interface OE {
  img: string;
}
export const OeLogo = (props: OE): JSX.Element => {
  return (
    <div className="oeLogo">
      <img src={props.img} alt="OE Logo" />
    </div>
  );
};

// Stock Element
interface stck {
  itemsLef: string | undefined;
  icon: string;
  place?: string;
}
export const Stock = (props: stck): JSX.Element => {
  let flexDirecton = {};

  const direction = (): void => {
    if (props.place === "Desktop") {
      flexDirecton = {
        flexDirecton: "null",
      };
    }
    if (props.itemsLef) {
      flexDirecton = {
        flexDirecton: "row",
      };
    }
    flexDirecton = {
      flexDirecton: "column",
    };
  };

  direction();

  return (
    <div className="stock">
      <div style={flexDirecton}>
        <p>Stock</p>
        <img src={props.icon} alt="Stock icon" />
      </div>
      {props.itemsLef && <p>{props.itemsLef}</p>}
    </div>
  );
};

// Model
interface mdl {
  Model: string;
}
export const Model = (props: mdl): JSX.Element => {
  return (
    <div className="model">
      <p>{props.Model}</p>
      <p>SUV</p>
    </div>
  );
};

// Price
interface prc {
  price: string;
}
export const Price = (props: prc): JSX.Element => {
  return (
    <div className="price">
      <p>Price</p>
      <h2>{props.price}</h2>
    </div>
  );
};

// Total
interface ttl {
  total: string;
  discount: string;
}
export const Total = (props: ttl) => {
  return (
    <div className="total">
      <p>
        Total <span>{props.total}</span>
      </p>
      <p>{props.discount}</p>
    </div>
  );
};
