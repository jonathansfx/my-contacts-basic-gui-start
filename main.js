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
    displayAllContacts();
  } else if (selection === "add") {
    addContact();
  } else if (selection === "remove") {
    removeContact();
  } else if (selection === "display-name") {
    displayContactsByName();
  } else if (selection === "display-country") {
    displayContactsByCountry();
  }
}

let contacts = loadContacts();
displayAllContacts();

// MENU FUNCTIONS
function displayAllContacts() {
  let outputStr = "";
  for (let i = 0; i < contacts.length; i++) {
    outputStr += getContactHTMLStr(contacts[i], i);
  }
  outputEl.innerHTML = outputStr;
}

function addContact() {
  console.log("Add Contact");
  let name = prompt("Enter contact name:");
  let email = prompt("Enter the email of your contact:");
  let phoneNumber = prompt("Enter the phone number of your contact:");
  let country = prompt("Enter the country of your contact:");
  contacts.push(newContact(name, email, phoneNumber, country));
  saveContacts();
  displayAllContacts();
}

function removeContact() {
  console.log("Remove Contact");
  let index = +prompt("Enter # of Contact:");
  if (index >= 0 && index < contacts.length) {
    // Valid index -> Remove
    contacts.splice(index, 1);
    saveContacts();
    displayAllContacts();
  } else {
    alert("Invalid Contact #");
  }
}

function displayContactsByName() {
  console.log("Display by Name");
  let name = prompt("Enter contact name:");
  let filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(name.toLowerCase())
  );
  let outputStr = "";
  for (let i = 0; i < filteredContacts.length; i++) {
    outputStr += getContactHTMLStr(filteredContacts[i], i);
  }
  outputEl.innerHTML = outputStr;
}

function displayContactsByCountry() {
  console.log("Display by Country");
  let country = prompt("Enter country name:");
  let filteredContacts = contacts.filter((contact) =>
    contact.country.toLowerCase().includes(country.toLowerCase())
  );
  let outputStr = "";
  for (let i = 0; i < filteredContacts.length; i++) {
    outputStr += getContactHTMLStr(filteredContacts[i], i);
  }
  outputEl.innerHTML = outputStr;
}
// Helpers

function loadContacts() {
  let jsonContacts = localStorage.getItem("contacts");
  return JSON.parse(jsonContacts) ?? [];
}

function saveContacts() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function newContact(contactName, contactEmail, contactPhoneNumber, contactCountry) {
  return {
    name: contactName,
    email: contactEmail,
    phoneNumber: contactPhoneNumber,
    country: contactCountry,
  };
}

function getContactHTMLStr(contact, i) {
  return `<div class="contact">${i}: ${contact.name}</div>`;
}