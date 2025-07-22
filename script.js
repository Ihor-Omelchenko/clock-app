import { fetchLocationData } from './js/api/ipbase.js';
import { formatCurrentTime } from './js/services/time.service.js';
import { getGreeting } from './js/utils/greeting.js';

window.addEventListener('DOMContentLoaded', async () => {
  const data = await fetchLocationData();

  const city = data.location?.city?.name || 'Unknown';
  const country = data.location?.country?.name || 'Unknown';
  const timezone = data.timezone?.id || 'Unknown';
  const zoneCode = data.timezone?.code || 'UTC';
  const currentTimeISO = data.timezone?.current_time || null;

  if (!currentTimeISO) {
    console.log('No time to respond');
    return;
  }

  const {
    time,
    formattedDate,
    hours,
    dayOfWeek,
    dayOfYear,
    weekNumber,
  } = formatCurrentTime(currentTimeISO);

  const greeting = getGreeting(hours);

  console.log('City:', city);
  console.log('Country:', country);
  console.log('Timezone:', timezone);
  console.log('Code:', zoneCode);
  console.log('Time:', time);
  console.log('Date:', formattedDate);
  console.log('Greeting:', greeting);
  console.log('Day of the week:', dayOfWeek);
  console.log('Day of the year:', dayOfYear);
  console.log('Week number:', weekNumber);
});
