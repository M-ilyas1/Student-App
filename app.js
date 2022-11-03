const studentList = document.querySelector(".student-list");
const modal = document.querySelector(".modal");
const studentApp = {
  state: {
    students: [
      {
        id: 1,
        firstName: "Irfan",
        class: "10th",
      },
      {
        id: 2,
        firstName: "Haider",
        class: "12th",
         },
    ],
    newStudent: {
      firstName: "",
      class: "",
    },
  },
  stopPropagation: (e) => {
    e.stopPropagation();
  },
  handleChange: (e) => {
    const newStudents = {
      [e.target.name]: e.target.value,
    };
    studentApp.state.newStudent = {
      ...studentApp.state.newStudent,
      ...newStudents,
    };
  },

  handleStudentForm: (student) => {

    const form = `
      <div class="modal-content" onclick="studentApp.stopPropagation(event)">
      <div class="close" onclick="studentApp.closeModal()">&times</div>

        </div>
        `;
    modal.style.display = "flex";
    modal.innerHTML = form;
  },
  render: () => {
    studentList.innerHTML = "";
    studentApp.state.students.forEach((item) => {
      const student = `
            <div style="display: flex">
                <div class="list-item">${item.id}</div>
                <div class="list-item">${item.firstName}</div>
                <div class="list-item">${item.class}</div>
            </div>
        `;
      studentList.innerHTML += student;
    });
  },
  init: () => {
    studentApp.render();
  },
};
studentApp.init();

