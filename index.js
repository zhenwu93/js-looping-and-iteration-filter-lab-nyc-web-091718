function findMatching(drivers, string) {
    return drivers.filter(function (driverName) {
      return driverName.toLowerCase() === string.toLowerCase();
    });
}

function fuzzyMatch(drivers, string) {
  let nameLength = string.length;

  return drivers.filter(function (driverName) {
    return driverName.slice(0, nameLength) === string;
  });
}

function matchName(drivers, string) {
  return drivers.filter(function (driver){
    return driver.name.toLowerCase() === string.toLowerCase();
  });
}
