import React from "react";

function Button(props: React.PropsWithChildren) {
  return (
    <button className=" relative rounded-lg py-2 px-3 font-medium text-sm bg-gradient-to-b from-slate-900 to-purple-800 shadow-[0px_0px_12px_#8c45ff] left-2 ">
      <div className="absolute inset-0 ">
        {/* gradient border */}
        <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image: linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="border absolute inset-0 rounded-lg  border-white/40 [mask-image: linear-gradient(to_top,black,transparent) ] "></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
      </div>

      <span className="whitespace-nowrap">{props.children}</span>
    </button>
  );
}

export default Button;
