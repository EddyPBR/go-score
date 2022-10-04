import { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export const Divider: FC<Props> = ({ ...rest }) => {
  return <div className="w-full h-0.5 bg-neutral-200 rounded-full" {...rest} />;
};
