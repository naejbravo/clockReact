import "./App.scss";
import CountDown from "./components/CountDown/CountDown";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import StopWatch from "./components/StopWatch/StopWatch";
import React, { useEffect, useState } from "react";
function App() {
  const [page, setPage] = useState(0);
  useEffect(() => {
    return () => {
      setPage(0);
    };
  }, []);
  return (
    <div className="App">
      {page === 0 ? (
        <DigitalClock />
      ) : page === 1 ? (
        <CountDown />
      ) : (
        <StopWatch />
      )}
      <div className="App__paginate">
        {page !== 0 && <button onClick={() => setPage(page - 1)}>back</button>}
      <span>{page}</span>
      {page <= 1 && <button onClick={() => setPage(page + 1)}>next</button>}
      </div>
      
    </div>
  );
}

export default App;
