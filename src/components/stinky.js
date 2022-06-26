import "../styles.css";
import profiles from "../dumydata";
console.log(profiles);

const Stinky = ({ name, designation, source, about }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: 20,
        padding: "5px",
        borderRadius: "10px"
      }}
    >
      <div style={{ display: "flex", margin: 10 }}>
        <img
          src={source}
          alt="profilephoto"
          height="109 px"
          style={{ borderRadius: "2px" }}
        />
        <div>
          <h2
            style={{
              marginTop: "10px",
              fontFamily: "sans-serif",
              fontSize: "1.2em",
              textAlign: "left",
              color: "violet"
            }}
          >
            {name}
          </h2>
          <h6
            style={{
              marginTop: "5px",
              fontFamily: "sans-serif",
              textAlign: "left",
              color: "sandybrown"
            }}
          >
            {designation}
          </h6>
        </div>
      </div>
      <div>
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "16px",
            textAlign: "left",
            marginLeft: "8px"
          }}
        >
          {about}
        </p>
      </div>
    </div>
  );
};
export default Stinky;
