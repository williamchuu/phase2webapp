//MUST HAVE - CREATE A TEMPLATE TAG
var template_quiz = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_quiz.innerHTML = `
<style>
    .quiz-card {
        background-color: #FFFFF;
        width: 150px;
        height: 50px;
        text-align: center;
        margin: 20px 10px 0px 0px;
        border-radius: 5px; 
        box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.2);
        
    }

    .quiz_text{
        padding: 4px 0px 0px 0px;
    }

</style>

<div class="quiz-card">
    <div class="quiz_text">
    <p>Quiz Text</p>
    </div>
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheQuiz extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_quiz.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-quiz", TheQuiz)