import React from "react"
export default function Home(props){
    return (
        <div className="home"><h1>Home</h1>
        <h2>{props.loginStatus}</h2>
        <h2>Please Insert The Stock Market Name for The Company</h2>

        <div class="input-group">
            <input type="search" id="form1" class="form-control" />
            <button type="button" class="btn btn-primary">Search </button>
        </div>


        </div>
    )
}