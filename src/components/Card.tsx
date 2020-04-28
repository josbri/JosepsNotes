import React, { FunctionComponent } from "react";
/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import reactLogo from "../assets/img/reactLogo.svg";
import netLogo from "../assets/img/netLogo.svg";
interface Iprops {}

export const Card: FunctionComponent<Iprops> = (props) => {
  return (
    <div id="card" css={styleContainer}>
      <img src={reactLogo} alt="reactIcon"></img>
      <h1 css={styleText}> Reactjs </h1>
    </div>
  );
};

const styleContainer = css`
  display: block;
  /*background-color: #208756;*/
  background-color: #333; /*#2b2d2f;*/
  width: 200px;
  height: 200px;
  padding: 10px;
  text-align: center;
  -webkit-box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
`;
const styleText = css`
  margin-bottom: 20;
  color: #fbf9c6;
  -webkit-text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.8);
  -moz-text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.8);
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.8);
`;
