import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Posts() {
  let api = "https://jsonplaceholder.typicode.com/photos";

  const [listData, setListData] = useState([]);
  let getData = () => {
    axios
      .get(api)
      .then((res) => {
        console.log(res);
        setListData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();
  const moveToSinglePost = (i) => {
    navigate(`/singlepost/${i}`);
  };

  return (
    <>
      <button className="fs-5 bg-info">Posts Images Data 500</button>
      {listData.map((x, i) => (
        <div onClick={() => moveToSinglePost(x.id)}>
          <p>{x.title}</p>
          <img src={x.thumbnailUrl} width="100px" alt="" />
          <button className="mx-3">Amir</button>
        </div>
      ))}
    </>
  );
}

export default Posts;