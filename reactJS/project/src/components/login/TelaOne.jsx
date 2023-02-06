import React from "react";
import Style from './Style.css'
import movie from './img/movie.png'

function Login(){
    return(
      <form>
        <div>

          <div class="content">

             <div class="input">
             <input type="text" placeholder="digite seu email" id="email"></input>
               <br/>
             <input type="password" placeholder="insira sua senha" id="password"></input>
               <br/>
             <button>
                Login
              </button>
             </div>
           </div>

        </div>
      </form>
    )
}

export default Login