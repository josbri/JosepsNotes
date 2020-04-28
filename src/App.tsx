import React from "react";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { Searchbar } from "./components/Searchbar";

function App() {
  return (
    <div className="App" css={styleMain}>
      <div css={styleHeader}>
        <Header />
      </div>
      <div css={styleMid}>
        <Searchbar />
      </div>
      <div css={styleCards}>
        <Card />
      </div>
    </div>
  );
}
export default App;

const styleMain = css`
  display: grid;
  height: 100vh;
  grid-template-columns: 90px auto 90px;
  grid-template-rows: 150px 100px auto;
  gap: 15px 10px;
`;

const styleHeader = css`
  grid-column: 2;
  grid-row: 1;
`;
const styleMid = css`
  grid-column: 2;
  grid-row: 2;
`;
const styleCards = css`
  grid-column: 2;
  grid-row: 3;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
