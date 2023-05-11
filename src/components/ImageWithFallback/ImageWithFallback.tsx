import { FC, SyntheticEvent } from "react";
import { ImageWithFallbackProps } from "../../types";
import styles from "./imageWithFallback.module.css";

export const ImageWithFallback: FC<ImageWithFallbackProps> = ({ currencyCode, className }) => {
  const currencyFlagImage = `https://flagsapi.com/${currencyCode.slice(0, 2)}/flat/64.png`;

  return (
    <img
      src={currencyFlagImage}
      className={`${className}`}
      onError={(event) => {
        addImageFallback(event);
      }}
    ></img>
  );

  function addImageFallback(event: SyntheticEvent<HTMLImageElement, Event>) {
    event.preventDefault();
    event.nativeEvent.preventDefault();
    event.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg";
  }
};
