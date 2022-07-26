import { useState } from "react";
import Images from "../../Static";
import "./Filters.scss";

function Filters(): JSX.Element {
  const options = [
    "Popularity",
    "Lowest Price",
    "Most Stock",
    "Model A-Z",
    "Code No.",
  ];

  const [selected, setSelectd] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const mk__headerStyle = {
    backgroundColor: `${isOpen ? "white" : "transparent"}`,
    borderRadius: `${isOpen ? "0px" : "116px"}`,
    border: `${isOpen ? "0" : "0.5px solid #000"}`,
  };

  const imgStyle = {
    transform: `${isOpen ? " rotate(180deg)" : "rotate(0deg)"}`,
  };

  const dropDownListStyle = {
    transform: `${isOpen ? "scaleY(1)" : "scaleY(0)"}`,
    opacity: `${isOpen ? "1" : "0"}`,
  };

  return (
    <section className="section">
      <div className="mk__filters container">
        <div className="mk__slectedFilters">
          <form>
            <label htmlFor="filters">Selected Filters: &nbsp;</label>
            <input id="filters" value="Continental" />
            <img src={Images.CancelBtn} alt="Cancel Btn" />
          </form>
        </div>

        {/* dropDown */}
        <div className="mk__dropDown">
          <div className="mk__DropHeader">
            <p>Sort by: &nbsp;</p>
            <div
              className="mk__dropDownHeader"
              onClick={() => setIsOpen(!isOpen)}
              style={mk__headerStyle}
            >
              <p>{selected}</p>
              <img src={Images.ArrowUp} alt="Arrow Up" style={imgStyle} />
            </div>
          </div>
          <div className="mk__drobDownList" style={dropDownListStyle}>
            <ul>
              {options.map((option, index) => {
                return (
                  option !== selected && (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectd(option);
                        setIsOpen(!isOpen);
                      }}
                    >
                      {option}
                    </li>
                  )
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Filters;
