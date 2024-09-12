import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Component = ({ text1 = texts.text1, text2 = texts.text2 }) => {
  return (
    <div className="wrapper-div-20821149 relative m-auto p-[0px] box-border">
      <div className=" max-w-[1440px] w-full box-border min-h-[657px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-start items-start gap-[10px] p-[0px_0px_0px__0px]  ">
        {/* Frame 1041 */}
        <section className=" max-w-[1440px] w-full box-border min-h-[657px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-wrap justify-start items-start gap-[10px] p-[0px_0px_0px__0px]  ">
          <div className=" max-w-[1440px] w-full box-border min-h-[657px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-wrap justify-start items-center gap-[20px] p-[0px_0px_0px__0px] bg-[#ffffffff]  ">
            <div className=" max-w-[689px] w-full box-border min-h-[657px] top-[0.46%] left-[52.15%] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-start gap-[10px] p-[10px_10px_10px__10px]   absolute ">
              <div className=" w-[689px] min-h-[657px] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden bg-[#f9655eff]   absolute ">
                <div className=" w-[369.28px] min-h-[385.82px] top-[50.43px] left-[149.83px] opacity-[1] z-[0]  rotate-[0deg]   rounded-full bg-[#ffffffff]   absolute "></div>
                <div className=" w-[589.9px] min-h-[440.06px] top-[116.99px] left-[56.63px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
                  <div className=" w-[95.02px] max-w-[100%] min-h-[81.76px] top-[174.47px] left-[245.94px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                    <div className="nodeBg-20811222 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                  <div className=" w-[589.9px] min-h-[440.06px] top-[0px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
                    <div className=" w-[576.31px] max-w-[100%] min-h-[339.06px] top-[101px] left-[13.59px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                      <div className="nodeBg-20811224 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>
                    <div className=" w-[570.14px] max-w-[100%] min-h-[200.16px] top-[0px] left-[0px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden   absolute ">
                      <div className="nodeBg-20811225 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>
                    <div className=" w-[17.47px] max-w-[100%] min-h-[64.24px] top-[67.16px] left-[269px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden   absolute ">
                      <div className="nodeBg-20811226 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" max-w-[500px] w-full box-border min-h-[274px] top-[29.68%] left-[6.32%] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-start gap-[32px] p-[0px_120px_0px__120px]   absolute ">
              <div className=" max-w-[260px] w-full box-border min-h-[180px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="apply-to-be-an--20811216-0 ">{text1}</span>
              </div>
              <div className=" max-w-[155px] w-full box-border min-h-[62px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[8px] p-[20px_0px_20px__0px] rounded-tl-[99px] rounded-tr-[99px] rounded-br-[99px] rounded-bl-[99px] bg-[#f9655eff]  ">
                <div className=" max-w-[83px] w-full box-border min-h-[21px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                  <span className="get-started-20811218-0 ">{text2}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Component;
