import texts from "./data/texts";
import HumanDog from "../../assets/hdog.png";

const HeroSection = ({
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
  text6 = texts.text6,
}) => {
  const test = "bg-[skyblue] @xl:bg-[yellow] @2xl:bg-[blue]";
  const fontLeading =
    "text-[59px] tracking-[-2%]  @xl:text-[50px] @2xl:text-[59px] leading-[70px] @xl:leading-[50px] ";

  const styleText1 =
    "text-[23px] tracking-[-1.6px] leading-[18px] font-abhaya-libre font-bold no-underline text-[#161c26ff] whitespace-pre-wrap";
  const styleText2 =
    "text-[23px] tracking-[-1.6px] leading-[18px] font-abhaya-libre font-bold no-underline text-[#f9655eff] whitespace-pre-wrap";
  const styleText3 =
    "text-[23px] tracking-[-1.6px] leading-[18px] font-abhaya-libre font-bold no-underline text-[#161c26ff] whitespace-pre-wrap";
  const styleText4 =
    "text-[23px] tracking-[-0.48px] leading-[28px] font-abhaya-libre font-normal no-underline text-[black] whitespace-normal ";
  const styleText5 =
    "text-[17px] tracking-[-0.36px] leading-[18px] font-abhaya-libre font-bold no-underline text-[#ffffff] whitespace-nowrap";
  const styleText6 =
    "text-[17px] tracking-[-0.36px] leading-[18px] font-abhaya-libre font-bold no-underline text-[#f9655eff] whitespace-nowrap";

  return (
    <div className="   relative   p-[0px] box-border">
      <div className=" @container min-h-[100vh]  w-full box-border   opacity-[1] z-[1]  rotate-[0deg]    flex flex-col md:flex-row justify-center items-center gap-[48px] p-[10px_0px_10px__0px] bg-[#ffffffff]  ">
        {/* Splash Text1 */}
        <section className="  @container  @xl:px-[40px] @4xl:px-[120px] leading-[75px]     w-full  @4xl:w-[50%]  box-border  opacity-[1] z-[0]  rotate-[0deg]   flex flex-col  justify-start items-start gap-[32px] p-[20px_20px_20px__20px]  ">
          <div className="  w-full box-border  opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[8px] p-[0px_0px_0px__0px]  ">
            <div className="  w-full box-border  opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
              <span className={`${styleText1} text-[75px] ${fontLeading}`}>{text1}</span>
              <span className={`${styleText2} text-[75px] ${fontLeading}`}>{text2}</span>
              <span className={`${styleText3} text-[75px] ${fontLeading}`}>{text3}</span>
            </div>
            <div className=" max-w-[542px] w-full box-border min-h-[36px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
              <span className={`${styleText4}`}>{text4}</span>
            </div>
          </div>
          <div className=" max-w-[334px] box-border  opacity-[1] z-[1]  rotate-[0deg]   flex justify-start items-start gap-[8px] p-[0px_0px_0px__0px]  ">
            <div className=" w-[146px] box-border min-h-[61px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[8px] p-[20px_0px_20px__0px] rounded-tl-[99px] rounded-tr-[99px] rounded-br-[99px] rounded-bl-[99px] bg-[#f9655eff]  ">
              <div className=" w-[20px] max-w-[100%] min-h-[20px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden  ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-sep-2024%2Fashishverma1726137724162%2Fimage-2081-1196.png?alt=media&token=0"
                  className="absolute  top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-transparent bg-center object-cover"
                  alt="Mask group1 Image"
                />{" "}
              </div>
              <div className="w-[72px] box-border min-h-[21px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className={` ${styleText5} `}>{text5}</span>
              </div>
            </div>
            <div className=" w-[146px] min-h-[61px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[8px] p-[20px_0px_20px__0px] rounded-tl-[99px] rounded-tr-[99px] rounded-br-[99px] rounded-bl-[99px] box-border border-l-[1.399999976158142px] border-l-[#f9655eff] border-r-[1.399999976158142px] border-r-[#f9655eff] border-t-[1.399999976158142px] border-t-[#f9655eff] border-b-[1.399999976158142px] border-b-[#f9655eff]  ">
              <div className=" w-[20px] max-w-[100%] min-h-[20px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden  ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-sep-2024%2Fashishverma1726137724162%2Fimage-2081-1201.png?alt=media&token=0"
                  className="absolute  top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-transparent bg-center object-cover"
                  alt="Mask group1 Image"
                />{" "}
              </div>
              <div className=" max-w-[86px] w-full box-border min-h-[21px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className={` ${styleText6} `}>{text6}</span>
              </div>
            </div>
          </div>
        </section>
        {/* human-dog-relation1 */}
        <div className=" w-max-[583px]  rotate-[0deg]">
          <img src={HumanDog} alt="human-dog-image" />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
