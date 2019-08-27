const 	_ = require('lodash'),
		program = require('commander');

var lottotype, 
	noOfLines;

function generateNumbers (lottotype, lines){
	var n = 0;

	console.log(lottotype.charAt(0).toUpperCase() + lottotype.slice(1) + ' Lotto');
	
	while (n < lines){
		var normalNumbers, 
			bonusNumbers, 
			toPickNormalNumbers, 
			toPickBonusNumbers;

		if(lottotype === 'irish'){
			normalNumbers = 47;
			toPickNormalNumbers = 6;
			
			var numbersList = _.range(1, normalNumbers+1), 
				pickedNumbers = [];

			// select normal numbers at random
			for (var i = 1; i <= toPickNormalNumbers; i++) {
				var randomNumber = _.random(0, numbersList.length - 1);
				pickedNumbers.push(numbersList[randomNumber]);
				_.pull(numbersList, numbersList[randomNumber]);
			}
			
			// sort numbers low to high
			pickedNumbers.sort((a, b) => a - b);

			console.log('============================');
			console.log('Line '+ (parseInt(n)+1) +': '+ pickedNumbers);

		} else if(lottotype === 'euromillions'){
			normalNumbers = 50;
			bonusNumbers = 12;
			toPickNormalNumbers = 5;
			toPickBonusNumbers = 2;

			var normalNumbersList = _.range(1, normalNumbers+1), 
				bonusNumbersList = _.range(1, bonusNumbers+1), 
				pickedNormalNumbers = [],
				pickedBonusNumbers = [];

			// select normal numbers at random
			for (var i = 1; i <= toPickNormalNumbers; i++) {
				var randomNumber = _.random(0, normalNumbersList.length - 1);
				pickedNormalNumbers.push(normalNumbersList[randomNumber]);
				_.pull(normalNumbersList, normalNumbersList[randomNumber]);
			}

			// sort numbers low to high
			pickedNormalNumbers.sort((a, b) => a - b);

			// select lucky stars at random
			for (var i = 1; i <= toPickBonusNumbers; i++) {
				var randomNumber = _.random(0, bonusNumbersList.length - 1);
				pickedBonusNumbers.push(bonusNumbersList[randomNumber]);
				_.pull(bonusNumbersList, bonusNumbersList[randomNumber]);
			}

			// sort numbers low to high
			pickedBonusNumbers.sort((a, b) => a - b);

			console.log('============================');
			console.log('Line '+ (parseInt(n)+1) +': '+ pickedNormalNumbers+', Lucky Stars: '+pickedBonusNumbers);

		}
		n++;
	}
}


program.version('1.0.0', '-v, --version');

program
  .option('-d, --debug', 'Debug.')
  .option('-t, --type <lottotype>', 'i or irish, for irish lottery, e or euro for euromillions lottery')
  .option('-l, --lines <numberof>', 'number of lines to generate');

program.parse(process.argv);

if (program.debug) {
	console.log(program.opts());
}

if(program.lines === undefined || program.lines < 2){
	// minimum no. of lines to play is 2
	noOfLines = 2;
	console.log('Note: The minimum # of lines to play the lottery is two.');
} else {
	noOfLines = program.lines;
}

if (program.type === undefined){
	lottotype = 'irish';
	generateNumbers(lottotype, noOfLines);
} else {
	if(program.type === 'i' || program.type === 'irish'){
		lottotype = 'irish';
		generateNumbers(lottotype, noOfLines);
	}
	else if (program.type === 'e' || program.type === 'euro'){
		lottotype = 'euromillions';
		generateNumbers(lottotype, noOfLines);
	}else {
		console.log('> Lotto type not recognised. ¯\\_(ツ)_/¯')
	}
}