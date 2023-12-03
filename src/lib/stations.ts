type stationData = { name: string, desc: string }

const stations: { [key: string]: stationData } = {
	alpha: { name: 'Alpha', desc: 'The first station' },
	bravo: { name: 'Bravo', desc: 'Another station' },
	charlie: { name: 'Charlie', desc: 'Yet other station' },
	delta: { name: 'Delta', desc: 'Different station' }
};

export default stations;
export type { stationData };