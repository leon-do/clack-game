import { useState } from "react";
import { AwesomeButtonProgress } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function BlueButton() {
  const [number, setNumber] = useState(0);

  const handleClick = (event: any, next: any) => {
    setTimeout(() => {
      setNumber(number + 1);
      next();
    }, 100);
  };
  return (
    <AwesomeButtonProgress
      type="primary"
      loadingLabel=""
      resultLabel=""
      releaseDelay={100}
      onPress={(event, next) => {
        handleClick(event, next);
      }}
    >
      {number}
    </AwesomeButtonProgress>
  );
}
