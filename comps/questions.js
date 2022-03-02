//MUST HAVE - CREATE A TEMPLATE TAG
var template_questions = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_questions.innerHTML = ` 
<style>
</style>

<div class="container'>
    <div class="container_a>
        <button class="button_a"></button>
    </div>
    <div class="container_b>
        <button class="button_b"></button>
    </div>
    <div class="container_c>
        <button class="button_c"></button>
    </div>
    <div class="container_d>
        <button class="button_d"></button>
    </div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheQuestions extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_comp.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-questions", TheQuestions) 