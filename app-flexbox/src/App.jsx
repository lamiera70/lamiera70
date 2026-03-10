import "./App.css";
import { useState } from "react";
import Box from "./components/Box";
import Button from "./components/Button";

function App() {
  const [direction, setDirection] = useState("column");
  const [justify, setJustify] = useState("center");
  const [alignItem, setAlignItem] = useState("center");
  const [wrap, setWrap] = useState("nowrap");
  const [alignContent, setAlignContent] = useState("center");
  const [count, setCount] = useState(5);

  const wrapStatus = wrap === "wrap";

  function handleChangeCountUp() {
    if (count < 30) {
      setCount(count + 1);
    }
  }

  function handleChangeCountDown() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className="container-header">
        <div className="container-radio">
          <span>Quantità BOX</span>
          <span><Button text={"➖"} handleClick={handleChangeCountDown} /></span>
          <span><Box text={count} minWidth={5} /></span>
          <span><Button text={"➕"} handleClick={handleChangeCountUp} /></span>
        </div>

        {wrapStatus ? (
          <div className="container-radio">
            <div>
              <span>Direzione</span>
              <select
                value={direction}
                onChange={(e) => {
                  setDirection(e.target.value);
                }}
              >
                <option value="row">orizzontale</option>
                <option value="column">verticale</option>
              </select>
            </div>

            <div>
              <span>
                {direction === "row"
                  ? "Allinea orizzontale"
                  : "Allinea verticale"}
              </span>
              <select
                value={justify}
                onChange={(e) => {
                  setJustify(e.target.value);
                }}
              >
                <option value="flex-start">inizio</option>
                <option value="center">centro</option>
                <option value="flex-end">fine</option>
                <option value="space-around">spazio intorno</option>
                <option value="space-between">spazio tra</option>
                <option value="space-evenly">spazio uniforme</option>
              </select>
            </div>

            <div>
              <span>Ritorno a capo</span>
              <select
                value={wrap}
                onChange={(e) => {
                  setWrap(e.target.value);
                }}
              >
                <option value="wrap">si</option>
                <option value="nowrap">no</option>
              </select>
            </div>

            <div>
              <span>
                allinea verticale
                <br /> con a capo{" "}
              </span>
              <select
                value={alignContent}
                onChange={(e) => {
                  setAlignContent(e.target.value);
                }}
              >
                <option value="flex-start">inizio</option>
                <option value="center">centro</option>
                <option value="flex-end">fine</option>
                <option value="space-around">spazio intorno</option>
                <option value="space-between">spazio tra</option>
                <option value="space-evenly">spazio uniforme</option>
              </select>
            </div>
          </div>
        ) : (
          <div className="container-radio">
            <div>
              <span>Direzione</span>
              <select
                value={direction}
                onChange={(e) => {
                  setDirection(e.target.value);
                }}
              >
                <option value="row">orizzontale</option>
                <option value="column">verticale</option>
              </select>
            </div>

            <div>
              <span>
                {direction === "row"
                  ? "Allinea orizzontale"
                  : "Allinea verticale"}
              </span>
              <select
                value={justify}
                onChange={(e) => {
                  setJustify(e.target.value);
                }}
              >
                <option value="flex-start">inizio</option>
                <option value="center">centro</option>
                <option value="flex-end">fine</option>
                <option value="space-around">spazio intorno</option>
                <option value="space-between">spazio tra</option>
                <option value="space-evenly">spazio uniforme</option>
              </select>
            </div>

            <div>
              <span>
                {direction === "row"
                  ? "Allinea verticale"
                  : "Allinea orizzontale"}
              </span>
              <select
                value={alignItem}
                onChange={(e) => {
                  setAlignItem(e.target.value);
                }}
              >
                <option value="flex-start">inizio</option>
                <option value="center">centro</option>
                <option value="flex-end">fine</option>
                <option value="stretch">estendi</option>
              </select>
            </div>

            <div>
              <span>ritorno a capo</span>
              <select
                value={wrap}
                onChange={(e) => {
                  setWrap(e.target.value);
                }}
              >
                <option value="wrap">si</option>
                <option value="nowrap">no</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <div
        className="container-box"
        style={{
          display: "flex",
          flexDirection: direction,
          justifyContent: justify,
          alignItems: alignItem,
          flexWrap: wrap,
          alignContent: alignContent,
        }}
      >
        {Array.from({ length: count }).map((_, i) => (
          <Box key={i} text={`Box ${i + 1}`} minWidth={60} />
        ))}
      </div>
      <div className="container-footer">
        <div>
          <span>.container {"{"}</span>
        </div>

        <div>
          <span>display:</span> flex;
        </div>

        <div>
          <span>flex-direction:</span> {direction};
        </div>

        <div>
          <span>justify-content:</span> {justify};
        </div>

        {!wrapStatus && (
          <div>
            <span>align-items:</span> {alignItem};
          </div>
        )}

        {wrapStatus && (
          <>
            <div>
              <span>flex-wrap:</span> {wrap};
            </div>

            <div>
              <span>align-content:</span> {alignContent};
            </div>
          </>
        )}

        <div>
          <span>{"}"}</span>
        </div>
      </div>
    </>
  );
}

export default App;
