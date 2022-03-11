//MUST HAVE - CREATE A TEMPLATE TAG
var template_headline = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_headline.innerHTML = `
<style>
    .headline {
        display:flex;
        align-items:center;
        flex-direction: column;
        width: 20rem;
        margin-top: -2rem;
    }
    .headline img {
        width: 16rem;
    }
    .headline_text {
        font-family: 'Open Sans', sans-serif;
        font-size: 24px;
        font-weight: bold;
        text-align:center;
    }

</style>
<div class="headline">
    <img src="img/boy_eat.svg">
    <div class ="headline_text">
    <h1>Hello World</h1>
    </div>

</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheHeadline extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_headline.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".headline_text").innerHTML = this.getAttribute("head_text");
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-headline", TheHeadline)