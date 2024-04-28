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
  const minudev = { userName: "minudev", isFollowing: true };
  const elonmusk = { isFollowing: false, userName: "elonmusk" };

  return (
    <section className="App">
      <TwitterFollowCard {...minudev}>Miguél Angel</TwitterFollowCard>

      <TwitterFollowCard isFollowing={false} userName={"pheralb"}>
        Pablo Hernandez
      </TwitterFollowCard>
      <TwitterFollowCard {...elonmusk}>Elon Musk</TwitterFollowCard>
      <TwitterFollowCard isFollowing>Vadelhar</TwitterFollowCard>
    </section>
  );
}
