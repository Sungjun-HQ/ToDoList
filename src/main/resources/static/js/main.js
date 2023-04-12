window.onload = function () {
    const greenList = document.querySelectorAll('div[value="4"]');
    for (let i = 0; i < greenList.length; i++) {
        greenList[i].style.background = "#CDF2CA";
        greenList[i].innerHTML += "<div class='dropdown'><button class='button--drop'>T</button><div class='dropdown-content' id='myDropdown'><a href='#c'>Create</a><a href='#p'>Proceeding</a><a href='#d'>Delay</a><a href='#t'>compleTe</a></div></div>";
    }

    const orangeList = document.querySelectorAll('div[value="2"]');
    for (let i = 0; i < orangeList.length; i++) {
        orangeList[i].style.background = "#FFC898";
        orangeList[i].innerHTML += "<div class='dropdown'><button class='button--drop'>P</button><div class='dropdown-content' id='myDropdown'><a href='#c'>Create</a><a href='#p'>Proceeding</a><a href='#d'>Delay</a><a href='#t'>compleTe</a></div></div>";
    }

    const pinkList = document.querySelectorAll('div[value="3"]');
    for (let i = 0; i < pinkList.length; i++) {
        pinkList[i].style.background = "#FFDEFA";
        pinkList[i].innerHTML += "<div class='dropdown'><button class='button--drop'>D</button><div class='dropdown-content' id='myDropdown'><a href='#c'>Create</a><a href='#p'>Proceeding</a><a href='#d'>Delay</a><a href='#t'>compleTe</a></div></div>";
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
