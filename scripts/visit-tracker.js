// Send a request to the backend to record a visit
fetch("https://tvg46934977.ct.ws/track-visit.php", {
    method: "POST"
})
  .then(response => response.json())
  .then(data => {
    console.log("Visit count:", data.count);
  })
  .catch(err => {
    console.error("Error tracking visit:", err);
  });
