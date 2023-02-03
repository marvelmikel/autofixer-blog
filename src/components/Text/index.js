import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  h2: "font-semibold sm:text-[32px] md:text-[34px] text-[36px]",
  h3: "font-semibold sm:text-[24px] md:text-[26px] text-[28px]",
  h4: "sm:text-[20px] md:text-[22px] text-[24px]",
  h5: "text-[20px]",
  h6: "text-[16px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
