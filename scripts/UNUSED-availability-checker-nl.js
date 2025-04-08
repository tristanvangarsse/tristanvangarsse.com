// Define availability times (in 24-hour format) for Brussels
const availability = {
  start: 0, // Available from 9:00
  end: 24,  // Available until 18:00
};

function updateStatus() {
  const now = new Date();
  
  // Convert to Brussels time (Central European Time)
  const brusselsTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Europe/Brussels" })
  );

  const currentHour = brusselsTime.getHours();
  const statusContainer = document.getElementById("availability");
  const statusText = document.getElementById("status-text");

  if (currentHour >= availability.start && currentHour < availability.end) {
    statusText.textContent = "actief";
    statusContainer.className = "available";
  } else {
    statusText.textContent = "inactief";
    statusContainer.className = "unavailable";
  }
}

// Update status every minute
updateStatus();
setInterval(updateStatus, 60000);
