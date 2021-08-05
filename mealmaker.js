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

    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },
    
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return  this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${meal.name}, and ${dessert.name}, and the total price ${totalPrice}`;
    }
};

