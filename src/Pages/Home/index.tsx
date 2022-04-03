import Cards from "../../components/cards";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Wallpaper List</h2>
      <Cards />
    </div>
  );
};

export default Home;
