import React, { useState } from "react";

const Component = (props) => {
  const [expand, setExpand] = useState(false);

  return (
    <div style={{ textAlign: "left", marginLeft: "10px" }}>
      {props.item.children?.length ? (
        <>
          →
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {props.item.text}
          </span>
          {expand &&
            props.item.children?.map((item) => {
              return <Component key={item.id} item={item}></Component>;
            })}
        </>
      ) : (
        <span>{props.item.text}</span>
      )}
    </div>
  );
};

export default Component;
