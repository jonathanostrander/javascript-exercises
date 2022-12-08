const removeFromArray = function (...args) {
	let provideArray = args[0];
	let newArray = [];
	provideArray.forEach((item) => {
		if (!args.includes(item)) {
			newArray.push(item);
		}
	});
	return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
