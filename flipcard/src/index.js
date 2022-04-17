import ReactDOM from "react-dom";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./index.css"

const CardFlip = () => {
  const [isFlippedUL, setIsFlippedUL] = useState(false);
  const [isFlippedUR, setIsFlippedUR] = useState(false);

  const handleClickUL = () => {
    setIsFlippedUL(!isFlippedUL);
  };
  const handleClickUR = () => {
    setIsFlippedUR(!isFlippedUR);
  };

  return (
    <div>
      <ReactCardFlip id="flipcardUpperLeft" isFlipped={isFlippedUL} flipDirection="vertical" >

        <div onClick={handleClickUL}>
          <div class="card-container" border-radius="0px"
            style={{
              height: "200px",
              width: "262px",
              left: "81px",
              top: "399px",
              overflow: "auto",
              align: "center",
              position: "absolute"
            }}  >
            <div class="card" style={{
              height: "102px",
              width: "262px",
              left: "81px",
              top: "399px",
              background: "#FFB469",
              overflow: "auto",
              align: "center"
            }} >
              <div style={{
                color: "#B84501",
                font: "Source Han Sans CN",
                weight: "700",
                size: "18px",
                align: "center",
                paddingTop: "32px",
                paddingLeft: "70px",
                paddingRight: "50px",
                // paddingBottom: "43px",
                lineHeight: "27px"
              }}>#纽约地铁轶事</div>
              <div style={{
                color: "#FAFAFA",
                font: "Source Han Sans CN",
                weight: "400",
                lineHeight: "21px",
                paddingLeft: "80px",
                size: "14px",
                align: "center"
              }}> By @小高</div>
            </div>
            <div style={{
              font: "Source Han Sans CN",
              weight: "100",
              lineHeight: "21px",
              paddingLeft: "80px",
              size: "8px",
              align: "center"
            }}>刚刚更新</div>
            <div style={{
              font: "Source Han Sans CN",
              weight: "200",
              lineHeight: "21px",
              paddingLeft: "20px",
              size: "10px",
              align: "center"
            }}> 已有4条·1个成员在纽约的地铁上</div>
          </div>
        </div>


        <div onClick={handleClickUL}>
          <div class="card" style={{
            height: "175px",
            width: "262px",
            left: "81px",
            top: "399px",
            overflow: "auto",
            align: "center",
            position: "absolute",
            background: "#333333"
          }}>
            <div style={{
              color: "#FAFAFA",
              font: "Source Han Sans CN",
              weight: "700",
              lineHeight: "21px",
              paddingLeft: "60px",
              paddingTop: "20px",
              size: "14px",
              align: "center"
            }}> #纽约地铁轶事</div>

            <div style={{
              color: "#FFFFFF",
              font: "Source Han Sans CN",
              weight: "400",
              lineHeight: "24px",
              paddingLeft: "30px",
              paddingTop: "30px",
              size: "14px",
              align: "center"
            }}> 在这里欢迎每位成员畅谈...</div>

            <div style={{
              align: "center",
              paddingLeft: "70px",
              paddingTop: "20px"
            }}>
              <button style={{
                paddingTop: "6px",
                paddingBottom: "7px",
                paddingLeft: "17px",
                weight: "700",
                paddingRight: "17px",
                background: "#FFFFFF",
                align: "center",
                color: "#000000"
              }}>
                进入话题
              </button>
            </div>
          </div>
        </div>

      </ReactCardFlip>


      <ReactCardFlip id="flipcardUpperRight" isFlippedUR={isFlippedUR} flipDirection="vertical" >

        <div onClick={handleClickUR}>
          <div class="card-container" border-radius="0px"
            style={{
              height: "200px",
              width: "262px",
              left: "358px",
              top: "399px",
              overflow: "auto",
              align: "center",
              position: "absolute"
            }}  >
            <div class="card" style={{
              height: "102px",
              width: "262px",
              left: "358px",
              top: "399px",
              background: "#FFB469",
              overflow: "auto",
              align: "center"
            }} >
              <div style={{
                color: "#B84501",
                font: "Source Han Sans CN",
                weight: "700",
                size: "18px",
                align: "center",
                paddingTop: "32px",
                paddingLeft: "70px",
                paddingRight: "50px",
                // paddingBottom: "43px",
                lineHeight: "27px"
              }}>#纽约地铁轶事</div>
              <div style={{
                color: "#FAFAFA",
                font: "Source Han Sans CN",
                weight: "400",
                lineHeight: "21px",
                paddingLeft: "80px",
                size: "14px",
                align: "center"
              }}> By @小高</div>
            </div>
            <div style={{
              font: "Source Han Sans CN",
              weight: "100",
              lineHeight: "21px",
              paddingLeft: "80px",
              size: "8px",
              align: "center"
            }}>刚刚更新</div>
            <div style={{
              font: "Source Han Sans CN",
              weight: "200",
              lineHeight: "21px",
              paddingLeft: "20px",
              size: "10px",
              align: "center"
            }}> 已有4条·1个成员在纽约的地铁上</div>
          </div>
        </div>


        <div onClick={handleClickUR}>
          <div class="card" style={{
            height: "175px",
            width: "262px",
            left: "358px",
            top: "399px",
            overflow: "auto",
            align: "center",
            position: "absolute",
            background: "#333333"
          }}>
            <div style={{
              color: "#FAFAFA",
              font: "Source Han Sans CN",
              weight: "700",
              lineHeight: "21px",
              paddingLeft: "60px",
              paddingTop: "20px",
              size: "14px",
              align: "center"
            }}> #纽约地铁轶事</div>

            <div style={{
              color: "#FFFFFF",
              font: "Source Han Sans CN",
              weight: "400",
              lineHeight: "24px",
              paddingLeft: "30px",
              paddingTop: "30px",
              size: "14px",
              align: "center"
            }}> 在这里欢迎每位成员畅谈...</div>

            <div style={{
              align: "center",
              paddingLeft: "70px",
              paddingTop: "20px"
            }}>
              <button style={{
                paddingTop: "6px",
                paddingBottom: "7px",
                paddingLeft: "17px",
                weight: "700",
                paddingRight: "17px",
                background: "#FFFFFF",
                align: "center",
                color: "#000000"
              }}>
                进入话题
              </button>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

ReactDOM.render(<CardFlip />, document.querySelector("#root"));