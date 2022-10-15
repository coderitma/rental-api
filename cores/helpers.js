exports.generateCounterID = async (schema, prefix, stop = 12) => {
  const date = new Date();
  const month = String(date.getMonth()).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  let count = await schema.countDocuments();
  let result = [];

  for (let index = 1; index <= stop; index++) {
    count += index;
    let nomor = `${prefix.toUpperCase()}-${String(count).padStart(
      4,
      "0"
    )}-${month}${year}${hours}${minutes}${seconds}`;
    result.push(nomor);
  }
  return result;
};

exports.generateID = async (prefix, schema) => {
  let count = await schema.find().count();

  return `${prefix.toUpperCase()}-${String(count + 1).padStart(4, "0")}`;
};

exports.getMonthName = async (monthNumber) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthNames[monthNumber];
};

exports.objectIsExist = async (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

exports.cleanDate = (date, timeZone = "Asia/Jakarta", countryCode = "id") => {
  if (typeof date === "string") {
    return new Date(date).toLocaleDateString(countryCode, { timeZone });
  }

  return new Date(
    date.toLocaleString(countryCode, {
      timeZone,
    })
  );
};

exports.addHours = (date, hour) => {
  let cloneDate = new Date(date.getTime());
  return cloneDate.setTime(date.getTime() + hour * 60 * 60 * 1000);
};

exports.addDays = (date, days) => {
  let cloneDate = new Date(date.getTime());
  return cloneDate.setDate(date.getDate() + days);
};

exports.compareTwoDate = async (loanDate, returnDate) => {
  return loanDate >= returnDate;
};
