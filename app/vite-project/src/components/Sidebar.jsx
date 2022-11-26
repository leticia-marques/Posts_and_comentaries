import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
export function Sidebar()
{
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
            
            <div className={styles.profile}>
                <Avatar src="https://veja.abril.com.br/wp-content/uploads/2016/06/imperdivel-2010-shrek-original.jpeg?quality=70&strip=info&resize=850,567"/>
                <strong>Shrek</strong>
                <span>Dono de pântano</span>
            </div>

            <footer>
                
                <a href="#">
                    <PencilLine size={20} />
                    Edite Perfil
                </a>
            </footer>
        </aside>
    )
}