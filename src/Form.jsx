import { useState } from "react";

export default function Form() {
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    parentPhonenumber: "",
    age: "",
    conserte: false,
    grade: "",
  });

  return (
    <>
      <form className="container mt-4 text-white p-5 rounded-4">
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
        </div>

        {/*concert section*/}
        <label>The parent concerte</label>
        <div className="mb-3 p-1">
          <input
            type="checkbox"
            checked={studentInfo.conserte}
            onChange={(e) =>
              setStudentInfo((prev) => ({
                ...prev,
                conserte: e.target.checked,
              }))
            }
          />
        </div>

        {/*grade section*/}
        <label>The Grade</label>
        <div className="mb-3 p-1">
          <select
            className="rounded-3"
            defaultValue="Options"
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
