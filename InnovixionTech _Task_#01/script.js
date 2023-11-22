document.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");
    const calculateBtn = document.getElementById("calculate");
    const stopBtn = document.getElementById("stop");
    const resetBtn = document.getElementById("reset");
  
    const daysDisplay = document.getElementById("countdown-days");
    const hoursDisplay = document.getElementById("countdown-hours");
    const minutesDisplay = document.getElementById("countdown-minutes");
    const secondsDisplay = document.getElementById("countdown-seconds");
  
    let countdownInterval;
  
    calculateBtn.addEventListener("click", function () {
      const dateValue = dateInput.value;
      const timeValue = timeInput.value;
  
      if (!isValidDate(dateValue) || !isValidTime(timeValue)) {
        alert("Please enter a valid date and time format.");
        return;
      }
  
      const targetDate = new Date(`${dateValue} ${timeValue}`);
      const now = new Date().getTime();
      const timeDifference = targetDate - now;
  
      if (timeDifference > 0) {
        startCountdown(timeDifference);
      } else {
        alert("Please select a future date and time.");
      }
    });
  
    stopBtn.addEventListener("click", function () {
      clearInterval(countdownInterval);
    });
  
    resetBtn.addEventListener("click", function () {
      clearInterval(countdownInterval);
      resetDisplay();
    });
  
    function startCountdown(timeDifference) {
      function updateCountdown() {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        daysDisplay.textContent = days;
        hoursDisplay.textContent = hours;
        minutesDisplay.textContent = minutes;
        secondsDisplay.textContent = seconds;
  
        if (timeDifference <= 0) {
          clearInterval(countdownInterval);
        }
      }
  
      // Initial call to avoid delay
      updateCountdown();
  
      // Update countdown every second
      countdownInterval = setInterval(function () {
        updateCountdown();
        timeDifference -= 1000;
      }, 1000);
    }
  
    function isValidDate(dateString) {
      // Add your date validation logic here
      return true; // Placeholder, implement your validation logic
    }
  
    function isValidTime(timeString) {
      // Add your time validation logic here
      return true; // Placeholder, implement your validation logic
    }
  
    function resetDisplay() {
      daysDisplay.textContent = "0";
      hoursDisplay.textContent = "0";
      minutesDisplay.textContent = "0";
      secondsDisplay.textContent = "0";
    }
  });
  