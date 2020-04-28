import React, { FunctionComponent, useState } from "react";
/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export const Searchbar: FunctionComponent = () => {
  const [search, setSearch] = useState("");
  return (
    <div css={styleContainer}>
      <form>
        <label htmlFor="search">
          <input
            id="search"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            onBlur={(e) => setSearch(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

const styleContainer = css``;
