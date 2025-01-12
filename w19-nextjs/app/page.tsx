import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen items-center justify-center">
      <div>Todo Application
        <br />
        <Link className="text-md border m-2" href="/signup">Signup</Link>
        <br />
        <Link className="text-md border m-2" href="/signin">Signin</Link>
      </div>
      </div>
  )
}
