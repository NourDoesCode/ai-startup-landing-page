import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h3 className="text-center text-5xl font-medium leading-[120%] tracking-tighter md:text-6xl">
          Beyond Expectations.
        </h3>
        <p className="text-center text-lg tracking-tight text-white/70 mt-5 md:text-xl max-w-sm mx-auto">
          Our revolutionary AI SEO tools have transformed our clients'
          strategies.
        </p>
        <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] ">
          <div className="flex gap-5 ">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-white/15 rounded-xl p-6 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs flex-none md:p-10 md:max-w-md"
              >
                {/* testimonial phrase*/}
                <p className="text-lg tracking-tight md:text-2xl">
                  {testimonial.text}
                </p>

                {/* testimonial person*/}

                <div className="flex gap-3 mt-5 items-center">
                  {/* overlay for image*/}

                  <img
                    src={testimonial.avatarImg.src}
                    alt={`Avatar for ${testimonial.name}`}
                    className="rounded-lg object-contain h-11 w-11  border border-white/30"
                  />

                  <div className="">
                    <div>{testimonial.name}</div>
                    <div className="text-sm font-[150px] text-white/40">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
/*border-4 border-red-500*/
//border-4 border-blue-500
//border-4 border-purple-500
//border-4 border-yellow-500
