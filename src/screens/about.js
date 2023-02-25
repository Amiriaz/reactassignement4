import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Abouts() {
  let api = "https://www.kindpng.com/picc/m/7-78774_ya-allah-png-transparent-ya-allah-ya-rasool.png";

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
  const moveToSingleAbout = (i) => {
    navigate(`/singleabout/${i}`);
  };

  return (
    <>
        <div onClick={() => moveToSingleAbout()}>
        <img src='https://www.kindpng.com/picc/m/7-78774_ya-allah-png-transparent-ya-allah-ya-rasool.png' width="300px" alt="" />
        <button className="mx-3">Click</button>
        <img src='https://www.kindpng.com/picc/m/7-78774_ya-allah-png-transparent-ya-allah-ya-rasool.png' width="300px" alt="" />
        <button className="mx-3">Click</button>
          <img src='https://www.kindpng.com/picc/m/7-78774_ya-allah-png-transparent-ya-allah-ya-rasool.png' width="300px" alt="" />
          <button className="mx-3">Click</button>
        </div>
    </>
  );
}

export default Abouts;