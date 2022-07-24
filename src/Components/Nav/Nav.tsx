import Brand from "./Brands";
import Search from "./Search";
import LeftButtons from "./LeftButtons";
import "./Nav.scss";
function Nav(): JSX.Element {
  return (
    <section className="mk__navHolder">
      <div className="mk__nav container">
        <Brand />
        <Search />
        <LeftButtons />
      </div>
    </section>
  );
}

export default Nav;
