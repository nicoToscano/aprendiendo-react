import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

//---------------------------------------------------------------------
//---------Creación de un array de objetos con los usuarios------------
//---------------------------------------------------------------------

const users = [
  { userName: "minudev", isFollowing: true, name: "Miguél Angel" },
  { userName: "pheralb", isFollowing: false, name: "Pablo Hernandez" },
  { userName: "elonmusk", isFollowing: true, name: "Elon Musk" },
  { userName: "vxnder", isFollowing: false, name: "Vanderhart" },
];

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

  //---------------------------------------------------------------------
  //---------Puede ser mala práctica pasar props de esta manera----------
  //---------------------------------------------------------------------

  // const minudev = { userName: "minudev", isFollowing: true };
  // const elonmusk = { isFollowing: false, userName: "elonmusk" };

  // const [name, setName] = useState("minudev");

  //---------------------------------------------------------------------
  //----Lo siguiente es una forma de cargar los datos de los usuarios----
  //---------------------------------------------------------------------

  // return (
  //   <section className="App">
  //     {users.map((user) => {
  //       const { userName, isFollowing, name } = user;

  //       return (
  //         <TwitterFollowCard
  //           key={userName}
  //           userName={userName}
  //           initialIsFollowing={isFollowing}
  //         >
  //           {name}
  //         </TwitterFollowCard>
  //       );
  //     })}
  //   </section>
  // );

  //----------------------------------------------------------------------
  //----Lo siguiente es otra forma de cargar los datos de los usuarios----
  //----------------------------------------------------------------------

  return (
    <section className="App">
      {users.map(({ userName, isFollowing, name }) => (
        // const { userName, isFollowing, name } = users;

        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
