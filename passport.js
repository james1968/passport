function driver(data) {
  var sirName = [];
  var decade = [];
  var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  sirName.push(data[2].toUpperCase());
  var strFirst = (sirName.toString() + '99999').substr(0, 5);
  decade.push(data[3]).reverse;
  var strSecond = decade.toString().split('').reverse().join('').charAt(1);
  if (data.slice(-1).pop() === 'F') {
  var strFemale = ('0' + (monthNames.indexOf(decade.toString().substr(3, 3)) +1)).slice(-2);
  var strThird = Number(strFemale) + 50;
  } else {
  var strThird = ('0' + (monthNames.indexOf(decade.toString().substr(3, 3)) +1)).slice(-2);
  }
  var strFourth = decade.toString().substr(0, 2);
  var strFifth = decade.toString().split('').reverse().join('').charAt(0);
  var firstName = []
  firstName.push(data[0]);
  var strSixth = firstName.toString().charAt(0);
  var middleName = []
  middleName.push(data[1]);
  var strSixthMiddle = (middleName.toString().charAt(0) + '9').substr(0, 1);
  return strFirst + strSecond + strThird + strFourth + strFifth + strSixth + strSixthMiddle + '9' + 'AA'
  }
  var data = ['James', 'Edward', 'Baker', '21-Nov-1968', 'M'];
  console.log(driver(data));
