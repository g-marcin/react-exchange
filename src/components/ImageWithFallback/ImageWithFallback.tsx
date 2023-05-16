import { FC, SyntheticEvent, useMemo, useCallback } from "react";
import { ImageWithFallbackProps } from "../../types";

export const ImageWithFallback: FC<ImageWithFallbackProps> = ({ currencyCode, className }) => {
  const currencyFlagImage = useMemo(() => `https://flagsapi.com/${currencyCode.slice(0, 2)}/flat/64.png`, [currencyCode]);

  const addImageFallback = useCallback((event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg";
  }, []);
  return (
    <img
      src={currencyFlagImage}
      className={`${className}`}
      onError={(event) => {
        addImageFallback(event);
      }}
    ></img>
  );
};
