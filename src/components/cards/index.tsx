import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./styles.css";

const CardUI = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const lastTwoItem = data.slice(-2);

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData(`https://picsum.photos/v2/list/?page=${count}&limit=30`);
  }, [count]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="wrapper">
        {data.map((wallpaper: any) => (
          <Link className="link" to={`/Detail/${wallpaper.id}`}>
            <div className="card">
              <div>
                <img className="image" src={wallpaper.download_url} alt="img" />
              </div>
              <h1>{wallpaper.author}</h1>
              <div>
                <p className="last">
                  {wallpaper.id === lastTwoItem[0] ||
                  wallpaper.id === lastTwoItem[1] ? (
                    <p>{`I am the chosen one ${wallpaper.id}`}</p>
                  ) : null}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="footer">
        <Button onclick={() => setCount(count - 1)} btnText="Prev" />
        <p>{`Page ${count}`}</p>
        <Button onclick={() => setCount(count + 1)} btnText="Next" />
      </div>
    </>
  );
};

export default CardUI;
