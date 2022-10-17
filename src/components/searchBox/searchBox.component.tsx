import { ChangeEvent } from "react";
import "./searchBox.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const searchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    type="search"
    className={`search-box ${className}`}
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default searchBox;
