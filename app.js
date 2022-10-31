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
  handleUpdate: (id) => {
    const studentState = [...studentApp.state.students];
    const student = studentState.find((x) => x.id === id);
    if (student) {
      studentApp.state.newStudent = student;
      studentApp.handleStudentForm(student);
    }
  },
  handlePreview: (id) => {
    const studentState = [...studentApp.state.students];
    const student = studentState.find((x) => x.id === id);
    if (student) {
      studentApp.state.newStudent = student;
      const previewContent = `
          <div class="preview">
            <p>Name: ${student.firstName}  </p>
            <p>Class: ${student.class}</p>
            <p>About: ${student.about}
          </div>
      `;
      preview.style.border = `1px solid #eee`;
      preview.innerHTML = previewContent;
    }
  },

  handleStudentForm: (student) => {

    const form = `
      <div class="modal-content" onclick="studentApp.stopPropagation(event)">
      <div class="close" onclick="studentApp.closeModal()">&times</div>

      <h3>${student ? "Update" : "Add"} Student Form</h3>

      <form onkeyup="studentApp.handleChange(event)" onsubmit="studentApp.handleStudent(event)">
      <input class="input" value="${
        student ? student.firstName : ""
      }" name="firstName" placeholder="Enter first name"/>
        <input class="input" value="${
          student ? student.class : ""
        }" name="class" placeholder="Enter class"/>
        <input class="input" name="picture" type="file"/>
        <button type="submit">${student ? "Update" : "Add"}</button>
        </form>
        </div>
        `;
    modal.style.display = "flex";
    modal.innerHTML = form;
  },
  closeModal: () => {
    modal.style.display = "none";
    studentApp.state.newStudent = {
      firstName: "",
      class: "",
    };
  },
  render: () => {
    studentList.innerHTML = "";
    studentApp.state.students.forEach((item) => {
      const student = `
            <div style="display: flex">
                <div class="list-item">${item.id}</div>
                <div class="list-item">${item.firstName}</div>
                <div class="list-item">${item.class}</div>
                <div>
                    <button onclick="studentApp.handlePreview(${item.id})">View</button>
                    <button onclick="studentApp.handleUpdate(${item.id})">Edit</button>
                    <button onclick="studentApp.openDeleteModal(${item.id})">Delete</button>
                </div>
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
