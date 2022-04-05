import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "../Button";

type detailedInfo = {
  id: string;
  download_url: string;
  data: any;
  author: string;
  label: string;
  height: string;
  width: string;
};
const DetailedInfo = () => {
  const [data, setData] = useState({} as detailedInfo);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<detailedInfo>();
  const history = useHistory();

  const fetchData = async (url: string) => {
    try {
      const response: any = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(`https://picsum.photos/id/${id}/info`);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper">
      <div className="imageWrapper">
        <img className="image" src={data.download_url} alt="img" />
        <p>{`Author : ${data.author}`}</p>
        <p>{`width : ${data.width}`}</p>
        <p>{`height : ${data.height}`}</p>
        {/* {console.log(data)} */}
        <Button onclick={() => history.goBack()} btnText="Back" />
      </div>
    </div>
  );
};

export default DetailedInfo;
