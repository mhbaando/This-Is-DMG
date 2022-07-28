import {
  Nav,
  Title,
  Filters,
  ProductSlider,
  Products,
  LoadMore,
} from "./Components";
function App() {
  return (
    <>
      <nav>
        <Nav />
        <Title />
        <Filters />
        <ProductSlider />
        <Products />
        <LoadMore />
      </nav>
    </>
  );
}

export default App;
