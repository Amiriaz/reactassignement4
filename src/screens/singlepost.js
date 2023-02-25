import React from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const params = useParams();
  console.log(params);

  let api = `https://jsonplaceholder.typicode.com/photos/${params.id}`;
  return <div>singlePost</div>;
};

export default SinglePost;