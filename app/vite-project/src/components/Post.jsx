import { Avatar} from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"
import {format, formatDistanceToNow} from "date-fns";
import ptBR from "date-fns/locale/pt-BR"
import { useState } from "react";
// export function Post()
// {
//     return  (
//         <article className={styles.post}>
//            <header>
//                <div className={styles.author}>
//                    <Avatar 
//                     src="https://veja.abril.com.br/wp-content/uploads/2016/06/imperdivel-2010-shrek-original.jpeg?quality=70&strip=info&resize=850,567" 
//                      />
//                     <div className={styles.authorInfo}>
//                         <strong>Shrek</strong>
//                         <span>Amassador de Lords Farquaads</span>
//                     </div>
//                 </div>

//                 <time title="11 de maio às 08:00" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
//             </header>

//              <div className={styles.content}>
//                  <p>Fala galeraa!!!</p>
//                  <p>Shrek aqui. Por favor saiam todos do meu pântano.</p>
//                  <p><a href="">lord.farquaad/sitio</a> Um lugar pra vcs ficarem e vazarem daqui</p>
//                  <p><a href="">#freePantano #pinoquiehesquisito #osTresRatosSaoUmaAlusaoAoBeeGees?</a></p>
//              </div>

//              <form className={styles.commentForm} action="">
//                 <strong>Deixe seu comentário</strong>

//                 <textarea 
//                     placeholder="Deixe um comentário"
//                 />
//                 <footer>
//                     <button type="submit">Comentar</button>
//                 </footer>
//              </form>

//              <div className={styles.commentList}>
//                 <Comment />
//              </div>
//         </article>
//     )  
// }

const comments = [1,2,3];

export function Post(props)
{
    const [comments, setComments] = useState([
        "Foda-se"
    ]);
    
    const [newComment, setNewCommentText] = useState("");
    
    const publishedAt = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })
    
    const relativePublishDate = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    
    const invalidComment = newComment.length === 0;
     
    function handleComment()
    {
        event.preventDefault();
        // const newComment = event.target.comment.value;
        setComments([...comments, newComment]);
        setNewCommentText("");
    }

    function handleNewCommentText()
    {
        event.target.setCustomValidity("");
       setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete)
    {
        const commentsWithoutDeletedOne = comments.filter(comment =>{
            return comment != commentToDelete;            
        })
        setComments(commentsWithoutDeletedOne);
    }

    function handleInvalidComment()
    {
        event.target.setCustomValidity("Campo obrigatório");
    }

    return  (
        <article className={styles.post}>
           <header>
               <div className={styles.author}>
                   <Avatar 
                    src={props.author.avatarURL} 
                     />
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>

                <time title={publishedAt} dateTime={props.publishedAt.toISOString()}>{relativePublishDate}</time>
            </header>

             <div className={styles.content}>
               { props.content.map((content, index )=> {
                //    if (props.content[index-1].lineBreak == "false")
                //        return <d>{content.conTent}</d>
                   if (content.type == "paragraph")
                       return <p key={content.content}>{content.content}</p>
                   if (content.type == "link")
                       return <p key={content.content}><a href="#">{content.content}</a></p>
                })}
             </div>

             <form onSubmit={handleComment} className={styles.commentForm} action="">
                <strong>Deixe seu comentário</strong>

                <textarea 
                    name="comment"
                    onChange={handleNewCommentText}
                    placeholder="Deixe um comentário"
                    required
                    onInvalid={handleInvalidComment}
                />
                <footer>
                    <button type="submit" disabled={invalidComment}>Comentar</button>
                </footer>
             </form>

             <div className={styles.commentList}>
                {
                    comments.map(comment =>{

                        return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                    })
                }
             </div>
        </article>
    )  
}