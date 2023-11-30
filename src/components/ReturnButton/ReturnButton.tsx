import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export const ReturnButton: FC = () => {
  const navigate = useNavigate();
  return (
    <button
      className="button-black"
      onClick={() => {
        navigate("/");
      }}
    >
      Return
      <FontAwesomeIcon icon={["fas", "share-from-square"]} size={"lg"} />
    </button>
  );
};
