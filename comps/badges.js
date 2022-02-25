//MUST HAVE - CREATE A TEMPLATE TAG
var template_badge = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_badge.innerHTML = `
<style>
    .badge-container {
        perspective: 1000;
    }
    .badge-container:hover .badge, .badge-container.hover .badge {
        transform: rotateY(180deg);
    }

    .badge-container, .badge-front, .badge-back {
        width: 10rem;
        height: 4rem;
    }

    .badge {
        transition: .8s ease;
        transform-style: preserve-3d;
        position: relative;
    }

    .badge-front, .badge-back {
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }

    .badge-back {
        transform: rotateY(180deg);
    }
</style>

<div class="badge-container">
    <div class="badge">
        <div class="badge-front">
            <img src="img/badge_locked.svg">
        </div>
        <div class="badge-back">
            <img src="img/badge_locked_m.svg">
        </div>
    </div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBadge extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor() {
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({ mode: "open" }) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback() {
        this.shadowRoot.appendChild(template_badge.content.cloneNode(true)); //use the template to make a clone
        // this.shadowRoot.querySelector(".badge").onclick = () => this.changebadge();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changebadge(img='./img/badge_locked.svg') {
        this.shadowRoot.querySelector(".badge_food > img").src = img;
    
    }
    changeBadgeBack(img='./img/badge_locked_m.svg') {
        this.shadowRoot.querySelector(".badge_food > img").src = img;
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-badge", TheBadge)