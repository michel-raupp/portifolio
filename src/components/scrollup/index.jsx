import React from "react";
import "../scrollup/styles.css"
import arrow1 from "../../assets/icons/arrow-right.svg";

const ScrollUp = () => {

    window.addEventListener("scroll", function(){
        const scrollUp = document.querySelector(".scrollup");

        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })


    return (
        <a href="#home" className="scrollup">
            <img className="seta" src={arrow1} alt="" />
        </a>
    )
}

export default ScrollUp