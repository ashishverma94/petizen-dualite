import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import Lens from "../../assets/lens.png";
import Cat from "../../assets/cat.png";
import Dog from "../../assets/dog.png";
//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const MiddleCard = ({
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
  text6 = texts.text6,
  text7 = texts.text7,
}) => {
  return (
    <div className="wrapper-div-20391208 relative m-auto p-[0px] box-border">
      <div className=" w-full box-border opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-center gap-[60px] p-[20px_0px_20px__0px] bg-[#feedecff]  ">
        <div className=" max-w-[993px] w-full  @container opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px] box-border  bg-clip-text   ">
          <span className="how-does-petize-20391209-0 max-w-[993px] text-[35px] font-[600] @4xl:text-[55px] @4xl:leading-[60px] leading-[30px]">
            {text1}
          </span>
        </div>
        {/* Frame 661 */}
        <section className="  @container max-w-[1200px] w-full box-border min-h-[554px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-center items-start gap-[48px] p-[0px_0px_0px__0px]  ">
          <div className=" max-w-[368px]  w-full box-border  min-h-[524px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-start p-[0px_0px_0px__0px]  ">
            <div className=" max-w-[368px] w-full box-border min-h-[280px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-col  justify-center items-center gap-[10px] ">
              <div className="  min-h-[224px] opacity-[1] z-[0]  rotate-[0deg]  ">
                <img className="max-w-[280px]" src={Lens} alt="lens" />
              </div>
            </div>
            <div className=" px-5 max-w-[368px] w-full box-border min-h-[244px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[12px] p-[20px_0px_20px__0px]  ">
              <div className=" max-w-[162px] w-full box-border min-h-[42px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="easy-browsing-20391222-0 ">{text2}</span>
              </div>
              <div className=" max-w-[368px] w-full box-border min-h-[150px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="effortlessly-ex-20391223-0 ">{text3}</span>
              </div>
            </div>
          </div>
          <div className="  max-w-[368px] w-full box-border min-h-[554px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-start p-[0px_0px_0px__0px]  ">
            <div className=" max-w-[368px] w-full box-border min-h-[280px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-center gap-[10px]  ">
              <div className=" min-h-[224px] opacity-[1] z-[0]  rotate-[0deg]  ">
                <img className="max-w-[280px]" src={Cat} alt="lens" />
              </div>
            </div>
            <div className="px-5 max-w-[368px] w-full box-border min-h-[274px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[12px] p-[20px_0px_20px__0px]  ">
              <div className=" max-w-[303px] w-full box-border min-h-[42px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="seamless-adopti-20391291-0 ">{text4}</span>
              </div>
              <div className=" max-w-[368px] w-full box-border min-h-[180px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="experience-a-ha-20391292-0 ">{text5}</span>
              </div>
            </div>
          </div>
          <div className=" max-w-[368px] w-full box-border min-h-[554px] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-start p-[0px_0px_0px__0px]  ">
            <div className=" max-w-[368px] w-full box-border min-h-[280px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-nowrap justify-center items-center gap-[10px]  ">
              <div className=" min-h-[224px] opacity-[1] z-[0]  rotate-[0deg]  ">
                <img className="max-w-[280px]" src={Dog} alt="lens" />
              </div>
            </div>
            <div className="px-5 max-w-[368px] w-full box-border min-h-[274px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[12px] p-[20px_0px_20px__0px]  ">
              <div className=" max-w-[235px] w-full box-border min-h-[42px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="personalized-pr-20391304-0 ">{text6}</span>
              </div>
              <div className=" max-w-[368px] w-full box-border min-h-[180px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="create-personal-20391305-0 ">{text7}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default MiddleCard;
