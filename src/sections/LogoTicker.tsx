import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";

export const LogoTicker = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex items-center ">
          <div className="flex-1 ">
            <h2>Trusted by top innovative teams</h2>
          </div>

          {/* Companies and their logos */}
          <div className=" flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-none gap-14 ">
              {[
                acmeLogo,
                apexLogo,
                celestialLogo,
                quantumLogo,
                pulseLogo,
                echoLogo,
              ].map((logo) => (
                <img
                  src={logo.src}
                  key={logo.src}
                  className="h-[24px] w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

//border-4 border-green-600
