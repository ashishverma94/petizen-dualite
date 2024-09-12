import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Navbar = ({
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
}) => {
  return (
    <div className="wrapper-div-20371020 relative m-auto p-[0px] box-border">
      <div className=" max-w-[1440px] w-full box-border min-h-[99px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden flex flex-nowrap justify-between items-center content-space-between p-[20px_20px_20px__120px] bg-[#ffffffff]  ">
        {/* Logo1 */}
        <section className=" max-w-[113px] w-full box-border min-h-[32px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[0px_0px_0px__0px]  ">
          <div className=" max-w-[113px] w-full box-border min-h-[32px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
            <span className="petizen-20371022-0 ">{text1}</span>
            <span className="petizen-20371022-1 ">{text2}</span>
          </div>
        </section>
        {/* Nav-links1 */}
        <section className=" max-w-[272px] w-full box-border min-h-[59px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[20px] p-[0px_0px_0px__0px]  ">
          <div className=" max-w-[58px] w-full box-border min-h-[19px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-start gap-[20px] p-[0px_0px_0px__0px]  ">
            <div className=" max-w-[20px] w-full box-border min-h-[19px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
              <span className="en-20371025-0 ">{text3}</span>
            </div>
            <div className=" max-w-[18px] w-full box-border min-h-[19px] opacity-[0.4] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
              <span className="es-20371026-0 ">{text4}</span>
            </div>
          </div>
          <div className=" max-w-[194px] w-full box-border min-h-[59px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[8px] p-[16px_0px_16px__0px] rounded-tl-[99px] rounded-tr-[99px] rounded-br-[99px] rounded-bl-[99px] bg-[#f9655eff] box-border  ">
            <div className=" w-[20px] max-w-[100%] min-h-[20px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden  ">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-sep-2024%2Fashishverma1726137724162%2Fimage-2037-1028.png?alt=media&token=0"
                className="absolute  top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-transparent bg-center object-cover"
                alt="Mask group1 Image"
              />{" "}
            </div>
            <div className=" w-[20px] max-w-[100%] min-h-[20px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden  ">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-sep-2024%2Fashishverma1726137724162%2Fimage-2037-1031.png?alt=media&token=0"
                className="absolute  top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-transparent bg-center object-cover"
                alt="Mask group2 Image"
              />{" "}
            </div>
            <div className=" max-w-[82px] w-full box-border min-h-[27px] opacity-[1] z-[2]  rotate-[0deg]   text-left leading-[0px]  ">
              <span className="get-the-app-20371034-0 ">{text5}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Navbar;
