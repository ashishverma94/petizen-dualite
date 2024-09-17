import React from "react";
import "./css/style.css";
import texts from "./data/texts";
import images from "./data/images";

const Footer = ({
  image1 =  images.image1,
  text1 = texts.text1,
  text2 = texts.text2,
  text3 = texts.text3,
  text4 = texts.text4,
  text5 = texts.text5,
  text6 = texts.text6,
  text7 = texts.text7,
  text8 = texts.text8,
}) => {
  const test = "bg-[skyblue] @xs:bg-[red] @xl:bg-[yellow] @4xl:bg-[blue]";
  const fontLeading =
    "text-[35px]  @xl:text-[40px] @4xl:text-[59px] leading-[69px] ";
  return (
    <div className="wrapper-div-20561244 relative m-auto p-[0px] box-border">
      <div className=" w-full py-[80px] box-border opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-center gap-[80px] p-[20px_0px_20px__0px] bg-[#f9655eff]  ">
        {/* Frame 61 */}
        <marquee direction="right" scrollamount="5">
          <section className=" @container   w-full box-border  opacity-[1] z-[0]  rotate-[0deg] flex justify-center items-center gap-[6px] p-[0px_0px_0px__0px]  ">
            <div className=" box-border  opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
              <span className={`pet-adoption-20561246-0 ${fontLeading}`}>
                {text1}
              </span>
            </div>
            <div className=" box-border  opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
              <span className={`petizen-20561247-0 ${fontLeading}`}>
                {text2}
              </span>
            </div>
            <div className=" box-border  opacity-[1] z-[2]  rotate-[0deg]   text-left leading-[0px]  ">
              <span className={`pet-adoption-20561248-0 ${fontLeading} `}>
                {text3}
              </span>
            </div>
            <div className=" box-border  opacity-[1] z-[3]  rotate-[0deg]   text-left leading-[0px]  ">
              <span className={`petizen-20561249-0 ${fontLeading}`}>
                {text4}
              </span>
            </div>
          </section>
        </marquee>
        {/* Frame 811 */}
        <section className="   max-w-[1400px]  w-full box-border min-h-[140px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col md:flex-row md:justify-between justify-center items-center content-space-between p-[0px_80px_0px__80px]  ">
          <div className=" max-w-[600px] w-full box-border min-h-[140px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col md:flex-row md:justify-between justify-center items-center gap-[20px] p-[0px_0px_0px__0px]  ">
            <div className=" w-[140px] min-w-[140px]  min-h-[140px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden rounded-tl-[28px] rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] bg-[#ffffffff]  ">
              <div className=" w-[100px] max-w-[100%] min-h-[100px] top-[19.91px] left-[20px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden   absolute ">
                <img
                  src={`${image1}`}
                  className="absolute  bg-transparent bg-center  bg-no-repeat w-full h-full bg-cover nodeBg-20561253 "
                  alt="image 171 Image"
                />{" "}
              </div>
            </div>
            <div className=" max-w-[400px] w-full box-border min-h-[125px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[20px] p-[0px_0px_0px__0px]  ">
              <div className=" flex justify-center md:justify-start @container w-full box-border min-h-[44px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className={`  get-started-tod-20561255-0 ${fontLeading} `}>{text5}</span>
              </div>
              <div className=" max-w-[400px] w-full box-border min-h-[61px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-center items-start gap-[8px] p-[0px_0px_0px__0px]  ">
                <div className=" max-w-[196px] w-full min-h-[61px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[8px] p-[20px_0px_20px__0px] rounded-tl-[99px] rounded-tr-[99px] rounded-br-[99px] rounded-bl-[99px] box-border border-l-[1.399999976158142px] border-l-[#ffffffff] border-r-[1.399999976158142px] border-r-[#ffffffff] border-t-[1.399999976158142px] border-t-[#ffffffff] border-b-[1.399999976158142px] border-b-[#ffffffff]  ">
                  <div className=" w-[20px] max-w-[100%] min-h-[20px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden  ">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-sep-2024%2Fashishverma1726137724162%2Fimage-2056-1258.png?alt=media&token=0"
                      className="absolute  top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-transparent bg-center object-cover"
                      alt="Mask group1 Image"
                    />{" "}
                  </div>
                  <div className=" max-w-[72px] w-full box-border min-h-[21px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
                    <span className="app-store-20561261-0 ">{text6}</span>
                  </div>
                </div>
                <div className=" max-w-[196px] w-full min-h-[61px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[8px] p-[20px_0px_20px__0px] rounded-tl-[99px] rounded-tr-[99px] rounded-br-[99px] rounded-bl-[99px] box-border border-l-[1.399999976158142px] border-l-[#ffffffff] border-r-[1.399999976158142px] border-r-[#ffffffff] border-t-[1.399999976158142px] border-t-[#ffffffff] border-b-[1.399999976158142px] border-b-[#ffffffff]  ">
                  <div className=" w-[20px] max-w-[100%] min-h-[20px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden  ">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-sep-2024%2Fashishverma1726137724162%2Fimage-2056-1263.png?alt=media&token=0"
                      className="absolute  top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-transparent bg-center object-cover"
                      alt="Mask group1 Image"
                    />{" "}
                  </div>
                  <div className=" max-w-[112px] w-full box-border min-h-[21px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
                    <span className="google-play-20561266-0 ">{text7}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" max-w-[140px] w-full box-border min-h-[82px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[60px] p-[0px_0px_0px__0px]  ">
            <div className=" max-w-[139px] w-full box-border min-h-[82px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[36px] p-[0px_0px_0px__0px]  ">
              <div className=" pt-4 max-w-[128px] w-full box-border min-h-[24px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-nowrap justify-start items-center gap-[28px] p-[0px_0px_0px__0px]  ">
                <div className=" w-[24px] max-w-[100%] min-h-[24px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden  ">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-sep-2024%2Fashishverma1726137724162%2Fimage-2056-1270.png?alt=media&token=0"
                    className="absolute  top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-transparent bg-center object-cover"
                    alt="Mask group1 Image"
                  />{" "}
                </div>
                <div className=" w-[24px] max-w-[100%] min-h-[24px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden  ">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-sep-2024%2Fashishverma1726137724162%2Fimage-2056-1273.png?alt=media&token=0"
                    className="absolute  top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-transparent bg-center object-cover"
                    alt="Mask group2 Image"
                  />{" "}
                </div>
                <div className=" w-[24px] max-w-[100%] min-h-[24px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden  ">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F12-sep-2024%2Fashishverma1726137724162%2Fimage-2056-1276.png?alt=media&token=0"
                    className="absolute  top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-transparent bg-center object-cover"
                    alt="Mask group3 Image"
                  />{" "}
                </div>
              </div>
              <div className=" max-w-[139px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="infopetizencom-20561279-0 ">{text8}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Footer;
