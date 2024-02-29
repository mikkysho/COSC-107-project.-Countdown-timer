 // Set the date we're counting down to
 const countDownDate = new Date().getTime() + (10 * 24 * 60 * 60 * 1000);

 // Update the countdown every second
 const countdownElement = document.getElementById("countdown");
 const timerInterval = setInterval(updateCountdown, 1000);
 
 function updateCountdown() {
   // Get the current date and time
   const now = new Date().getTime();
 
   // Find the distance between now and the countdown date
   const distance = countDownDate - now;
 
   // Calculate days, hours, minutes, and seconds
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
   // Display the countdown
   countdownElement.innerHTML = `<h2>${days}d ${hours}h ${minutes}m ${seconds}s</h2>`;
 
   // If the countdown is over, reset it
   if (distance < 0) {
     clearInterval(timerInterval);
     countdownElement.innerHTML = "EXPIRED";
     setTimeout(() => {
       location.reload();
     }, 5000); // reload after 5 seconds
   }
 }