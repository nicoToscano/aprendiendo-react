import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  //   const formatUserName = (userName) => `@${userName}`;

  //   return (
  // <div className="App">
  //   <TwitterFollowCard
  //     isFollowing
  //     userName={"minudev"}
  //     name={"Miguél Angel"}
  //   />
  //   <TwitterFollowCard
  //     isFollowing={false}
  //     userName={"pheralb"}
  //     name={"Pablo Hernandez"}
  //   />
  //   <TwitterFollowCard
  //     isFollowing={false}
  //     userName={"elonmusk"}
  //     name={"Elon Musk"}
  //   />
  //   <TwitterFollowCard isFollowing userName={"vxnder"} name={"Vanderhart"} />
  // </div>

  //Puede ser mala práctica pasar props de esta manera
  // const minudev = { userName: "minudev", isFollowing: true };
  // const elonmusk = { isFollowing: false, userName: "elonmusk" };

  const [name, setName] = useState("minudev");

  return (
    <section className="App">
      <TwitterFollowCard userName={name} initialIsFollowing>
        Miguél Angel
      </TwitterFollowCard>

      <TwitterFollowCard userName={"pheralb"} initialIsFollowing={false}>
        Pablo Hernandez
      </TwitterFollowCard>
      <TwitterFollowCard userName={"elonmusk"} initialIsFollowing>
        Elon Musk
      </TwitterFollowCard>
      <TwitterFollowCard initialIsFollowing={false}>Vadelhar</TwitterFollowCard>

      {/* <button onClick={() => setName("nicolas")}>Cambiar Nombre</button> */}
    </section>
  );
}
