import React, { useState } from "react";
/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export const NewPost = () => {
  const categories = [
    { id: 1, Name: "Reactjs" },
    { id: 2, Name: ".Net" },
    { id: 3, Name: "Css" },
  ];
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(
    categories[0].Name || ""
  );

  return (
    <div>
      <form css={styleForm}>
        <label htmlFor="title" css={styleLabel}>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="category" css={styleLabel}>
          Category:
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => {
              return <option value={category.Name}>{category.Name}</option>;
            })}
          </select>
        </label>
        <label htmlFor="content" css={styleLabel}>
          Content:
          <textarea
            value={content}
            cols={100}
            rows={40}
            placeholder="Start writing your content..."
            onChange={(e) => setContent(e.target.value)}
            onBlur={(e) => setContent(e.target.value)}
          />
        </label>

        <button
          //type="button" so it doesn't submit form
          onClick={() => {
            alert(selectedCategory + " " + title + " " + content);
          }}
        >
          Save!
        </button>
      </form>
    </div>
  );
};

const styleForm = css`
  padding: 20px;
`;

const styleLabel = css`
  display: block;
`;
