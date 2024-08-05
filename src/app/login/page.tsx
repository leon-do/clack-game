"use client";
import { ConnectButton, lightTheme } from "thirdweb/react";
import { client, chain } from "../client";
import { useActiveAccount } from "thirdweb/react";
import { redirect } from "next/navigation";

export default function Login() {
  if (useActiveAccount()) return redirect("/play");

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <div className="flex justify-center mb-20">
          <ConnectButton
            client={client}
            connectButton={{
              label: "Login",
            }}
            theme={lightTheme({
              colors: {
                primaryButtonBg: "white",
                primaryButtonText: "black",
              },
            })}
            // https://playground.thirdweb.com/connect/account-abstraction
            accountAbstraction={{
              chain,
              sponsorGas: true,
            }}
          />
        </div>
      </div>
    </main>
  );
}
