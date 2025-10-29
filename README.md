Technologies Used:
Front-End
HTML5 – Creates the structure of the web page.
CSS3 – Adds style, layout, and responsiveness.
JavaScript – Fetches weather data and updates it dynamically.
⚙️ Back-End
Node.js – Runs the server and handles logic.
Express.js – Simplifies API routing and server setup.
NPM – Manages project dependencies.
☁️ API & Services
OpenWeatherMap / WeatherAPI – Provides real-time weather data.
Fetch API / Axios – Used to request and receive JSON weather data.
🧰 Development Tools
VS Code – Used for coding and testing.
Git & GitHub – For version control and project hosting.
Netlify / Render – For deployment and online access.
💻 Other Technologies
JSON – For data transfer.
HTTPS – For secure communication.
Responsive Design – Ensures mobile and desktop compatibility.

How It Works:
User Input
The user enters a city name in the search box on the dashboard.
API Request
When the user clicks the search button, the app sends a request to the OpenWeatherMap (or WeatherAPI) server using the Fetch API from JavaScript or through Node.js Express routes.
Data Fetching
The weather API processes the request and returns real-time weather details in JSON format, including:
Temperature
Humidity
Wind speed
Weather condition
Icon ID
Data Processing
The app extracts the required fields (like temp, humidity, icon, etc.) from the JSON response and prepares them for display.
Dynamic Display
The JavaScript code dynamically updates the web page to show:
Current temperature and city name
Weather icon (like ☀️ or 🌧️)
Description (e.g., “light rain”)
Humidity and wind speed
Error Handling
If the city name is invalid or not found, the app displays an error message like “City not found” without crashing.
Responsive Output
The weather information is displayed neatly in a card layout that works smoothly on both mobile and desktop screens.
