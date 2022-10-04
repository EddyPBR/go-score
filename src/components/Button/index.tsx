import { ButtonHTMLAttributes, FC, ReactNode, useMemo } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Props = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "disabled"
> & {
  children?: ReactNode;
  color?: "indigo" | "google" | "secondary" | "success";
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: ReactNode | string;
};

export const Button: FC<Props> = ({
  children,
  color = "indigo",
  isLoading,
  isDisabled,
  icon,
  ...rest
}) => {
  const buttonColors = useMemo(() => {
    switch (color) {
      case "indigo":
        return "text-white bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-indigo-400";
      case "google":
        return "text-white bg-rose-500 hover:bg-rose-600 focus:bg-rose-600 focus:outline-rose-400";
      case "success":
        return "text-white bg-emerald-400 hover:bg-emerald-500 focus:bg-emerald-500 focus:outline-emerald-300";
      case "secondary":
        return "text-white bg-pink-600 hover:bg-pink-700 focus:bg-pink-700 focus:outline-pink-500";
      default:
        return "";
    }
  }, [color]);

  return (
    <button
      className={`w-full h-9 px-4 flex items-center gap-3 justify-center font-medium text-sm border-none rounded-sm outline outline-offset-2 outline-2 transition-all ${buttonColors} ${
        isDisabled && "cursor-not-allowed opacity-75"
      } ${isLoading && "cursor-progress opacity-75"}`}
      disabled={isDisabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : (
        icon
      )}
      {children}
    </button>
  );
};
