class AvengersAPI {
	constructor() {
		// Hint: require and set this. 
		// something to be the array in heroesAndVillians.js
		this.heroes_and_villians = require("./heroesAndVillians").all;
	}
	
	/**
	* Hint: you'll want to use Array.filter and Array.concat 
	* as well as String.indexOf() for searching a string for text
	* 
	* @param {*} params Object of parameters to search by. Can be name, type, powerGreaterThan, or powerLessThan.
	*/
	searchForAvengers( params ) {        
		/*
		* { type: 'hero' }
		*/
		let result = [];
		
		if ( params.name ) {
			let namesResult = this.heroes_and_villians.filter( (hero) => {
				// return true if params.name is inside of the hero's name
				let searchName = params.name;
				let checkName = hero.name;
				
				let index = checkName.indexOf(searchName);
				
				if (index != -1) {
					return true;
				} else {
					return false;
				}
			});
			
			// Append to existing array
			result = result.concat(namesResult);
		}
		
		if ( params.type ) {
			let typeResult = this.heroes_and_villians.filter( (hero) => {
				// return true if params.name is inside of the hero's name
				let searchType = params.type;
				let checkType = hero.type;
				
				let index = checkType.indexOf(searchType);
				
				if (index != -1) {
					return true;
				} else {
					return false;
				}
			});
			
			// Append to existing array
			result = result.concat(typeResult);
		}
		
		return result;
	}
}

module.exports = AvengersAPI;