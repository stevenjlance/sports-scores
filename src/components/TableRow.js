import React from "react";
import "./TableStyle.css";

function TableRow(props) {
  let rowStyle = {
    backgroundColor: "rgb(240,240,240)"
  };

  let fontWeightOponent = {
    fontWeight: "normal"
  };
  let fontWeightTeam = {
    fontWeight: "normal"
  };

  if (props.result === "W") {
    rowStyle.backgroundColor = "rgb(0,255,0)";
    fontWeightTeam.fontWeight = "bold";
  } else if (props.result === "L") {
    rowStyle.backgroundColor = "rgb(255,0,0)";
    fontWeightOponent.fontWeight = "bold";
  }

  if (props.location == "@") {
    rowStyle.color = "yellow";
  }

  return (
    <div className="table-rows" style={rowStyle}>
      <div>{props.game}</div>
      <div>{props.opponent}</div>
      <div>{props.result}</div>
      <div>{props.location}</div>
      <div style={fontWeightTeam}>{props.teamScore}</div>
      <div style={fontWeightOponent}>{props.opponentScore}</div>
      <div>{props.wins}</div>
      <div>{props.losses}</div>
    </div>
  );
}

export default TableRow;
