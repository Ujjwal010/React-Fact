import React from "react";
import './Main.css';
function Main(){
    return (
    <div className="main">
        <h1 className="fact">Fact about React</h1>
        <ul className="lists">
            <li>React was created by Jordan Walke</li>
            <li>React is Not A Framework</li>
            <li>React development And SEO Go Together</li>
            <li>Virtual DOM is Faster Than Real DOM</li>
            <li>React Has a Strong Community</li>
            <li>React is maintained by Meta</li>
        </ul>
    </div>);
}
export default Main;