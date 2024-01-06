import { Fragment } from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Fragment>
      <Header></Header>
      <Banner>
        <HomePage></HomePage>
      </Banner>
    </Fragment>
  );
}

export default App;
