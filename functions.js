/* eslint-disable prettier/prettier */
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

// ...

export function formatDate(date) {
  const formattedDate = dayjs(date).fromNow(true);
  return formattedDate;
}
