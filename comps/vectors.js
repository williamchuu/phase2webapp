//MUST HAVE - CREATE A TEMPLATE TAG
var template_vector = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_vector.innerHTML = `
<style>


    .vectors {
        width: 10rem;
        height: 10rem;
    }

</style>

<div class="vectors">
    <div class="icon">
     <img src="img/trash.svg">
    </div
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheVector extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_vector.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector("#icon").innerText = this.getAttribute("icon");
        if(this.getAttribute(".icon")){
            document.querySelector(".icon").changeIcon(`./imgs/${this.getAttribute("icon")}.svg`);

        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeIcon(img='./img/salad.svg'){
        this.shadowRoot.querySelector("#vectors").src = img;
        
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-vector", TheVector)