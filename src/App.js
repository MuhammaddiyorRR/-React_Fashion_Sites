import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Service from "./components/service/service";
import Trending from "./components/trending/trending";
import Arrival from "./components/new_arrival/new_arrival";
import BestSelling from "./components/best_selling/best_selling";
import Featured from "./components/featured/featured";
import TrendingNews from "./components/trending_news/trending_news";
import Footer from "./components/footer/footer";
import Lagenlook from "./components/lagenlook/lagenlook";

export default class App extends Navbar {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Service />
        <div className="container">

        <Trending />
        <Arrival/>
        <BestSelling />
        <Lagenlook />
        <Featured />
        <TrendingNews />
        </div>
        <Footer />

      </div>
    );
  }
}
