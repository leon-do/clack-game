"use client";
import Nav from "../components/Nav";
import BlueButton from "../components/BlueButton";
import RedButton from "@/components/RedButton";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-col gap-4 md:flex-row">
          <BlueButton />
          <RedButton />
        </div>
      </div>
    </div>
  );
}
