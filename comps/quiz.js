//MUST HAVE - CREATE A TEMPLATE TAG
var template_quiz = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_quiz.innerHTML = `
<style>
    .quiz_card {
        background-color: #FFFFF;
        width: 150px;
        height: 50px;
        text-align: center;
        margin: 20px 10px 0px 0px;
        border-radius: 5px; 
        box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.2);
        
    }

    .quiz_title{
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-size: 10px;
        padding: 20px 0px 0px 0px;
    }

    .quiz_card:hover{
        background-color: #CAA21D;
    }
    
</style>
<div class="quiz_card">
    <div class="quiz_title">
    <p>h</p>
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
        this.shadowRoot.querySelector(".quiz_title").innerHTML = this.getAttribute("quiz_title");

        if (this.getAttribute("quiz_title") === "A"){
            this.shadowRoot.querySelector(".quiz_card").onclick =() => this.correctAnswer();
        }
        
        else if (this.getAttribute("quiz_title") === "B"){
            this.shadowRoot.querySelector(".quiz_card").onclick =() => this.wrongAnswer();
        }
        
        else if (this.getAttribute("quiz_title") === "C"){
            this.shadowRoot.querySelector(".quiz_card").onclick =() => this.wrongAnswer();
        }
        
        else if (this.getAttribute("quiz_title") === "D"){
            this.shadowRoot.querySelector(".quiz_card").onclick =() => this.wrongAnswer();
        }
    }


    

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    correctAnswer(){
        alert("answer correct");
    }

    wrongAnswer(){
        alert("answer wrong");
    }


}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-quiz", TheQuiz)