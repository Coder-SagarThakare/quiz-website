import { memo } from "react";

function Button({ className, title, type, Icon, ...props }) {
  console.log('In button title :' , title);
  return (
    <button
      className={`w-100 btn border border-1 d-flex justify-content-center align-items-center text-center gap-3 rounded-3 p-2 ${className}`}
      {...props}
    >
      {Icon && <Icon />}
      {title}
    </button>
  );
}

export default memo(Button);