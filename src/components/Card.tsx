import React, {
  ReactNode,
} from "react";

interface Props {
  children: ReactNode;
}
const Card = ({
  children,
}: Props) => {
  return (
    <div className="shadow rounded-md border overflow-hidden bg-stone-100">
      {children}
    </div>
  );
};

export default Card;
