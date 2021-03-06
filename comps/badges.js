//MUST HAVE - CREATE A TEMPLATE TAG
var template_badge = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_badge.innerHTML = `
<style>
    #badge-container {
        perspective: 1000;
    }
    /* for hover effect (don't use) #badge-container:hover #badge, #badge-container.hover #badge {
        transform: rotateY(180deg);
    } */

    #badge-container, #badge-front, #badge-back {
        width: 7rem;
        height: 6rem;   
    }

    #badge {
        transition: 1.1s ease;
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
    @media screen and (max-width:600px) {
		#badge-container, #badge-front, #badge-back {
			width: 5rem;
		}
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
        // document.querySelector("#badge").onclick = () => this.changeBadge();
        this.badge = 0;
        this.shadowRoot.querySelector("#badge-front").onclick = () => this.flipBadgeFront();
        this.shadowRoot.querySelector("#badge-back").onclick = () => this.flipBadgeBack();
        // If it is at end, unlock the badges already.
        if (this.getAttribute("end") === "yes") {
            this.shadowRoot.querySelector("#badge-front").src = this.changeBadgeFront(`./img/badge_${this.getAttribute('name')}.svg`);
            this.shadowRoot.querySelector("#badge-back").src = this.changeBadgeBack(`./img/badge_${this.getAttribute('name')}_m.svg`);
        }
        if (window.matchMedia("(max-width: 700px") && this.getAttribute("end") === "yes") {
            this.shadowRoot.querySelector("#badge-front").style.width = '7rem'
            this.shadowRoot.querySelector("#badge-back").style.width = '7rem'
            this.shadowRoot.querySelector("#badge-container").style.width = '7rem'
        }
        else if (window.matchMedia("(max-width: 700px") && this.getAttribute("end") === "no") {
            this.shadowRoot.querySelector("#badge-front").style.width = '7rem';
            this.shadowRoot.querySelector("#badge-back").style.width = '7rem';
            this.shadowRoot.querySelector("#badge-container").style.width = '7rem';
            this.shadowRoot.querySelector("#badge-front").style.height = '6.5rem';
            this.shadowRoot.querySelector("#badge-back").style.height = '6.5rem';
            this.shadowRoot.querySelector("#badge-container").style.height = '6.5rem';
        }
        
        
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!

    updateBadgeState() {
        // Front --> Back
        if (this.badge === 0) {
            this.shadowRoot.querySelector('#badge').style.cssText = `
            transform: rotateY(180deg);
            `

        }
        // Back --> Front
        if (this.badge === 1) {
            this.shadowRoot.querySelector('#badge').style.cssText = `
           transform: rotateY(360deg);
           `
        }
        // Ending Animation
        if (this.badge === 2) {
            this.shadowRoot.querySelector('#badge').style.cssText = `
           transform: rotateY(1080deg);
           `
        }
        // Congrats animation
        if (this.badge === 3) {
            this.shadowRoot.querySelector('#badge').style.cssText = `
           transform: rotateY(0deg);
           `
           
        }
    }


    // Functions to change the badge state, some increase/decrease the speed of animation
    flipBadgeFront() {
        this.badge = this.badge = 0;
        this.updateBadgeState();
    }
    flipBadgeBack() {
        this.badge = this.badge = 1;
        this.updateBadgeState();
    }

    changeBadgeFront(img = './img/badge_locked.svg') {
        this.shadowRoot.querySelector("#badge-front > img").src = img;
        this.flipBadgeBack();
        this.shadowRoot.querySelector('#badge').style.cssText += `
            transition: 1.2s ease-out;
            `
    }

    changeBadgeBack(img = './img/badge_locked_m.svg') {
        this.shadowRoot.querySelector("#badge-back > img").src = img;
    }

    endingFlip() {
        this.badge = this.badge = 2;
        this.updateBadgeState();
        this.shadowRoot.querySelector('#badge').style.cssText += `
            transition: 2s ease-out;
            `
    }

    congratsFlip() {
        this.badge = this.badge = 3;
        this.updateBadgeState();
        this.shadowRoot.querySelector('#badge').style.cssText += `
            transition: 1.5s ease-out;
            `
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-badge", TheBadge)