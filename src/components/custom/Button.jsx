import { memo } from "react";

function Button({
  className,
  title,
  type,
  callbackk,
  value,
  Icon = null,
  iconPos = "left",
  size=20,
  ...props
}) {
  console.log("In button title :", title);
  return (
    <button
      className={` btn border border-1 d-flex justify-content-center align-items-center text-center gap-2 rounded-3 py-2 px-3 ${className}`}
      {...props}
    >

      {Icon == null && iconPos ? (
        <>{title}</>
      ) : iconPos === "right" ? (
        <>
          {title}
          <Icon size={size}/>
        </>
      ) : (
        <>
          <Icon size={size}/>
          {title}
        </>
      )}
    </button>
  );
}

export default memo(Button);
