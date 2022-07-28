import Card from "./Card";
import "./Products.scss";
import DUMMY_DATA from "./DummyData";

function Products(): JSX.Element {
  return (
    <section className="section">
      <div className="mk__Oproducts container">
        {DUMMY_DATA.map((item, index) => {
          return (
            <Card
              title={item.title}
              Model={item.Model}
              img={item.img}
              price={item.price}
              total={item.total}
              discount={item.discount}
              itemsLef={item.itemsLef}
              inStock={item.inStock}
              icon={item.icon}
            />
          );
        })}
      </div>
    </section>
  );
}
export default Products;
