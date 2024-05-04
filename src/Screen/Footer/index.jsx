import { useMediaQuery } from "react-responsive";
import {
  AnimateSocialMedia,
  AnimateTextArrow,
  Description,
  NavDesktop,
  Reveal,
  Title,
} from "../../component";
import { NAME, WORKING_LOCATION } from "../../constant";
import { ITEM_HEADER } from "../../constant/Content";

export default function Footer() {
  const small = useMediaQuery({ maxWidth: "639px" });
  return (
    <>
      <div className="w-full max-w-screen-xl self-center grid grid-cols-1 mt-2 z-20 gap-2 lg:grid lg:grid-cols-2 max-[639px]:pl-10 max-[639px]:pr-10">
        <div className="pb-18 pt-32">
          <div className="flex flex-row mb-10 ">
            <Reveal>
              <img
                alt="profile"
                style={{ borderRadius: "50%", width: "142px", height: "142px" }}
                src={require("../../assets/images/profile.png")}
              />
            </Reveal>

            <div className="text-left ml-8 content-center">
              <Reveal>
                <Title className="text-3xl mb-2">{NAME}</Title>
              </Reveal>
              <Reveal>
                <Description className="text-xl text-[#8895aa]">
                  Mobile & Web Dev at {WORKING_LOCATION}
                </Description>
              </Reveal>
            </div>
          </div>
          <AnimateSocialMedia
            className="mt-5"
            showInstagram
            showGithub
            title=""
            size={26}
          />
        </div>
        <div className="pb-24 pt-4 w-fit lg:ml-4 lg:pt-24">
          <div className="flex flex-row mb-8 ">
            <div className="relative">
              <Reveal>
                <AnimateTextArrow
                  text="Get in touch"
                  descriptionStyle={{ fontWeight: "700" }}
                  fontSize={small ? "2.20rem" : "3.25rem"}
                  lineHeight="0.5rem"
                  arrowColor="#075fe4"
                  arrowSize="52px"
                  showLine={false}
                  onClick={() => {
                    console.log("Click");
                  }}
                />
              </Reveal>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:flex-col w-fit 2xl:flex-row">
            <div>
              <Reveal>
                <Description className="flex items-start">EMAIL ME</Description>
                <div className="flex relative w-auto">
                  <AnimateTextArrow
                    text="dickyanthony0812@gmail.com"
                    fontSize={small ? "15px" : "19px"}
                    descriptionStyle={{ fontWeight: "bold" }}
                    onClick={() =>
                      (window.location = "mailto:dickyanthony0812@gmail.com")
                    }
                  />
                </div>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <Description className="flex items-start">CALL ME</Description>
                <div className="relative">
                  <AnimateTextArrow
                    text="+62 8995 - 3264 - 92"
                    fontSize={small ? "15px" : "19px"}
                    descriptionStyle={{ fontWeight: "bold" }}
                    onClick={() =>
                      (window.location.href = "https://wa.me/08995326492")
                    }
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-xl grid grid-cols-2 z-20 border-t border-[#5d6c83] self-center">
        <div className=" mt-8">
          <div className="flex flex-row mb-10 ">
            <NavDesktop item={ITEM_HEADER} />
          </div>
        </div>
        <div className=" mt-8">
          <div className="flex flex-row mb-10 text-white justify-end">
            <Reveal>Copyright @ Dicky Anthony</Reveal>
          </div>
        </div>
      </div>
    </>
  );
}
