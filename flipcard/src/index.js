import ReactDOM from "react-dom";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./index.css"

const CardFlip = () => {
  const [isFlippedUL, setIsFlippedUL] = useState(false);

  const [isFlippedUR, setIsFlippedUR] = useState(false);

  const [isFlippedLL, setIsFlippedLL] = useState(false);

  const [isFlippedLR, setIsFlippedLR] = useState(false);

  const handleClickUL = () => {
    setIsFlippedUL(!isFlippedUL);
  };

  const handleClickUR = () => {
    setIsFlippedUR(!isFlippedUR);
  };

  const handleClickLL = () => {
    setIsFlippedLL(!isFlippedLL);
  };

  const handleClickLR = () => {
    setIsFlippedLR(!isFlippedLR);
  };

  return (
    <div class="rows">
      <div class="container">
        <ReactCardFlip flipDirection="horizontal" isFlipped={isFlippedUL} >
          <div class="front" onMouseOver={handleClickUL}>
            <div class="card-container" border-radius="0px" >
              <div class="front-upper-rectangle" id="front-UL-upperbox">
                <div class="front-upper-title" id="front-upper-titleUL">#纽约地铁轶事</div>
                <div class="author"> By @小高</div>
              </div>
              <div class="front-lower-rectangle">
                <div class="update-time">刚刚更新</div>
                <div class="data-size"> 已有4条·1个成员在纽约的地铁上</div>
              </div>
            </div>
          </div>


          <div class="back" onMouseLeave={handleClickUL}>
            <div class="card">
              <div class="back-title"> #纽约地铁轶事</div>
              <div class="back-text"> 在这里欢迎每位成员畅谈...</div>
              <div class="back-button">

                <div class="button-text">进入话题</div>

              </div>
            </div>
          </div>

        </ReactCardFlip>


        <ReactCardFlip id="flipcardUpperRight" flipDirection="horizontal" isFlipped={isFlippedUR}>
          <div class="front" onMouseOver={handleClickUR}>
            <div class="card-container" border-radius="0px" >
              <div class="front-upper-rectangle" id="front-UR-upperbox">
                <div class="front-upper-title" id="front-upper-titleUR">#纽约地铁轶事</div>
                <div class="author"> By @小高</div>
              </div>
              <div class="front-lower-rectangle">
                <div class="update-time">刚刚更新</div>
                <div class="data-size"> 已有4条·1个成员在纽约的地铁上</div>
              </div>
            </div>
          </div>


          <div class="back" onMouseLeave={handleClickUR}>
            <div class="card">
              <div class="back-title"> #纽约地铁轶事</div>
              <div class="back-text"> 在这里欢迎每位成员畅谈...</div>
              <div class="back-button">
                <div class="button-text">进入话题</div>
              </div>
            </div>
          </div>
        </ReactCardFlip>
      </div >

      <div class="container">
        <ReactCardFlip id="flipcardLowerLeft" flipDirection="horizontal" isFlipped={isFlippedLL} >
          <div class="front" onMouseOver={handleClickLL}>
            <div class="card-container" border-radius="0px" >
              <div class="front-upper-rectangle" id="front-LL-upperbox">
                <div class="front-upper-title" id="front-upper-titleLL">#纽约地铁轶事</div>
                <div class="author"> By @小高</div>
              </div>
              <div class="front-lower-rectangle">
                <div class="update-time">刚刚更新</div>
                <div class="data-size"> 已有4条·1个成员在纽约的地铁上</div>
              </div>
            </div>
          </div>


          <div class="back" onMouseLeave={handleClickLL}>
            <div class="card">
              <div class="back-title"> #纽约地铁轶事</div>
              <div class="back-text"> 在这里欢迎每位成员畅谈...</div>
              <div class="back-button">

                <div class="button-text">进入话题</div>

              </div>
            </div>
          </div>

        </ReactCardFlip>


        <ReactCardFlip id="flipcardLowerRight" flipDirection="horizontal" isFlipped={isFlippedLR}>
          <div class="front" onMouseOver={handleClickLR}>
            <div class="card-container" border-radius="0px" >
              <div class="front-upper-rectangle" id="front-LR-upperbox">
                <div class="front-upper-title" id="front-upper-titleLR">#纽约地铁轶事</div>
                <div class="author"> By @小高</div>
              </div>
              <div class="front-lower-rectangle">
                <div class="update-time">刚刚更新</div>
                <div class="data-size"> 已有4条·1个成员在纽约的地铁上</div>
              </div>
            </div>
          </div>


          <div class="back" onMouseLeave={handleClickLR}>
            <div class="card">
              <div class="back-title"> #纽约地铁轶事</div>
              <div class="back-text"> 在这里欢迎每位成员畅谈...</div>
              <div class="back-button">
                <div class="button-text">进入话题</div>
              </div>
            </div>
          </div>
        </ReactCardFlip>
      </div >
    </div>
  );
};

ReactDOM.render(<CardFlip />, document.querySelector("#root"));
//export default CardFlip;