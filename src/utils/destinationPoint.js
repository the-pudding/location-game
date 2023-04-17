function toRadians(degrees) {
	return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
	return radians * (180 / Math.PI);
}

// Function to calculate the destination point
export default function destinationPoint(startPoint, distance, bearing) {
	const radius = 6371e3; // Earth's mean radius in meters
	const angularDistance = distance / radius;
	const startLat = toRadians(startPoint.lat);
	const startLng = toRadians(startPoint.lng);

	bearing = toRadians(bearing);

	const endLat = Math.asin(
		Math.sin(startLat) * Math.cos(angularDistance) +
			Math.cos(startLat) * Math.sin(angularDistance) * Math.cos(bearing)
	);

	const endLng =
		startLng +
		Math.atan2(
			Math.sin(bearing) * Math.sin(angularDistance) * Math.cos(startLat),
			Math.cos(angularDistance) - Math.sin(startLat) * Math.sin(endLat)
		);

	return L.latLng(toDegrees(endLat), toDegrees(endLng));
}
