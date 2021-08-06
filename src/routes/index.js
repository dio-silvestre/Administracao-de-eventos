import { Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Graduation from "../pages/graduation";
import Wedding from "../pages/wedding";
import Celebration from "../pages/celebration";
import BeersList from "../pages/beersList";
import Beer from "../pages/beer";
import { useEffect, useState } from "react";
import axios from "axios";

const Routes = () => {
  const [drinks, setDrinks] = useState([]);
  const [page, setPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  useEffect(() => {
    const perPage = windowWidth < 900 ? 4 : windowWidth < 1200 ? 8 : 16;
    axios
      .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`)
      .then((response) => setDrinks(response.data))
      .catch((err) => console.log(err));
  }, [page, windowWidth]);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/beers">
        <BeersList drinks={drinks} page={page} setPage={setPage} />
      </Route>
      <Route path="/beer/:name">
        <Beer drinks={drinks} />
      </Route>
      <Route path="/graduation">
        <Graduation />
      </Route>
      <Route path="/wedding">
        <Wedding />
      </Route>
      <Route path="/celebration">
        <Celebration />
      </Route>
    </Switch>
  );
};

export default Routes;
