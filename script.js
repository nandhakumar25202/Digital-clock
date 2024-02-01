function updateClock() {
    const now = new Date();
    const Hours = now.getHours().toString().padStart(2, '0');
    const Minutes = now.getMinutes().toString().padStart(2, '0');
    const Seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${Hours}:${Minutes}:${Seconds}`;
    
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000); // Update every second
updateClock(); // Initial call to display the clock immediately
