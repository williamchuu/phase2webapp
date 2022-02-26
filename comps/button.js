//MUST HAVE - CREATE A TEMPLATE TAG
var template_button = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_button.innerHTML = `
<style>
    .button {
        box-shadow: 2px 2px 10px rgba(10, 23, 34, 0.2);
        padding: 15px; 
        background-color:#F3CA40;
        border-radius: 20px;
        text-align: center;
        color: #151515;
        max-width: 10rem;

    }
    .button_title {
        // font-weight:lighter; 
        font-size: 24px;

    }

</style>
<div class="button">
    <div class="button_title"> Submit
    </div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheButton extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor() {
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({ mode: "open" }) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback() {
        this.shadowRoot.appendChild(template_button.content.cloneNode(true)); //use the template to make a clone
        if (this.getAttribute("button_title")) {
            this.shadowRoot.querySelector(".button_title").innerText = this.getAttribute("button_title");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-button", TheButton)