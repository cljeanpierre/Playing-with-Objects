// Create a menu object featuring courses 

const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },

    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },

    set appetizers(appetizer) {
        this._courses.appetizers = appetizer;
    },
    set mains(maincourse) {
        this._courses.mains = maincourse;
    },
    set desserts(dessert) {
        this._courses.desserts = dessert;
    },
};