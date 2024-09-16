import React from "react";
import "./css/style.css";
import texts from "./data/texts";
import Human from "../../assets/Human.png"
const OrgSection = ({ text1 = texts.text1, text2 = texts.text2 }) => {
  const test = "bg-[skyblue] @xs:bg-[red] @xl:bg-[yellow] @4xl:bg-[blue]";
  const fontLeading =
    "@xs:text-[65px] text-[25px] leading-[30px] @xs:leading-[60px] ";
  return (
    <div className="wrapper-div-20821149 relative m-auto py-[120px] box-border">
      <div className=" w-full box-border opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-start items-start gap-[10px] p-[0px_0px_0px__0px]  ">
        {/* Frame 1041 */}
        <section className=" w-full box-border  opacity-[1] z-[0]  rotate-[0deg]   flex flex-wrap justify-start items-start gap-[10px] p-[0px_0px_0px__0px]  ">
          <div className=" w-full box-border  opacity-[1] z-[0]  rotate-[0deg]   flex flex-col md:flex-row-reverse justify-start items-center gap-[20px] p-[0px_0px_0px__0px] bg-[#ffffffff]  ">
            <div className=" max-w-[689px]  w-full box-border  opacity-[1] z-[0]  rotate-[0deg]   flex flex-col justify-end gap-[10px] ">
              <img src={Human} alt="human-with-heart" className="max-h-[657px]" />
             
            </div>
            <div className=" @container w-full box-border min-h-[274px] top-[29.68%] left-[6.32%] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-start gap-[32px] p-[0px_120px_0px__120px]   ">
              <div className="   w-full box-border opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className={`apply-to-be-an--20811216-0 ${fontLeading}`}>{text1}</span>
              </div>
              <div className="w-[155px] box-border h-[62px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[8px] p-[20px_0px_20px__0px] rounded-tl-[99px] rounded-tr-[99px] rounded-br-[99px] rounded-bl-[99px] bg-[#f9655eff]  ">
                <div className=" max-w-[83px]  w-full box-border min-h-[21px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                  <span className={`get-started-20811218-0`}>{text2}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default OrgSection;
