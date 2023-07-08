import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  HtmlHTMLAttributes,
  ImgHTMLAttributes,
  ReactNode,
} from "react";

interface Props {
  children: ReactNode;
}
const CompoundCard = ({ children }: Props) => {
  return (
    <div className="shadow rounded-md border overflow-hidden bg-stone-100">
      {children}
    </div>
  );
};
CompoundCard.Image = Image;
CompoundCard.Title = Title;
CompoundCard.Price = Price;
CompoundCard.CartButton = Button;
export default CompoundCard;

function Image({
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img className={className + " w-40"} {...props}></img>
  );
}

function Title({
  className,
  children,
  ...props
}: HtmlHTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={
        className +
        " text-center text-sm p-2 text-slate-700"
      }
    >
      {children}
    </p>
  );
}

function Price({
  className,
  children,
  ...props
}: HtmlHTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={
        className +
        " text-center text-sm p-2 text-green-600"
      }
    >
      {children}
    </p>
  );
}

function Button({
  className,
  children,
  ...props
}: HtmlHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={
        className +
        " transition duration-75 bg-violet-600 text-white p-2 w-full hover:bg-violet-700 active:translate-y-1"
      }
    >
      {children}
    </button>
  );
}
