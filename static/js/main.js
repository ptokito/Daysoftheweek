document.addEventListener('DOMContentLoaded', function () {
    const dateForm = document.getElementById('date-form');
    const dateInput = document.getElementById('date-input');

    dateForm.addEventListener('submit', function (event) {
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        const inputDateArray = dateInput.value.split('/');
        const inputDate = new Date(inputDateArray[2], inputDateArray[1] - 1, inputDateArray[0]);

        if (!isValidDate(inputDateArray) || inputDate > currentDate) {
            event.preventDefault();
            alert('Please enter a valid date in the past (DD/MM/YYYY).');
        }
    });
});

function isValidDate(dateArray) {
    if (dateArray.length !== 3) {
        return false;
    }

    const day = parseInt(dateArray[0], 10);
    const month = parseInt(dateArray[1], 10);
    const year = parseInt(dateArray[2], 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return false;
    }

    if (year < 1900 || year > 2100) {
        return false;
    }

    if (month < 1 || month > 12) {
        return false;
    }

    const lastDayOfMonth = new Date(year, month, 0).getDate();

    if (day < 1 || day > lastDayOfMonth) {
        return false;
    }

    return true;
}
