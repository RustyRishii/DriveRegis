"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <div className=" bg-zinc-700 min-h-screen flex flex-col items-center">
      <p className="text-center font-bold text-2xl p-5 text-white">
        Drive project
      </p>
      <h1 className="text-center font-bold text-4xl p-5 text-white">
        Manage all your google drive files in one place
      </h1>
      <Button onClick={() => console.log("Logged in")}>
        Login with Google
      </Button>
    </div>
  );
}
