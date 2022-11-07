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
          viewAllEmps();
          break;
        case "Add a Department":
          console.log("You want to Add a Department");
          addDept();
          break;
        case "Add a Role":
          console.log("You want to Add a Role");
          addRole();
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

function addDept() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "dept",
        message: "What is the name of the Department?",
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO department (name)
    VALUES ("${answer.dept}")`;
      db.promise()
        .query(sql)
        .then(() => {
          console.log(`Added ${answer.dept} Department`);
          init();
        });
    })
    .catch((err) => console.log(err));
}

function addRole() {
  let depts = [];
  let dbRows = [];
  db.promise()
    .query("SELECT * FROM department")
    .then(([rows]) => {
      dbRows = rows;
      rows.forEach((i) => depts.push(i.name));
    })
    .catch((err) => console.log(err));
  inquirer
    .prompt([
      {
        type: "input",
        name: "role",
        message: "What is the name of the Role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of the role?",
      },
      {
        type: "list",
        name: "dept",
        message: "Which Department does the Role belong to?",
        choices: depts,
      },
    ])
    .then((answers) => {
      let deptId;
      dbRows.forEach((i) => {
        if (i.name === answers.dept) {
          deptId = i.id;
        }
      });

      const sql = `INSERT INTO role (title, salary, department_id)
        VALUES ("${answers.role}", ${answers.salary}, ${deptId})`;
      db.promise()
        .query(sql)
        .then(() => {
          console.log(
            `Added the ${answers.role} role to the ${answers.dept} department with a salary of $${answers.salary}`
          );
          init();
        })
        .catch((err) => console.log(err));
    });
}

function viewAllDepts() {
  const sql = `SELECT * FROM department`;
  db.promise()
    .query(sql)
    .then(([rows]) => {
      console.table(rows);
      init();
    })
    .catch((err) => console.log(err));
}

function viewAllRoles() {
  const sql = `SELECT role.id, role.title, department.name AS department, role.salary 
    FROM role 
    JOIN department ON role.department_id = department.id`;
  db.promise()
    .query(sql)
    .then(([rows]) => {
      console.table(rows);
      init();
    })
    .catch((err) => console.log(err));
}

function viewAllEmps() {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
  FROM employee
  LEFT JOIN employee manager ON manager.id = employee.manager_id
  LEFT JOIN role ON employee.role_id = role.id
  LEFT JOIN department ON role.department_id = department.id`;
  db.promise()
    .query(sql)
    .then(([rows]) => {
      console.table(rows);
      init();
    })
    .catch((err) => console.log(err));
}
