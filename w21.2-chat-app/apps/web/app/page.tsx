import { TextInput } from "@repo/ui/text-input"
import { useRouter } from "next/router"

export default function Home() {

  const router = useRouter();



  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      background : "black",
      display: "flex",
      justifyContent: "center",
      justifyItems: "center"

    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection :"column"
      }}>
      <TextInput placeholder="Room Name"></TextInput>
      <button>Join room</button>
      </div>
    </div>
  )
}