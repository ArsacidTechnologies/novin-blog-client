// import moment from "moment";

// import jMoment from "moment-jalaali";

// export const convertPersianDateToLettersNew = (epochTime: number) => {
//   const dateFormat = new Intl.DateTimeFormat('en');
//   let dayOfWeek = dateFormat.format(new Date(epochTime * 1000));
//   // let primaryDateTime = persianDate?.split(' ');
//   const moment = require('moment-jalaali');
//   const jalaaliDate = moment.unix(epochTime).format('jD');
//   console.log(moment.unix(epochTime).format('jD'))
//   console.log(moment.unix(epochTime).format('jY'))
//   console.log(moment.unix(epochTime).format('jdd'))
//   console.log(moment.unix(epochTime).format('jMM'))


//   const month = moment.unix(epochTime).format('jMM')
//   const weekDay = moment(dayOfWeek).isoWeekday();
//   const day = moment(dayOfWeek).day();
//   const month = moment(dayOfWeek).month();
//   let date = primaryDateTime?.[0]?.split('/');
//   console.log('day-', month)
//   const month = date?.[1];
//   const year = date?.[0];

//   // if (showYear) {
//   //   return false
//   //   // return `${days[weekDay]} ${day} ${months[month]} ${year}`;
//   // }
//   return true
//   // return `${days[weekDay]} ${day} ${months[month]}`;
// };