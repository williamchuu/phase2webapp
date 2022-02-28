//MUST HAVE - CREATE A TEMPLATE TAG
var template_badge = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_badge.innerHTML = `
<style>
    #badge-container {
        perspective: 1000;
    }
    /* hover #badge-container:hover #badge, #badge-container.hover #badge {
        transform: rotateY(180deg);
    } */

    #badge-container, #badge-front, #badge-back {
        width: 10rem;
        height: 4rem;
    }

    #badge {
        transition: .8s ease;
        transform-style: preserve-3d;
        position: relative;
    }

    #badge-front, #badge-back {
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }

    #badge-back {
        transform: rotateY(180deg);
    }
    #hello {
        display:none;
    }
</style>

<div id="badge-container">
    <div id="badge">
        <div id="badge-front">
            <img src="img/badge_locked.svg">
        </div>
        <div id="badge-back">
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
        // this.shadowRoot.querySelector("#badge").onclick = () => this.changeBadge();
        this.badge = 0;
        this.shadowRoot.querySelector("#badge-front").onclick = () => this.flipBadgeFront();
        this.shadowRoot.querySelector("#badge-back").onclick = () => this.flipBadgeBack();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!

    updateBadgeState(){
        if(this.badge === 1) {
           this.shadowRoot.querySelector('#badge').style.cssText= `
           transform: rotateY(360deg);
           `
           }
           if(this.badge === 0) {
          this.shadowRoot.querySelector('#badge').style.cssText= `
          transform: rotateY(180deg);
          `
      }
    }

    flipBadgeFront() {
         this.badge = this.badge = 0;
         this.updateBadgeState();
      }
    flipBadgeBack() {
         this.badge = this.badge = 1;
         this.updateBadgeState();
      }

    changeBadge(img='./img/badge_locked.svg') {
        this.shadowRoot.querySelector("#badge-front > img").src = img;
        this.shadowRoot.querySelector("#badge-back > img").src = img;
    }
    /* on correct button it'll be something like 
    document.querySelector('#badge').changeBG(`./imgs/${this.getAttribute('name')}.svg`);
    */
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-badge", TheBadge)