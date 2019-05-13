class AvengersAPI {
    constructor() {
        console.log('whoa, we made it');

        this.heroesAndVillians = require('./heroesAndVillians');
    }

    /**
     * 
     * @param {*} params Object of parameters to search by. Can be name, type, powerGreaterThan, or powerLessThan.
     */
    searchForAvengers( params ) {
        // For now, just test that we can access heroesAndVillians
        return this.heroesAndVillians[0];


        // let results = [];

        // if ( params.s ) {
        //     results = results.concat(this.heroesAndVillians.filter((person) => {
        //         return person.name.indexOf(params.s) !== -1;
        //     }));
        // }

        // return results;
    }
}

module.exports = AvengersAPI;