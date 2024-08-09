// Tailwind config
tailwind.config = {
  theme: {
    extend: {
      colors: {
        border_lg_from: "hsl(249, 99%, 64%)",
        border_lg_to: "hsl(278, 94%, 30%)",
        error_red: "hsl(0, 100%, 66%)",
        lite_gray_violet: "hsl(270, 3%, 87%)",
        drk_gray_violet: "hsl(279, 6%, 55%)",
        vd_violet: "hsl(278, 68%, 11%)",
      },
      fontSize: {
        base: "18px",
      },
      fontWeight: {
        md: "500",
      },
      screens: {
        break: "700px",
      },
    },
    fontFamily: {
      sans: "Space Grotesk",
    },
  },
};

// DOM
// form
const form = document.getElementById("form");
// Submit button
const submitBtn = document.getElementById("submit");
// Inputs
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const cvcInput = document.getElementById("cvc");
// Error messages
const nameError = document.getElementById("name-error");
const numberError = document.getElementById("number-error");
const dateError = document.getElementById("date-error");
const cvcError = document.getElementById("cvc-error");
// Card displays
const nameDisplay = document.getElementById("name-display");
const numberDisplay = document.getElementById("card-number-display");
const monthDisplay = document.getElementById("month-display");
const yearDisplay = document.getElementById("year-display");
const cvcDisplay = document.getElementById("cvc-display");

// OnInput functions
// function to capitalise name
const capName = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

// name input function
nameInput.addEventListener("input", () => {
  if (nameInput.value.length < 1) {
    nameDisplay.textContent = "Jane Appleseed";
  } else {
    let value = nameInput.value;
    nameDisplay.textContent = capName(value);

    // check format
    if (!/^[a-z ]+$/i.test(value)) {
      nameInput.style.borderColor = "hsl(0,100%,66%)";
      nameError.textContent = "Wrong format. Letters only";
    } else {
      nameInput.style.borderColor = "";
      nameError.textContent = "";
    }
  }
});

// function to split number
const split_at_index = (value) => {
  return (
    value.substring(0, 4) +
    " " +
    value.substring(4, 8) +
    " " +
    value.substring(8, 12) +
    " " +
    value.substring(12)
  );
};

// card number input function
numberInput.addEventListener("input", () => {
  if (numberInput.value.length < 1) {
    numberDisplay.textContent = "0000 0000 0000 0000";
  } else {
    let value = numberInput.value;
    numberDisplay.textContent = split_at_index(value);

    // check format
    if (!/^[\d+ ]+$/i.test(value)) {
      numberInput.style.borderColor = "hsl(0, 100%, 66%)";
      numberError.textContent = "Wrong format. Numbers only";
    } else {
      numberInput.style.borderColor = "";
      numberError.textContent = "";
    }
  }
});

// month input function
monthInput.addEventListener("input", () => {
  if (monthInput.value.length < 1) {
    monthDisplay.textContent = "00";
  } else {
    let value = monthInput.value.padStart(2, 0);
    monthDisplay.textContent = value;

    // check format
    if (!/^[\d+ ]+$/i.test(value)) {
      monthInput.style.borderColor = "hsl(0, 100%, 66%)";
      dateError.textContent = "Wrong format";
    } else {
      if (Number(value) > 12) {
        monthInput.style.borderColor = "hsl(0, 100%, 66%)";
        dateError.textContent = "Invalid date";
      } else {
        monthInput.style.borderColor = "";
        dateError.textContent = "";
      }
    }
  }
});

// year input function
yearInput.addEventListener("input", () => {
  if (yearInput.value.length < 1) {
    yearDisplay.textContent = "00";
  } else {
    let value = yearInput.value.padStart(2, 0);
    yearDisplay.textContent = value;

    // check format
    if (!/^[\d+ ]+$/i.test(value)) {
      yearInput.style.borderColor = "hsl(0, 100%, 66%)";
      dateError.textContent = "Wrong format";
    } else {
      if (Number(value) < 24) {
        yearInput.style.borderColor = "hsl(0, 100%, 66%)";
        dateError.textContent = "Invalid date";
      } else {
        yearInput.style.borderColor = "";
        dateError.textContent = "";
      }
    }
  }
});

// cvc input function
cvcInput.addEventListener("input", () => {
  if (cvcInput.value.length < 1) {
    cvcDisplay.textContent = "00";
  } else {
    let value = cvcInput.value.padStart(3, 0);
    cvcDisplay.textContent = value;

    // check format
    if (!/^[\d+ ]+$/i.test(value)) {
      cvcInput.style.borderColor = "hsl(0, 100%, 66%)";
      cvcError.textContent = "Wrong format";
    } else {
      cvcInput.style.borderColor = "";
      cvcError.textContent = "";
    }
  }
});

// onBlur functions
// nameInput OnBlur function
nameInput.addEventListener("blur", () => {
  let value = nameInput.value;
  if (!/^[a-z ]+$/i.test(value)) {
    if (value == "") {
      nameInput.style.borderColor = "";
      nameError.textContent = "";
    } else {
      nameInput.style.borderColor = "hsl(0, 100%, 66%)";
      nameError.textContent = "Wrong format";
    }
  } else {
    nameInput.style.borderColor = "";
    nameError.textContent = "";
  }
});

// numberInput OnBlur function
numberInput.addEventListener("blur", () => {
  let value = numberInput.value;
  if (!/^[\d+ ]+$/i.test(value)) {
    if (value == "") {
      numberInput.style.borderColor = "";
      numberError.textContent = "";
    } else {
      numberInput.style.borderColor = "hsl(0, 100%, 66%)";
      numberError.textContent = "Wrong format. Numbers only";
    }
  } else {
    numberInput.style.borderColor = "";
    numberError.textContent = "";
  }
});

// monthInput OnBlur function
monthInput.addEventListener("blur", () => {
  let value = monthInput.value;
  if (!/^[\d+ ]+$/i.test(value)) {
    if (value == "") {
      monthInput.style.borderColor = "";
      dateError.textContent = "";
    } else {
      monthInput.style.borderColor = "hsl(0, 100%, 66%)";
      dateError.textContent = "Wrong format. Numbers only";
    }
  } else {
    if (Number(value) > 12) {
      monthInput.style.borderColor = "hsl(0, 100%, 66%)";
      dateError.textContent = "Invalid date";
    } else {
      monthInput.style.borderColor = "";
      dateError.textContent = "";
    }
  }
});

// yearInput OnBlur function
yearInput.addEventListener("blur", () => {
  let value = yearInput.value;
  if (!/^[\d+ ]+$/i.test(value)) {
    if (value == "") {
      yearInput.style.borderColor = "";
      dateError.textContent = "";
    } else {
      yearInput.style.borderColor = "hsl(0, 100%, 66%)";
      dateError.textContent = "Wrong format. Numbers only";
    }
  } else {
    if (Number(value) < 24) {
      yearInput.style.borderColor = "hsl(0, 100%, 66%)";
      dateError.textContent = "Invalid date";
    } else {
      yearInput.style.borderColor = "";
      dateError.textContent = "";
    }
  }
});

// cvcInput OnBlur function
cvcInput.addEventListener("blur", () => {
  let value = cvcInput.value;
  if (!/^[\d+ ]+$/i.test(value)) {
    if (value == "") {
      cvcInput.style.borderColor = "";
      cvcError.textContent = "";
    } else {
      cvcInput.style.borderColor = "hsl(0, 100%, 66%)";
      cvcError.textContent = "Wrong format";
    }
  } else {
    cvcInput.style.borderColor = "";
    cvcError.textContent = "";
  }
});

// form vaildation
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // check strInput for errors
  function validateStrInput(
    input,
    length,
    value,
    errorMessage,
    message,
    max,
    min
  ) {
    if (length < max && length >= min) {
      input.style.borderColor = "hsl(0, 100%, 66%)";
      errorMessage.textContent = message;
    } else if (value === "" || value == null) {
      input.style.borderColor = "hsl(0, 100%, 66%)";
      errorMessage.textContent = "Can't be blank";
    } else if (!/^[a-z ]+$/i.test(value)) {
      input.style.borderColor = "hsl(0, 100%, 66%)";
      errorMessage.textContent = "Wrong format";
    } else {
      return true;
    }
  }

  // check numberInputs for errors
  function validateNumInput(
    input,
    length,
    value,
    errorMessage,
    message,
    max,
    min
  ) {
    if (length < max && length >= min) {
      input.style.borderColor = "hsl(0, 100%, 66%)";
      errorMessage.textContent = message;
    } else if (value === "" || value == null) {
      input.style.borderColor = "hsl(0, 100%, 66%)";
      errorMessage.textContent = "Can't be blank";
    } else if (!/^[\d+ ]+$/i.test(value)) {
      input.style.borderColor = "hsl(0, 100%, 66%)";
      errorMessage.textContent = "Wrong format";
    } else {
      return true;
    }
  }

  // check dateInputs for errors
  function validateDateInput(
    input,
    length,
    value,
    errorMessage,
    message,
    max,
    min,
    maxDate,
    minDate
  ) {
    if (length < max && length >= min) {
      input.style.borderColor = "hsl(0, 100%, 66%)";
      errorMessage.textContent = message;
    } else if (value === "" || value == null) {
      input.style.borderColor = "hsl(0, 100%, 66%)";
      errorMessage.textContent = "Can't be blank";
    } else if (Number(value) > maxDate || Number(value) < minDate) {
      input.style.borderColor = "hsl(0, 100%, 66%)";
      errorMessage.textContent = message;
    } else if (!/^[\d+ ]+$/i.test(value)) {
      input.style.borderColor = "hsl(0, 100%, 66%)";
      errorMessage.textContent = "Wrong format";
    } else {
      return true;
    }
  }

  // validate nameInput
  validateStrInput(
    nameInput,
    nameInput.value.length,
    nameInput.value,
    nameError,
    "Must be atleast 3 characters",
    3,
    1
  );

  // validate numInputs
  validateNumInput(
    numberInput,
    numberInput.value.length,
    numberInput.value,
    numberError,
    "Must be 16 characters",
    16,
    1
  );

  validateNumInput(
    cvcInput,
    cvcInput.value.length,
    cvcInput.value,
    cvcError,
    "Must be 3 characters",
    3,
    1
  );

  // validate dateInputs
  validateDateInput(
    monthInput,
    monthInput.value.length,
    monthInput.value,
    dateError,
    "Invalid date",
    2,
    1,
    12,
    1
  );

  validateDateInput(
    yearInput,
    yearInput.value.length,
    yearInput.value,
    dateError,
    "Invalid date",
    2,
    1,
    99,
    24
  );

  // run button click function
  if (
    validateStrInput(
      nameInput,
      nameInput.value.length,
      nameInput.value,
      nameError,
      "Must be atleast 3 characters",
      3,
      1
    ) &&
    validateNumInput(
      numberInput,
      numberInput.value.length,
      numberInput.value,
      numberError,
      "Must be 16 characters",
      16,
      1
    ) &&
    validateNumInput(
      cvcInput,
      cvcInput.value.length,
      cvcInput.value,
      cvcError,
      "Must be 3 characters",
      3,
      1
    ) &&
    validateDateInput(
      monthInput,
      monthInput.value.length,
      monthInput.value,
      dateError,
      "Must be 2 characters",
      2,
      1,
      12,
      1
    ) &&
    validateDateInput(
      yearInput,
      yearInput.value.length,
      yearInput.value,
      dateError,
      "Invalid date",
      2,
      1,
      99,
      24
    )
  ) {
    // get username from nameInput
    let username = nameInput.value.split(" ");
    username = username[0];
    username =
      username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();

    // DOM
    const userName = document.querySelector("#username");
    const completed = document.getElementById("complete");
    // display username
    userName.textContent = username;

    // hide form
    form.style.display = "none";
    completed.style.display = "flex";
  }
});

// reset inputs on page reload
document.getElementById("complete").addEventListener("click", () => {
  nameInput.value = "";
  numberInput.value = "";
  monthInput.value = "";
  yearInput.value = "";
  cvcInput.value = "";
});
