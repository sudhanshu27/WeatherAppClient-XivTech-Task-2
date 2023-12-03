document.getElementById("submitButton").addEventListener("click", async () => {
  const cityInput = document.getElementById("cityInput").value;
  const cities = cityInput.split(",").map((city) => city.trim());
  try {
    const response = await fetch(
      "https://weather-app-task-xivtech.onrender.com/getWeather",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cities }),
      }
    );

    const data = await response.json();

    const weatherResults = document.getElementById("weatherResults");

    const formattedData = { weather: data.weather };

    weatherResults.textContent = JSON.stringify(formattedData);

    weatherResults.style.display = "block";
  } catch (error) {
    console.error("Error:", error);
  }
});
