import "./App.css";
import photo from "./Styles/photo.jpg";
function App() {
  return (
    <div className="App">
      <div className="parent">
        <div className="child">
          <div className="box"></div>
        </div>
        <div className="child">
          <img src={photo} alt="abcd" />
        </div>
        <div className="child"></div>
      </div>
      {/* <div className="exm"></div> */}
    </div>
  );
}

export default App;
