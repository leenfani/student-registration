import { useState } from "react";
import WrongInfo from "./WrongInfo";

export default function Form() {
  const [errors, setErrors] = useState({});
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    parentPhonenumber: "",
    age: "",
    consent: false,
    grade: "options",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const wrongInfoCheck = WrongInfo(studentInfo);
    setErrors(wrongInfoCheck);

    if (Object.keys(wrongInfoCheck).length === 0) {
      console.log("Form submitted", studentInfo);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="container mt-4 text-white p-5 rounded-4">
        {/*the form title*/}
        <h1>Student Registration</h1>
        <hr></hr>

        {/*name section*/}
        <label>Student Name</label>
        <div className="mb-3 p-1">
          <input
            className="rounded-3"
            type="text"
            onChange={(e) =>
              setStudentInfo((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          {errors.name && <p className="text-danger">{errors.name}</p>}
        </div>

        {/*parent phon number section*/}
        <label>Parent's Phone Number</label>
        <div className="mb-3 p-1">
          <input
            className="rounded-3"
            type="tel"
            placeholder="+20"
            onChange={(e) =>
              setStudentInfo((prev) => ({
                ...prev,
                parentPhonenumber: e.target.value,
              }))
            }
          />
          {errors.phone && <p className="text-danger">{errors.phone}</p>}
        </div>

        {/*age section*/}
        <label>Student Age</label>
        <div className="mb-3 p-1">
          <input
            className="rounded-3"
            type="tel"
            onChange={(e) =>
              setStudentInfo((prev) => ({
                ...prev,
                age: e.target.value,
              }))
            }
          />
          {errors.age && <p className="text-danger">{errors.age}</p>}
        </div>

        {/*consent section*/}
        <label>The parent consent</label>
        <div className="mb-3 p-1">
          <input
            type="checkbox"
            checked={studentInfo.consent}
            onChange={(e) =>
              setStudentInfo((prev) => ({
                ...prev,
                consent: e.target.checked,
              }))
            }
          />
          {errors.consent && <p className="text-danger">{errors.consent}</p>}
        </div>

        {/*grade section*/}
        <label>The Grade</label>
        <div className="mb-3 p-1">
          <select
            className="rounded-3"
            value={studentInfo.grade}
            name="SelectedGrade"
            onChange={(e) =>
              setStudentInfo((prev) => ({
                ...prev,
                grade: e.target.value,
              }))
            }>
            <option value="option">Options</option>
            <option value="first">First</option>
            <option value="second">Second</option>
            <option value="Third">Third</option>
            <option value="Fourth">Fourth</option>
            <option value="Fifth">Fifth</option>
            <option value="Sixth">Sixth</option>
          </select>
          {errors.grade && <p className="text-danger">{errors.grade}</p>}
        </div>

        <button
          className="btn btn-light rounded-5 px-3 py-2 btn-custom"
          type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
