import { Link } from "react-router-dom";

export default function SideBar(){
    return (
        <div hidden className = "afeedContainer" >
            <div className = "afeed" id = "af">
                <ul className = "aList">
                    <li><Link to = "/followers"> <br></br> Followers </Link></li><br></br>
                    <li><Link to = "/following"> Following </Link></li><br></br>
                    <li><Link to = "/create-post">  Create Post </Link></li>
                </ul>
            </div>
            <button className="btn" type="button" onClick={BarAnimation}> 
                <img className="arrow" src= "../pictures/arrbak.png" width="40px" height="25px"></img> 
                <img hidden className ="arrow2" src= "../pictures/arrfor.png" width="40px" height="25px"></img>
            </button>
        </div>
    )
}

function BarAnimation(){
    const afeed = document.querySelector(".afeed");
    afeed.classList.toggle("hidden");
    const arrow = document.querySelector(".arrow");
    arrow.toggleAttribute("hidden");
    const arrow2 = document.querySelector(".arrow2");
    arrow2.toggleAttribute("hidden");
    const aList = document.querySelector(".aList");
    aList.classList.toggle("hidden2");
    const hdBtn = document.querySelector(".btn");
    hdBtn.classList.toggle("hiddenBtn");
    //const sideList = document.querySelector(".sidelist");
    //sideList.toggleAttribute("hidden");
}