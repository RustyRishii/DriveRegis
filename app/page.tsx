"use client";
import { Button } from "@/components/ui/button";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import app from "@/lib/firebase";
import Dashboard from "./dashboard/page";
import Link from "next/link";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter;

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      <Link href="/dashboard" />;
      //router.push("/dashboard"); // Ensure this is the correct path to your Dashboard
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  return (
    <div className="bg-zinc-700 min-h-screen flex flex-col items-center">
      {user ? (
        <Dashboard />
      ) : (
        <>
          <p className="text-center font-bold text-2xl p-5 text-white">
            Drive project
          </p>
          <h1 className="text-center font-bold text-4xl p-5 text-white">
            Manage all your google drive files in one place
          </h1>
          <Button onClick={signInWithGoogle}>Login with Google</Button>
        </>
      )}
    </div>
  );
}
