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
displayContacts();

// MENU FUNCTIONS
function displayContacts() {
  console.log("Display Contacts");
}

function addContact() {
  console.log("Add Contact");
  let name = prompt("enter contact name");
  contacts.push(newContact(name));
  saveContacts();
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

// Helpers

function loadContacts() {
  let jsonContacts = localStorage.getItem("contacts");
  return JSON.parse(jsonContacts) ?? [];
}

function displayAll() {
  let outputStr = "";
  for (let i = 0; i < contacts.length; i++) {
    outputStr += getContactHTMLStr(contacts[i], i);
  }
  outputEl.innerHTML = outputStr;
}

function saveContacts() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function newContact(contactName) {
  return {
    name: contactName,
  };
}

function getContactHTMLStr(contact, i) {
  return `<div class = "${contact}">
  ${i}: ${contact.name}</div>`;
}
