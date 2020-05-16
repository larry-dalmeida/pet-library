const { RESTDataSource } = require('apollo-datasource-rest');

class CustomerAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3000';
    }

    async getTotalCustomers() {
        const allCustomers = await this.getAllCustomers();
        return allCustomers.length;
    }

    async getAllCustomers() {
        const allCustomers = await this.get('customers');
        return allCustomers;
    }
}

module.exports = CustomerAPI;