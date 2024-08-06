import { useState } from "react";
import { AwesomeButtonProgress } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { TransactionButton } from "thirdweb/react";
import { prepareContractCall } from "thirdweb";
import { contract } from "../app/client";

export default function BlueButton() {
  const [number, setNumber] = useState(0);

  const handleClick = async (event: any, next: any) => {
    setNumber(number + 1);
    next();
  };

  return (
    <>
      {/* https://portal.thirdweb.com/typescript/v5/transactions/prepare */}
      <TransactionButton
        transaction={() => {
          const tx = prepareContractCall({
            contract,
            method: "increment",
            params: [],
          });
          return tx;
        }}
        onTransactionSent={(result) => {
          console.log("Transaction submitted", result.transactionHash);
        }}
        onTransactionConfirmed={(receipt) => {
          console.log("Transaction confirmed", receipt.transactionHash);
        }}
        onError={(error) => {
          console.error("Transaction error", error);
        }}
      >
        123
      </TransactionButton>

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
    </>
  );
}
