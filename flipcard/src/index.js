import ReactDOM from "react-dom";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./index.css"

const CardFlip = () => {
  const [isFlippedUL, setIsFlippedUL] = useState(1);

  const [isFlippedUR, setIsFlippedUR] = useState(2);

  const handleClickUL = () => {
    setIsFlippedUL(!isFlippedUL);
  };

  const handleClickUR = () => {
    setIsFlippedUR(!isFlippedUR);
  };

  return (
    <div class="container">
      <ReactCardFlip id="flipcardUpperLeft" isFlipped={isFlippedUL} flipDirection="vertical" >
        <div class="front" onMouseOver={handleClickUL}>
          <div class="card-container" border-radius="0px" >
            <div class="front-upper-rectangle" >
              <div>#纽约地铁轶事</div>
              <div> By @小高</div>
            </div>
            <div class="front-lower-rectangle">
              <div>刚刚更新</div>
              <div> 已有4条·1个成员在纽约的地铁上</div>
            </div>
          </div>
        </div>


        <div class="back" onMouseOver={handleClickUL}>
          <div class="card">
            <div class="back-title"> #纽约地铁轶事</div>
            <div class="back-text"> 在这里欢迎每位成员畅谈...</div>
            <div>
              <button>
                <div class="button-text">进入话题</div>
              </button>
            </div>
          </div>
        </div>

      </ReactCardFlip>


      <ReactCardFlip id="flipcardUpperRight" isFlippedUL={isFlippedUR} flipDirection="vertical" >
        <div class="front" onMouseOver={handleClickUR}>
          <div class="card-container" border-radius="0px" >
            <div class="front-upper-rectangle" >
              <div >#纽约地铁轶事</div>
              <div> By @小高</div>
            </div>
            <div class="front-lower-rectangle">
              <div>刚刚更新</div>
              <div> 已有4条·1个成员在纽约的地铁上</div>
            </div>
          </div>
        </div>


        <div class="back" onMouseOver={handleClickUR}>
          <div class="card">
            <div class="back-title"> #纽约地铁轶事</div>
            <div class="back-text"> 在这里欢迎每位成员畅谈...</div>
            <div>
              <button>
                进入话题
              </button>
            </div>
          </div>
        </div>
      </ReactCardFlip >
    </div >
  );
};

ReactDOM.render(<CardFlip />, document.querySelector("#root"));