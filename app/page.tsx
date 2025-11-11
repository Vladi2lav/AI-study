
"use client";
import Image from "next/image";
import Link from "next/link";



import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<{ message: string } | null>(null);

  useEffect(() => {
    fetch("/api/py/helloFastApi?name=Alex&age=25")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <>
      <h1>Welcome to Next.js with FastAPI!</h1>
      {data && <p>{data.message}</p>}
    </>
  );
}
