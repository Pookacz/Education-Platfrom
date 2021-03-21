let container = document.querySelector("#container"),
    mainSection = document.createElement("div"),
    equation = document.createElement("span"),
    answer = document.createElement("div"),
    input = document.createElement("input"),
    checkButton = document.createElement("button"),
    examButton = document.createElement("button"),
    wrong = document.createElement("div"),
    wrongMessage = document.createElement("span"),
    additionExamButton = document.createElement("button"),
    subtractionExamButton = document.createElement("button"),
    multiplicationExamButton = document.createElement("button"),
    mixExamButton = document.createElement("button"),
    examDiv = document.createElement("div"),
    examText = document.createElement("p"),
    equationText = document.createElement("p"),
    mainPage = document.createElement("button"),
    examEnd = document.createElement("div");
    divisionExamButton = document.createElement("button");

    let examAnswer;


    checkButton.innerText = 'Potwierdź';
    
    additionExamButton.innerText = 'Test z Dodawania';
    subtractionExamButton.innerText = 'Test z Odejmowania';
    multiplicationExamButton.innerText = 'Test z Mnożenia';
    divisionExamButton.innerText = 'Test z Dzielenia';
    mixExamButton.innerText = 'Test z Wszystkiego';
    mainPage.innerText = 'Strona Główna';

    wrongMessage.classList.add("wrong");
    wrongMessage.innerText = 'Błąd, spróbuj ponownie.';
    
    equationText.classList.add("examText");
    equation.classList.add("equation");
    examText.classList.add("examText");
    examText.innerText = 'Wybierz sprawdzian, który chcesz rozwiązać:';

    let i = 1,
        uA = [],
        cA = [],
        q = [],
        points = 0,
        mark = 0;
/*
=================================
=-=-=- Egzamin z dodawania =-=-=-
=================================
*/
function additionExam(){
    checkButton.remove();
    mainSection.remove();
    answer.remove();
    wrong.remove();
    examEnd.remove();
    examDiv.remove();
    input.value = "";
    container.appendChild(mainSection);
    equationText.innerText = 'Zadanie: ' + i + ' / 10';
    mainSection.appendChild(equationText);
    mainSection.appendChild(equation);
    container.appendChild(answer);
    answer.appendChild(input);

    if(i < 10){
        examButton.innerText = 'Następne zadanie';
    } else{
        examButton.innerText = 'Sprawdź wynik';
    }

    answer.appendChild(examButton);
    //odejmowanie
    let x1 = Math.round(Math.random()*999),
        x2 = Math.round(Math.random()*(1000 - x1));

    equation.innerText = x1 + " + " + x2 + " = ";
    xr = x1 + x2;

    examButton.onclick = function additionCheck(){
        if(i < 10){
            i++;
            uA.push(parseInt(input.value));
            cA.push(xr);
            q.push(equation.innerText);
            additionExam();
            input.value = "";
            wrong.remove();
        }else{
            uA.push(parseInt(input.value));
            cA.push(xr);
            q.push(equation.innerText);
// Wystawianie oceny
            for(let j = 0; j < 10; j++){
                if(uA[j] == cA[j]){
                        points++;
                }
            }
            if(points == 0 || points == 1 || points ==2){
                mark = 1;
            } else if(points == 3 || points == 4){
                mark = 2;
            }else if(points == 5 || points == 6){
                mark = 3;
            }else if(points == 7 || points == 8){
                mark = 4;
            }else if(points == 9|| points == 10){
                mark = 5;
            }
        equationText.innerText = 'Twój wynik to: ' + points + ' /10. Twoja ocena to: ' + mark;
        mainSection.appendChild(equationText);
        equation.remove();
        mainPage.onclick = function(){
            location.reload();
        }
        container.replaceChild(examEnd, answer);
// Sprawdzenie czy są już odpowiedzi z wcześniejszego sprawdzianu, jeśli są to są usuwane za pomocą pętli
        if(document.getElementsByClassName("elements").length > 0){
            for(let s = 0; s < 10; s++){
                examEnd.removeChild(document.getElementsByClassName("elements")[0])
                }
        }
//usuwanie NaN z odpowiedzi
            for( let l = 0; l < 10; l++){
                if(isNaN(uA[l]) == true){
                    uA[l] = 0;
                }
            }
// dodawanie odpowiedzi do sprawdzianu
        for(let s = 0; s < 10; s++){
            examAnswer = document.createElement("div");       
            if(uA[s] == cA[s]){
                examAnswer.innerHTML = (s+1) + ". " + q[s] + " " + cA[s] + ", Twoja odpowiedź = <span class='correct'>" + uA[s] + "</span>";
            }else{
                examAnswer.innerHTML = (s+1) + ". " + q[s] + " " + cA[s] + ", Twoja odpowiedź = <span class='wrong'>" + uA[s] + "</span>";
            }

            examAnswer.classList.add("elements");
            examEnd.appendChild(examAnswer);
        }
        // container.appendChild(examEnd);
        examEnd.appendChild(mainPage);
        examButton.remove();
        }
    }
}


additionExamButton.addEventListener("click", additionExam);
/*
===================================
=-=-=- Egzamin z odejmowania =-=-=-
===================================
*/
function subtractionExam(){
    checkButton.remove();
    mainSection.remove();
    answer.remove();
    wrong.remove();
    examEnd.remove();
    examDiv.remove();
    input.value = "";
    container.appendChild(mainSection);
    equationText.innerText = 'Zadanie: ' + i + ' / 10';
    mainSection.appendChild(equationText);
    mainSection.appendChild(equation);
    container.appendChild(answer);
    answer.appendChild(input);

    if(i < 10){
        examButton.innerText = 'Następne zadanie';
    } else{
        examButton.innerText = 'Sprawdź wynik';
    }
    
    answer.appendChild(examButton);
//odejmowanie
    let x1 = Math.round(Math.random()*1000),
    x2 = Math.round(Math.random()*1000);

    if(x1 < x2){
        xr = x2 - x1;
        equation.innerText = x2 + " - " + x1 + " = ";
    } else{
        xr = x1 -x2;
        equation.innerText = x1 + " - " + x2 + " = ";
    }

    examButton.onclick = function subtractionCheck(){
        if(i < 10){
            i++;
            uA.push(parseInt(input.value));
            cA.push(xr);
            q.push(equation.innerText);
            subtractionExam();
            input.value = "";
            wrong.remove();
        }else{
            uA.push(parseInt(input.value));
            cA.push(xr);
            q.push(equation.innerText);
// Wystawianie oceny
                for(let j = 0; j < 10; j++){
                    if(uA[j] == cA[j]){
                            points++;
                    }
                }
                if(points == 0 || points == 1 || points ==2){
                    mark = 1;
                } else if(points == 3 || points == 4){
                    mark = 2;
                }else if(points == 5 || points == 6){
                    mark = 3;
                }else if(points == 7 || points == 8){
                    mark = 4;
                }else if(points == 9|| points == 10){
                    mark = 5;
                }
            equationText.innerText = 'Twój wynik to: ' + points + ' /10. Twoja ocena to: ' + mark;
            mainSection.appendChild(equationText);
            equation.remove();
            mainPage.onclick = function(){
                location.reload();
            }
            container.replaceChild(examEnd, answer);
// Sprawdzenie czy są już odpowiedzi z wcześniejszego sprawdzianu, jeśli są to są usuwane za pomocą pętli
            if(document.getElementsByClassName("elements").length > 0){
                for(let s = 0; s < 10; s++){
                    examEnd.removeChild(document.getElementsByClassName("elements")[0])
                    }
            }
//usuwanie NaN z odpowiedzi
                for( let l = 0; l < 10; l++){
                    if(isNaN(uA[l]) == true){
                        uA[l] = 0;
                    }
                }
// dodawanie odpowiedzi do sprawdzianu
            for(let s = 0; s < 10; s++){
                examAnswer = document.createElement("div");       
                if(uA[s] == cA[s]){
                    examAnswer.innerHTML = (s+1) + ". " + q[s] + " " + cA[s] + ", Twoja odpowiedź = <span class='correct'>" + uA[s] + "</span>";
                }else{
                    examAnswer.innerHTML = (s+1) + ". " + q[s] + " " + cA[s] + ", Twoja odpowiedź = <span class='wrong'>" + uA[s] + "</span>";
                }
                
                examAnswer.classList.add("elements");
                examEnd.appendChild(examAnswer);
            }
            // container.appendChild(examEnd);
            examEnd.appendChild(mainPage);
            examButton.remove();
            }
        }
    }

subtractionExamButton.addEventListener("click", subtractionExam);
/*
================================
=-=-=- Egzamin z mnożenia =-=-=-
================================
*/
function multiplicationExam(){
    checkButton.remove();
    mainSection.remove();
    answer.remove();
    wrong.remove();
    examEnd.remove();
    examDiv.remove();
    input.value = "";
    container.appendChild(mainSection);
    equationText.innerText = 'Zadanie: ' + i + ' / 10';
    mainSection.appendChild(equationText);
    mainSection.appendChild(equation);
    container.appendChild(answer);
    answer.appendChild(input);

    if(i < 10){
        examButton.innerText = 'Następne zadanie';
    } else{
        examButton.innerText = 'Sprawdź wynik';
    }
    
    answer.appendChild(examButton);
//mnożenie
    let x1 = Math.round(Math.random()*10),
        x2 = Math.round(Math.random()*10);

    equation.innerText = x1 + " * " + x2 + " = ";

    xr = x1 * x2;

    examButton.onclick = function multiplicationCheck(){
        if(i < 10){
            i++;
            uA.push(parseInt(input.value));
            cA.push(xr);
            q.push(equation.innerText);
            multiplicationExam();
            input.value = "";
            wrong.remove();
        }else{
            uA.push(parseInt(input.value));
            cA.push(xr);
            q.push(equation.innerText);
// Wystawianie oceny
                for(let j = 0; j < 10; j++){
                    if(uA[j] == cA[j]){
                            points++;
                    }
                }
                if(points == 0 || points == 1 || points ==2){
                    mark = 1;
                } else if(points == 3 || points == 4){
                    mark = 2;
                }else if(points == 5 || points == 6){
                    mark = 3;
                }else if(points == 7 || points == 8){
                    mark = 4;
                }else if(points == 9|| points == 10){
                    mark = 5;
                }
            equationText.innerText = 'Twój wynik to: ' + points + ' /10. Twoja ocena to: ' + mark;
            mainSection.appendChild(equationText);
            equation.remove();
            mainPage.onclick = function(){
                location.reload();
            }
            container.replaceChild(examEnd, answer);
// Sprawdzenie czy są już odpowiedzi z wcześniejszego sprawdzianu, jeśli są to są usuwane za pomocą pętli
            if(document.getElementsByClassName("elements").length > 0){
                for(let s = 0; s < 10; s++){
                    examEnd.removeChild(document.getElementsByClassName("elements")[0])
                    }
            }
//usuwanie NaN z odpowiedzi
                for( let l = 0; l < 10; l++){
                    if(isNaN(uA[l]) == true){
                        uA[l] = 0;
                    }
                }
// dodawanie odpowiedzi do sprawdzianu
            for(let s = 0; s < 10; s++){
                examAnswer = document.createElement("div");       
                if(uA[s] == cA[s]){
                    examAnswer.innerHTML = (s+1) + ". " + q[s] + " " + cA[s] + ", Twoja odpowiedź = <span class='correct'>" + uA[s] + "</span>";
                }else{
                    examAnswer.innerHTML = (s+1) + ". " + q[s] + " " + cA[s] + ", Twoja odpowiedź = <span class='wrong'>" + uA[s] + "</span>";
                }
                
                examAnswer.classList.add("elements");
                examEnd.appendChild(examAnswer);
            }
            // container.appendChild(examEnd);
            examEnd.appendChild(mainPage);
            examButton.remove();
            }
        }
    }  
multiplicationExamButton.addEventListener("click", multiplicationExam);
/*
=================================
=-=-=- Egzamin z dzielenia =-=-=-
=================================
*/
function divisionExam(){
    checkButton.remove();
    mainSection.remove();
    answer.remove();
    wrong.remove();
    examEnd.remove();
    examDiv.remove();
    input.value = "";
    container.appendChild(mainSection);
    equationText.innerText = 'Zadanie: ' + i + ' / 10';
    mainSection.appendChild(equationText);
    mainSection.appendChild(equation);
    container.appendChild(answer);
    answer.appendChild(input);

    if(i < 10){
        examButton.innerText = 'Następne zadanie';
    } else{
        examButton.innerText = 'Sprawdź wynik';
    }
    
    answer.appendChild(examButton);
//dzielenie
    let x1 = Math.round(Math.random()*10),
        x2 = Math.round(Math.random()*10);
        
    if(x2 == 0){
        x2 = 1;
    }
    x = x1 * x2;
    equation.innerText = x + " : " + x2 + " = ";

    xr = x / x2;

    examButton.onclick = function divisionCheck(){
        if(i < 10){
            i++;
            uA.push(parseInt(input.value));
            cA.push(xr);
            q.push(equation.innerText);
            divisionExam();
            input.value = "";
            wrong.remove();
        }else{
            uA.push(parseInt(input.value));
            cA.push(xr);
            q.push(equation.innerText);
// Wystawianie oceny
                for(let j = 0; j < 10; j++){
                    if(uA[j] == cA[j]){
                            points++;
                    }
                }
                if(points == 0 || points == 1 || points ==2){
                    mark = 1;
                } else if(points == 3 || points == 4){
                    mark = 2;
                }else if(points == 5 || points == 6){
                    mark = 3;
                }else if(points == 7 || points == 8){
                    mark = 4;
                }else if(points == 9|| points == 10){
                    mark = 5;
                }
            equationText.innerText = 'Twój wynik to: ' + points + ' /10. Twoja ocena to: ' + mark;
            mainSection.appendChild(equationText);
            equation.remove();
            mainPage.onclick = function(){
                location.reload();
            }
            container.replaceChild(examEnd, answer);
// Sprawdzenie czy są już odpowiedzi z wcześniejszego sprawdzianu, jeśli są to są usuwane za pomocą pętli
            if(document.getElementsByClassName("elements").length > 0){
                for(let s = 0; s < 10; s++){
                    examEnd.removeChild(document.getElementsByClassName("elements")[0])
                    }
            }
//usuwanie NaN z odpowiedzi
                for( let l = 0; l < 10; l++){
                    if(isNaN(uA[l]) == true){
                        uA[l] = 0;
                    }
                }
// dodawanie odpowiedzi do sprawdzianu
            for(let s = 0; s < 10; s++){
                examAnswer = document.createElement("div");       
                if(uA[s] == cA[s]){
                    examAnswer.innerHTML = (s+1) + ". " + q[s] + " " + cA[s] + ", Twoja odpowiedź = <span class='correct'>" + uA[s] + "</span>";
                }else{
                    examAnswer.innerHTML = (s+1) + ". " + q[s] + " " + cA[s] + ", Twoja odpowiedź = <span class='wrong'>" + uA[s] + "</span>";
                }
                
                examAnswer.classList.add("elements");
                examEnd.appendChild(examAnswer);
            }
            // container.appendChild(examEnd);
            examEnd.appendChild(mainPage);
            examButton.remove();
            }
        }
    } 
    
divisionExamButton.addEventListener("click", divisionExam);
/*
====================================
=-=-=- Egzamin ze wszytskiego =-=-=-
====================================
*/
function mixExam(){
    checkButton.remove();
    mainSection.remove();
    answer.remove();
    wrong.remove();
    examEnd.remove();
    examDiv.remove();
    input.value = "";
    container.appendChild(mainSection);
    equationText.innerText = 'Zadanie: ' + i + ' / 10';
    mainSection.appendChild(equationText);
    mainSection.appendChild(equation);
    container.appendChild(answer);
    answer.appendChild(input);

    if(i < 10){
        examButton.innerText = 'Następne zadanie';
    } else{
        examButton.innerText = 'Sprawdź wynik';
    }
    
    answer.appendChild(examButton);

    let random = Math.round(Math.random()*3);
    if(random == 0){
        // mnożenie
        let x1 = Math.round(Math.random()*10),
            x2 = Math.round(Math.random()*10);

            equation.innerText = x1 + " * " + x2 + " = ";

        xr = x1 * x2;

    }else if(random == 1){
        //dzielenie
        let x1 = Math.round(Math.random()*10),
        x2 = Math.round(Math.random()*10);
            
        if(x2 == 0){
            x2 = 1;
        }
        x = x1 * x2;
        equation.innerText = x + " : " + x2 + " = ";

        xr = x / x2;
    }else if(random == 2){
        //dodawanie
        let x1 = Math.round(Math.random()*999),
            x2 = Math.round(Math.random()*(1000 - x1));

        equation.innerText = x1 + " + " + x2 + " = ";
        xr = x1 + x2;
    }else if( random == 3){
        //odejmowanie
        let x1 = Math.round(Math.random()*1000),
        x2 = Math.round(Math.random()*1000);
    
        if(x1 < x2){
            xr = x2 - x1;
            equation.innerText = x2 + " - " + x1 + " = ";
        } else{
            xr = x1 -x2;
            equation.innerText = x1 + " - " + x2 + " = ";
        }
    }

    examButton.onclick = function mixCheck(){
        if(i < 10){
            i++;
            uA.push(parseInt(input.value));
            cA.push(xr);
            q.push(equation.innerText);
            mixExam();
            input.value = "";
            wrong.remove();
        }else{
            uA.push(parseInt(input.value));
            cA.push(xr);
            q.push(equation.innerText);
// Wystawianie oceny
                for(let j = 0; j < 10; j++){
                    if(uA[j] == cA[j]){
                            points++;
                    }
                }
                if(points == 0 || points == 1 || points ==2){
                    mark = 1;
                } else if(points == 3 || points == 4){
                    mark = 2;
                }else if(points == 5 || points == 6){
                    mark = 3;
                }else if(points == 7 || points == 8){
                    mark = 4;
                }else if(points == 9|| points == 10){
                    mark = 5;
                }
            equationText.innerText = 'Twój wynik to: ' + points + ' /10. Twoja ocena to: ' + mark;
            mainSection.appendChild(equationText);
            equation.remove();
            mainPage.onclick = function(){
                location.reload();
            }
            container.replaceChild(examEnd, answer);
// Sprawdzenie czy są już odpowiedzi z wcześniejszego sprawdzianu, jeśli są to są usuwane za pomocą pętli
            if(document.getElementsByClassName("elements").length > 0){
                for(let s = 0; s < 10; s++){
                    examEnd.removeChild(document.getElementsByClassName("elements")[0])
                    }
            }
//usuwanie NaN z odpowiedzi
                for( let l = 0; l < 10; l++){
                    if(isNaN(uA[l]) == true){
                        uA[l] = 0;
                    }
                }
// dodawanie odpowiedzi do sprawdzianu
            for(let s = 0; s < 10; s++){
                examAnswer = document.createElement("div");       
                if(uA[s] == cA[s]){
                    examAnswer.innerHTML = (s+1) + ". " + q[s] + " " + cA[s] + ", Twoja odpowiedź = <span class='correct'>" + uA[s] + "</span>";
                }else{
                    examAnswer.innerHTML = (s+1) + ". " + q[s] + " " + cA[s] + ", Twoja odpowiedź = <span class='wrong'>" + uA[s] + "</span>";
                }
                
                examAnswer.classList.add("elements");
                examEnd.appendChild(examAnswer);
            }
            // container.appendChild(examEnd);
            examEnd.appendChild(mainPage);
            examButton.remove();
            }
        }
    }

mixExamButton.addEventListener("click", mixExam);

/*
======================
=-=-=- Egzamin =-=-=-
======================
*/
function exam(){
    document.title = "EDUPlatform.pl | Sprawdzian";
    
        i = 1;
        uA = [];
        cA = [];
        points = 0;
        mark = 0;
        q = [];
    startImg.remove();
    slogan.remove();
    mainSection.remove();
    answer.remove();
    wrong.remove();
    examEnd.remove();
    examDiv.remove();
    container.appendChild(examDiv);
    examDiv.appendChild(examText);
    
    examDiv.appendChild(additionExamButton);
    examDiv.appendChild(subtractionExamButton);
    examDiv.appendChild(multiplicationExamButton);
    examDiv.appendChild(divisionExamButton);
    examDiv.appendChild(mixExamButton);
}
/*
=======================
=-=-=- Dodawanie =-=-=-
=======================
*/
function addition(){
    document.title = "EDUPlatform.pl | Dodawanie";
    startImg.remove();
    slogan.remove();
    mainSection.remove();
    answer.remove();
    wrong.remove();
    examEnd.remove();
    examDiv.remove();
    input.value = "";
    container.appendChild(mainSection);
    equationText.innerText = 'Rozwiąż równanie:';
    mainSection.appendChild(equationText);
    mainSection.appendChild(equation);
    container.appendChild(answer);
    answer.appendChild(input);
    answer.appendChild(checkButton);

    let x1 = Math.round(Math.random()*999),
            x2 = Math.round(Math.random()*(1000 - x1));

        equation.innerText = x1 + " + " + x2 + " = ";
        this.xr = x1 + x2;

    checkButton.onclick = function additionCheck(){
        if(input.value == xr){
            i++;
            addition();
            input.value = "";
            wrong.remove();
        }else{
            container.appendChild(wrong);
            wrong.appendChild(wrongMessage)
        }
    }
}
/*
=========================
=-=-=- Odejmowanie =-=-=-
=========================
*/
function subtraction(){
    document.title = "EDUPlatform.pl | Odejmowanie";
    startImg.remove();
    slogan.remove();
    mainSection.remove();
    answer.remove();
    wrong.remove();
    examEnd.remove();
    examDiv.remove();
    input.value = "";
    container.appendChild(mainSection);
    equationText.innerText = 'Rozwiąż równanie:';
    mainSection.appendChild(equationText);
    mainSection.appendChild(equation);
    container.appendChild(answer);
    answer.appendChild(input);
    answer.appendChild(checkButton);

    let x1 = Math.round(Math.random()*1000),
    x2 = Math.round(Math.random()*1000);

    if(x1 < x2){
        this.xr = x2 - x1;
        equation.innerText = x2 + " - " + x1 + " = ";
    } else{
        this.xr = x1 -x2;
        equation.innerText = x1 + " - " + x2 + " = ";
    }
    checkButton.onclick = function subtractionCheck(){
        if(input.value == xr){
            subtraction();
            input.value = "";
            wrong.remove();
        }else{
            container.appendChild(wrong);
            wrong.appendChild(wrongMessage)
        }
    }
}
/*
======================
=-=-=- Mnożenie =-=-=-
======================
*/
function multiplication(){
    document.title = "EDUPlatform.pl | Mnożenie";
    startImg.remove();
    slogan.remove();
    mainSection.remove();
    answer.remove();
    wrong.remove();
    examEnd.remove();
    examDiv.remove();
    input.value = "";
    container.appendChild(mainSection);
    equationText.innerText = 'Rozwiąż równanie:';
    mainSection.appendChild(equationText);
    mainSection.appendChild(equation);
    container.appendChild(answer);
    answer.appendChild(input);
    answer.appendChild(checkButton);

    let x1 = Math.round(Math.random()*10),
        x2 = Math.round(Math.random()*10);

    equation.innerText = x1 + " * " + x2 + " = ";

    this.xr = x1 * x2;

    checkButton.onclick = function multiplicationCheck(){
        if(input.value == xr){
            multiplication();
            input.value = "";
            wrong.remove();
        }else{
            container.appendChild(wrong);
            wrong.appendChild(wrongMessage)
        }
    }
}
/*
=======================
=-=-=- Dzielenie =-=-=-
=======================
*/
function division(){
    document.title = "EDUPlatform.pl | Dzielenie";
    startImg.remove();
    slogan.remove();
    mainSection.remove();
    answer.remove();
    wrong.remove();
    examEnd.remove();
    examDiv.remove();
    input.value = "";
    container.appendChild(mainSection);
    equationText.innerText = 'Rozwiąż równanie:';
    mainSection.appendChild(equationText);
    mainSection.appendChild(equation);
    container.appendChild(answer);
    answer.appendChild(input);
    answer.appendChild(checkButton);

    let x1 = Math.round(Math.random()*10),
        x2 = Math.round(Math.random()*10);
            
        if(x2 == 0){
            x2 = 1;
        }
        x = x1 * x2;
        equation.innerText = x + " : " + x2 + " = ";

        this.xr = x / x2;

    checkButton.onclick = function divisionCheck(){
        if(input.value == xr){
            division();
            input.value = "";
            wrong.remove();
        }else{
            container.appendChild(wrong);
            wrong.appendChild(wrongMessage)
        }
    }
}

let startImg = document.createElement("img"),
    slogan = document.createElement("span");

startImg.setAttribute("src", "knowledge.svg");
startImg.classList.add("startImg");
slogan.classList.add("slogan");

function indexPage(){
    document.title = "EDUPlatform.pl |Platforma Edukacyjna";
    container.appendChild(mainSection);
    slogan.innerHTML = 'Zostań uczniem na <span class="correct">6</span>!'
    mainSection.appendChild(slogan);

    mainSection.appendChild(startImg);
}

function reload(){
    location.reload();
}