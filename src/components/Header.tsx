import React, { FunctionComponent } from "react";
/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import josepLogo from "../assets/img/josepLogo.svg";

export const Header: FunctionComponent = () => {
  return (
    <div css={styleContainer}>
      <img src={josepLogo} alt="Josep's Notes" />
    </div>
  );
};

const styleContainer = css`
  padding-top: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const styleHeader = css``;
