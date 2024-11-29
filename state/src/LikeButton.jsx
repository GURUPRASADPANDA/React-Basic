import { useState } from "react";

export default function LikeButton(){
    let [islike,setIslike]=useState(false);
    let toggleLike = ()=>{
       setIslike(!islike);
    };

    let styles = {color:"red"};
    return(
        <div>
              <p onClick={(toggleLike)}>
                {
                    islike ? <i className="fa-solid fa-heart" style = {styles}></i> :  <i className="fa-regular fa-heart"></i>
                }
               
              </p>
        </div>
    );
}