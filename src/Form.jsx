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
      <form>
        {/*the form title*/}
        <h1>Student Registration</h1>
        <hr></hr>

        {/*name section*/}
        <label>Student Name</label>
        <input
          type="text"
          onChange={(e) =>
            setStudentInfo((prev) => ({ ...prev, name: e.target.value }))
          }
        />

        {/*parent phon number section*/}
        <label>Parent's Phone Number</label>
        <input
          type="tel"
          placeholder="+20"
          onChange={(e) =>
            setStudentInfo((prev) => ({
              ...prev,
              parentPhonenumber: e.target.value,
            }))
          }
        />

        {/*age section*/}
        <label>Student Age</label>
        <input
          type="tel"
          onChange={(e) =>
            setStudentInfo((prev) => ({
              ...prev,
              age: e.target.value,
            }))
          }
        />

        {/*concert section*/}
        <label>The parent concerte</label>
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

        {/*grade section*/}
        <label>
          The Grade
          <select defaultValue="Options"
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
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
