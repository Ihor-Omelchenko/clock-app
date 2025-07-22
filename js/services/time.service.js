export function formatCurrentTime(isoString) {
  const date = new Date(isoString);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const time = `${hours}:${minutes}`;

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;

  const dayOfWeek = date.getDay();

  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const jan1 = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - jan1) / oneDay);
  const weekNumber = Math.ceil((days + jan1.getDay() + 1) / 7);

  return {
    time,
    formattedDate,
    hours: +hours,
    dayOfWeek,
    dayOfYear,
    weekNumber,
  };
}
