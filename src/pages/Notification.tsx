import "./style.css"
import notification from "../assets/telasemnotifisemfundo.png"

const Notification = () => {


    return <>
        <div className="screen center">
            <div className="card center">
                <div className="font-size:40px;">
                    <img src={notification} alt="aviso sem notificações" />
                </div>
                <h3>Sem notificações</h3>
                <p>Você será avisado quando houver novidades.</p>
            </div>
        </div>

    </>;
}

export default Notification;