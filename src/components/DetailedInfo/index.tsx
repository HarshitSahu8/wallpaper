import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./styles.css";
import { useHistory } from "react-router-dom";
import Button from "../Button";

type responseData = {
  id: string;
  author: string;
  url: string;
  download_url: string;
  width: number;
  height: number;
};

function DetailedInfo() {
  const history = useHistory();
  const [data, setData] = useState({} as responseData);
  const { id }: any = useParams();
  const getData = async (url: string) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(`https://picsum.photos/id/${id}/info`);
  }, [id]);

  return (
    <>
      <div className="wrapper">
        <div className="imageWrapper">
          <img src={data.download_url} alt="" className="image" />

          <div style={{}}>
            <p>
              <b>Author:</b> {data.author}
            </p>
            <p>
              <b>width:</b> {data.width}
            </p>
            <p>
              <b>height:</b> {data.height}
            </p>
          </div>
          <Button onclick={() => history.goBack()} label="Go Back" />
        </div>
      </div>
    </>
  );
}

export default DetailedInfo;
