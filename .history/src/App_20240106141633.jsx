import { Fragment } from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
function App() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Fragment>
      <Header></Header>
      <Banner>
        <HeadPage></HeadPage>
      </Banner>
    </Fragment>
  );
}

export default App;
