 import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

 export function Comment({content, onDeleteComment})
 {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeletedComment()
    {
             
        onDeleteComment(content);
    }

    function handleLikes()
    {
        setLikeCount((state)=>{
            return state + 1;
        })
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="http://1.bp.blogspot.com/-ZTbxwtyCfdo/Uc3Nbt68UEI/AAAAAAAAG68/T9k5jH5foI4/s1280/pinoquio.jpg"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        
                        <div className={styles.authorAndTime}>
                            <strong>Pinóquio</strong>
                            <time title="11 de maio às 08:00" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeletedComment} title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikes}>
                        <ThumbsUp />
                        aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
 }