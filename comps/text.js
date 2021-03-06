//MUST HAVE - CREATE A TEMPLATE TAG
var template_text = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_text.innerHTML = `
<style>
.information_title{
    fontSize: 24px;
    font-weight:bold;
    text-align: left;
    font-family: 'Open Sans', sans-serif;
}

.information_body{
    fontSize: 18px;
    text-align: left;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    
}
</style>

<div class="text">
    <div class ="information_title">
        <h1>Title</h1>  
    </div>
    <div class ="information_body">
        <p>Lorem ipsum dolor sit amet, aconsectetur adipiscing elit. Phasellus sit amet congue elit. Integer vitae odio congue, iaculis.</p>
    </div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheText extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_text.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".information_title").innerHTML = this.getAttribute("head_text");
        this.shadowRoot.querySelector(".information_body").innerHTML = this.getAttribute("sub_text");
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-text", TheText)