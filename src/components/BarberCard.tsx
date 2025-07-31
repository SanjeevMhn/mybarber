import { FC } from "react";

const BarberCard: FC<{
  img?: string;
  name: string;
  desc: string;
}> = ({ img, name, desc }) => {
  return (
    <li className="provider grid grid-cols-[6.5rem_1fr] gap-x-4 gap-y-[0.2rem] p-[0.5rem_1rem] border border-neutral-300 rounded-md ">
      <span className="img-container col-1 row-[1_/_span_2] w-[6.5rem] h-[6.5rem] rounded-full bg-orange-300 flex items-center justify-center">
        {img && <img src={img} className="w-full h-full object-cover" />}
      </span>
      <p className="provider-name col-2 flex items-end text-[1.8rem] font-semibold">
        {name}
      </p>
      <p className="provider-job col-2 row-2 text-neutral-600">{desc}</p>
    </li>
  );
};

export default BarberCard;
