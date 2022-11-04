INSERT INTO department (name)
VALUES  ('Finance'),
        ('Legal'),
        ('Sales'),
        ('Engineering'),
        ('Customer Service');

INSERT INTO role (title, salary, department_id)
VALUES  ('Financial Analyst', 90000.00, 1),
        ('Senior Financial Analyst', 120000.00, 1),
        ('Legal Counsel', 200000.00, 2),
        ('Senior Legal Counsel', 250000.00, 2),
        ('Sales Rep', 80000, 3),
        ('Account Manager', 100000.00, 3),
        ('Junior Engineer', 90000.00, 4),
        ('Senior Engineer', 150000.00, 4),
        ('Customer Service Rep', 50000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Ronald', 'McDonald', 2, NULL),
        ('Michelle', 'Charger', 4, NULL),
        ('Mike', 'Janakowski', 6, NULL),
        ('David', 'Lang', 8, NULL),
        ('Bob', 'Schubert', 1, 1),
        ('Penelope', 'Davis', 1, 1),
        ('Lewis', 'Smith', 3, 2),
        ('Susan', 'Michaels', 3, 2),
        ('Jeff', 'Doe', 5, 3),
        ('Rebecca', 'Livingston', 5, 3),
        ('Amanda', 'Dower', 7, 4),
        ('Jaime', 'Elazar', 7, 4),
        ('Becky', 'Swanson', 9, NULL);