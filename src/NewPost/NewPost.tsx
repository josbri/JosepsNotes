import React, { useState } from "react";
/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const NewPost = () => {
  const categories = [
    { Id: 1, Name: "Reactjs" },
    { Id: 2, Name: ".Net" },
    { Id: 3, Name: "Css" },
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
              return (
                <option value={category.Name} key={category.Id}>
                  {category.Name}
                </option>
              );
            })}
          </select>
        </label>
        <div>
          <ReactQuill
            modules={quillModules}
            theme="snow"
            value={content}
            onChange={setContent}
            css={styleQuill}
          />
        </div>
        <div>
          <button
            //type="button" so it doesn't submit form
            onClick={() => {
              alert(selectedCategory + " " + title + " " + content);
            }}
          >
            Save!
          </button>
        </div>
      </form>
    </div>
  );
};

const quillModules = {
  toolbar: [
    ["bold", "italic", "underline", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    ["clean"],
    ["code-block"],
  ],
  syntax: {
    highlight: (text: any) => hljs.highlightAuto(text).value,
  },
};
const styleForm = css`
  padding: 20px;
  width: 100%;
`;

const styleLabel = css`
  display: block;
`;

const styleQuill = css`
  width: 100%;
`;
