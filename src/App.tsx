import React, { useEffect, useState } from 'react';
import ProgressBar from './components/progress-bar/ProgressBar';
import ControlPanel from './components/control-panel/ControlPanel';
import DataPanel from './components/data-panel/DataPanel';
import ramenStores from './assets/awesome.json';
import 'tocas/dist/tocas.min.css'
import './App.css';

function App() {
  const [isPageTop, setIsPageTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => setIsPageTop(window.pageYOffset === 0));
  }, []);

  const goPageTop = () => window.scrollTo(0, 0);

  return (
    <div>
      <div className="ts-app-topbar">
        <div className="start">
          <div className="item is-text">拉麵資訊.台灣</div>
        </div>
        <div className="end">
        </div>
      </div>
      <div id="main-blk" className="ts-content is-vertically-padded">
        <ProgressBar />
        <ControlPanel len={ramenStores.length} />
        <DataPanel />
      </div>
      <div id="go-page-top-btn" className={isPageTop ? "u-hidden" : ""}>
        <button onClick={goPageTop} className="ts-button is-icon" data-tooltip="回頂端">
          <span className="ts-icon is-arrow-up-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default App;
