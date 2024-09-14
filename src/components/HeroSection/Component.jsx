import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const HeroSection = ({
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
  text6 = texts.text6,
}) => {
  const test = "bg-[skyblue] @xs:bg-[red] @xl:bg-[yellow] @4xl:bg-[blue]";
  const fontLeading =
    "@xs:text-[35px]  @xl:text-[40px] @4xl:text-[59px] leading-[75px] ";
  return (
    <div className="wrapper-div-20811189 relative  m-auto p-[0px] box-border">
      <div className=" max-w-[1440px] @container  w-full box-border  opacity-[1] z-[1]  rotate-[0deg]   flex flex-col md:flex-row justify-center items-center gap-[48px] p-[10px_0px_10px__0px] bg-[#ffffffff]  ">
        {/* Splash Text1 */}
        <section className="  @container  w-full @xl:w-[45%] @2xl:py-[150px] box-border  opacity-[1] z-[0]  rotate-[0deg]   flex flex-col  justify-start items-start gap-[32px] p-[20px_20px_20px__20px]  ">
          <div className="  w-full box-border  opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[8px] p-[0px_0px_0px__0px]  ">
            <div className="  w-full box-border  opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
              <span
                className={`find-your-furry-20811192-0 text-[59px] md:text-[79px] ${fontLeading}`}
              >
                {text1}
              </span>
              <span
                className={`find-your-furry-20811192-1 text-[59px] md:text-[79px] ${fontLeading}`}
              >
                {text2}
              </span>
              <span
                className={`find-your-furry-20811192-2 text-[59px] md:text-[79px] ${fontLeading}`}
              >
                {text3}
              </span>
            </div>
            <div className=" max-w-[542px] w-full box-border min-h-[36px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
              <span className="streamlined-pet-20811193-0 ">{text4}</span>
            </div>
          </div>
          <div className=" max-w-[334px] w-full box-border min-h-[61px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-start gap-[8px] p-[0px_0px_0px__0px]  ">
            <div className=" max-w-[156px] w-full box-border min-h-[61px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[8px] p-[20px_0px_20px__0px] rounded-tl-[99px] rounded-tr-[99px] rounded-br-[99px] rounded-bl-[99px] bg-[#f9655eff]  ">
              <div className=" w-[20px] max-w-[100%] min-h-[20px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden  ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-sep-2024%2Fashishverma1726137724162%2Fimage-2081-1196.png?alt=media&token=0"
                  className="absolute  top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-transparent bg-center object-cover"
                  alt="Mask group1 Image"
                />{" "}
              </div>
              <div className=" max-w-[72px] w-full box-border min-h-[21px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="app-store-20811199-0 ">{text5}</span>
              </div>
            </div>
            <div className=" max-w-[170px] w-full min-h-[61px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[8px] p-[20px_0px_20px__0px] rounded-tl-[99px] rounded-tr-[99px] rounded-br-[99px] rounded-bl-[99px] box-border border-l-[1.399999976158142px] border-l-[#f9655eff] border-r-[1.399999976158142px] border-r-[#f9655eff] border-t-[1.399999976158142px] border-t-[#f9655eff] border-b-[1.399999976158142px] border-b-[#f9655eff]  ">
              <div className=" w-[20px] max-w-[100%] min-h-[20px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden  ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-sep-2024%2Fashishverma1726137724162%2Fimage-2081-1201.png?alt=media&token=0"
                  className="absolute  top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-transparent bg-center object-cover"
                  alt="Mask group1 Image"
                />{" "}
              </div>
              <div className=" max-w-[86px] w-full box-border min-h-[21px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="google-play-20811204-0 ">{text6}</span>
              </div>
            </div>
          </div>
        </section>
        {/* human-dog-relaation1 */}
        <section className=" w-[450px] min-h-[437px] opacity-[1] z-[1]  rotate-[0deg]    ">
          <div className=" w-[399.46px] min-h-[384.52px] top-[26.17px] left-[25.05px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
            <div className=" w-[124.47px] max-w-[100%] min-h-[293.95px] top-[81.75px] left-[266.15px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
              <div className="nodeBg-20811207 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
            <div className=" w-[399.46px] min-h-[384.52px] top-[0px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
              <div className=" w-[399.46px] max-w-[100%] min-h-[384.52px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                <div className="nodeBg-20811209 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>
              <div className=" w-[164.39px] max-w-[100%] min-h-[177.1px] top-[28.62px] left-[144.79px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden   absolute ">
                <div className="nodeBg-20811210 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>
              <div className=" w-[241.26px] max-w-[100%] min-h-[282.9px] top-[32.64px] left-[140.85px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden   absolute ">
                <div className="nodeBg-20811211 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>
              <div className=" w-[362.26px] max-w-[100%] min-h-[384.31px] top-[0.15px] left-[35.89px] opacity-[1] z-[3]  rotate-[0deg] overflow-hidden   absolute ">
                <div className="nodeBg-20811212 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default HeroSection;
