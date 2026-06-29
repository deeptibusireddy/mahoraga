import { days1to5 } from './days1to5';
import { days6to10 } from './days6to10';
import { days11to15 } from './days11to15';
import { days16to19 } from './days16to19';
import { day20 } from './day20';
import { days21to25 } from './days21to25';
import { days26to30 } from './days26to30';
import { days31to35 } from './days31to35';
import { days36to40 } from './days36to40';
import { days41to45 } from './days41to45';
import { days46to50 } from './days46to50';

const allDaysRaw = [
  ...days1to5, ...days6to10, ...days11to15, ...days16to19,
  ...day20,
  ...days21to25, ...days26to30, ...days31to35, ...days36to40,
  ...days41to45, ...days46to50,
];

const seen = new Set();
export const allDays = allDaysRaw
  .filter(d => { if (seen.has(d.id)) return false; seen.add(d.id); return true; })
  .sort((a, b) => a.id - b.id);

export default allDays;
