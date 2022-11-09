# SQL Employee Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This application is a command-line CMS (Content Management System) tool built with Node.js, Inquirer, and MySQL.

## Table of Contents

## Installation

[Click Here for GitHub Repo](https://github.com/naveed-mahmoudian/SQL-Employee-Tracker)

To install, please ensure you have `node.js` installed on your computer. Then clone the github repo and run `npm i` to install all dependencies.

IMPORTANT: Be sure to create a `.env` file in the main directory with the following contents:

```
DB_NAME='employees_db'
DB_USER='<your mysql username>'
DB_PW='<your mysql password>'
```

This is crucial or else the connection in `config/connection.js` will throw an error and you will not be able to connect the database.

To build and seed the database run the following commands in your terminal:

- Enter the MySQL shell:

```
mysql -u root -p
Enter your password...
```

- Destroy and rebuild the database and department, role, and employee tables:

```
source db/schema.sql;
```

- Seed the database with example fields:

```
source db/seeds.sql;
```

## Usage

[Click Here for Walkthrough Video](https://app.castify.com/view/269f26b9-2220-401d-bbb1-25497acdc8d1)

To use this application you can run `npm start` in your terminal to start the command-line app. From there you can choose to:

- `View all Departments`
- `View all Roles`
- `View all Employees`
- `Add a Department`
- `Add a Role`
- `Add an Employee`
- `Update an Employee Role`

To quit out of the application, simply select `Quit`.

## License

MIT License

      Copyright (c) 2022 Naveed Mahmoudian

      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.

## Credits

This application was created by Naveed Mahmoudian

## Questions

GitHub: [naveed-mahmoudian](https://www.github.com/naveed-mahmoudian/)

Email: nmahmoudian@gmail.com
