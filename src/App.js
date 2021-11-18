import React from "react";
// Be sure to uncomment the TableRow component import before using a TableRow
import TableRow from "./components/TableRow.js";
import TableHeader from "./components/TableHeader.js";
import Navbar from "./components/Navbar.js";
// Be sure to uncomment the line importing the data before using it!
import data from "./knicks-data.js";
import "./App.css";
function App() {
  let divStyle = {
    backgroundColor: "rgb(0,0,255)",
    minHeight: "100vh"
  };
  return (
    <div className="App" style={divStyle}>
      <Navbar />
      <TableHeader />
      {data.map((data) => {
        return (
          <TableRow
            game={data.Game}
            opponent={data.Opponent}
            result={data.Result}
            location={data.Location}
            teamScore={data.TeamScore}
            opponentScore={data.OpponentScore}
            wins={data.W}
            losses={data.L}
          />
        );
      })}
      <TableRow
        game={data[0].Game}
        opponent={data[0].Opponent}
        result={data[0].Result}
        location={data[0].Location}
        teamScore={data[0].TeamScore}
        opponentScore={data[0].OpponentScore}
        wins={data[0].W}
        losses={data[0].L}
      />
      <TableRow
        game={data[1].Game}
        opponent={data[1].Opponent}
        result={data[1].Result}
        location={data[1].Location}
        teamScore={data[1].TeamScore}
        opponentScore={data[1].OpponentScore}
        wins={data[1].W}
        losses={data[1].L}
      />
      <TableRow
        game={data[2].Game}
        opponent={data[2].Opponent}
        result={data[2].Result}
        location={data[2].Location}
        teamScore={data[2].TeamScore}
        opponentScore={data[2].OpponentScore}
        wins={data[2].W}
        losses={data[2].L}
      />
    </div>
  );
}

export default App;
