"use client";
import Nav from "../../components/Nav";
import Button from "../../components/Button";

export default function Play() {


  return (
    <div className="border border-red-400 container mx-auto h-screen">
      <Nav />
      <div className="border border-emerald-400 flex h-full justify-center items-center">
        <Button />
      </div>
    </div>
  );
}
