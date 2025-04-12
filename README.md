<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <img src="https://i.imgur.com/sXRt0aP.png" alt="Login Logo">

  <h3 align="center">Login Homework</h3>

  <p align="center">
    A simple nestjs and react web application for a login page.
  <br />
    <a href="https://github.com/MAdem01/el-proyecte-grande-sprint-1"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/users/Akoss08/projects/9">View Backlogs</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
         <li>
            <a href="#built-with">Built With</a>
         </li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
         <li>
            <a href="#using-docker">Using Docker</a>
         <ul>
            <li><a href="#access-the-page">Access the page</a></li>
            <li><a href="#access-the-database">Access the database</a></li>
            <li><a href="#add-testing-data">Add testing data</a></li>
         </ul>
         </li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->

## About The Project

This is a full-stack web application built with NestJS for the backend and React for the frontend. 
It provides a login page where users can authenticate using their credentials. 
The backend handles authentication logic, user registration, and stores data in a PostgreSQL database, 
while the frontend delivers a responsive user interface for seamless login interactions.

![Login Page](https://i.imgur.com/mmP656o.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React-shield]][React-url]
* [![Tailwind][Tailwind-shield]][Tailwind-url]
* [![Typescript][Typescript-shield]][Typescript-url]
* [![Nestjs][Nestjs-shield]][Nestjs-url]
* [![Postgres][Postgre-shield]][postgre-url]
* [![Docker][Docker-shield]][Docker-url]

<!-- GETTING STARTED -->

# Getting Started

## Using Docker

### Access the Page

1. Clone the repo:
   ```sh
   git clone https://github.com/Akoss08/login-page-nest-react.git
   ```

2. Navigate to the project root folder:
   ```sh
   cd .\login-page-nest-react\
   ```

3. Build and start the containers:
   ```sh
   docker-compose up --build
   ```

4. To stop running the container:
   ```sh
   docker-compose down
   ```

5. Open your browser and go to _localhost_ to access the page.

### Access the database

1. Once the container is running the pgadmin platform available at _http://localhost:5050/_,
   for sign in use _admin@admin.com_ as email, and _pgadmin4_ as password
   
   ![Pgadmin Page](https://i.imgur.com/UsAWuD9.png)

2. Once signed in, right click on _Servers_, hover on _Register_ and click _Server..._

   ![Server](https://i.imgur.com/W05lpbt.png)

3. On the general tab add a name of your choice, than navigate to connection and fill the rows shown on the picture. For password: _postgres_
   
   ![Imgur](https://i.imgur.com/WzwO7Yb.png)
   ![Imgur](https://i.imgur.com/MGAZ0rb.png)

4. Now your db platform is ready to use!

   ![Imgur](https://i.imgur.com/Pzltu8I.png)

### Add testing data

1. To add user to the database use your favorite API client and send a POST request to the following endpoint with a body shown on the example.

   ![Imgur](https://i.imgur.com/shdTNI2.png)

2. User now safely added and the application is ready to use!

   ![Imgur](https://i.imgur.com/CGOJAm1.png)
   ![Imgur](https://i.imgur.com/SHkgeRY.png)
   ![Imgur](https://i.imgur.com/CdUTOc9.png)
   ![Imgur](https://i.imgur.com/oBzXskj.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Ákos Horváth - [GitHub Profile](https://github.com/Akoss08)


Project
Link: https://github.com/Akoss08/login-page-nest-react.git

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React-shield]: https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black
[React-url]: https://react.dev/

[Tailwind-shield]: https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC
[Tailwind-url]: https://tailwindcss.com/

[Typescript-shield]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/

[Nestjs-shield]: https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white
[Nestjs-url]: https://nestjs.com/

[postgre-shield]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[postgre-url]: https://www.postgresql.org/

[Docker-shield]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
