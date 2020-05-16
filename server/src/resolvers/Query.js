const Query = {
    allAvailablePets: async (_, __, { dataSources }) => {
        const allCheckouts = await dataSources.checkoutAPI.getAllCheckouts();
        const checkedOutPetIds = allCheckouts.map(checkout => checkout.petId);
        const allPets = await dataSources.petAPI.getAllPets();
        return allPets.filter(pet => !checkedOutPetIds.includes(pet.id));
    },
    allPets: (_, __, { dataSources }) => dataSources.petAPI.getAllPets(),
    availablePets: async (_, __, { dataSources }) => {
        const totalPets = await dataSources.petAPI.getTotalPets();
        const checkedOutPets = await dataSources.checkoutAPI.getTotalCheckouts();
        return totalPets - checkedOutPets;
    },
    allCheckedOutPets: async (_, __, { dataSources }) => {
        const allCheckouts = await dataSources.checkoutAPI.getAllCheckouts();
        const checkedOutPetIds = allCheckouts.map(checkout => checkout.petId);
        const checkedOutPets = await Promise.all(checkedOutPetIds.map(id => dataSources.petAPI.getPetById(id)));
        return checkedOutPets;
    },
    checkedOutPets: (_, __, { dataSources }) => dataSources.checkoutAPI.getTotalCheckouts(),
    familyPets: (_, __, { dataSources }) => dataSources.petAPI.getAllFamilyPets(),
    exoticPets: (_, __, { dataSources }) => dataSources.petAPI.getAllExoticPets(),
    petById: (_, { id }, { dataSources }) => dataSources.petAPI.getPetById(id),
    totalPets: (_, __, { dataSources }) => dataSources.petAPI.getTotalPets(),
    allCustomers: (_, __, { dataSources }) => dataSources.customerAPI.getAllCustomers(),
    totalCustomers: (_, __, { dataSources }) => dataSources.customerAPI.getTotalCustomers()
};

module.exports = Query;