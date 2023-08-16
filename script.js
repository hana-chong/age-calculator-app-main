//output elements
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");

//input elements
let isValid = false;
const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");
const input_container = document.querySelectorAll(".input-container input[type=number]");

//error elements
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");

//verifying user input
submit_btn.addEventListener("click", CalculateDate);

input_day.addEventListener("input", (e) => {
if (+input_day.value > 31 || +input_day.value === 0) {
    error_day.textContent = "Must be a valid date.";
    input_day.style.borderColor = "red";
    isValid = false;
    return;
} else {
    isValid = true;
    error_day.textContent = "";
    input_day.style.borderColor = "#CCCCCC";
    }
});

input_month.addEventListener("input", (e) => {
    if (+input_month.value > 12 || +input_month.value === 0) {
        error_month.textContent = "Must be a valid date.";
        input_month.style.borderColor = "red";
        isValid = false;
        return;
    } else {
        isValid = true;
        error_month.textContent = "";
        input_month.style.borderColor = "#CCCCCC";
    }
});

input_year.addEventListener("input", (e) => {
    if (+input_year.value > 2023 || +input_year.value === 0) {
        error_year.textContent = "Must be a valid date";
        input_year.style.borderColor = "red"; // Apply red border
        isValid = false;
        return;
    } else {
        isValid = true;
        error_year.textContent = "";
        input_year.style.borderColor = "#CCCCCC"; // Reset border color
    }
});

//calculating date 
function CalculateDate() {
//validating all boxes are filled
    if (!input_day.value || !input_month.value || !input_year.value) {
        for (let input of input_container) {
            if (!input.value) {
                input.style.borderColor = "red";
            } else {
                input.style.borderColor = "#CCCCCC";
            }
        }
         if (!input_day.value) {
            error_day.textContent = "This field is required";
        } else {
            error_day.textContent = "";
        }
        if (!input_month.value) {
            error_month.textContent = "This field is required";
        } else {
            error_month.textContent = "";
        }
        if (!input_year.value) {
            error_year.textContent = "This field is required";
        } else {
            error_year.textContent = "";
        }
        return;
    }
    if (isValid) {
        for (let input of input_container) {
            input.style.borderColor = "#CCCCCC";
        }
    if (isValid) {
        let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
        console.log(birthday);
        let birthdayObj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay();
        //reset border colors for input containers
        for (let input of input_container) {
            input.style.borderColor = "#CCCCCC";
            error_day.textContent = "";
        }
        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYears;
    } else {
        for (let input of input_container) {
            if (+input.value > 31 || +input.value > 12 || +input.value > 2023 || +input.value === 0) {
                input.style.borderColor = "red";
            } else {
                input.style.borderColor = "#CCCCCC";                
            }
        }
        output_day.textContent = "--";
        output_month.textContent = "--";
        output_year.textContent = "--";
    }
}
}
