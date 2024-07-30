"use client";
import React, { useState, useEffect } from "react";
import { signOut, onAuthStateChanged, getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import app from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Dashboard() {
  const auth = getAuth(app); // Ensure the correct usage of your firebase app
  //const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        //router.push("/");
        <Link href="/" />;
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      <Link href="/" />;
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <p>Dashboard</p>
      <h1>Welcome {user ? user.displayName : "Please login"}</h1>
      <Button variant="destructive" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Dashboard;
