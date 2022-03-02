//MUST HAVE - CREATE A TEMPLATE TAG
var template_exit = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_exit.innerHTML = `
<style>
    .icon {
        width:50px;
        padding:.5rem;
        border-radius:50%;
        border:5px white solid;
        // background-color:black;
    }

</style>
<div class="icon">
    <img src="img/exit.svg">
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheExit extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){

        this.shadowRoot.appendChild(template_exit.content.cloneNode(true)); //use the template to make a 
        this.shadowRoot.querySelector(".icon > img").src = (`./img/${this.getAttribute("icon")}.svg`);

        if (this.getAttribute("icon") === "exit") {
            this.shadowRoot.querySelector(".icon").onclick = () => this.exitButton();       
        }
        if (this.getAttribute("icon") === "top") {
            this.shadowRoot.querySelector(".icon").onclick = () => this.backToTop();
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    exitButton() {
        window.location.replace("./index.html");
    }

    backToTop() {
        window.scrollTo(0, 0);
    }


}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-exit", TheExit)

