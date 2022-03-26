import { useState } from "react";
import "./App.css";
import BoxFollowers from "./components/BoxFollowers.js";
import BoxOverviews from "./components/BoxOverviews.js";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDark = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "AppContainerDark" : "AppContainer"}>
      <div className="header-container">
        <h2>Social Media Dashboard</h2>
        <div className="slider-container">
          Dark Mode
          <div className="slider" onClick={handleDark}>
            <div
              className={darkMode ? "slider-inner-left" : "slider-inner-right"}
            ></div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="App">
        <BoxFollowers
          classContainer={darkMode ? "card-container dark" : "card-container"}
          icon="https://res.cloudinary.com/dvxgriyni/image/upload/v1648322148/instagram-2-1-logo-svgrepo-com_uakm8u.svg"
          username="soydrossrotzank"
          followers="2820314"
          classFollower="greenUp"
          iconGained="fa fa-caret-up"
          followersGained="2309"
        />
        <BoxFollowers
          classContainer={darkMode ? "card-container dark" : "card-container"}
          icon="https://res.cloudinary.com/dvxgriyni/image/upload/v1648322176/twitter-svgrepo-com_jqcnsx.svg"
          username="eldiariodedross"
          followers="3719042"
          classFollower="greenUp"
          iconGained="fa fa-caret-up"
          followersGained="984"
        />
        <BoxFollowers
          classContainer={darkMode ? "card-container dark" : "card-container"}
          icon="https://res.cloudinary.com/dvxgriyni/image/upload/v1648322099/youtube-svgrepo-com_e21yon.svg"
          username="ibaillanos"
          followers="6783432"
          classFollower="greenUp"
          iconGained="fa fa-caret-up"
          followersGained="124"
        />
        <BoxFollowers
          classContainer={darkMode ? "card-container dark" : "card-container"}
          icon="https://res.cloudinary.com/dvxgriyni/image/upload/v1648322114/facebook-svgrepo-com_b7jruk.svg"
          username="IbaiLlanos"
          followers="8213549"
          classFollower="greenUp"
          iconGained="fa fa-caret-up"
          followersGained="642"
        />
        <BoxOverviews
          classContainer={
            darkMode
              ? "card-container-overview dark"
              : "card-container-overview"
          }
          icon="https://res.cloudinary.com/dvxgriyni/image/upload/v1648322114/facebook-svgrepo-com_b7jruk.svg"
          title="L I K E S"
          textOverview="147"
          stats="redDown"
          iconGained="fa fa-caret-down"
          statsGained="1%"
        />
        <BoxOverviews
          classContainer={
            darkMode
              ? "card-container-overview dark"
              : "card-container-overview"
          }
          icon="https://res.cloudinary.com/dvxgriyni/image/upload/v1648322176/twitter-svgrepo-com_jqcnsx.svg"
          title="L I K E S"
          textOverview="17855"
          stats="greenUp"
          iconGained="fa fa-caret-up"
          statsGained="27%"
        />
        <BoxOverviews
          classContainer={
            darkMode
              ? "card-container-overview dark"
              : "card-container-overview"
          }
          icon="https://res.cloudinary.com/dvxgriyni/image/upload/v1648322148/instagram-2-1-logo-svgrepo-com_uakm8u.svg"
          title="L I K E S"
          textOverview="38454"
          stats="greenUp"
          iconGained="fa fa-caret-up"
          statsGained="11%"
        />
        <BoxOverviews
          classContainer={
            darkMode
              ? "card-container-overview dark"
              : "card-container-overview"
          }
          icon="https://res.cloudinary.com/dvxgriyni/image/upload/v1648322099/youtube-svgrepo-com_e21yon.svg"
          title="L I K E S"
          textOverview="134032"
          stats="redDown"
          iconGained="fa fa-caret-down"
          statsGained="8%"
        />
      </div>
    </div>
  );
}

export default App;
