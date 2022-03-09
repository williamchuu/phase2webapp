//MUST HAVE - CREATE A TEMPLATE TAG
var template_button = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_button.innerHTML = `
<style>
    .button {
        box-shadow: 2px 2px 10px rgba(10, 23, 34, 0.2);
        padding: 15px; 
        background-color:#F3CA40;
        border-radius: 20px;
        text-align: center;
        color: #151515;
        width: 10rem;

    }
    .button_title {
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-size: 24px;

    }

    .button:hover {
        background-color: #CAA21D;
    }

</style>
<div class="button">
    <div class="button_title"></div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheButton extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor() {
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({ mode: "open" }) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback() {
        this.shadowRoot.appendChild(template_button.content.cloneNode(true)); //use the template to make a clone
        if (this.getAttribute("button_title")) {
            this.shadowRoot.querySelector(".button_title").innerText = this.getAttribute("button_title");
        }
        if (this.getAttribute("button_title") === "Start!") {
            this.shadowRoot.querySelector(".button").onclick = () => this.startQuiz();       
        }


        /* Placeholder button answers until actual buttons are made */
        if (this.getAttribute("button_answer") === "food") {
            this.shadowRoot.querySelector(".button").onclick = () => 
            {
                document.querySelector('#badgefood').changeBadgeFront(`./img/badge_${this.getAttribute('button_answer')}.svg`);
                document.querySelector('#badgefood').changeBadgeBack(`./img/badge_${this.getAttribute('button_answer')}_m.svg`);
                endScore += 1;
                sessionStorage.setItem('0', endScore);
                //console.log(sessionStorage)
                document.food = true;
                this.pageSwap();
            }
        }
        else if (this.getAttribute("button_answer") === "label") {
            this.shadowRoot.querySelector(".button").onclick = () => 
            {
                document.querySelector('#badgelabel').changeBadgeFront(`./img/badge_${this.getAttribute('button_answer')}.svg`);
                document.querySelector('#badgelabel').changeBadgeBack(`./img/badge_${this.getAttribute('button_answer')}_m.svg`);
                endScore += 1;
                sessionStorage.setItem('0', endScore);
                //console.log(sessionStorage)
                document.label = true;
                this.pageSwap();
            }
        }
        else if (this.getAttribute("button_answer") === "restaurant") {
            this.shadowRoot.querySelector(".button").onclick = () => 
            {
                document.querySelector('#badgerest').changeBadgeFront(`./img/badge_${this.getAttribute('button_answer')}.svg`);
                document.querySelector('#badgerest').changeBadgeBack(`./img/badge_${this.getAttribute('button_answer')}_m.svg`);
                endScore += 1;
                sessionStorage.setItem('0', endScore);
                //console.log(sessionStorage)
                document.rest = true;
                this.pageSwap();
            }
        }
        else if (this.getAttribute("button_answer") === "trash") {
            this.shadowRoot.querySelector(".button").onclick = () => 
            {
                document.querySelector('#badgetrash').changeBadgeFront(`./img/badge_${this.getAttribute('button_answer')}.svg`);
                document.querySelector('#badgetrash').changeBadgeBack(`./img/badge_${this.getAttribute('button_answer')}_m.svg`);
                endScore += 1;
                sessionStorage.setItem('0', endScore);
                //console.log(sessionStorage)
                document.trash = true;
                this.pageSwap();
            }
        }
        else if (this.getAttribute("button_answer") === "landfill") {
            this.shadowRoot.querySelector(".button").onclick = () => 
            {
                document.querySelector('#badgeland').changeBadgeFront(`./img/badge_${this.getAttribute('button_answer')}.svg`);
                document.querySelector('#badgeland').changeBadgeBack(`./img/badge_${this.getAttribute('button_answer')}_m.svg`);
                endScore += 1;
                sessionStorage.setItem('0', endScore);
                console.log(sessionStorage)
                document.land = true;
                this.pageSwap();
            }
        }
            /* --------------- */
        
        else if (this.getAttribute("button_title") === "Submit") {
            this.shadowRoot.querySelector(".button").onclick = () => this.submitAnswer();
        }
        
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    startQuiz() {
        window.location.replace("./index.html");
    }

    submitAnswer() {
        alert("submit button works :D");
    }
    swapPage() {
        window.location.replace("./congrats.html");
    }
    pageSwap() {
        console.log(document.food)
        console.log(document.rest)
        console.log(document.land)
        console.log(document.trash)
        console.log(document.label)
        if (document.food === true) {
            if(document.rest === true) {
                if(document.land === true) {
                    if(document.trash === true) {
                        if(document.label === true) {
                                document.querySelector(`#badgefood, #badgerest, #badgeland, #badgetrash, #badgelabel`).endingFlip();

                                setTimeout(function() {
                                this.swapPage(); }, 2000);

                        }
                    }
                } 
            }
        }
    }
    

}
 
//MUST HAVE - define the tag for the custom elements
customElements.define("the-button", TheButton)