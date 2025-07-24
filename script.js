import { fetchLocationData } from './js/api/ipbase.js';
import { formatCurrentTime } from './js/services/time.service.js';
import { startLiveClock } from './js/services/clock.service.js'

import './styles.scss';


window.addEventListener('DOMContentLoaded', async () => {
  const data = await fetchLocationData();

  const city = data.location?.city?.name || 'Unknown';
  const country = data.location?.country?.name || 'Unknown';
  const timezone = data.timezone?.id || 'Unknown';
  const zoneCode = data.timezone?.code || 'UTC';
  const currentTimeISO = data.timezone?.current_time || null;
  const alpha = data.location?.country?.alpha2 || 'Unknown'

  if (!currentTimeISO) {
    console.log('No time to respond');
    return;
  }

  const {
    formattedDate,
    dayOfWeek,
    dayOfYear,
    weekNumber,
  } = formatCurrentTime(currentTimeISO);

  console.log('Country:', country);
  console.log('Timezone:', timezone);
  console.log('Date:', formattedDate);
  console.log('Day of the week:', dayOfWeek);
  console.log('Day of the year:', dayOfYear);
  console.log('Week number:', weekNumber);

  document.getElementById('time').textContent = time;
  document.getElementById('zone-code').textContent = zoneCode;
  document.getElementById('location').textContent = `IN ${city}, ${alpha}`

  startLiveClock(currentTimeISO);
});


