import { InputHTMLAttributes } from "react";
import ErrorMessage from "../ErrorMessage";

interface Props {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hookFormProps: {};
  errorMessage: string | null;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

const AppInput = ({
  leftIcon,
  rightIcon,
  errorMessage,
  hookFormProps,
  ...otherProps
}: Props): JSX.Element => {
  return (
    <div>
      <div className="focus-within:bg-appDarkBlue200 focus-within:border-appBlue500 flex items-center gap-x-2 rounded-lg border border-transparent bg-appGray100 px-4 transition-all duration-300">
        {leftIcon}
        <input
          className="placeholder:text-appGray200 w-full bg-transparent py-4 text-white outline-0"
          placeholder="Enter your lightning address"
          {...hookFormProps}
          {...otherProps}
        />
        {rightIcon}
      </div>

      <ErrorMessage message={errorMessage ?? undefined} />
    </div>
  );
};

export default AppInput;