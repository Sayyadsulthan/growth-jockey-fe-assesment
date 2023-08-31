import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="form-wrapper">
        <div id="input-text-container">
          <input type="text" value="PS3&SVBIA" />
          <img
            src="https://cdn-icons-png.flaticon.com/128/7795/7795733.png"
            alt=""
            role="img"
          />
        </div>
        <div className="range-wrapper">
          <div className="show-length">
            <span> Character Length</span>
            <span> 4</span>
          </div>
          <div className="range-input">
            <input type="range" start="4" />
          </div>
        </div>
        <div className="input-checks-wrapper">
          <div className="input-check-container">
            <input type="checkbox" />
            <span> Include Upper Case Letters </span>
          </div>
          <div className="input-check-container">
            <input type="checkbox" />
            <span> Include Lower Case Letters </span>
          </div>
          <div className="input-check-container">
            <input type="checkbox" />
            <span> Include Numbers </span>
          </div>
          <div className="input-check-container">
            <input type="checkbox" />
            <span> Include Symbols </span>
          </div>
        </div>
        <div className="strength-wrapper">
          <div className="left">
            <span>Strength </span>
          </div>
          <div className="right">
            <div>Poor</div>
            <div className="strength-range">
              <span className="red">-</span>
              <span className="red">-</span>
              <span>-</span>
              <span>-</span>
              <span>-</span>
            </div>
          </div>
        </div>
        <div className="submit-btn">Generate</div>
      </div>
    </div>
  );
}
