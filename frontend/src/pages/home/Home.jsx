import "./Home.css";
import HomeForm from "./HomeForm";

function Home() {
  return (
    <div className="home">
      <div className="home-title-container">
        <h1 className="home-title">
          Find a suitable car and rent it as long as you want
        </h1>
        <img
          className="home-title-logo"
          src="../../../public/logo_h2.png"
          alt="logo-title"
        />
      </div>
      <HomeForm />
    </div>
  );
}

export default Home;
