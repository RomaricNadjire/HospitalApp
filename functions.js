/* eslint-disable prettier/prettier */
import Moment from 'moment';

// ...

export function formatDate(date) {
  const anneeCourante = Moment().format('YYYY');
  const moisCourante = Moment().format('MMMM');
  const jourCourante = Moment().format('D');
  Moment.locale('fr'); // Définissez la langue (fr pour français)
  let formattedDate = Moment(date).format('D MMMM YYYY');

  if (Moment(date).format('YYYY') === anneeCourante) {
    formattedDate = Moment(date).format('D MMMM');
    if (Moment(date).format('MMMM') === moisCourante) {
      formattedDate = Moment(date).format('dddd');
      if (Moment(date).format('D') === jourCourante) {
        formattedDate = "Aujourd'hui à " + Moment(date).format('hh:mm:ss');
      }
    }
  }

  return formattedDate;
}
