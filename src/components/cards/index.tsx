import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import DetailedInfo from "../DetailedInfo";
import Button from "../Button";
const Cards = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(1);
  const lastTwoitems: any = data.slice(-2);
  const getData = async (url: string) => {
    try {
      const responseData = await axios.get(url);
      console.log(responseData.data);
      setData(responseData.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    getData(`https://picsum.photos/v2/list?page=${counter}&limit=30`);
  }, [counter]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Router>
        <Switch>
          <Route path="/DetailedInfo/:id" component={DetailedInfo}></Route>
          <Route path="/">
            <div className="wrapper">
              {data.map((wallpaper: any) => (
                <Link to={`/DetailedInfo/${wallpaper.id}`} target="_blank">
                  <div className="card" key={wallpaper.id}>
                    <img
                      src={wallpaper.download_url}
                      alt={wallpaper.id}
                      className="image"
                    />
                    <div>
                      <h2>{wallpaper.author}</h2>
                      <p className="desc">
                        {wallpaper.id === lastTwoitems[0].id ||
                        wallpaper.id === lastTwoitems[1].id ? (
                          <p>{`I am the chosen one ${wallpaper.id}`}</p>
                        ) : (
                          <p></p>
                        )}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="btnSet">
              <Button onclick={() => setCounter(counter - 1)} label={"<"} />
              {counter < 1 ? (
                <div className="pageNo">{1}</div>
              ) : (
                <div className="pageNo">{counter}</div>
              )}
              <Button onclick={() => setCounter(counter + 1)} label={">"} />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Cards;
