# weatherForescast-Project

### step 1:
- Setup the Basic.
- a) npm init
- b) npm i express
- c) create route, controller etc.

### step 2: 
- npm i axios : using axios package to fetch the data from HTTP server to local server.

### step 3:
- create api /weather/:city 

### step 4: 
- using the api from https://openweathermap.org/current 
- Api Url => https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

### step 5:
- Testing in postman 
- localhost:3000/weather/london , localhost:3000/weather/mumbai etc.

### step 6: 
- npm i dotenv
- To make api_key, password etc. secure we will put in the file .env