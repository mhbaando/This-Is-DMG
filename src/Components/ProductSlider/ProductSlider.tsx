import { useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";
import Card from "./Card";
import Images from "../../Static";
import "./ProductSlider.scss";

const DUMMY_DATA = [
  {
    label: "Premium Bestseller",
    title: "Continental - Contiecocantac 5",
    mainImg: Images.Tire,
    secImg: Images.OELogo,
    model: "205/55 R16 H",
    inStock: true,
    total: "1,360",
    price: 340,
  },
  {
    label: "Economy Bestseller",
    title: "Continental - Contiecocantac 5",
    mainImg: Images.Tire,
    secImg: Images.OELogo,
    model: "205/55 R16 H",
    inStock: true,
    total: "1,360",
    price: 340,
  },
];

function ProductSlider(): JSX.Element {
  const ref = useRef<null | HTMLDivElement>(null);
  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });

  return (
    <section className="section">
      <div
        className="mk__products container"
        ref={ref}
        onMouseDown={() => onmousedown}
      >
        {DUMMY_DATA.map((item, index) => {
          return (
            <Card
              key={index}
              label={item.label}
              title={item.title}
              mainImg={item.mainImg}
              secImg={item.secImg}
              model={item.model}
              inStock={item.inStock}
              total={item.total}
              price={item.price}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProductSlider;
