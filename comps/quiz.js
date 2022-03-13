//MUST HAVE - CREATE A TEMPLATE TAG
var template_quiz = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_quiz.innerHTML = `
<style>
    .quiz_card {
        background-color: #FFFFFF;
        width: 150px;
        height: 50px;
        text-align: center;
        margin: 20px 10px 0px 0px;
        border-radius: 5px; 
        box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.2);
    }

    .quiz_title{
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        padding: 16px 0px 0px 0px;
    }
    .quiz_title img {
        width:35%;
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
    constructor() {
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({ mode: "open" }) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback() {
        this.shadowRoot.appendChild(template_quiz.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".quiz_title").innerHTML = this.getAttribute("quiz_title");

        if (this.getAttribute("quiz_title") === "Donate it") {
            this.shadowRoot.querySelector(".quiz_card").onclick = () => {
                this.correctAnswer();
                document.querySelector('#badgefood').changeBadgeFront(`./img/badge_${this.getAttribute('button_answer')}.svg`);
                document.querySelector('#badgefood').changeBadgeBack(`./img/badge_${this.getAttribute('button_answer')}_m.svg`);
                // to initialize endScore as a number because numbers cannot be added to undefined
                if (isNaN(endScore)) {
                    endScore = 1;
                }
                // add 1 point to endScore --> sessionstorage
                else if (endScore >= 1) {
                    endScore += 1;
                } // save endScore to sessionStorage
                sessionStorage.setItem("0", endScore);
                // console.log(sessionStorage)
                // set badge to true
                document.food = true;
                setTimeout(function () {
                    document.querySelector('.one').style.cssText = `
                        opacity:0;`
                    setTimeout(function () {
                        document.querySelector('.one').style.cssText = `
                        display:none;`
                        document.querySelector('.two').style.cssText += `
                        display:flex; `
                    }, 1300);
                    setTimeout(function () {
                        document.querySelector('.two').style.cssText += `
                        opacity:100;
                        `
                    }, 1310);
                }, 1000);


            }
        }
        else if (this.getAttribute("quiz_title") === "26%") {
            this.shadowRoot.querySelector(".quiz_card").onclick = () => {
                this.correctAnswer();
                document.querySelector('#badgerest').changeBadgeFront(`./img/badge_${this.getAttribute('button_answer')}.svg`);
                document.querySelector('#badgerest').changeBadgeBack(`./img/badge_${this.getAttribute('button_answer')}_m.svg`);
                // to initialize endScore as a number because numbers cannot be added to undefined
                if (isNaN(endScore)) {
                    endScore = 1;
                }
                // add 1 point to endScore --> sessionstorage
                else if (endScore >= 1) {
                    endScore += 1;
                } // save endScore to sessionStorage
                sessionStorage.setItem("0", endScore);
                // console.log(sessionStorage)
                // Set badge to true
                document.rest = true;
                setTimeout(function () {
                    document.querySelector('.two').style.cssText = `
                        opacity:0;`
                    setTimeout(function () {
                        document.querySelector('.two').style.cssText = `
                        display:none;`
                        document.querySelector('.three').style.cssText += `
                        display:flex; `
                    }, 1300);
                    setTimeout(function () {
                        document.querySelector('.three').style.cssText += `
                        opacity:100;
                        `
                    }, 1310);
                }, 1000);
            }
        }
        else if (this.getAttribute("quiz_title") === "A plastic bag") {
            this.shadowRoot.querySelector(".quiz_card").onclick = () => {
                this.correctAnswer();
                document.querySelector('#badgeland').changeBadgeFront(`./img/badge_${this.getAttribute('button_answer')}.svg`);
                document.querySelector('#badgeland').changeBadgeBack(`./img/badge_${this.getAttribute('button_answer')}_m.svg`);
                // to initialize endScore as a number because numbers cannot be added to undefined
                if (isNaN(endScore)) {
                    endScore = 1;
                }
                // add 1 point to endScore --> sessionstorage
                else if (endScore >= 1) {
                    endScore += 1;
                } // save endScore to sessionStorage
                sessionStorage.setItem("0", endScore);
                // console.log(sessionStorage)
                // set badge to true
                document.land = true;
                setTimeout(function () {
                    document.querySelector('.three').style.cssText = `
                        opacity:0;`
                    setTimeout(function () {
                        document.querySelector('.four').style.cssText += `
                            display:flex; `
                    }, 1300);
                    setTimeout(function () {
                        document.querySelector('.three').style.cssText = `
                        display:none;`
                        document.querySelector('.four').style.cssText += `
                        opacity:100;
                        `
                    }, 1310);
                }, 1000);
            }
        }
        else if (this.getAttribute("quiz_title") === "Recyclable rubbish") {
            this.shadowRoot.querySelector(".quiz_card").onclick = () => {
                this.correctAnswer();
                document.querySelector('#badgetrash').changeBadgeFront(`./img/badge_${this.getAttribute('button_answer')}.svg`);
                document.querySelector('#badgetrash').changeBadgeBack(`./img/badge_${this.getAttribute('button_answer')}_m.svg`);
                // to initialize endScore as a number because numbers cannot be added to undefined
                if (isNaN(endScore)) {
                    endScore = 1;
                }
                // add 1 point to endScore --> sessionstorage
                else if (endScore >= 1) {
                    endScore += 1;
                } // save endScore to sessionStorage
                sessionStorage.setItem("0", endScore);
                console.log(sessionStorage)
                // Set badge to true
                document.trash = true;
                setTimeout(function () {
                    document.querySelector('.four').style.cssText = `
                        opacity:0;`
                    setTimeout(function () {
                        document.querySelector('.five').style.cssText += `
                            display:flex; `
                    }, 1300);
                    setTimeout(function () {
                        document.querySelector('.four').style.cssText = `
                        display:none;`
                        document.querySelector('.five').style.cssText += `
                        opacity:100;
                        `
                    }, 1310);
                }, 1000);
            }
        }
        else if (this.getAttribute("quiz_title") === "Expiry-date") {
            this.shadowRoot.querySelector(".quiz_card").onclick = () => {
                this.correctAnswer();
                document.querySelector('#badgelabel').changeBadgeFront(`./img/badge_${this.getAttribute('button_answer')}.svg`);
                document.querySelector('#badgelabel').changeBadgeBack(`./img/badge_${this.getAttribute('button_answer')}_m.svg`);
                // to initialize endScore as a number because numbers cannot be added to undefined
                if (isNaN(endScore)) {
                    endScore = 1;
                }
                // add 1 point to endScore --> sessionstorage
                else if (endScore >= 1) {
                    endScore += 1;
                } // save endScore to sessionStorage
                sessionStorage.setItem("0", endScore);
                // console.log(sessionStorage)
                // Set badge to true
                document.label = true;
                setTimeout(function () {
                    document.querySelector('.five').style.cssText = `
                        opacity:0;`
                    document.querySelector('.icon1').style.display = 'none'
                    document.querySelector('.icon2').style.display = 'none'
                    setTimeout(function () {
                        document.querySelector('.five').style.cssText = `
                        display:none;`
                    }, 1300);
                }, 1000);
                this.pageSwap();
            }
        }

        else {
            this.shadowRoot.querySelector(".quiz_card").onclick = () => {
                if (isNaN(endScore)) {
                    endScore = 1;
                }
                // add 1 point to endScore --> sessionstorage
                else if (endScore >= 1) {
                    endScore += 1;
                } // save endScore to sessionStorage
                sessionStorage.setItem("0", endScore);
                this.wrongAnswer();
            }
        }
    }




    //To-do - CREATE THE FUNCTIONALITIES HERE!
    correctAnswer() {
        this.shadowRoot.querySelector(".quiz_title").innerHTML = ` <img src="img/correct.svg">
        `
        this.shadowRoot.querySelector(".quiz_title").style.cssText = `
        padding:0px;
        `;
    }

    wrongAnswer() {
        this.shadowRoot.querySelector(".quiz_title").innerHTML = ` <img src="img/wrong.svg">
        `
        this.shadowRoot.querySelector(".quiz_title").style.cssText = `
        padding:0px;
        `
    }

    swapPage() {
        window.location.replace("./congrats.html");
    }

    // if all badges are obtained, swap to congrats page, timeout function are present to allow animations to go through.
    pageSwap() {
        // console.log(document.food);
        // console.log(document.rest);
        // console.log(document.land);
        // console.log(document.trash);
        // console.log(document.label);
        if (document.food === true) {
            if (document.rest === true) {
                if (document.land === true) {
                    if (document.trash === true) {
                        if (document.label === true) {
                            setTimeout(function () {
                                setTimeout(function () {
                                    document.querySelector(`#badgefood`).endingFlip();
                                }, 100);
                                setTimeout(function () {
                                    document.querySelector(`#badgerest`).endingFlip();
                                }, 200);
                                setTimeout(function () {
                                    document.querySelector(`#badgeland`).endingFlip();
                                }, 300);
                                setTimeout(function () {
                                    document.querySelector(`#badgetrash`).endingFlip();
                                }, 400);
                                setTimeout(function () {
                                    document.querySelector(`#badgelabel`).endingFlip();
                                }, 500);
                                setTimeout(function () {
                                    this.swapPage();
                                }, 2500);
                            }, 800);
                        }
                    }
                }
            }
        }
    }


}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-quiz", TheQuiz)