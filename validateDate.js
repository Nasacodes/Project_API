const moment = require("moment");

function isValidDate(dateString) {
  let dateValue = moment(dateString, "DD-MM-YYYY", true);
  let isValid = dateValue.isValid();
  if (!isValid) {
    return { valid: false, message: "Invalid date string" }; // you can get more fine grained information from moment
  } else {
    if (moment(dateValue).isAfter(moment())) {                // yeah i just finally configured "future validation" on this line.
      return {
        valid: false,
        message: "Date of birth cannot be in the future",
      };
    }
    return { valid: true, message: dateValue.toString(), date: dateValue.toDate()  } 
  }
};

module.exports.isValidDate = isValidDate;

// let validDateString = "22-12-1809";
// let invalidDateString1 = "1809-12-22";
// let invalidDateString2 = "12-22-1809";
// let invalidDateString3 = "1809-22-12"
// let futureDateString = "22-12-2021";

// let sampleInputs = [
//   validDateString,
//   invalidDateString1,
//   invalidDateString2,
//   invalidDateString3
//   futureDateString,
// ];

// for (input of sampleInputs) {
//   let result = isValidDate(input);
//   console.log(result);
// }
