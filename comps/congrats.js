//MUST HAVE - CREATE A TEMPLATE TAG
var template_congrats = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_congrats.innerHTML = `
<style>
    .congrats {
        display:flex;
        align-items:center;
        flex-direction: column;
        width: 20rem;
        position: relative;
        height:25rem;
    }
    .congrats img {
        width: 16rem;
    }
    .congrats_text {
        font-weight: bold;
        font-size: 12px;
    }
    h1 {
        text-align: center;
        font-family: 'Open Sans', sans-serif;
    }
    h2 {
        font-family: 'Open Sans', sans-serif;
        text-align: center;
    }
</style>

<div class="congrats">
    <img src="img/boy_eat2.svg">
    <div class ="congrats_text">
    <h1>Congratulations!</h1>
    <h2>You're the Master of All.</h2>
    </div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheCongrats extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_congrats.content.cloneNode(true)); //use the template to make a clone
        // this.shadowRoot.querySelector(".congrats_text").innerHTML = this.getAttribute("congrats_text");

    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-congrats", TheCongrats)