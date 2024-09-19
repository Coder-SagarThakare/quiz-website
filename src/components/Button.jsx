import { memo } from "react";

function Button({ className, title, type, callbackk, value, Icon, ...props }) {
  console.log("In button title :", title);
  return (
    <button
      onClick={(i) => callbackk(value)}
      className={` btn border border-1 d-flex justify-content-center align-items-center text-center gap-3 rounded-3 py-2 px-3 ${className}`}
      {...props}
    >
      {Icon && <Icon />}
      {title}
    </button>
  );
}

export default memo(Button);
