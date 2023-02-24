<p align="center">
 <svg fill="#000000" width="264" height="100" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 214.27 214.27" xml:space="preserve">
  <g>
    <path d="M196.926,55.171c-0.11-5.785-0.215-11.25-0.215-16.537c0-4.142-3.357-7.5-7.5-7.5c-32.075,0-56.496-9.218-76.852-29.01
      c-2.912-2.832-7.546-2.831-10.457,0c-20.354,19.792-44.771,29.01-76.844,29.01c-4.142,0-7.5,3.358-7.5,7.5
      c0,5.288-0.104,10.755-0.215,16.541c-1.028,53.836-2.436,127.567,87.331,158.682c0.796,0.276,1.626,0.414,2.456,0.414
      c0.83,0,1.661-0.138,2.456-0.414C199.36,182.741,197.954,109.008,196.926,55.171z M107.131,198.812
      c-76.987-27.967-75.823-89.232-74.79-143.351c0.062-3.248,0.122-6.396,0.164-9.482c30.04-1.268,54.062-10.371,74.626-28.285
      c20.566,17.914,44.592,27.018,74.634,28.285c0.042,3.085,0.102,6.231,0.164,9.477C182.961,109.577,184.124,170.844,107.131,198.812
      z"/>
    <path d="M132.958,81.082l-36.199,36.197l-15.447-15.447c-2.929-2.928-7.678-2.928-10.606,0c-2.929,2.93-2.929,7.678,0,10.607
      l20.75,20.75c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.732,5.303-2.196l41.501-41.5
      c2.93-2.929,2.93-7.678,0.001-10.606C140.636,78.154,135.887,78.153,132.958,81.082z"/>
  </g>
</svg>
</p>

<p align="center">
  An easy-to-use framework designed to enable efficient implementation of an Intrusion/Theft Detection System using <b> IoT and AI</b>.
  <br />
  <br />
  <a href="#table-of-content"><b>Explore the docs »</b></a>
  <br />
  <br />
  <a href="#description">Description</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#features">Features</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#contributing">Local Setup</a>
  <br />
</p>

<br />
<br />

<p align="center">
  <img src="./server/images/landing_page.JPG" alt="landing_page-JPG" width="80%" />
</p>

<br />

### Table Of Content
- [Description](#description)
- [Stack Overview](#stack-overview)
- [Features](#features)
- [Images](#images)
- [Technologies Used](#technologies-used)
- [Local Setup & Contributing](#contributing)
- [License](#license-)



## Description
This is an intrusion/theft detection system that utilizes the Internet of Things (IoT) and Artificial Intelligence (AI) technologies to provide high-level security and peace of mind for property owners and managers. The system involves the use of various sensors and devices to detect and alert for possible unauthorized entry or theft in a given area or property. Using IoT and AI can provide a proactive approach to security by leveraging the power of advanced technology to detect and prevent threats before they become serious.

## Stack Overview
- Raspberry Pi for processing and interfacing with sensors/devices
- AWS IoT Core for device communication and management
- AWS Lambda for serverless computing and ML-based detection
- Amazon S3 for data storage
- Amazon DynamoDB for data management
- Amazon CloudWatch for real-time monitoring and alerts
- Twilio for sending SMS alerts to authorities
- Python Flask for the server
- React for the frontend
- Node and Express for Backend

## Features
- Utilizes IoT and AI technologies for enhanced security
- Raises an alarm/alert in case of an intrusion
- Gathers data from various sensors/devices such as cameras, motion sensors, etc.
- Uses ML-based detection to reduce the number of false positive alarms/thefts
- Provides a dashboard for real-time monitoring of the premises
- Implements a way to alert authorities in time

## Images
<br>
<img src="./server/images/landing_page.JPG" />
<img src="./server/images/1.JPG" />
<img src="./server/images/2.JPG" />
<img src="./server/images/3.JPG" />
<img src="./server/images/4.JPG" />
<img src="./server/images/5.JPG" />
<img src="./server/images/6.JPG" />
<img src="./server/images/7.JPG" />

<br>


## Technologies Used

<br />

- Prototyping and Frontend Design
  - Figma
- Frontend
  - React.js
  - CSS
  - Bootstrap
- Backend
  - Node.js (Express.js)
  - MongoDB
- IOT
  - Raspberry Pi
  - AWS IoT Core
  - AWS Lambda
  - Amazon S3
  - Amazon DynamoDB
  - Amazon CloudWatch
  - Twilio

<br />

**Dependencies**

A freaking huge shoutout to:
- [react-webcam](https://www.npmjs.com/package/react-webcam)
- [devtools-detect](https://www.npmjs.com/package/devtools-detect)
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)
- [chartjs](https://www.npmjs.com/package/chartjs)

## Contributing

**Local Setup || Project Structure**

NOTE: Individual instructions can be found in respective directories.

- The project contains 4 broad directories.

```
*
├───client
├───model
├───server
└───IoT
```

- `client`: The frontend for the application.
- `model`: Model APIs for Machine Learning.
- `server`: The backend for the application.
- `IoT`: The neccessare api for IoT devices. 
<br />

**Client**

For local setup of frontend:
- `cd client`
- `npm i`
- `npm start`
- Go to `localhost:3000`

Structure

```
src
├───assets
├───components
├───containers
└───index.js
```

Individual Component & Container Structure

```
component
├───component.jsx
└───component.css
```


**Model**

The complete setup can be found in the [`model` directory](./model).

NOTE:

- Apart from this `tensorflow` and `tensorflow_hub` should be installed .
- The face-pose-estimation model is not final it is just a placeholder for now(will improve it as we get time).
- How to convert javascript array for image into image tensor that part is remaining.


**Server**

For local setup of backend:
- `cd server`
- `npm i`
- `npm start`

```
server
├───controllers
├───middlewares
├───models
├───routes
└───package.json
```


### License 📜

[GNU General Public License v3.0](/LICENSE)


Note: This system is intended for educational purposes only and should not be relied upon as a primary means of security for your property. Please consult with security professionals to ensure that your property is properly secured.
