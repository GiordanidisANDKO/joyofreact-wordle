import React from "react";

function Banner({ message, mood }) {
  return (
    <div className={`banner ${mood}`}>
      <p dangerouslySetInnerHTML={{ __html: message }} />
    </div>
  );
}

export default Banner;
