import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const param = useParams();
  console.log(param.id);
  return (
    <main>
      <div className="component">ProductDetail: {param.id}</div>;
    </main>
  );
};

// export default ProductDetail
