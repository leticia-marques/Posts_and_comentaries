import { Header } from "./components/Header"
import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

const posts = [
  {
    id: 1,
    author:{
      avatarURL: "https://veja.abril.com.br/wp-content/uploads/2016/06/imperdivel-2010-shrek-original.jpeg?quality=70&strip=info&resize=850,567",
      name: "Shrek",
      role: "Amassador de Lord Farquaads"
    },
    content: [
      {type:"paragraph", content: "Fala galeraa!!!"},
      {type:"paragraph", content:"Shrek aqui. Por favor saiam todos do meu pântano"},
      {type:"link", content:"lord.farquaad/sitio"}
    ],
    publishedAt: new Date("2022-05-10 20:00:00")
  },
  {
    id: 2,
    author:{
      avatarURL: "https://ichef.bbci.co.uk/news/640/cpsprodpb/BD9A/production/_109483584_fcf5a147-90e3-4462-9eb9-277ff2b241bd.jpg",
      name: "Rick Deackard",
      role: "Mata robôs, foda-se"
    },
    content: [
      {type:"paragraph", content: "Fala galeraa!!!", lineBreak:"true"},
      {type:"paragraph", content:"Rick aqui. Por favor saiam todos do meu planeta", lineBreak:"true"},
      {type:"link", content:"foradaterra/sitio", lineBreak:"false"},
      {type:"paragraph", content:"Um lugar pra vcs irem", lineBreak:"true"}
    ],
    publishedAt: new Date("2022-05-10 20:00:00")
  },
]


function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return <Post key={post.id}  author={post.author} content={post.content} publishedAt={post.publishedAt}/>
          })}
        </main>
      </div>
    </div>
  )
}

export default App
