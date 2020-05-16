const PetAPI = require('./pet');
const CustomerAPI = require('./customer');
const CheckoutAPI = require('./checkout');

const dataSources = () => ({
    petAPI: new PetAPI(),
    customerAPI: new CustomerAPI(),
    checkoutAPI: new CheckoutAPI()
});

module.exports = dataSources;