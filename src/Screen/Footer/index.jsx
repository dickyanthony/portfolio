import {
  AnimateSocialMedia,
  AnimateTextArrow,
  Description,
  PrimaryTitle,
  Reveal,
  Title,
} from "../../component";
import { NAME, WORKING_LOCATION } from "../../constant";

export default function Footer() {
  return (
    <div className="w-full max-w-screen-xl  grid grid-cols-2 mt-2 z-20">
      <div className="pb-32 pt-32">
        <div className="flex flex-row mb-10 ">
          <img
            alt="profile"
            style={{ borderRadius: "50%", width: "142px", height: "142px" }}
            src={require("../../assets/images/profile.png")}
          />
          <div className="text-left ml-8 content-center">
            <Title className="text-3xl mb-2">{NAME}</Title>
            <Title className="text-2xl text-[#8895aa]">
              Mobile & Web Dev at {WORKING_LOCATION}
            </Title>
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
      <div className="pb-32 pt-32">
        <div className="flex flex-row mb-10 ">
          <div className="relative">
            <AnimateTextArrow
              text="Get in touch"
              descriptionStyle={{ fontWeight: "700" }}
              fontSize="3.25rem"
              lineHeight="0.5rem"
              arrowColor="#075fe4"
              arrowSize="52px"
              showLine={false}
              onClick={() => {
                console.log("Click");
              }}
            />
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div>
            <Description className="flex items-start">EMAIL ME</Description>
            <div className="flex relative w-auto">
              <AnimateTextArrow
                text="dickyanthony0812@gmail.com"
                fontSize="19px"
                descriptionStyle={{ fontWeight: "bold" }}
                onClick={() =>
                  (window.location = "mailto:dickyanthony0812@gmail.com")
                }
              />
            </div>
          </div>
          <div>
            <Description className="flex items-start">CALL ME</Description>
            <div className="relative">
              <AnimateTextArrow
                text="+62 8995 - 3264 - 92"
                fontSize="19px"
                descriptionStyle={{ fontWeight: "bold" }}
                onClick={() =>
                  (window.location.href = "https://wa.me/08995326492")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
