import {useState} from "react";
import './Lottery.css';
import { genTicket,sum } from "./helper";

export default function Lottery (){
    const styles = {color : "yellow",
                    marginTop: "-300px"};
    const styless = {
                    color: "yellow",
                    fontSize: "40px"};

   
    let [ticket,setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) == 15;
    let buyTicket = () => {
        setTicket(genTicket(3));
    }

    return (
           <div>
                <h1 style={styles}><em><u>Welcome to my Lottery Shop</u></em></h1>
                <h1>How can I help you, sir ?</h1>
                <div className="ticket">
                    <span style={styless}>{ticket}</span>
                </div>
                <br></br>
                <button onClick={buyTicket}>Buy Ticket</button>
                <h3>{isWinning && "Congratulation, you won!"}</h3>
           </div>
    );
}
