import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Mobile = ({
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
  text6 = texts.text6,
  text7 = texts.text7,
}) => {
  return (
    <div className="wrapper-div-20561145 relative m-auto p-[0px] box-border">
      <div className=" max-w-[1440px] w-full box-border min-h-[2454px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-center gap-[60px] p-[120px_0px_120px__0px] bg-[#ffffffff]  ">
        <div className=" max-w-[1200px] w-full box-border min-h-[120px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]  ">
          <span className="how-does-blush--20561146-0 ">{text1}</span>
        </div>
        {/* Frame 691 */}
        <section className=" max-w-[1200px] w-full box-border min-h-[2034px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-center items-start p-[0px_0px_0px__0px] rounded-tl-[60px] rounded-tr-[60px] rounded-br-[60px] rounded-bl-[60px] bg-[#ffffffff]  ">
          <div className=" max-w-[1200px] w-full box-border min-h-[678px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-wrap justify-center items-center gap-[40px] p-[40px_0px_40px__0px] bg-[#f9655e1f]  ">
            <div className=" w-[500px] min-h-[598px] opacity-[1] z-[0]  rotate-[0deg]    ">
              <div className=" w-[255.72px] min-h-[518px] top-[40.16px] left-[122px] opacity-[1] z-[0]  rotate-[0deg]     absolute ">
                <div className=" w-[251.2px] min-h-[518px] top-[0px] left-[2.27px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                  <div className=" w-[249.83px] min-h-[517.09px] top-[0.46px] left-[0.68px] opacity-[1] z-[0]  rotate-[0deg]   rounded-tl-[43.46px] rounded-tr-[43.46px] rounded-br-[43.46px] rounded-bl-[43.46px] bg-[#000000ff] box-border border-l-[3.284878730773926px] border-l-[#cdcdcdff] border-r-[3.284878730773926px] border-r-[#cdcdcdff] border-t-[3.284878730773926px] border-t-[#cdcdcdff] border-b-[3.284878730773926px] border-b-[#cdcdcdff] shadow-[inset_0px_0px_0.25268298387527466px_3.7902445793151855px_rgba(39,40,39,1)]   absolute "></div>
                  <div className=" w-[251.2px] min-h-[518px] top-[0px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   rounded-tl-[43.46px] rounded-tr-[43.46px] rounded-br-[43.46px] rounded-bl-[43.46px] bg-[#00000000] box-border border-l-[0.5053659677505493px] border-l-[#e7e8e9ff] border-r-[0.5053659677505493px] border-r-[#e7e8e9ff] border-t-[0.5053659677505493px] border-t-[#e7e8e9ff] border-b-[0.5053659677505493px] border-b-[#e7e8e9ff] shadow-[inset_0px_0px_0.25268298387527466px_3.0321953296661377px_rgba(251,251,251,1)]   absolute "></div>
                  <div className=" w-[227.48px] max-w-[100%] min-h-[492.29px] top-[12.89px] left-[11.87px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden   absolute ">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-sep-2024%2Fashishverma1726137724162%2Fimage-2056-1154.png?alt=media&token=0"
                      className="absolute  top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-transparent bg-center object-cover"
                      alt="Screen1 Image"
                    />{" "}
                  </div>
                </div>
                <div className=" w-[251.2px] min-h-[518px] top-[0px] left-[2.27px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
                  <div className=" w-[3.19px] min-h-[3.87px] top-[514.13px] left-[50.74px] opacity-[1] z-[0]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                  <div className=" w-[4.1px] min-h-[2.96px] top-[463.08px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                  <div className=" w-[3.87px] min-h-[4.1px] top-[52.19px] left-[0px] opacity-[1] z-[2]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                  <div className=" w-[4.1px] min-h-[2.96px] top-[463.08px] left-[247.1px] opacity-[1] z-[3]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                  <div className=" w-[4.1px] min-h-[3.87px] top-[52.42px] left-[247.1px] opacity-[1] z-[4]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                  <div className=" w-[3.87px] min-h-[3.87px] top-[0px] left-[197.27px] opacity-[1] z-[5]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                </div>
                <div className=" w-[255.71px] min-h-[124.32px] top-[103.35px] left-[0px] opacity-[1] z-[2]  rotate-[0deg]   absolute ">
                  <div className=" w-[2.27px] min-h-[36.64px] top-[87.68px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-tl-[1.01px] rounded-tr-[1.01px] rounded-br-[1.01px] rounded-bl-[1.01px] box-border border-l-[0.25268298387527466px] border-l-[#d6d6d6ff] border-r-[0.25268298387527466px] border-r-[#d6d6d6ff] border-t-[0.25268298387527466px] border-t-[#d6d6d6ff] border-b-[0.25268298387527466px] border-b-[#d6d6d6ff] shadow-[inset_0px_0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_0px_-0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_-0.5053659677505493px_0px_0.25268298387527466px_0px_rgba(194,190,179,1)]  gradient-0  absolute "></div>
                  <div className=" w-[2.27px] min-h-[36.39px] top-[37.4px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   rounded-tl-[1.01px] rounded-tr-[1.01px] rounded-br-[1.01px] rounded-bl-[1.01px] box-border border-l-[0.25268298387527466px] border-l-[#d6d6d6ff] border-r-[0.25268298387527466px] border-r-[#d6d6d6ff] border-t-[0.25268298387527466px] border-t-[#d6d6d6ff] border-b-[0.25268298387527466px] border-b-[#d6d6d6ff] shadow-[inset_0px_0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_0px_-0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_-0.5053659677505493px_0px_0.25268298387527466px_0px_rgba(194,190,179,1)]  gradient-1  absolute "></div>
                  <div className=" w-[2.27px] max-w-[100%] min-h-[18.7px] top-[0px] left-[0px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden box-border   absolute ">
                    <div className="nodeBg-20561167 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                  <div className=" w-[2.27px] min-h-[60.9px] top-[50.03px] left-[253.44px] opacity-[1] z-[3]  rotate-[0deg]   rounded-tl-[1.01px] rounded-tr-[1.01px] rounded-br-[1.01px] rounded-bl-[1.01px] box-border border-l-[0.25268298387527466px] border-l-[#d6d6d6ff] border-r-[0.25268298387527466px] border-r-[#d6d6d6ff] border-t-[0.25268298387527466px] border-t-[#d6d6d6ff] border-b-[0.25268298387527466px] border-b-[#d6d6d6ff] shadow-[inset_0px_0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_0px_-0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_0.5053659677505493px_0px_0.25268298387527466px_0px_rgba(194,190,179,1)]  gradient-2  absolute "></div>
                </div>
                <div className=" w-[105.87px] min-h-[26.78px] top-[5.74px] left-[75.05px] opacity-[1] z-[3]  rotate-[0deg]   absolute ">
                  <div className=" w-[105.88px] max-w-[100%] min-h-[21.22px] top-[5.56px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border   absolute ">
                    <div className="nodeBg-20561170 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                  <div className=" w-[36.13px] min-h-[4.04px] top-[0px] left-[34.87px] opacity-[1] z-[1]  rotate-[0deg]   rounded-tl-[6.83px] rounded-tr-[6.83px] rounded-br-[6.83px] rounded-bl-[6.83px] bg-[#141414ff] box-border border-l-[0.22755920886993408px] border-l-[#0e0e0eff] border-r-[0.22755920886993408px] border-r-[#0e0e0eff] border-t-[0.22755920886993408px] border-t-[#0e0e0eff] border-b-[0.22755920886993408px] border-b-[#0e0e0eff] shadow-[inset_0px_0px_1.1377959251403809px_0.22755920886993408px_rgba(0,0,0,1),inset_0.6826775074005127px_0px_0px_0px_rgba(42,42,42,1),inset_-0.6826775074005127px_0px_0px_0px_rgba(42,42,42,1)]   absolute "></div>
                  <div className=" w-[9.07px] min-h-[9.07px] top-[9.58px] left-[15.3px] opacity-[1] z-[2]  rotate-[0deg]   absolute ">
                    <div className=" w-[9.07px] min-h-[9.07px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-full box-border shadow-[0px_0px_0.22683675587177277px_0.06805101782083511px_rgba(18,8,6,1)]   absolute "></div>
                    <div className=" w-[5.44px] min-h-[5.44px] top-[1.81px] left-[1.81px] opacity-[1] z-[1]  rotate-[0deg]   rounded-full border-l-[0.1814693808555603px] border-l-[#080f21ff] border-r-[0.1814693808555603px] border-r-[#080f21ff] border-t-[0.1814693808555603px] border-t-[#080f21ff] border-b-[0.1814693808555603px] border-b-[#080f21ff]  gradient-3  absolute "></div>
                    <div className=" w-[5.44px] min-h-[0px] top-[4.54px] left-[1.59px] opacity-[1] z-[2]  rotate-[90deg]   [box-shadow:inset_0_0_0_0.5px_#000000ff,inset_0_0_0.5px_0_#000000ff,inset_0_0.5px_0_0_#000000ff,inset_0.5px_0_0_0_#000000ff] border-l-[0px] border-l-[#000000ff] border-r-[0px] border-r-[#000000ff] border-t-[0px] border-t-[#000000ff] border-b-[0px] border-b-[#000000ff]   absolute "></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" max-w-[500px] w-full box-border min-h-[166px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-start gap-[20px] p-[0px_0px_0px__0px]  ">
              <div className=" max-w-[231px] w-full box-border min-h-[40px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="easy-browsing-20561177-0 ">{text2}</span>
              </div>
              <div className=" max-w-[500px] w-full box-border min-h-[120px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="effortlessly-ex-20561178-0 ">{text3}</span>
              </div>
            </div>
          </div>
          <div className=" max-w-[1200px] w-full box-border min-h-[678px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-center items-center gap-[40px] p-[40px_0px_40px__0px] bg-[#f9655e1f]  ">
            <div className=" w-[500px] min-h-[598px] opacity-[1] z-[0]  rotate-[0deg]    ">
              <div className=" w-[319px] min-h-[319px] top-[289px] left-[-51px] opacity-[1] z-[0]  rotate-[0deg]   rounded-full bg-[#f9655eff]   absolute "></div>
              <div className=" w-[255.72px] min-h-[518px] top-[40px] left-[122.14px] opacity-[1] z-[1]  rotate-[0deg]     absolute ">
                <div className=" w-[251.2px] min-h-[518px] top-[0px] left-[2.27px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                  <div className=" w-[249.83px] min-h-[517.09px] top-[0.46px] left-[0.68px] opacity-[1] z-[0]  rotate-[0deg]   rounded-tl-[43.46px] rounded-tr-[43.46px] rounded-br-[43.46px] rounded-bl-[43.46px] bg-[#000000ff] box-border border-l-[3.284878730773926px] border-l-[#cdcdcdff] border-r-[3.284878730773926px] border-r-[#cdcdcdff] border-t-[3.284878730773926px] border-t-[#cdcdcdff] border-b-[3.284878730773926px] border-b-[#cdcdcdff] shadow-[inset_0px_0px_0.25268298387527466px_3.7902445793151855px_rgba(39,40,39,1)]   absolute "></div>
                  <div className=" w-[251.2px] min-h-[518px] top-[0px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   rounded-tl-[43.46px] rounded-tr-[43.46px] rounded-br-[43.46px] rounded-bl-[43.46px] bg-[#00000000] box-border border-l-[0.5053659677505493px] border-l-[#e7e8e9ff] border-r-[0.5053659677505493px] border-r-[#e7e8e9ff] border-t-[0.5053659677505493px] border-t-[#e7e8e9ff] border-b-[0.5053659677505493px] border-b-[#e7e8e9ff] shadow-[inset_0px_0px_0.25268298387527466px_3.0321953296661377px_rgba(251,251,251,1)]   absolute "></div>
                  <div className=" w-[227.48px] max-w-[100%] min-h-[492.29px] top-[12.89px] left-[11.87px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden   absolute ">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-sep-2024%2Fashishverma1726137724162%2Fimage-2056-1186.png?alt=media&token=0"
                      className="absolute  top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-transparent bg-center object-cover"
                      alt="Screen1 Image"
                    />{" "}
                  </div>
                </div>
                <div className=" w-[251.2px] min-h-[518px] top-[0px] left-[2.27px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
                  <div className=" w-[3.19px] min-h-[3.87px] top-[514.13px] left-[50.74px] opacity-[1] z-[0]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                  <div className=" w-[4.1px] min-h-[2.96px] top-[463.08px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                  <div className=" w-[3.87px] min-h-[4.1px] top-[52.19px] left-[0px] opacity-[1] z-[2]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                  <div className=" w-[4.1px] min-h-[2.96px] top-[463.08px] left-[247.1px] opacity-[1] z-[3]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                  <div className=" w-[4.1px] min-h-[3.87px] top-[52.42px] left-[247.1px] opacity-[1] z-[4]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                  <div className=" w-[3.87px] min-h-[3.87px] top-[0px] left-[197.27px] opacity-[1] z-[5]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                </div>
                <div className=" w-[255.71px] min-h-[124.32px] top-[103.35px] left-[0px] opacity-[1] z-[2]  rotate-[0deg]   absolute ">
                  <div className=" w-[2.27px] min-h-[36.64px] top-[87.68px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-tl-[1.01px] rounded-tr-[1.01px] rounded-br-[1.01px] rounded-bl-[1.01px] box-border border-l-[0.25268298387527466px] border-l-[#d6d6d6ff] border-r-[0.25268298387527466px] border-r-[#d6d6d6ff] border-t-[0.25268298387527466px] border-t-[#d6d6d6ff] border-b-[0.25268298387527466px] border-b-[#d6d6d6ff] shadow-[inset_0px_0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_0px_-0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_-0.5053659677505493px_0px_0.25268298387527466px_0px_rgba(194,190,179,1)]  gradient-4  absolute "></div>
                  <div className=" w-[2.27px] min-h-[36.39px] top-[37.4px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   rounded-tl-[1.01px] rounded-tr-[1.01px] rounded-br-[1.01px] rounded-bl-[1.01px] box-border border-l-[0.25268298387527466px] border-l-[#d6d6d6ff] border-r-[0.25268298387527466px] border-r-[#d6d6d6ff] border-t-[0.25268298387527466px] border-t-[#d6d6d6ff] border-b-[0.25268298387527466px] border-b-[#d6d6d6ff] shadow-[inset_0px_0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_0px_-0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_-0.5053659677505493px_0px_0.25268298387527466px_0px_rgba(194,190,179,1)]  gradient-5  absolute "></div>
                  <div className=" w-[2.27px] max-w-[100%] min-h-[18.7px] top-[0px] left-[0px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden box-border   absolute ">
                    <div className="nodeBg-20561199 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                  <div className=" w-[2.27px] min-h-[60.9px] top-[50.03px] left-[253.44px] opacity-[1] z-[3]  rotate-[0deg]   rounded-tl-[1.01px] rounded-tr-[1.01px] rounded-br-[1.01px] rounded-bl-[1.01px] box-border border-l-[0.25268298387527466px] border-l-[#d6d6d6ff] border-r-[0.25268298387527466px] border-r-[#d6d6d6ff] border-t-[0.25268298387527466px] border-t-[#d6d6d6ff] border-b-[0.25268298387527466px] border-b-[#d6d6d6ff] shadow-[inset_0px_0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_0px_-0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_0.5053659677505493px_0px_0.25268298387527466px_0px_rgba(194,190,179,1)]  gradient-6  absolute "></div>
                </div>
                <div className=" w-[105.87px] min-h-[26.78px] top-[5.74px] left-[75.05px] opacity-[1] z-[3]  rotate-[0deg]   absolute ">
                  <div className=" w-[105.88px] max-w-[100%] min-h-[21.22px] top-[5.56px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border   absolute ">
                    <div className="nodeBg-20561202 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                  <div className=" w-[36.13px] min-h-[4.04px] top-[0px] left-[34.87px] opacity-[1] z-[1]  rotate-[0deg]   rounded-tl-[6.83px] rounded-tr-[6.83px] rounded-br-[6.83px] rounded-bl-[6.83px] bg-[#141414ff] box-border border-l-[0.22755920886993408px] border-l-[#0e0e0eff] border-r-[0.22755920886993408px] border-r-[#0e0e0eff] border-t-[0.22755920886993408px] border-t-[#0e0e0eff] border-b-[0.22755920886993408px] border-b-[#0e0e0eff] shadow-[inset_0px_0px_1.1377959251403809px_0.22755920886993408px_rgba(0,0,0,1),inset_0.6826775074005127px_0px_0px_0px_rgba(42,42,42,1),inset_-0.6826775074005127px_0px_0px_0px_rgba(42,42,42,1)]   absolute "></div>
                  <div className=" w-[9.07px] min-h-[9.07px] top-[9.58px] left-[15.3px] opacity-[1] z-[2]  rotate-[0deg]   absolute ">
                    <div className=" w-[9.07px] min-h-[9.07px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-full box-border shadow-[0px_0px_0.22683675587177277px_0.06805101782083511px_rgba(18,8,6,1)]   absolute "></div>
                    <div className=" w-[5.44px] min-h-[5.44px] top-[1.81px] left-[1.81px] opacity-[1] z-[1]  rotate-[0deg]   rounded-full border-l-[0.1814693808555603px] border-l-[#080f21ff] border-r-[0.1814693808555603px] border-r-[#080f21ff] border-t-[0.1814693808555603px] border-t-[#080f21ff] border-b-[0.1814693808555603px] border-b-[#080f21ff]  gradient-7  absolute "></div>
                    <div className=" w-[5.44px] min-h-[0px] top-[4.54px] left-[1.59px] opacity-[1] z-[2]  rotate-[90deg]   [box-shadow:inset_0_0_0_0.5px_#000000ff,inset_0_0_0.5px_0_#000000ff,inset_0_0.5px_0_0_#000000ff,inset_0.5px_0_0_0_#000000ff] border-l-[0px] border-l-[#000000ff] border-r-[0px] border-r-[#000000ff] border-t-[0px] border-t-[#000000ff] border-b-[0px] border-b-[#000000ff]   absolute "></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" max-w-[500px] w-full box-border min-h-[166px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-start gap-[20px] p-[0px_0px_0px__0px]  ">
              <div className=" max-w-[231px] w-full box-border min-h-[40px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="easy-browsing-20561209-0 ">{text4}</span>
              </div>
              <div className=" max-w-[500px] w-full box-border min-h-[120px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="effortlessly-ex-20561210-0 ">{text5}</span>
              </div>
            </div>
          </div>
          <div className=" max-w-[1200px] w-full box-border min-h-[678px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-wrap justify-center items-center gap-[40px] p-[40px_0px_40px__0px] bg-[#f9655e1f]  ">
            <div className=" w-[500px] min-h-[598px] opacity-[1] z-[0]  rotate-[0deg]    ">
              <div className=" w-[319px] min-h-[319px] top-[289px] left-[-51px] opacity-[1] z-[0]  rotate-[0deg]   rounded-full bg-[#f9655eff]   absolute "></div>
              <div className=" w-[255.72px] min-h-[518px] top-[40px] left-[122.14px] opacity-[1] z-[1]  rotate-[0deg]     absolute ">
                <div className=" w-[251.2px] min-h-[518px] top-[0px] left-[2.27px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                  <div className=" w-[249.83px] min-h-[517.09px] top-[0.46px] left-[0.68px] opacity-[1] z-[0]  rotate-[0deg]   rounded-tl-[43.46px] rounded-tr-[43.46px] rounded-br-[43.46px] rounded-bl-[43.46px] bg-[#000000ff] box-border border-l-[3.284878730773926px] border-l-[#cdcdcdff] border-r-[3.284878730773926px] border-r-[#cdcdcdff] border-t-[3.284878730773926px] border-t-[#cdcdcdff] border-b-[3.284878730773926px] border-b-[#cdcdcdff] shadow-[inset_0px_0px_0.25268298387527466px_3.7902445793151855px_rgba(39,40,39,1)]   absolute "></div>
                  <div className=" w-[251.2px] min-h-[518px] top-[0px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   rounded-tl-[43.46px] rounded-tr-[43.46px] rounded-br-[43.46px] rounded-bl-[43.46px] bg-[#00000000] box-border border-l-[0.5053659677505493px] border-l-[#e7e8e9ff] border-r-[0.5053659677505493px] border-r-[#e7e8e9ff] border-t-[0.5053659677505493px] border-t-[#e7e8e9ff] border-b-[0.5053659677505493px] border-b-[#e7e8e9ff] shadow-[inset_0px_0px_0.25268298387527466px_3.0321953296661377px_rgba(251,251,251,1)]   absolute "></div>
                  <div className=" w-[227.48px] max-w-[100%] min-h-[492.29px] top-[12.89px] left-[11.87px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden   absolute ">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-sep-2024%2Fashishverma1726137724162%2Fimage-2056-1218.png?alt=media&token=0"
                      className="absolute  top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-transparent bg-center object-cover"
                      alt="Screen1 Image"
                    />{" "}
                  </div>
                </div>
                <div className=" w-[251.2px] min-h-[518px] top-[0px] left-[2.27px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
                  <div className=" w-[3.19px] min-h-[3.87px] top-[514.13px] left-[50.74px] opacity-[1] z-[0]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                  <div className=" w-[4.1px] min-h-[2.96px] top-[463.08px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                  <div className=" w-[3.87px] min-h-[4.1px] top-[52.19px] left-[0px] opacity-[1] z-[2]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                  <div className=" w-[4.1px] min-h-[2.96px] top-[463.08px] left-[247.1px] opacity-[1] z-[3]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                  <div className=" w-[4.1px] min-h-[3.87px] top-[52.42px] left-[247.1px] opacity-[1] z-[4]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                  <div className=" w-[3.87px] min-h-[3.87px] top-[0px] left-[197.27px] opacity-[1] z-[5]  rotate-[0deg]   bg-[#f1eee999]   absolute "></div>
                </div>
                <div className=" w-[255.71px] min-h-[124.32px] top-[103.35px] left-[0px] opacity-[1] z-[2]  rotate-[0deg]   absolute ">
                  <div className=" w-[2.27px] min-h-[36.64px] top-[87.68px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-tl-[1.01px] rounded-tr-[1.01px] rounded-br-[1.01px] rounded-bl-[1.01px] box-border border-l-[0.25268298387527466px] border-l-[#d6d6d6ff] border-r-[0.25268298387527466px] border-r-[#d6d6d6ff] border-t-[0.25268298387527466px] border-t-[#d6d6d6ff] border-b-[0.25268298387527466px] border-b-[#d6d6d6ff] shadow-[inset_0px_0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_0px_-0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_-0.5053659677505493px_0px_0.25268298387527466px_0px_rgba(194,190,179,1)]  gradient-8  absolute "></div>
                  <div className=" w-[2.27px] min-h-[36.39px] top-[37.4px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   rounded-tl-[1.01px] rounded-tr-[1.01px] rounded-br-[1.01px] rounded-bl-[1.01px] box-border border-l-[0.25268298387527466px] border-l-[#d6d6d6ff] border-r-[0.25268298387527466px] border-r-[#d6d6d6ff] border-t-[0.25268298387527466px] border-t-[#d6d6d6ff] border-b-[0.25268298387527466px] border-b-[#d6d6d6ff] shadow-[inset_0px_0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_0px_-0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_-0.5053659677505493px_0px_0.25268298387527466px_0px_rgba(194,190,179,1)]  gradient-9  absolute "></div>
                  <div className=" w-[2.27px] max-w-[100%] min-h-[18.7px] top-[0px] left-[0px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden box-border   absolute ">
                    <div className="nodeBg-20561231 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                  <div className=" w-[2.27px] min-h-[60.9px] top-[50.03px] left-[253.44px] opacity-[1] z-[3]  rotate-[0deg]   rounded-tl-[1.01px] rounded-tr-[1.01px] rounded-br-[1.01px] rounded-bl-[1.01px] box-border border-l-[0.25268298387527466px] border-l-[#d6d6d6ff] border-r-[0.25268298387527466px] border-r-[#d6d6d6ff] border-t-[0.25268298387527466px] border-t-[#d6d6d6ff] border-b-[0.25268298387527466px] border-b-[#d6d6d6ff] shadow-[inset_0px_0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_0px_-0.5053659677505493px_0.7580488324165344px_0px_rgba(143,136,115,1),inset_0.5053659677505493px_0px_0.25268298387527466px_0px_rgba(194,190,179,1)]  gradient-10  absolute "></div>
                </div>
                <div className=" w-[105.87px] min-h-[26.78px] top-[5.74px] left-[75.05px] opacity-[1] z-[3]  rotate-[0deg]   absolute ">
                  <div className=" w-[105.88px] max-w-[100%] min-h-[21.22px] top-[5.56px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border   absolute ">
                    <div className="nodeBg-20561234 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                  <div className=" w-[36.13px] min-h-[4.04px] top-[0px] left-[34.87px] opacity-[1] z-[1]  rotate-[0deg]   rounded-tl-[6.83px] rounded-tr-[6.83px] rounded-br-[6.83px] rounded-bl-[6.83px] bg-[#141414ff] box-border border-l-[0.22755920886993408px] border-l-[#0e0e0eff] border-r-[0.22755920886993408px] border-r-[#0e0e0eff] border-t-[0.22755920886993408px] border-t-[#0e0e0eff] border-b-[0.22755920886993408px] border-b-[#0e0e0eff] shadow-[inset_0px_0px_1.1377959251403809px_0.22755920886993408px_rgba(0,0,0,1),inset_0.6826775074005127px_0px_0px_0px_rgba(42,42,42,1),inset_-0.6826775074005127px_0px_0px_0px_rgba(42,42,42,1)]   absolute "></div>
                  <div className=" w-[9.07px] min-h-[9.07px] top-[9.58px] left-[15.3px] opacity-[1] z-[2]  rotate-[0deg]   absolute ">
                    <div className=" w-[9.07px] min-h-[9.07px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-full box-border shadow-[0px_0px_0.22683675587177277px_0.06805101782083511px_rgba(18,8,6,1)]   absolute "></div>
                    <div className=" w-[5.44px] min-h-[5.44px] top-[1.81px] left-[1.81px] opacity-[1] z-[1]  rotate-[0deg]   rounded-full border-l-[0.1814693808555603px] border-l-[#080f21ff] border-r-[0.1814693808555603px] border-r-[#080f21ff] border-t-[0.1814693808555603px] border-t-[#080f21ff] border-b-[0.1814693808555603px] border-b-[#080f21ff]  gradient-11  absolute "></div>
                    <div className=" w-[5.44px] min-h-[0px] top-[4.54px] left-[1.59px] opacity-[1] z-[2]  rotate-[90deg]   [box-shadow:inset_0_0_0_0.5px_#000000ff,inset_0_0_0.5px_0_#000000ff,inset_0_0.5px_0_0_#000000ff,inset_0.5px_0_0_0_#000000ff] border-l-[0px] border-l-[#000000ff] border-r-[0px] border-r-[#000000ff] border-t-[0px] border-t-[#000000ff] border-b-[0px] border-b-[#000000ff]   absolute "></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" max-w-[500px] w-full box-border min-h-[166px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-start gap-[20px] p-[0px_0px_0px__0px]  ">
              <div className=" max-w-[231px] w-full box-border min-h-[40px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="easy-browsing-20561241-0 ">{text6}</span>
              </div>
              <div className=" max-w-[500px] w-full box-border min-h-[120px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="effortlessly-ex-20561242-0 ">{text7}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Mobile;
