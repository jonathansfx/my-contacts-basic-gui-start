// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let outputEl = document.getElementById("output");

// Go Btn - Menu Listener
goBtnEl.addEventListener("click", goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === "display-all") {
    displayContacts();
  } else if (selection === "add") {
    addContact();
  } else if (selection === "remove") {
    removeContact();
  } else if (selection === "display-name") {
    displayByName();
  } else if (selection === "display-country") {
    displayByCountry();
  }
}

let contacts = loadContacts();

// MENU FUNCTIONS
function displayContacts() {
  console.log("Display Contacts");
}

function addContact() {
  console.log("Add Contact");
  let description = prompt("enter contact name");
  tasks.push(newTask(description));
  saveTasks();
  displayAll();
}

function removeContact() {
  console.log("Remove Contact");
}

function displayByName() {
  console.log("Display by Name");
}

function displayByCountry() {
  console.log("Display by Country");
}

function loadContacts() {
  let contactsStr = localStorage.getItem("contacts");
  return JSON.parse(contactsStr) ?? [];
}

function displayAll() {
  let outputStr = "";
  for (let i = 0; i < contacts.length; i++) {
    outputStr += getContactsHTMLStr(contacts[i], i);
  }
  outputEl.innerHTML = outputStr;
}
