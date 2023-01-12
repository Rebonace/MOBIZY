import Header from "@components/Header";
import "../../services/style/Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home-title-container">
        <h1 className="home-title">
          Rent a suitable car and rent it as long as you want
        </h1>
        <img
          className="home-title-logo"
          src="../../../public/logo_h2.png"
          alt="logo-title"
        />
      </div>
    </div>
  );
}

export default Home;
