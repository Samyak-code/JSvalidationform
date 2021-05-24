const nameInput = document.querySelector("input#name");
const emailInput = document.querySelector("input#email");
const gyearInput = document.querySelector("input#gyear");
const workInput = document.querySelector("textarea#work");
const expInput = document.querySelector("textarea#exp");
const departmentSelect = document.querySelector("select#department");

const isnameValid = (name) => (name !== "" ? true : "Name can't be empty");

const isemailValid = (email) =>
  email.includes("@" && ".") ? true : "Enter a valid email";

const isgyearValid = (y) =>
  y > 1990 && y < 2025 ? true : "Invalid year of graduation";

const isworkValid = (w) =>
  w !== ""
    ? true
    : "The answer to this prompt(why work with us?) can't be empty";

const isexpValid = (x) =>
  x !== "" ? true : "The answer to this prompt(Experience) can't be empty";

const isdepartmentValid = (h) =>
  h !== "" ? true : "The answer to this question cannot be empty";

function handleSubmit(e) {
  e.preventDefault();

  const validationRes = [
    isnameValid(nameInput.value),
    isemailValid(emailInput.value),
    isgyearValid(gyearInput.value),
    isworkValid(workInput.value),
    isexpValid(expInput.value),
    isdepartmentValid(departmentSelect.value)
  ];

  const fieldsValid = validationRes.every((v) => v === true);

  if (!fieldsValid) {
    alert(validationRes.find((m) => typeof m === "string"));
    return;
  }

  alert(
    `Hello, ${nameInput.value} <${emailInput.value}>
    \ngraduated in  ${gyearInput.value}
    \nwhy do you want to work with us-${workInput.value}
    \nExperience-${expInput.value}
    \nDepartment-${departmentSelect.value}.`
  );
}

document.querySelector("form").addEventListener("submit", handleSubmit);
