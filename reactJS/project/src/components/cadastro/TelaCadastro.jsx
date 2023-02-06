import React from "react";
import Style from "./Style.css"

function Cadastro(){
    return(

 <div className="background">

<form>
    
    <div>
        <input type="text" name="nome" placeholder="Your name..." class="text_area"/>
    </div>
    <div>
        <input type="email" name="email" placeholder="Your email..." class="text_area"/>
    </div>
    
    <div>
        <input type="password" name="senha" placeholder="password..." class="text_area" id="senha"/>
    </div>
    <div>
        <input type="password" name="confirma_senha" placeholder="confirm your password..." class="text_area" id="senha"/>
    </div>

    <div >
         <input type="submit" name="subject" value="REGISTRATION" class="button"/>
    </div> 


   
</form>
    
       </div>
    )
}

export default Cadastro