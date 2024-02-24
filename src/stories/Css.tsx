import React from "react";
export const Css = () => {
  return (
    <div style={{ border: "1px solid black" }}>
      <style>
        {`

        .margin-start {
          margin-left: 20px;
        }
        [dir=rtl] .margin-start {
          margin-left: unset;
          margin-right: 20px;
        }

        .display-dir::before {
          content: 'Direction: LRT';
        }
        [dir=rtl] .display-dir::before {
          content: 'Direction: RTL';
        }
        `}
      </style>
      <p
        style={{
          marginInlineStart: "20px",
          border: "1px solid black",
        }}
      >
        This element has start margin{" "}
        <code>{`{ marginInlineStart: "20px" }`}</code>
      </p>
      <div className="margin-start" style={{ border: "1px solid black" }}>
        <p>This element has margin set based on the Dir value</p>
        <div>
          <code>
            {`.margin-start {
              margin-left: 20px
            }
            [dir=rtl] .margin-start {
              margin-right: 20px
            }`}
          </code>
        </div>
      </div>
      <p
        style={{
          marginInlineStart: "20px",
          border: "1px solid black",
        }}
      >
        This element has different content based on the value of dir
        <div className="display-dir"></div>
      </p>
    </div>
  );
};
