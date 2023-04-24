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
    displayAll();
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
displayAll();

// MENU FUNCTIONS
function displayAll() {
  console.log("Display Contacts");
}

function addContact() {
  console.log("Add Contact");
  let name = prompt("enter contact name");
  let email = prompt("enter the email of your contact:");
  let phoneNumber = prompt("enter the phone number of your contact:");
  let country = prompt("enter the country of your contact:");
  contacts.push(newContact(name, email, phoneNumber, country));
  saveContacts();
  displayAll();
}

function removeContact() {
  console.log("Remove Contact");
  let index = +prompt("Enter # of Contact:");
  if (index >= 0 && index < contacts.length) {
    // Valid index -> Remove
    contacts.splice(index, 1);
    saveContacts();
    displayAll();
  } else {
    alert("Invalid Contact #");
  }
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

function newContact(
  contactName,
  contactEmail,
  contactPhoneNumber,
  contactCountry
) {
  return {
    name: contactName,
    email: contactEmail,
    phoneNumber: contactPhoneNumber,
    country: contactCountry,
  };
}

function getContactHTMLStr(contact, i) {
  return `<div class = "${contact}">
  ${i}: ${contact.name}</div>`;
}
