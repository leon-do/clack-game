"use client";
import { redirect } from "next/navigation";
import { useActiveAccount } from "thirdweb/react";

export default function Home() {
  useActiveAccount() ? redirect("/play") : redirect("/login");
}
