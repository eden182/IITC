document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector(".AddBut");
  const showButton = document.querySelector(".showBut");
  const viewButton = document.querySelector(".viewBut");
  const employeeListContainer = document.querySelector(".emUls");
  const filterInput = document.getElementById("input-1");
  const body = document.body;
  const colorButtonContainer = document.querySelector(".inColorBut");
  const colorButton = document.querySelector(".colorBut");

  const initialEmployees = [
    {
      firstName: "Alice",
      lastName: "Smith",
      age: 28,
      startDate: "2020-06-15",
      department: "Marketing",
      salary: 50000,
    },
    {
      firstName: "John",
      lastName: "Doe",
      age: 35,
      startDate: "2018-01-25",
      department: "Sales",
      salary: 60000,
    },
    {
      firstName: "Emma",
      lastName: "Johnson",
      age: 42,
      startDate: "2015-03-12",
      department: "IT",
      salary: 70000,
    },
    {
      firstName: "Michael",
      lastName: "Brown",
      age: 30,
      startDate: "2019-07-01",
      department: "Finance",
      salary: 55000,
    },
    {
      firstName: "Sophia",
      lastName: "Williams",
      age: 26,
      startDate: "2021-05-20",
      department: "HR",
      salary: 45000,
    },
    {
      firstName: "David",
      lastName: "Taylor",
      age: 39,
      startDate: "2017-09-14",
      department: "Operations",
      salary: 64000,
    },
    {
      firstName: "Laura",
      lastName: "White",
      age: 32,
      startDate: "2016-11-03",
      department: "Logistics",
      salary: 50000,
    },
  ];

  let employees =
    JSON.parse(localStorage.getItem("employees")) || initialEmployees;
  localStorage.setItem("employees", JSON.stringify(employees));

  employeeListContainer.style.display = "none";
  let isListVisible = false;
  let isCustomColors = false;
  let selectedEmployee = null;

  addButton.addEventListener("click", () => {
    const firstName = document.getElementById("in-1").value.trim();
    const lastName = document.getElementById("in-2").value.trim();
    const age = document.getElementById("in-3").value.trim();
    const startDate = document.getElementById("in-4").value.trim();
    const department = document.getElementById("in-5").value.trim();
    const salary = document.getElementById("in-6").value.trim();

    if (firstName && lastName && age && startDate && department && salary) {
      const employeeData = {
        firstName,
        lastName,
        age,
        startDate,
        department,
        salary,
      };
      employees.push(employeeData);
      localStorage.setItem("employees", JSON.stringify(employees));
      clearInputs();
      refreshEmployeeList(employees);
    } else {
      alert("Please fill in all fields before adding an employee.");
    }
  });

  showButton.addEventListener("click", () => {
    isListVisible = !isListVisible;
    employeeListContainer.style.display = isListVisible ? "flex" : "none";
    showButton.textContent = isListVisible ? "Hide" : "Show";
  });

  viewButton.addEventListener("click", () => {
    const filterDepartment = filterInput.value.trim().toLowerCase();
    const filteredEmployees = employees.filter((employee) =>
      employee.department.toLowerCase().includes(filterDepartment)
    );
    refreshEmployeeList(filteredEmployees);
  });

  colorButton.addEventListener("click", () => {
    isCustomColors = !isCustomColors;
    body.classList.toggle("custom-colors-active", isCustomColors);
    employeeListContainer.classList.toggle("button-active", isCustomColors);
    colorButtonContainer.style.justifyContent = isCustomColors
      ? "flex-start"
      : "flex-end";
    colorButton.textContent = isCustomColors ? "Day" : "Night";
    colorButton.classList.toggle("button-active", isCustomColors);
  });

  function refreshEmployeeList(employeeArray) {
    employeeListContainer.innerHTML = "";
    employeeArray.forEach((employee) => {
      const li = document.createElement("li");
      li.textContent = `${employee.firstName} ${employee.lastName}, Age: ${employee.age}, Start Date: ${employee.startDate}, Department: ${employee.department}, Salary: ${employee.salary}`;

      li.addEventListener("click", () => {
        if (selectedEmployee) {
          selectedEmployee = null;
          clearInputs();
          highlightSelectedEmployee(null);
          return;
        }
        selectedEmployee = employee;
        highlightSelectedEmployee(li);
        populateInputs(employee);
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.className = "deleteButton";
      deleteButton.style.marginLeft = "10px";
      deleteButton.addEventListener("click", (e) => {
        e.stopPropagation();
        const index = employees.indexOf(employee);
        if (index > -1) {
          employees.splice(index, 1);
          localStorage.setItem("employees", JSON.stringify(employees));
          refreshEmployeeList(employees);
        }
      });

      li.appendChild(deleteButton);
      employeeListContainer.appendChild(li);
    });
  }

  function highlightSelectedEmployee(li) {
    const allItems = employeeListContainer.querySelectorAll("li");
    allItems.forEach((item) => item.classList.remove("highlight"));
    if (li) li.classList.add("highlight");
  }

  function populateInputs(employee) {
    document.getElementById("in-1").value = employee.firstName;
    document.getElementById("in-2").value = employee.lastName;
    document.getElementById("in-3").value = employee.age;
    document.getElementById("in-4").value = employee.startDate;
    document.getElementById("in-5").value = employee.department;
    document.getElementById("in-6").value = employee.salary;
  }

  const editButton = document.querySelector(".editBut");
  editButton.addEventListener("click", () => {
    if (selectedEmployee) {
      const firstName = document.getElementById("in-1").value.trim();
      const lastName = document.getElementById("in-2").value.trim();
      const age = document.getElementById("in-3").value.trim();
      const startDate = document.getElementById("in-4").value.trim();
      const department = document.getElementById("in-5").value.trim();
      const salary = document.getElementById("in-6").value.trim();

      if (firstName && lastName && age && startDate && department && salary) {
        selectedEmployee.firstName = firstName;
        selectedEmployee.lastName = lastName;
        selectedEmployee.age = age;
        selectedEmployee.startDate = startDate;
        selectedEmployee.department = department;
        selectedEmployee.salary = salary;

        localStorage.setItem("employees", JSON.stringify(employees));
        refreshEmployeeList(employees);
        clearInputs();
        selectedEmployee = null;
        highlightSelectedEmployee(null);
      } else {
        alert("Please fill in all fields before editing.");
      }
    }
  });

  function clearInputs() {
    document.getElementById("in-1").value = "";
    document.getElementById("in-2").value = "";
    document.getElementById("in-3").value = "";
    document.getElementById("in-4").value = "";
    document.getElementById("in-5").value = "";
    document.getElementById("in-6").value = "";
  }

  refreshEmployeeList(employees);
});
