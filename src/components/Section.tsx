"use client";

import { FC, ReactNode } from "react";

const Section: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <section className="services-section flex flex-col gap-[2rem]">
      <h2 className="header text-[2.2rem] text-[#1C120D] font-bold">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section
