import "./styles.css";
import Stinky from "./components/stinky";
import profiles from "./dumydata";
//counter app
function App() {
  return (
    <>
      <h2
        style={{
          color: "white",
          fontFamily: "sans-serif",
          border: "5px solid white",
          borderBlockStartColor: "turquoise",
          borderBlockEndColor: "violet",
          borderRadius: "2px"
        }}
      >
        Profile Cards
      </h2>

      {profiles.map((profile) => (
        <Stinky
          source={profile.source}
          name={profile.name}
          designation={profile.designation}
          about={profile.about}
        />
      ))}
    </>
  );
}
//creating own component i.e. mbutton.js
export default App;
