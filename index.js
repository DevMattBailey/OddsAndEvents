// # Odds and Events

// ![Example screenshot of numbers partially sorted from a bank into the appropriate odds or evens bucket](example.png)

// The goal of this workshop is to create an app that allows a user to input a number into a number bank. The user can then sort the numbers in the bank into one of two categories: odd or even.

// ## Requirements

// For this workshop, you'll be starting from scratch! You are highly encouraged to reference previous solutions. Write JS to build an application that meets the following requirements:

// - `index.html` is not modified. All elements are generated via JS.
    //done
// - The application contains a form that allows users to input a number.
    //done
// - When the user clicks the "Add number" button, the number they entered into the input field should be added to the number bank.
// - The number bank should display all of the numbers that the user has entered.
// - When the "Sort 1" button is clicked, the first number in the number bank is removed and placed into either the odd or even category.
// - When the "Sort All" button is clicked, all numbers in the number bank are moved into either the odd or even category.
// - Numbers are moved into the correct category based on whether they are odd or even.
// - The numbers in the bank, odd category, and even category are stored as state variables.
// - Functions are used to organize logic involving state changes.
// - The application is rerendered whenever state changes.
// - UI elements are organized into component functions.
// - Event listeners modify state. They do not directly modify the document.

const OddsAndEvents = document.createElement('div');
OddsAndEvents.innerHTML = `
<h2>Odds and Events</h2>
<p>
<input><button>Add number</button><button>Sort 1</button><button>Sort All</button>
</p>
<p>
<form><b>
Bank
<br>
<input id="Bank" placeholder="72 101"/>
<br>
Odds
<br>
<input id="Odds" placeholder="1 5 3 11 13"/>
<br>
Evens
<br>
<input id="evenNum" placeholder="2 8 98"/>
<br>
<br>
</form>
</p>
`;
app.appendChild(OddsAndEvents);

