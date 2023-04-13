window.onload = function () {
    const greenList = document.querySelectorAll('div[value="4"]');
    for (let i = 0; i < greenList.length; i++) {
        // greenList[i].style.background = "#CDF2CA";
        greenList[i].innerHTML += "<div class='dropdown'><button class='button--drop'>T</button><div class='dropdown-content' id='myDropdown'><button value='create'>Create</button><button value='proceed'>Proceeding</button><button value='delay'>Delay</button><button value='complete'>compleTe</button></div></div>";
    }

    const orangeList = document.querySelectorAll('div[value="2"]');
    for (let i = 0; i < orangeList.length; i++) {
        // orangeList[i].style.background = "#FFC898";
        orangeList[i].innerHTML += "<div class='dropdown'><button class='button--drop'>P</button><div class='dropdown-content' id='myDropdown'><button value='create'>Create</button><button value='proceed'>Proceeding</button><button value='delay'>Delay</button><button value='complete'>compleTe</button></div></div>";
    }

    const pinkList = document.querySelectorAll('div[value="3"]');
    for (let i = 0; i < pinkList.length; i++) {
        // pinkList[i].style.background = "#FFDEFA";
        pinkList[i].innerHTML += "<div class='dropdown'><button class='button--drop'>D</button><div class='dropdown-content' id='myDropdown'><button value='create'>Create</button><button value='proceed'>Proceeding</button><button value='delay'>Delay</button><button value='complete'>compleTe</button></div></div>";
    }

    let buttonDropdown = document.querySelectorAll(".button--drop");
    for (let i = 0; i < buttonDropdown.length; i++) {
        buttonDropdown[i].addEventListener("click", function () {
            buttonDropdown[i].nextElementSibling.classList.toggle("show");
        });
    }

    let personListNode = document.querySelectorAll(".person-box");
    for (let i = 0; i < personListNode.length; i++) {
        if (checkToDoList(personListNode[i].children[1].children)) {
            personListNode[i].lastElementChild.disabled = false;
        }
    }

    let buttonDelete = document.querySelectorAll(".button--delete");
    for (let i = 0; i < buttonDelete.length; i++) {
        buttonDelete[i].addEventListener('click', function () {
            (async function deleteToDo(id) {

                // delete todoListNode
                let child = personListNode[i].children[1].lastElementChild;
                while (child) {
                    personListNode[i].children[1].removeChild(child);
                    child = personListNode[i].children[1].lastElementChild;
                }
                personListNode[i].lastElementChild.disabled = true;

                await fetch('/todolist/' + id, {method: "DELETE"})
            })(buttonDelete[i].getAttribute("value"));
        });
    }

    let buttonProceed = document.querySelectorAll("button[value='proceed']");
    for (let i = 0; i < buttonProceed.length; i++) {
        buttonProceed[i].addEventListener('click', function () {
            (async function updateToDo(id, state) {
                await fetch('/todolist/' + id + '/' + state, {method: "PUT"})
            })(buttonProceed[i].parentElement.parentElement.previousElementSibling.getAttribute("value"), 2);
            buttonProceed[i].parentElement.classList.toggle("show");
            buttonProceed[i].parentElement.parentElement.parentElement.style.background = "#FFC898"
            if (buttonProceed[i].parentElement.parentElement.parentElement.firstElementChild.type == 'checkbox'){
                buttonProceed[i].parentElement.parentElement.parentElement.firstElementChild.remove();
            }
            buttonProceed[i].parentElement.parentElement.parentElement.parentElement.parentElement.lastElementChild.disabled = true;
            buttonProceed[i].parentElement.previousElementSibling.textContent = "P";
        });
    }

    let buttonDelay = document.querySelectorAll("button[value='delay']");
    for (let i = 0; i < buttonDelay.length; i++) {
        buttonDelay[i].addEventListener('click', function () {
            (async function updateToDo(id, state) {
                await fetch('/todolist/' + id + '/' + state, {method: "PUT"})
            })(buttonDelay[i].parentElement.parentElement.previousElementSibling.getAttribute("value"), 3);
            buttonDelay[i].parentElement.classList.toggle("show");
            buttonDelay[i].parentElement.parentElement.parentElement.style.background = "#FFDEFA"
            if (buttonDelay[i].parentElement.parentElement.parentElement.firstElementChild.type == 'checkbox') {
                buttonDelay[i].parentElement.parentElement.parentElement.firstElementChild.remove();
            }
            buttonDelay[i].parentElement.parentElement.parentElement.parentElement.parentElement.lastElementChild.disabled = true;
            buttonDelay[i].parentElement.previousElementSibling.textContent = "D";
        });
    }

    let buttonComplete = document.querySelectorAll("button[value='complete']");
    for (let i = 0; i < buttonComplete.length; i++) {
        buttonComplete[i].addEventListener('click', function () {
            (async function updateToDo(id, state) {
                await fetch('/todolist/' + id + '/' + state, {method: "PUT"})
            })(buttonComplete[i].parentElement.parentElement.previousElementSibling.getAttribute("value"), 4);
            buttonComplete[i].parentElement.classList.toggle("show");
            buttonComplete[i].parentElement.parentElement.parentElement.style.background = "#CDF2CA"
            if (buttonComplete[i].parentElement.parentElement.parentElement.firstElementChild.type != 'checkbox') {
                const temp = document.createElement("input");
                temp.setAttribute("type", "checkbox");
                temp.setAttribute("checked", "checked");
                // buttonComplete[i].parentElement.parentElement.parentElement.innerHTML.at(0) = "<input type='checkbox' checked='checked'>";
                buttonComplete[i].parentElement.parentElement.parentElement.prepend(temp);
            }
            // buttonComplete[i].parentElement.parentElement.parentElement.parentElement.parentElement.lastElementChild.disabled = true;
            buttonComplete[i].parentElement.previousElementSibling.textContent = "T";
        });
    }
}

function checkToDoList(todoListNode) {
    let checker;
    checker = true;

    if (todoListNode.length >= 1) {
        for (let j = 0; j < todoListNode.length; j++) {
            if (todoListNode[j].getAttribute("value") != 4) {
                checker = false;
            }
        }
    } else if (todoListNode.length === 0) {
        checker = false;
    }
    return checker;
}
