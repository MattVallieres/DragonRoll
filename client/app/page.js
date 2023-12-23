import Link from "next/link";
import ProfileClient from "./components/ProfileClient";

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href="/api/auth/login">Login</Link>
      <Link href="/api/auth/logout">Logout</Link>
      <ProfileClient />
    </main>
  )
}
