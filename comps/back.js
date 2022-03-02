//MUST HAVE - CREATE A TEMPLATE TAG
var template_back = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_back.innerHTML = `
<div class="back">
    <div class="back_button"></div>
    <img src="img/back_button.svg">
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBack extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_back.content.cloneNode(true)); //use the template to make a clone
        if (this.getAttribute("button") === "back") {
            document.querySelector(".goBack").onclick = () => this.goBack();
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    goBack(){
        window.location.replace("./landing_page.html");
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-back", TheBack)