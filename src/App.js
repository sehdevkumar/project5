import './App.css';
import Menu from './components/Menu'
import imageReact from './imageReact.png'
function App() {
  return (
    <>
      <Menu />
      <div className="row">
        <div className="col-12 col-md-7">
          <div className="container">
            <h4
              style={{
                marginTop: "100px",
                marginLeft: "100px",
                opacity: "0.6",
              }}
            >
              WE ARE A FULL SERVICE
            </h4>

            <h1
              style={{
                marginTop: "100px",
                marginLeft: "100px",
              }}
            >
              DESIGN <br />
              AGENCY
            </h1>
            <p
              style={{
                marginTop: "50px",
                marginLeft: "100px",
              }}
            >
              It is a long establish fact taht a reader will be
              <br />
              distracted by the readable content of a page <br />
              when looking at its layout. The point of using
              <br /> Lorem ipsum is that it has normal
            </p>
          </div>
        </div>
        <div
          className="col-12 col-md-5"
          style={{
            width: "100%",
          }}
        >
          <img
          id="right-content"
            alt="img"
            src={imageReact}
            style={{
              width: "50vw",
              height: "90vh",
              // backgroundPosition: "center",
              // backgroundSize: "cover",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
