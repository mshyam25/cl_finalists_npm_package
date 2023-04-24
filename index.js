final_teams = (year) => {
  switch (year) {
    case 2017:
      console.log('Real Madrid vs Liverpool');
      break;
    case 2018:
      console.log('Liverpool vs Tottenham');
      break;
    case 2019:
      console.log('Bayern Munich vs PSG');
      break;
    case 2020:
      console.log('Chelsea vs Mancity');
      break;
    case 2021:
      console.log('Real Madrid vs Liverpool');
      break;
    default:
      console.log('Data not available');
  }
};

// cl_winner = function (string) {
//   return string === 'RMA';
// };

module.exports = final_teams;
