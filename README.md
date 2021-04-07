
# [Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)


User Stories:
1. The API endpoint is GET [project_url/api/timestamp/:date?]

2. A date string is valid if can be successfully parsed by new Date(date_string). Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds.  In our test we will use date strings compliant with ISO-8601 (eg."2016-11-20") because this will ensure an UTC timestamp.

3. An empty date parameter should return the current time in a JSON object with a unix key

4. If the date string is valid the api returns as JSON having the structure { "unix": <date.getTime>, "utc" <date.toUTCString()>}
eg.{"unix": 1451001600000 , utc": "Fri, 25 Dec 2015 00:00:00 GMT" }


5. If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }





A request to /api/timestamp/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds

A request to /api/timestamp/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT

A request to /api/timestamp/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }

Your project can handle dates that can be successfully parsed by new Date(date_string)

If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }

An empty date parameter should return the current time in a JSON object with a unix key

An empty date parameter should return the current time in a JSON object with a utc key