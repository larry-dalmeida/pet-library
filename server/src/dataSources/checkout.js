const { RESTDataSource } = require('apollo-datasource-rest');

class CheckoutAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3000';
    }

    async getTotalCheckouts() {
        const allCheckouts = await this.getAllCheckouts();
        return allCheckouts.length;
    }

    async getAllCheckouts() {
        const allCheckouts = await this.get('checkouts');
        return allCheckouts;
    }
}

module.exports = CheckoutAPI;