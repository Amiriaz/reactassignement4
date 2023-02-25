import React from "react";
import { useParams } from "react-router-dom";

const SingleAbout = () => {
  const params = useParams();
  let api = `https://www.kindpng.com/picc/m/7-78774_ya-allah-png-transparent-ya-allah-ya-rasool.png/${params}`;
  return <div className="py-5">
          <img className="mx-2" src='https://www.kindpng.com/picc/m/7-78774_ya-allah-png-transparent-ya-allah-ya-rasool.png' width="300px" alt="" />
          <img className="mx-2" src='https://www.kindpng.com/picc/m/7-78774_ya-allah-png-transparent-ya-allah-ya-rasool.png' width="300px" alt="" />
          <img className="mx-2" src='https://www.kindpng.com/picc/m/7-78774_ya-allah-png-transparent-ya-allah-ya-rasool.png' width="300px" alt="" />
    </div>;
};

export default SingleAbout;