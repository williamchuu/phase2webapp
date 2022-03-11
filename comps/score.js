//MUST HAVE - CREATE A TEMPLATE TAG


var template_score = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_score.innerHTML = `
<style>
.text {
   font-size: 20px;
   font-weight: 600;
   text-align: center;
   display:none;
   font-family: 'Open Sans', sans-serif;
}
</style>

<div class="text">
    <h3>It took you ___ attempts.</h3>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheScore extends HTMLElement {

   //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
   constructor() {
      super(); //pass on the HTMLElement super powers!
      this.attachShadow({ mode: "open" }) //Attach it to the shadowRoot

      //To-do - CREATE THE STATES FOR THE UI HERE!
   }

   //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
   connectedCallback() {
      this.shadowRoot.appendChild(template_score.content.cloneNode(true)); //use the template to make a clone
      // Display none because user does not have any score.

      // If User is on homepage and has a score, display it and change text accordingly 
      if (endScore > 1 && this.getAttribute("end") === "no") {
         this.shadowRoot.querySelector(".text").style.display = "block";
         this.shadowRoot.querySelector(".text").innerHTML = "Your current attempts is " + endScore + ".";
      }
      if (endScore > 20 && this.getAttribute("end") === "no") {
         this.shadowRoot.querySelector(".text").style.display = "block";
         this.shadowRoot.querySelector(".text").innerHTML = "You have " + endScore + " attempts and haven't completed it?";
      }

      // If User is done the quiz and has a score, change the text accordingly
      if (endScore > 1 && this.getAttribute("end") === "yes") {
         this.shadowRoot.querySelector(".text").style.display = "block";
         this.shadowRoot.querySelector(".text").innerHTML = "It took you " + endScore + " attempts to complete the quiz.";
      }
      if (endScore > 20 && this.getAttribute("end") === "yes") {
         this.shadowRoot.querySelector(".text").style.display = "block";
         this.shadowRoot.querySelector(".text").innerHTML = "It really took you " + endScore + " attempts to complete this quiz?";
      }
   }

   //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-score", TheScore)