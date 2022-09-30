// Ask for the user's first name
// Ask for the user's last name
// Log the user's first name to the console
// Alert the user's last name

let submission = 1;

//which page are we on?
function submit() {
  if (submission==1)
    fullName();
  else
    birthday();
}

//page one
function fullName() {
  // here's the basic attempt
  let firstName = document.getElementById('first');
  let lastName = document.getElementById('last');

  if (firstName.value && lastName.value) {
    console.log(firstName.value);
    setTimeout(() => { alert(lastName.value); }, 10);
    document.getElementById('page-one').style.display = "none";
    document.getElementById('page-two').style.display = "block";
    submission += 1;
  }
}

// *BONUS* 
// Ask for the user's birthday
// Ask the user to confirm their birthday input
// Alert the user's birthday

// page two
// there are some redundancies here
function birthday() {
  let birthMonth = document.getElementById('month');
  let birthDate = document.getElementById('day');
  let birthYear = document.getElementById('year');

  if (birthDate.style.display == "none") {
    birthday();
  }

  if (birthMonth.value && birthYear.value && birthDate.value) {
    if (confirm(`Is ${birthMonth.value} ${birthDate.value}, ${birthYear.value} correct?`)) {
        alert(`${birthMonth.value} ${birthDate.value}, ${birthYear.value}!`);
    }
  }
}

function monthDay() {
    let birthMonth = document.getElementById('month');
    let birthDate = document.getElementById('day');
    let birthYear = document.getElementById('year');

    if (birthMonth.value && birthYear.value) {
        document.getElementById('vanish').style.display = "none";

        if (birthMonth.value) {
            birthDate.style.display = "inline";
            if (birthMonth.value == 'April' || birthMonth.value == 'June' || birthMonth.value == 'September' || birthMonth.value == 'November') {
                document.getElementById('def').style.display = "none";
            }
            else if (birthMonth.value == 'February') {
                document.getElementById('def').style.display = "none";
                document.getElementById('spec').style.display = "none";
                if (birthYear.value % 4 != 0) {
                    document.getElementById('leap').style.display = "none";
                }
            }
        }
    }
}