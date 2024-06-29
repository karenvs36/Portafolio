import clsx from "clsx";
import Link from "next/link";
import React from "react";


const Logo = ({className, props}) => {
  return (
    <Link href={"/"}>
        <img src="/logo.gif" alt="Logo" className={clsx("w-24 h-auto -my-6", className)} {...props} />
    </Link>
  );
};

export default Logo;
