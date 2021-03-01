
exports.min = function min (array) {
	if (array === null || array === undefined || array.length === 0) return 0;

  return array.sort((a, b) => a - b)[0];
}

exports.max = function max (array) {
	if (array === null || array === undefined || array.length === 0) return 0;

  return array.sort((a, b) => b - a)[0];
}

exports.avg = function avg (array) {
	if (array === null || array === undefined || array.length === 0) return 0;

	let num = 0;

	array.forEach( (elm) => {num += elm});

  return num / array.length;
}
