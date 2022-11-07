const inquirer = require("inquirer");
const db = require("./config/connection");
require("console.table");

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add a Department",
          "Add a Role",
          "Add an Employee",
          "Update an Employee Role",
          "Quit",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.action) {
        case "View All Departments":
          console.log("You want to view all Departments");
          viewAllDepts();
          break;
        case "View All Roles":
          console.log("You want to view all Roles");
          viewAllRoles();
          break;
        case "View All Employees":
          console.log("You want to view all Employees");
          init();
          break;
        case "Add a Department":
          console.log("You want to Add a Department");
          init();
          break;
        case "Add a Role":
          console.log("You want to Add a Role");
          init();
          break;
        case "Add an Employee":
          console.log("You want to Add an Employee");
          init();
          break;
        case "Update an Employee Role":
          console.log("You want to Update an Employee Role");
          init();
          break;
        default:
          process.exit();
      }
    })
    .catch((err) => console.log(err));
}

init();

function viewAllDepts() {
  const sql = "SELECT * FROM department";
  db.promise()
    .query(sql)
    .then(([rows]) => {
      console.table(rows);
      init();
    })
    .catch((err) => console.log(err));
}

function viewAllRoles() {
  const sql =
    "SELECT role.id, role.title, department.name AS department, role.salary FROM role JOIN department ON role.department_id = department.id";
  db.promise()
    .query(sql)
    .then(([rows]) => {
      console.table(rows);
      init();
    })
    .catch((err) => console.log(err));
}
