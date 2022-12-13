import { useEffect, useState } from "react";
import Records from "./records.json";

function App() {


  return (
    <div>
      <div>
        {
          Records.prizes && Records.prizes.map((prize,index) => {
            return (
                  <div key = {index}>         
                  <div className="main">
                        <p>{prize.year}</p>     
                    <div className="left">
                        Left
                    </div>
                    <div className="right">
                      right
                    </div>
                  </div>           
                </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;