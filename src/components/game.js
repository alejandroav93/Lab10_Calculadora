import React from "react";

import "./game.css"
class Board extends React.Component {
  createSquare() {
    return <Square />;
  }

  render() {
    const turn = "Next Player: ";

    return (
      <>
        <div className="turn">{turn}</div>

        <div className="row">
          {<Square/>}
          {this.createSquare()}
          {this.createSquare()}
        </div>

        <div className="row">
          {this.createSquare()}
          {this.createSquare()}
          {this.createSquare()}
        </div>

        <div className="row">
          {this.createSquare()}
          {this.createSquare()}
          {this.createSquare()}
        </div>
      </>
    );
  }
}

class Square extends React.Component {
  render() {
   return <button className="squareBtn" onClick={function(){ alert('click')}}>{/*DO SOMETHING*/}</button>;
  }
}


export default Board;