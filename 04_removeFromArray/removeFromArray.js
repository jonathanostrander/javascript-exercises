const removeFromArray = function (...args) {
	let providedArray = args[0];
	let newArray = [];

	providedArray.forEach((item) => {
		if (!args.includes(item)) {
			newArray.push(item);
		}
	});
	return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
