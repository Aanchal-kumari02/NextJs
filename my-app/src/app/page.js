"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleLogin = (name) => {
    router.push(name);
  };
  return (
    <div>
      <h1>Welcome to next</h1>
      <br />
      <Link href="/login">Go To Login Page</Link>
      <br />
      <br />
      <Link href="/about">Go To About Page</Link>
      <br />
      <br />

      <button onClick={()=> handleLogin('/login')}>LoginPage</button>

      <button onClick={()=> handleLogin('/about')}>AboutPage</button>
    </div>
  );
}
 