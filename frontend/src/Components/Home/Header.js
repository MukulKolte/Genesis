import React from "react"
export default function Header(){
    const date = new Date();
    let year = date.getFullYear();
    return (
         <div>
                <header id="main-header">
                <div class="container">
                    <h1 >Genesis <span id='year'>{year}</span></h1>
                </div>
                </header>
        </div>
      )

}