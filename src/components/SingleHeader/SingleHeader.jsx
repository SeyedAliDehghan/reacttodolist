import { useContext } from "react";
import { ItemFilterContext } from "..";
import { Link } from "react-router-dom";

const SingleHeader = ({ todoName }) => {

  return (
    <div className="mb-4 mt-4">
      <h1 style={{ color:"#617585",display: "inline-block", width: "50%" }}>{todoName}</h1>
      <Link to="/">
        <h2
          style={{
            color:"#617585",
            display: "inline-block",
            width: "50%",
            textAlign: "right",
          }}
        >
          Back
        </h2>
      </Link>
    </div>
  );
};

export default SingleHeader;
