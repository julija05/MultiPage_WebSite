import React from "react";
import Navbar from "../../components/Navbar";
import ImagePreview from "./ImagePreview";
import { useParams } from "react-router-dom";

const Index = () => {
  let { id } = useParams();
  return (
    <div>
      <Navbar />
      <ImagePreview imgId={id} />
    </div>
  );
};

export default Index;
