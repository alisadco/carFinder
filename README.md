<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<br />
<div align="center">
  <a href="https://github.com/your_username/CarFinder">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">CarFinder</h3>

  <p align="center">
    An EV dealership inventory and search system
    <br />
    <a href="https://frontend-osvxzffehq-ue.a.run.app">View Demo</a>
    ·
    <a href="https://github.com/your_username/CarFinder/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/your_username/CarFinder/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

CarFinder is a web application designed to help car dealerships manage their inventory and sales of electric vehicles (EVs). It provides a user-friendly interface for adding and updating dealerships, adding and selling cars, and generating reports.

Here's why you should use CarFinder:
* Efficiently manage your EV inventory and sales
* Easily add and update dealerships and car listings
* Generate reports on unsold cars and recent sales
* User-friendly interface for a seamless experience

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- React.js
- SpringBoot
- Docker
- MySql

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Java Development Kit (JDK)
- MySQL
- Node.js
- npm

### Installation

1. Clone the repo
```
   git clone
   
   2.  Set up the MySQL database
    
    *   Create a new database named `mydatabase`
        
    *   Update the database connection settings in `backend/capstonebackend/src/main/resources/application.properties`
```   
3.  Build and run the back-end service
   ```
    `cd backend/capstonebackend 
    ./mvnw clean install 
    ./mvnw spring-boot:ru`
   ```

4.  Install front-end dependencies and run the front-end service
    ```
    cd frontend/capstonefrontend 
    npm install 
    npm start
    ```

5.  Access the application at `http://localhost:3000`


<p align="right">(<a href="#readme-top">back to top</a>)</p><!-- USAGE EXAMPLES -->

**Usage**
---------

<details>
<summary>All Functionality</summary>

<h3>Adding a Dealership</h3>
<ol>
 <li>Access the Dealership Module: After logging into the application, navigate to <code>http://localhost:3000/add</code> or click on "Add" in the nav bar.</li>
 <li>Initiate Adding a Dealership: Look for a button or link labeled "Add Dealership".</li>
 <li>Enter Dealership Details: In the provided form, enter all the necessary details about the dealership, such as:
   <ul>
     <li>Dealership Name</li>
     <li>Address</li>
   </ul>
 </li>
 <li>Submit: After filling in all required fields, click the "Add Dealership" button to create the new dealership entry.</li>
</ol>

<h3>Adding a Car</h3>
<ol>
 <li>Access the Car Module: After logging into the application, navigate to <code>http://localhost:3000/add</code> or click on "Add" in the nav bar.</li>
 <li>Select the dealership.</li>
 <li>Fill in Car Details.</li>
 <li>Submit: After filling in all required fields, click the "Add Car" to create the new Car entry.</li>
</ol>

<h3>Managing Dealerships and Cars / Reports</h3>
<ol>
 <li>Access the Managing Module: After logging into the application, navigate to <code>http://localhost:3000/manage</code> or click on "Manage" in the nav bar.</li>
 <li>Select the dealership you made in the previous step from the dropdown.</li>
 <li>Here you can sell/update cars and view a report of all unsold cars and how long they have been on the lot. Also showing a list of all cars sold from the past week.</li>
</ol>

<h3>Searching for Cars</h3>
<ol>
 <li>Access the Dealership Module: After logging into the application, navigate to <code>http://localhost:3000/dealerships</code> or click on "dealerships" in the nav bar.</li>
 <li>Click on the dealership that you made and added a car to in the previous steps.</li>
 <li>Change the parameters on the side filter to show the car you have.</li>
</ol>

<h3>View Details and Pricing Info</h3>
<ol>
 <li>Access the search Module and click on "View Details" on the desired car.</li>
 <li>Observe the extra information for that car.</li>
 <li>Observe the Pricing Summary.</li>
 <li>Clicking on "Click to See Monthly Price" to open a finance calculator to show the estimated monthly cost of a car loan.</li>
</ol>

</details>

**Contact**
-----------

Ali Al-Abbas - @alisadco99@gmail.com


<p align="right">(<a href="#readme-top">back to top</a>)</p><!-- ACKNOWLEDGMENTS -->



<p align="right">(<a href="#readme-top">back to top</a>)</p><!-- MARKDOWN LINKS & IMAGES -->