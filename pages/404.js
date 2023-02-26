import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  //to takr the user back to the homepage
  useEffect(() => {
    setTimeout(() => {
      // router.go(-1);
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found </h2>
      <p>
        Go back to the <Link href="/">Homepage</Link>
      </p>
    </div>
  );
}
