export default function WrongInfo(studentInfo) {
  const errors = {};

  if (!studentInfo.name) {
    errors.name = "Name is required";
  }

  if (!/^\d{11}$/.test(studentInfo.parentPhonenumber)) {
    errors.phone = "Phone number must be 11 number";
  }

  if (studentInfo.age < 7 || studentInfo.age > 11) {
    errors.age = "Age must be between 7 and 11";
  }

  if (studentInfo.consent === false){
    errors.consent = " Please get the parent consent"
  }

  if (studentInfo.grade === "options") {
    errors.grade = "Please select a grade";
  }

  return errors;
}