import React from "react";

import { Img, Text, Input, Button, List } from "components";

const BlogPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-segoeui items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col gap-[120px] md:gap-[40px] sm:gap-[40px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
          <div className="sm:h-[1245px] md:h-[1560px] h-[2235px] relative w-[100%]">
            <div className="absolute sm:h-[1096px] md:h-[758px] h-[839px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
              <div className="sm:h-[1096px] md:h-[758px] h-[839px] mb-[auto] mt-[] mx-[auto] overflow-visible pb-[10px] pl-[100px] pr-[100px] pt-[100px] px-[100px] static w-[100%]">
                <div className="absolute bg-gray_900 flex flex-row gap-[2px] gap-x-[2px] gap-y-[2px] inset-x-[0] items-center justify-start ml-[10px] mr-[auto] mt-[] p-[21px] sm:px-[20px] top-[0] w-[100%]">
                  <Img
                    src="images/img_autofixerlogocropped.png"
                    className="bottom-[5px] sm:bottom-[7px] flex flex-row gap-[1px] gap-x-[1px] gap-y-[1px] h-[58px] md:h-[auto] sm:h-[auto] items-center justify-center left-[-17px] max-h-[538px] max-w-[100px] sm:mb-[10px] mb-[16px] md:mb-[81px] min-h-[50px] min-w-[50px] sm:ml-[37px] md:ml-[60px] ml-[71px] md:mr-[11px] sm:mr-[12px] sm:mt-[16px] md:mt-[3px] mt-[4px] object-cover overflow-visible md:pb-[0] pb-[10px] pl-[10px] pr-[10px] md:pr-[11px] pt-[1px] sm:pt-[1px] md:pt-[5px] px-[10px] relative sm:relative sm:right-[10px] right-[9px] sm:top-[-20px] top-[] sm:w-[100%] w-[100px]"
                    alt="Autofixerlogocropped"
                  />
                </div>
                <Img
                  src="images/img_rectangle4.png"
                  className="absolute sm:bottom-[-1px] bottom-[0] sm:h-[60%] h-[738px] inset-x-[0] sm:left-[-2px] m-[10px] sm:max-h-[60%] mb-[10px] sm:mb-[345px] ml-[10px] sm:ml-[12px] mr-[10px] sm:mr-[30px] mt-[10px] sm:mt-[13px] object-cover sm:overflow-auto sm:pb-[167px] pb-[75px] sm:pl-[-3px] pl-[1px] sm:pr-[13px] pr-[1px] pt-[10px] sm:pt-[61px] px-[1px] sm:right-[1px] sm:top-[] w-[100%] sm:w-[100%]"
                  alt="RectangleFour"
                />
              </div>
              <div
                className="absolute bg-cover bg-no-repeat sm:bottom-[5px] flex flex-row gap-[10px] gap-x-[10px] gap-y-[10px] h-[20%] items-center justify-center sm:left-[] max-h-[20%] max-w-[89%] mb-[10px] md:mb-[15px] min-h-[10%] ml-[11px] md:ml-[15px] md:mr-[-110px] mr-[-78px] mt-[-5px] md:mt-[1px] overflow-visible pb-[1px] sm:pb-[1px] pl-[15px] sm:pl-[18px] pr-[118px] pt-[13px] sm:right-[-30px] right-[5%] top-[5px] sm:top-[5px] w-[89%]"
                style={{ backgroundImage: "url('images/img_group7.png')" }}
              >
                <header className="flex items-center justify-center w-[100%]">
                  <div className="flex flex-1 flex-col gap-[40px] items-center justify-center mb-[1px] ml-[0] mr-[22px] mt-[4px] pl-[66px] pr-[3px] pt-[2px] w-[100%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between md:ml-[0] sm:ml-[0] ml-[75px] md:w-[100%] sm:w-[100%] w-[93%]">
                      <Text
                        className="font-semibold sm:mb-[12px] mb-[2px] md:mb-[65px] md:ml-[180px] sm:ml-[210px] md:mr-[10px] sm:mr-[30px] sm:mt-[-40px] md:mt-[-91px] mt-[9px] sm:overflow-visible sm:pb-[] sm:pl-[50px] sm:pr-[-10px] sm:pt-[10px] sm:relative sm:right-[3px] sm:text-[15px] text-left text-white_A700 sm:top-[-6px] sm:w-[150px] w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        24/7 SUPPORT 07045543003
                      </Text>
                      <Img
                        src="images/img_frame2.svg"
                        className="h-[32px] w-[auto]"
                        alt="FrameTwo"
                      />
                    </div>
                    <ul className="flex md:flex-col sm:flex-col flex-row gap-[24px] md:hidden sm:hidden items-start justify-start mr-[40px] md:w-[100%] sm:w-[100%] w-[96%] common-row-list common-row-list common-row-list common-row-list common-row-list common-row-list common-row-list common-row-list common-row-list common-row-list common-row-list common-row-list common-row-list common-row-list common-row-list common-row-list common-row-list">
                      <li className="mt-[5px] mb-[27px] w-[auto] text-[16px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-bold hover:h-[undefinedpx] text-[16px] text-left text-white_A700 hover:w-[undefinedpx]"
                          rel="noreferrer"
                        >
                          HOME
                        </a>
                      </li>
                      <li className="mb-[22px] ml-[24px] w-[14%]">
                        <div className="flex flex-row items-end justify-start">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-bold hover:h-[undefinedpx] mb-[3px] mt-[7px] text-[16px] text-left text-white_A700 w-[auto] hover:w-[undefinedpx]"
                            rel="noreferrer"
                          >
                            COMPANY
                          </a>
                          <Img
                            src="images/img_materialsymbol.svg"
                            className="h-[32px] hidden text-[16px] w-[32px]"
                            alt="materialsymbol"
                          />
                        </div>
                      </li>
                      <li className="mb-[22px] ml-[24px] w-[13%]">
                        <div className="flex flex-row items-end justify-start">
                          <a
                            href={"javascript:"}
                            className="cursor-pointer font-bold hover:h-[undefinedpx] mb-[3px] mt-[7px] text-[16px] text-left text-white_A700 w-[auto] hover:w-[undefinedpx]"
                            rel="noreferrer"
                          >
                            SERVICES
                          </a>
                          <Img
                            src="images/img_materialsymbol.svg"
                            className="h-[32px] hidden w-[32px]"
                            alt="materialsymbol One"
                          />
                        </div>
                      </li>
                      <li className="ml-[24px] w-[auto] text-[16px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-bold hover:h-[undefinedpx] text-[16px] text-left text-white_A700 hover:w-[undefinedpx]"
                          rel="noreferrer"
                        >
                          GET A<br />
                          QUOTE
                        </a>
                      </li>
                      <li className="mt-[5px] mb-[27px] ml-[24px] w-[auto] text-[16px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-bold hover:h-[undefinedpx] text-[16px] text-left text-white_A700 hover:w-[undefinedpx]"
                          rel="noreferrer"
                        >
                          VIDEOS
                        </a>
                      </li>
                      <li className="mt-[5px] mb-[27px] ml-[24px] w-[auto] text-[16px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-bold hover:h-[undefinedpx] text-[16px] text-left text-white_A700 hover:w-[undefinedpx]"
                          rel="noreferrer"
                        >
                          BOOKING
                        </a>
                      </li>
                      <li className="mt-[5px] mb-[27px] ml-[24px] w-[auto] text-[16px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-bold hover:h-[undefinedpx] text-[16px] text-left text-white_A700 hover:w-[undefinedpx]"
                          rel="noreferrer"
                        >
                          .FIX
                        </a>
                      </li>
                      <li className="mt-[5px] mb-[27px] ml-[24px] w-[auto] text-[16px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-bold hover:h-[undefinedpx] text-[16px] text-left text-white_A700 hover:w-[undefinedpx]"
                          rel="noreferrer"
                        >
                          CONTACT
                        </a>
                      </li>
                      <li className="w-[99px] overflow-visible font-bold text-[16px] static mb-[1px] mr-[1px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-bold hover:h-[undefinedpx] mb-[1px] ml-[] mr-[1px] mt-[] overflow-visible static text-[16px] text-left text-white_A700 top-[] w-[99px] hover:w-[undefinedpx]"
                          rel="noreferrer"
                        >
                          SIGN UP/
                          <br />
                          SIGN IN
                        </a>
                      </li>
                    </ul>
                  </div>
                </header>
              </div>
            </div>
            <div className="absolute bg-white_A700 bottom-[0] flex sm:flex flex-col sm:h-[50%] inset-x-[0] items-center justify-end sm:max-h-[50%] sm:max-w-[85%] sm:mb-[-95px] sm:ml-[] sm:mt-[1px] mx-[auto] p-[86px] sm:pb-[93px] sm:pl-[] sm:pr-[] sm:pt-[] md:px-[40px] shadow-bs w-[85%]">
              <Text
                className="sm:font-semibold sm:mb-[-14px] mt-[34px] sm:pb-[39px] sm:pr-[] sm:relative sm:text-[20px] text-center text-gray_900 sm:top-[-100px]"
                as="h1"
                variant="h1"
              >
                HOW TO FIX YOUR CAR
                <br />
                IN THE ABSENCE OF A MECHANIC.
              </Text>
              <div className="flex flex-row items-start justify-center mt-[35px] sm:relative sm:top-[-100px] md:w-[100%] sm:w-[100%] w-[32%]">
                <Text
                  className="font-bold text-black_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  <span className="text-black_900_4c text-[16px] font-segoeui font-semibold">
                    BY
                  </span>
                  <span className="text-black_900 text-[16px] font-segoeui font-semibold">
                    {" "}
                    AUTOFIXER /
                  </span>
                </Text>
                <Text
                  className="font-semibold ml-[21px] text-black_900_4c text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  JAN, 2023 /
                </Text>
                <Text
                  className="font-semibold hidden ml-[20px] text-black_900_4c text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  2 MINS READ
                </Text>
              </div>
              <Text
                className="font-normal sm:h-[100%] sm:max-h-[100%] sm:max-w-[100%] sm:mb-[-226px] sm:ml-[] sm:mt-[11px] mt-[37px] sm:pb-[-7px] sm:pl-[1px] sm:pr-[1px] sm:pt-[1px] sm:px-[1px] sm:relative text-black_900 text-center sm:top-[-100px] sm:w-[100%]"
                as="h4"
                variant="h4"
              >
                Lorem ipsum dolor sit amet consectetur. Hendrerit sed facilisis
                rhoncus suspendisse in tincidunt velit amet nibh. Sit massa
                tincidunt id ultrices id a. Sit et nisl lacus sit dictum eu
                turpis senectus tristique. Mi quam tempus feugiat et quam. Orci
                morbi placerat venenatis sem urna habitasse.
                <br />
                Suspendisse urna in sed amet massa metus vitae odio. Aliquam
                integer diam scelerisque iaculis adipiscing imperdiet egestas
                mattis quam. Nunc eget congue sed elementum in nisi egestas.
                Laoreet cras at morbi in. Nibh ante in gravida faucibus.
                Fermentum urna nibh amet enim adipiscing tincidunt. Aliquam
                varius accumsan quisque neque ultrices risus.
                <br />
                Elit penatibus iaculis vitae eget bibendum mi. Ornare est magna
                amet elit accumsan tincidunt enim in. Posuere quis tortor
                tincidunt cursus ornare luctus et sed. Ut aliquet non vel
                ultrices consequat at lobortis phasellus. Fusce pellentesque
                massa massa pharetra. Orci neque pretium nulla volutpat tellus
                fringilla vestibulum. Ornare morbi vulputate a et orci velit
                nibh lacus. Lorem dolor molestie tortor commodo tincidunt.
                Pellentesque commodo fames tortor tristique mollis in tincidunt
                sit. Habitant eget ullamcorper tincidunt eleifend hac sed donec.
                Gravida tortor et ut laoreet sed faucibus pellentesque.
                Tincidunt elit phasellus id{" "}
              </Text>
              <Img
                src="images/img_rectangle5.png"
                className="sm:h-[40%] h-[502px] sm:max-h-[40%] sm:max-w-[100%] sm:ml-[] sm:mr-[] mt-[41px] sm:mt-[79px] object-cover sm:pb-[11px] sm:pl-[34px] sm:pr-[33px] sm:pt-[43px] sm:relative sm:top-[-100px] md:w-[100%] sm:w-[100%] w-[78%]"
                alt="RectangleFive"
              />
            </div>
          </div>
          <div className="bg-gray_200 flex flex-col items-center justify-end mb-[10px] md:ml-[0] sm:ml-[0] ml-[10px] mr-[10px] mt-[-10px] mx-[10px] p-[90px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[64px] items-center justify-start md:w-[100%] sm:w-[100%] w-[48%]">
              <div className="flex flex-col gap-[40px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[51%]">
                  <Text
                    className="overflow-visible text-[30px] text-center text-gray_900 w-[500px]"
                    as="h2"
                    variant="h2"
                  >
                    LEAVE A COMMENT
                  </Text>
                  <Text
                    className="font-normal text-gray_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Be a part of the community
                  </Text>
                </div>
                <div className="flex flex-col gap-[40px] items-center justify-start sm:pb-[-7px] sm:pl-[1px] sm:pr-[1px] sm:pt-[-7px] sm:px-[1px] sm:py-[-7px] rounded-bl-[40px] rounded-br-[40px] rounded-radius40 rounded-tl-[40px] rounded-tr-[40px] md:w-[100%] sm:w-[100%] w-[150%]">
                  <Text
                    className="bg-white_A700_e2 border-none flex flex-row font-normal h-[96px] items-center justify-center md:max-w-[100%] sm:max-w-[100%] max-w-[654px] md:ml-[0] ml-[10px] sm:ml-[1px] mt-[10px] sm:mt-[12px] sm:p-[10px] sm:pb-[10px] pb-[] sm:pl-[10px] pl-[] sm:pr-[10px] pr-[] sm:pt-[10px] pt-[] relative rounded-bl-[40px] rounded-br-[40px] rounded-radius40 rounded-tl-[40px] rounded-tr-[40px] text-black_900_75 text-left w-[250%] sm:w-[425px]"
                    as="h4"
                    variant="h4"
                  >
                    Name
                  </Text>
                  <Input
                    className="bg-white_A700 border-none bottom-[1px] md:bottom-[5px] flex md:flex flex-row md:flex-row font-medium h-[100px] md:h-[96px] items-center md:items-center justify-center md:justify-center leading-[normal] left-[1px] md:left-[5px] max-h-[10px] md:max-h-[200px] max-w-[79px] mb-[30px] md:mb-[] md:min-h-[10px] min-h-[5px] min-w-[50%] sm:ml-[0] md:ml-[103px] ml-[75px] mr-[10px] md:mr-[] mt-[100px] md:mt-[] overflow-visible md:overflow-visible pb-[39px] md:pb-[] pl-[30px] md:pl-[70px] pr-[20px] md:pr-[50px] pt-[39px] md:pt-[] py-[39px] md:relative right-[3px] rounded-bl-[50px] md:rounded-bl-[50px] rounded-br-[50px] md:rounded-br-[50px] rounded-radius50 md:rounded-radius50 rounded-tl-[50px] md:rounded-tl-[50px] rounded-tr-[50px] md:rounded-tr-[50px] static sm:text-[20px] md:text-[22px] text-[24px] text-black_900 placeholder:text-black_900_75 text-left md:top-[10px] top-[2px] sm:w-[100%] md:w-[654px] w-[79%]"
                    wrapClassName="w-[100%]"
                    name="GroupEleven"
                    placeholder="Write a comment"
                  ></Input>
                  <Button className="cursor-pointer font-normal leading-[normal] mt-[60px] overflow-visible rounded-bl-[20px] sm:rounded-bl-[50px] rounded-br-[20px] sm:rounded-br-[50px] rounded-radius20 sm:rounded-radius50 rounded-tl-[20px] sm:rounded-tl-[50px] rounded-tr-[20px] sm:rounded-tr-[50px] sticky text-[30px] sm:text-[32px] md:text-[34px] text-center text-white_A700 w-[240px]">
                    SEND
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[32px] h-[224px] md:h-[auto] sm:h-[auto] items-start justify-start max-w-[654px] mt-[-30px] w-[100%]">
                <List
                  className="flex-col gap-[32px] grid sm:w-[100%] w-[53%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row gap-[37px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_ellipse3.png"
                      className="h-[80px] md:h-[auto] sm:h-[auto] rounded-radius501 w-[80px]"
                      alt="EllipseThree"
                    />
                    <div className="flex flex-col gap-[14px] sm:gap-[1px] sm:gap-x-[1px] sm:gap-y-[1px] items-start justify-start w-[auto]">
                      <Text
                        className="sm:m-[10px] sm:mb-[10px] mb-[3px] md:ml-[0] ml-[10px] sm:ml-[10px] sm:mr-[10px] mr-[3px] sm:mt-[10px] mt-[3px] sm:my-[10px] my-[3px] p-[1px] pb-[1px] pl-[1px] pr-[1px] pt-[1px] text-black_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        <span className="sm:text-[20px] md:text-[22px] text-gray_900 text-[24px] font-segoeui font-semibold">
                          Big sully /
                        </span>
                        <span className="sm:text-[20px] md:text-[22px] text-black_900 text-[24px] font-segoeui font-semibold">
                          {" "}
                        </span>
                        <span className="text-black_900_4c text-[20px] font-segoeui font-semibold">
                          1hr ago
                        </span>
                      </Text>
                      <Text
                        className="flex flex-row font-normal items-center justify-center md:ml-[0] sm:ml-[0] ml-[10px] mt-[3px] text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        It was insightful, welldone
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[37px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_ellipse3_80x80.png"
                      className="h-[80px] md:h-[auto] sm:h-[auto] rounded-radius501 w-[80px]"
                      alt="EllipseThree One"
                    />
                    <div className="flex flex-col gap-[14px] sm:gap-[1px] sm:gap-x-[1px] sm:gap-y-[1px] items-start justify-start w-[auto]">
                      <Text
                        className="sm:m-[10px] sm:mb-[10px] md:ml-[0] ml-[10px] sm:ml-[10px] sm:mr-[10px] sm:mt-[10px] mt-[1px] sm:my-[10px] text-black_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        <span className="sm:text-[20px] md:text-[22px] text-gray_900 text-[24px] font-segoeui font-semibold">
                          Big sully /
                        </span>
                        <span className="sm:text-[20px] md:text-[22px] text-black_900 text-[24px] font-segoeui font-semibold">
                          {" "}
                        </span>
                        <span className="text-black_900_4c text-[20px] font-segoeui font-semibold">
                          1hr ago
                        </span>
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[10px] text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        It was insightful, welldone
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="flex flex-col items-center justify-end md:w-[100%] sm:w-[100%] w-[13%]">
                  <Img
                    src="images/img_ellipse3_80x80.png"
                    className="h-[80px] md:h-[auto] sm:h-[auto] hidden rounded-radius501 w-[80px]"
                    alt="EllipseThree Two"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[48px] items-center justify-start max-w-[1331px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="flex flex-col gap-[13px] items-center justify-start md:w-[100%] sm:w-[100%] w-[24%]">
              <Text
                className="capitalize text-[33px] text-black_900 text-center w-[auto]"
                as="h2"
                variant="h2"
              >
                RECENT ARTICLES
              </Text>
              <Text
                className="font-medium text-[30px] text-gray_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                A must read
              </Text>
            </div>
            <div className="md:gap-[20px] sm:gap-[20px] gap-[26px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
              <div className="flex flex-1 flex-col gap-[29px] items-center justify-start w-[100%]">
                <Img
                  src="images/img_rectangle5_502x645.png"
                  className="h-[502px] sm:h-[auto] object-cover w-[100%]"
                  alt="RectangleFive One"
                />
                <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] sm:w-[100%] w-[90%]">
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[61%]">
                    <Text
                      className="font-normal text-left text-red_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      AUTOFIXER ARTICLES
                    </Text>
                    <Text
                      className="mt-[18px] text-[26px] text-gray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      HOW TO USE BASIC TOOLS
                    </Text>
                    <Text
                      className="font-semibold mt-[27px] text-black_900_4c text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      JAN, 22, 2023{" "}
                    </Text>
                  </div>
                  <Text
                    className="font-normal text-black_900 text-center w-[100%]"
                    as="h4"
                    variant="h4"
                  >
                    {" "}
                    Laoreet cras at morbi in. Nibh ante in gravida faucibus.
                    Fermentum urna nibh amet enim adipiscing tincidunt. ....
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[29px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle6.png"
                    className="h-[502px] sm:h-[auto] object-cover w-[100%]"
                    alt="RectangleSix"
                  />
                  <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] sm:w-[100%] w-[90%]">
                    <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[61%]">
                      <Text
                        className="font-normal text-left text-red_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        AUTOFIXER ARTICLES
                      </Text>
                      <Text
                        className="mt-[18px] text-[26px] text-gray_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        HOW TO USE BASIC TOOLS
                      </Text>
                      <Text
                        className="font-semibold mt-[27px] text-black_900_4c text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        JAN, 22, 2023{" "}
                      </Text>
                    </div>
                    <Text
                      className="font-normal text-black_900 text-center w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      {" "}
                      Laoreet cras at morbi in. Nibh ante in gravida faucibus.
                      Fermentum urna nibh amet enim adipiscing tincidunt. ....
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[29px] items-center justify-start w-[100%]">
                <Img
                  src="images/img_rectangle5_502x645.png"
                  className="h-[502px] sm:h-[auto] object-cover w-[100%]"
                  alt="RectangleFive Two"
                />
                <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] sm:w-[100%] w-[90%]">
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[61%]">
                    <Text
                      className="font-normal text-left text-red_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      AUTOFIXER ARTICLES
                    </Text>
                    <Text
                      className="mt-[18px] text-[26px] text-gray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      HOW TO USE BASIC TOOLS
                    </Text>
                    <Text
                      className="font-semibold mt-[27px] text-black_900_4c text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      JAN, 22, 2023{" "}
                    </Text>
                  </div>
                  <Text
                    className="font-normal text-black_900 text-center w-[100%]"
                    as="h4"
                    variant="h4"
                  >
                    {" "}
                    Laoreet cras at morbi in. Nibh ante in gravida faucibus.
                    Fermentum urna nibh amet enim adipiscing tincidunt. ....
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[29px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle6.png"
                    className="h-[502px] sm:h-[auto] object-cover w-[100%]"
                    alt="RectangleSix One"
                  />
                  <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] sm:w-[100%] w-[90%]">
                    <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[61%]">
                      <Text
                        className="font-normal text-left text-red_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        AUTOFIXER ARTICLES
                      </Text>
                      <Text
                        className="mt-[18px] text-[26px] text-gray_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        HOW TO USE BASIC TOOLS
                      </Text>
                      <Text
                        className="font-semibold mt-[27px] text-black_900_4c text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        JAN, 22, 2023{" "}
                      </Text>
                    </div>
                    <Text
                      className="font-normal text-black_900 text-center w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      {" "}
                      Laoreet cras at morbi in. Nibh ante in gravida faucibus.
                      Fermentum urna nibh amet enim adipiscing tincidunt. ....
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex sm:flex font-inter items-center justify-center w-[100%]">
            <div className="bg-gray_900 sm:h-[1088px] md:h-[776px] h-[844px] mt-[120px] p-[116px] sm:px-[20px] md:px-[40px] relative w-[100%]">
              <div className="absolute sm:block flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] sm:h-[500px] inset-x-[0] items-start justify-between mx-[auto] top-[14%] w-[83%]">
                <ul className="flex flex-col gap-[13px] md:gap-[1px] sm:gap-[1px] md:gap-x-[1px] sm:gap-x-[1px] md:gap-y-[1px] sm:gap-y-[1px] sm:h-[96px] items-start justify-start sm:m-[0] sm:mb-[0] sm:ml-[0] sm:mr-[0] sm:mt-[0] md:overflow-visible sm:p-[15px] sm:pb-[15px] sm:pl-[15px] sm:pr-[15px] sm:pt-[15px] md:sticky md:w-[100%] sm:w-[100%] w-[auto] common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list">
                  <li className="w-[auto]">
                    <Text
                      className="cursor-pointer font-semibold text-left text-white_A700"
                      as="h4"
                      variant="h4"
                    >
                      SITEMAP
                    </Text>
                  </li>
                  <li className="mt-[13px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-medium text-[20px] text-left text-white_A700"
                      rel="noreferrer"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mt-[13px] ml-[1px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-medium text-[20px] text-left text-white_A700"
                      rel="noreferrer"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mt-[13px] ml-[2px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-medium text-[20px] text-left text-white_A700"
                      rel="noreferrer"
                    >
                      What we do
                    </a>
                  </li>
                  <li className="mt-[13px] ml-[3px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-medium text-[20px] text-left text-white_A700"
                      rel="noreferrer"
                    >
                      What we don’t do
                    </a>
                  </li>
                  <li className="mt-[13px] ml-[4px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-medium text-[20px] text-left text-white_A700"
                      rel="noreferrer"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li className="mt-[13px] ml-[5px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-medium text-[20px] text-left text-white_A700"
                      rel="noreferrer"
                    >
                      Services
                    </a>
                  </li>
                  <li className="mt-[13px] ml-[6px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-medium text-[20px] text-left text-white_A700"
                      rel="noreferrer"
                    >
                      Team
                    </a>
                  </li>
                </ul>
                <List
                  className="sm:flex-col flex-row gap-[128px] md:gap-[40px] sm:gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[auto]"
                  orientation="horizontal"
                >
                  <ul className="sm:fixed flex flex-col gap-[13px] md:gap-[1px] md:gap-x-[1px] md:gap-y-[1px] items-start md:items-start md:justify-center justify-start sm:m-[] md:mb-[340px] sm:mb-[] md:ml-[300px] sm:ml-[] md:mr-[] sm:mr-[] md:mt-[-370px] sm:mt-[] sm:p-[] sm:pb-[] sm:pl-[] sm:pr-[] sm:pt-[] sm:top-[] w-[100%] common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-semibold text-left text-white_A700"
                        as="h4"
                        variant="h4"
                      >
                        OTHER
                      </Text>
                    </li>
                    <li className="mt-[13px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-medium text-[20px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Get a quote
                      </a>
                    </li>
                    <li className="mt-[13px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-medium text-[20px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Vidoes
                      </a>
                    </li>
                    <li className="mt-[13px] ml-[2px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-medium text-[20px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Booking
                      </a>
                    </li>
                  </ul>
                  <ul className="md:absolute md:bottom-[] flex flex-col sm:gap-[10px] gap-[13px] sm:gap-x-[10px] sm:gap-y-[10px] items-start sm:items-start justify-start md:left-[1px] sm:m-[10px] sm:mb-[10px] sm:ml-[10px] sm:mr-[10px] sm:mt-[10px] md:mt-[] md:overflow-visible sm:p-[200px] md:pb-[10px] sm:pb-[200px] md:pl-[10px] sm:pl-[200px] md:pr-[10px] sm:pr-[200px] md:pt-[1px] sm:pt-[200px] md:px-[10px] md:right-[] md:top-[] w-[100%] md:w-[100%] common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list">
                    <li className="sm:hidden sm:flex-col sm:gap-[13px] sm:justify-start sm:items-end sm:h-[89px] w-[auto]">
                      <Text
                        className="cursor-pointer sm:flex-col font-semibold sm:gap-[13px] sm:gap-x-[13px] sm:gap-y-[13px] sm:h-[89px] sm:hidden sm:items-end sm:justify-start sm:m-[] sm:mb-[] sm:ml-[] sm:mr-[] sm:mt-[] sm:pt-[] text-left text-white_A700"
                        as="h4"
                        variant="h4"
                      >
                        FAQ
                      </Text>
                    </li>
                    <li className="mt-[13px] sm:hidden sm:h-[27px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-medium sm:h-[27px] sm:hidden text-[20px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="mt-[13px] ml-[1px] sm:hidden w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-medium sm:hidden text-[20px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Staff Email
                      </a>
                    </li>
                    <li className="mt-[13px] ml-[2px] sm:hidden w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-medium sm:hidden text-[20px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Admininstration
                      </a>
                    </li>
                  </ul>
                  <ul className="sm:bottom-[] flex flex-col sm:font-segoeui gap-[13px] sm:gap-[1px] sm:gap-x-[1px] sm:gap-y-[1px] sm:h-[99px] sm:hidden items-start justify-start sm:left-[] sm:mb-[716px] sm:min-w-[] sm:ml-[202px] sm:mr-[-40px] sm:mt-[] sm:overflow-visible sm:pt-[93px] sm:relative sm:right-[] sm:text-[1px] sm:top-[] w-[100%] sm:w-[] common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-semibold text-left text-white_A700"
                        as="h4"
                        variant="h4"
                      >
                        SERVICES
                      </Text>
                    </li>
                    <li className="mt-[13px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-medium text-[20px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Diagnosis
                      </a>
                    </li>
                    <li className="mt-[13px] ml-[1px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-medium text-[20px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Maintenance
                      </a>
                    </li>
                    <li className="mt-[13px] ml-[2px] w-[auto]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-medium text-[20px] text-left text-white_A700"
                        rel="noreferrer"
                      >
                        Repair
                      </a>
                    </li>
                  </ul>
                </List>
                <ul className="md:absolute sm:absolute sm:bottom-[49px] md:bottom-[] flex flex-col sm:font-inter gap-[13px] sm:gap-[1px] sm:gap-x-[1px] sm:gap-y-[1px] sm:hidden items-start justify-start md:left-[] md:mt-[-30px] md:overflow-visible sm:overflow-visible sm:right-[-200px] md:right-[-610px] sm:text-[13px] sm:top-[200px] md:top-[30px] md:w-[100%] sm:w-[100%] w-[auto] common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list common-column-list">
                  <li className="w-[auto]">
                    <Text
                      className="cursor-pointer font-semibold text-left text-white_A700"
                      as="h4"
                      variant="h4"
                    >
                      BUSINESS HOURS
                    </Text>
                  </li>
                  <li className="mt-[13px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-medium text-[20px] text-left text-white_A700"
                      rel="noreferrer"
                    >
                      Monday to Friday
                    </a>
                  </li>
                  <li className="mt-[13px] ml-[1px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-medium text-[20px] text-left text-white_A700"
                      rel="noreferrer"
                    >
                      9:00am - 10:00am
                    </a>
                  </li>
                  <li className="mt-[13px] ml-[2px] sm:hidden w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-medium sm:hidden text-[20px] text-left text-white_A700"
                      rel="noreferrer"
                    >
                      Vacations
                    </a>
                  </li>
                  <li className="mt-[13px] ml-[3px] sm:hidden w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-medium sm:hidden text-[20px] text-left text-white_A700"
                      rel="noreferrer"
                    >
                      All sundays
                    </a>
                  </li>
                  <li className="mt-[13px] ml-[4px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-medium text-[20px] text-left text-white_A700"
                      rel="noreferrer"
                    >
                      All official holidays
                    </a>
                  </li>
                </ul>
              </div>
              <div className="absolute md:absolute bottom-[20%] flex flex-col font-segoeui gap-[16px] items-start justify-start left-[9%] w-[27%]">
                <Img
                  src="images/img_autofixerlogocropped.png"
                  className="sm:flex sm:flex-row sm:gap-[20px] sm:gap-x-[20px] sm:gap-y-[20px] h-[58px] sm:h-[auto] sm:items-start sm:justify-center sm:m-[10px] sm:mb-[10px] sm:ml-[10px] sm:mr-[10px] sm:mt-[10px] object-cover overflow-visible sm:p-[30px] sm:pb-[30px] sm:pl-[30px] sm:pr-[30px] sm:pt-[30px] md:w-[100%] sm:w-[100%] w-[47%]"
                  alt="Autofixerlogocropped One"
                />
                <Text
                  className="sm:bottom-[20px] sm:flex sm:flex-row font-normal sm:gap-[] sm:gap-x-[] sm:gap-y-[] sm:h-[100px] sm:items-center sm:justify-center sm:mb-[-936px] sm:min-w-[150px] sm:ml-[-33px] sm:mr-[7px] sm:mt-[12px] sm:overflow-visible sm:pb-[] sm:pl-[] sm:pr-[3px] sm:pt-[] sm:rounded-bl-[] sm:rounded-br-[] sm:rounded-radius sm:rounded-tl-[] sm:rounded-tr-[] sm:sticky sm:text-[15px] text-left text-white_A700 sm:top-[-100px] w-[100%] sm:w-[220px]"
                  as="h4"
                  variant="h4"
                >
                  <span className="sm:text-[20px] md:text-[22px] text-white_A700 text-[24px] font-segoeui">
                    © Copyright 2022 - 2023. Autofixer Nigeria limited. Site by{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="sm:text-[20px] md:text-[22px] text-white_A700 text-[24px] font-segoeui underline"
                  >
                    FregateLab
                  </a>
                </Text>
              </div>
              <div className="absolute bg-red_A700 bottom-[14%] flex flex-col font-segoeui sm:h-[270px] items-end justify-start sm:mb-[-152px] sm:ml-[6px] sm:mr-[-37px] sm:mt-[1px] p-[17px] sm:pb-[29px] sm:pl-[-1px] sm:pr-[10px] sm:pt-[19px] right-[8%] w-[33%] sm:w-[47%]">
                <Text
                  className="font-normal mb-[90px] mt-[20px] sm:mt-[2px] sm:pb-[1px] sm:pl-[1px] sm:pr-[1px] sm:pt-[-9px] sm:px-[1px] text-left text-white_A700"
                  as="h4"
                  variant="h4"
                >
                  <span className="sm:text-[20px] md:text-[22px] text-white_A700 text-[24px] font-segoeui font-semibold">
                    CONTACT
                    <br />
                  </span>
                  <span className="sm:text-[20px] md:text-[22px] text-white_A700 text-[24px] font-segoeui">
                    Call:{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="sm:text-[20px] md:text-[22px] text-white_A700 text-[24px] font-segoeui underline"
                  >
                    070 4554 3003
                    <br />
                  </a>
                  <span className="sm:text-[20px] md:text-[22px] text-white_A700 text-[24px] font-segoeui">
                    Email:{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="sm:text-[20px] md:text-[22px] text-white_A700 text-[24px] font-segoeui underline"
                  >
                    info@autofixer.com.ng
                    <br />
                  </a>
                  <span className="sm:text-[20px] md:text-[22px] text-white_A700 text-[24px] font-segoeui">
                    Address: Suite B12, NIPCO Station shopping center,
                    Kuchingoro, Umar Musa Yaradua Express Way, Abuja.
                  </span>
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
