import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

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
      <div className=" max-w-[1440px] w-full box-border min-h-[974px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-center gap-[60px] p-[20px_0px_20px__0px] bg-[#feedecff]  ">
        <div className=" max-w-[993px] w-full  @container opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px] box-border [-webkit-text-stroke:1px_#000000ff] bg-clip-text [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]  ">
          <span className="how-does-petize-20391209-0 @xs:text-[25px]  @xl:text-[30px] @4xl:text-[59px] @xs:leading-[25px] @xl:leading-[35px] @4xl:leading-[50px] ">{text1}</span>
        </div>
        {/* Frame 661 */}
        <section className="  @container max-w-[1200px] w-full box-border min-h-[554px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-wrap justify-center items-start gap-[48px] p-[0px_0px_0px__0px]  ">
          <div className=" max-w-[368px] w-full box-border min-h-[524px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-start p-[0px_0px_0px__0px]  ">
            <div className=" max-w-[368px] w-full box-border min-h-[280px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-center gap-[10px] p-[28px_0px_28px__0px]  ">
              <div className="  w-[225.07px] min-h-[224px] opacity-[1] z-[0]  rotate-[0deg]  ">
                <div className=" w-[225.07px] max-w-[100%] min-h-[224px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-20391214 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
                <div className=" w-[130.66px] max-w-[100%] min-h-[130.76px] top-[12.77px] left-[80.62px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-20391215 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
                <div className=" w-[63.85px] max-w-[100%] min-h-[43.79px] top-[70.45px] left-[113.97px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-20391216 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
                <div className=" w-[22.01px] max-w-[100%] min-h-[29.41px] top-[55.43px] left-[168.09px] opacity-[1] z-[3]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-20391217 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
                <div className=" w-[24.47px] max-w-[100%] min-h-[32.65px] top-[36.54px] left-[146.28px] opacity-[1] z-[4]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-20391218 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
                <div className=" w-[22.02px] max-w-[100%] min-h-[29.39px] top-[55.46px] left-[101.61px] opacity-[1] z-[5]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-20391219 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
                <div className=" w-[24.46px] max-w-[100%] min-h-[32.65px] top-[36.54px] left-[121.04px] opacity-[1] z-[6]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-20391220 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
            <div className=" max-w-[368px] w-full box-border min-h-[244px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[12px] p-[20px_0px_20px__0px]  ">
              <div className=" max-w-[162px] w-full box-border min-h-[42px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="easy-browsing-20391222-0 ">{text2}</span>
              </div>
              <div className=" max-w-[368px] w-full box-border min-h-[150px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="effortlessly-ex-20391223-0 ">{text3}</span>
              </div>
            </div>
          </div>
          <div className=" max-w-[368px] w-full box-border min-h-[554px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-start p-[0px_0px_0px__0px]  ">
            <div className=" max-w-[362px] w-full box-border min-h-[280px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-nowrap justify-center items-center gap-[10px] p-[28px_0px_28px__0px]  ">
              <div className=" w-[180px] min-h-[224px] opacity-[1] z-[0]  rotate-[0deg]  ">
                <div className=" w-[180px] min-h-[41.38px] top-[96.94px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                  <div className=" w-[180px] max-w-[100%] min-h-[41.38px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                    <div className="nodeBg-20391228 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
                <div className=" w-[154.04px] min-h-[90.74px] top-[133.26px] left-[12.98px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
                  <div className=" w-[154.04px] max-w-[100%] min-h-[90.74px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                    <div className="nodeBg-20391230 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
                <div className=" w-[91.72px] min-h-[87.21px] top-[0px] left-[44.14px] opacity-[1] z-[2]  rotate-[0deg]   absolute ">
                  <div className=" w-[91.72px] max-w-[100%] min-h-[87.21px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                    <div className="nodeBg-20391232 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
                <div className=" w-[20.56px] min-h-[15.4px] top-[50.12px] left-[79.72px] opacity-[1] z-[3]  rotate-[0deg]   absolute ">
                  <div className=" w-[20.56px] max-w-[100%] min-h-[15.4px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                    <div className="nodeBg-20391234 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
                <div className=" w-[41.06px] min-h-[12.06px] top-[60.46px] left-[69.47px] opacity-[1] z-[4]  rotate-[0deg]   absolute ">
                  <div className=" w-[23.18px] min-h-[12.06px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                    <div className=" w-[23.18px] max-w-[100%] min-h-[12.06px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                      <div className="nodeBg-20391237 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                  <div className=" w-[23.18px] min-h-[12.06px] top-[0px] left-[17.88px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
                    <div className=" w-[23.18px] max-w-[100%] min-h-[12.06px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                      <div className="nodeBg-20391239 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
                <div className=" w-[15.43px] min-h-[14.66px] top-[33.97px] left-[67.42px] opacity-[1] z-[5]  rotate-[0deg]   absolute ">
                  <div className=" w-[15.43px] max-w-[100%] min-h-[14.66px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                    <div className="nodeBg-20391241 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
                <div className=" w-[15.43px] min-h-[14.66px] top-[33.97px] left-[97.16px] opacity-[1] z-[6]  rotate-[0deg]   absolute ">
                  <div className=" w-[15.43px] max-w-[100%] min-h-[14.66px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                    <div className="nodeBg-20391243 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
                <div className=" w-[32.84px] min-h-[23.46px] top-[17.23px] left-[49.02px] opacity-[1] z-[7]  rotate-[0deg]   absolute ">
                  <div className=" w-[32.84px] max-w-[100%] min-h-[23.46px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                    <div className="nodeBg-20391245 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
                <div className=" w-[32.84px] min-h-[23.46px] top-[17.23px] left-[98.13px] opacity-[1] z-[8]  rotate-[0deg]   absolute ">
                  <div className=" w-[32.84px] max-w-[100%] min-h-[23.46px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                    <div className="nodeBg-20391247 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
                <div className=" w-[15.24px] min-h-[24.87px] top-[0px] left-[53.92px] opacity-[1] z-[9]  rotate-[0deg]   absolute ">
                  <div className=" w-[15.23px] max-w-[100%] min-h-[24.87px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                    <div className="nodeBg-20391249 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
                <div className=" w-[15.24px] min-h-[24.87px] top-[0px] left-[110.85px] opacity-[1] z-[10]  rotate-[0deg]   absolute ">
                  <div className=" w-[15.24px] max-w-[100.01%] min-h-[24.87px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                    <div className="nodeBg-20391251 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
                <div className=" w-[84.92px] min-h-[32.11px] top-[69.9px] left-[47.54px] opacity-[1] z-[11]  rotate-[0deg]   absolute ">
                  <div className=" w-[84.92px] max-w-[100%] min-h-[32.11px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                    <div className="nodeBg-20391253 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
                <div className=" w-[55.66px] min-h-[48px] top-[155px] left-[62.1px] opacity-[1] z-[12]  rotate-[0deg]   absolute ">
                  <div className=" w-[55.66px] max-w-[100%] min-h-[48px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                    <div className="nodeBg-20391255 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
                <div className=" w-[122.8px] min-h-[64.67px] top-[146.29px] left-[28.6px] opacity-[1] z-[13]  rotate-[0deg]   absolute ">
                  <div className=" w-[122.8px] min-h-[14.8px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                    <div className=" w-[31.26px] min-h-[14.8px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                      <div className=" w-[31.26px] min-h-[5.07px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                        <div className=" w-[31.26px] max-w-[100%] min-h-[5.07px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                          <div className="nodeBg-20391260 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                      <div className=" w-[21.02px] min-h-[5.07px] top-[9.73px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
                        <div className=" w-[21.02px] max-w-[100%] min-h-[5.07px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                          <div className="nodeBg-20391262 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                    </div>
                    <div className=" w-[31.26px] min-h-[14.8px] top-[0px] left-[91.54px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
                      <div className=" w-[31.26px] min-h-[5.07px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                        <div className=" w-[31.26px] max-w-[100%] min-h-[5.07px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                          <div className="nodeBg-20391265 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                      <div className=" w-[21.02px] min-h-[5.07px] top-[9.73px] left-[10.24px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
                        <div className=" w-[21.02px] max-w-[100%] min-h-[5.07px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                          <div className="nodeBg-20391267 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" w-[122.8px] min-h-[14.8px] top-[49.87px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
                    <div className=" w-[31.26px] min-h-[14.8px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                      <div className=" w-[31.26px] min-h-[5.07px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                        <div className=" w-[31.26px] max-w-[100%] min-h-[5.07px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                          <div className="nodeBg-20391271 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                      <div className=" w-[21.02px] min-h-[5.07px] top-[9.73px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
                        <div className=" w-[21.02px] max-w-[100%] min-h-[5.07px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                          <div className="nodeBg-20391273 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                    </div>
                    <div className=" w-[31.26px] min-h-[14.8px] top-[0px] left-[91.54px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
                      <div className=" w-[31.26px] min-h-[5.07px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                        <div className=" w-[31.26px] max-w-[100%] min-h-[5.07px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                          <div className="nodeBg-20391276 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                      <div className=" w-[21.02px] min-h-[5.07px] top-[9.73px] left-[10.24px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
                        <div className=" w-[21.02px] max-w-[100%] min-h-[5.07px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                          <div className="nodeBg-20391278 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-[59.83px] min-h-[14.42px] top-[50.3px] left-[60.08px] opacity-[1] z-[14]  rotate-[0deg]   absolute ">
                  <div className=" w-[16.8px] min-h-[14.42px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                    <div className=" w-[16.8px] min-h-[9.74px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                      <div className=" w-[16.8px] max-w-[100%] min-h-[9.74px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                        <div className="nodeBg-20391282 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                    <div className=" w-[16.8px] min-h-[9.75px] top-[4.68px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
                      <div className=" w-[16.8px] max-w-[100%] min-h-[9.75px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                        <div className="nodeBg-20391284 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>
                  <div className=" w-[16.8px] min-h-[14.42px] top-[0px] left-[43.02px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
                    <div className=" w-[16.8px] min-h-[9.74px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   absolute ">
                      <div className=" w-[16.8px] max-w-[100%] min-h-[9.74px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                        <div className="nodeBg-20391287 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                    <div className=" w-[16.8px] min-h-[9.75px] top-[4.67px] left-[0px] opacity-[1] z-[1]  rotate-[0deg]   absolute ">
                      <div className=" w-[16.8px] max-w-[100%] min-h-[9.75px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                        <div className="nodeBg-20391289 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" max-w-[368px] w-full box-border min-h-[274px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[12px] p-[20px_0px_20px__0px]  ">
              <div className=" max-w-[303px] w-full box-border min-h-[42px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="seamless-adopti-20391291-0 ">{text4}</span>
              </div>
              <div className=" max-w-[368px] w-full box-border min-h-[180px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
                <span className="experience-a-ha-20391292-0 ">{text5}</span>
              </div>
            </div>
          </div>
          <div className=" max-w-[368px] w-full box-border min-h-[554px] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-start p-[0px_0px_0px__0px]  ">
            <div className=" max-w-[368px] w-full box-border min-h-[280px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-nowrap justify-center items-center gap-[10px] p-[28px_0px_28px__0px]  ">
              <div className=" w-[152.81px] min-h-[224px] opacity-[1] z-[0]  rotate-[0deg]  ">
                <div className=" w-[106.79px] max-w-[100%] min-h-[91px] top-[45.5px] left-[23.2px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-20391296 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
                <div className=" w-[17.28px] max-w-[100%] min-h-[11.52px] top-[75.98px] left-[55.39px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-20391297 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
                <div className=" w-[18.26px] max-w-[100%] min-h-[11.93px] top-[75.61px] left-[79.89px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-20391298 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
                <div className=" w-[152.81px] max-w-[100%] min-h-[224px] top-[0px] left-[0px] opacity-[1] z-[3]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-20391299 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
                <div className=" w-[29.54px] max-w-[100%] min-h-[26.99px] top-[155.12px] left-[26.66px] opacity-[1] z-[4]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-20391300 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
                <div className=" w-[29.62px] max-w-[100%] min-h-[26.88px] top-[155.12px] left-[61.63px] opacity-[1] z-[5]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-20391301 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
                <div className=" w-[29.78px] max-w-[100%] min-h-[26.99px] top-[155.12px] left-[96.66px] opacity-[1] z-[6]  rotate-[0deg] overflow-hidden   absolute ">
                  <div className="nodeBg-20391302 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
            <div className=" max-w-[368px] w-full box-border min-h-[274px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[12px] p-[20px_0px_20px__0px]  ">
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
