const { RESTDataSource } = require('apollo-datasource-rest');
const { CAT, DOG, RABBIT, STINGRAY } = require('../constants');

const byType = types => {
    const typePrefixes = types.map(type => PET_TYPES_BY_ID_PREFIX[type]);
    return pet => typePrefixes.includes(pet.id.split('-')[0]);
}



const PET_TYPES_BY_ID_PREFIX = {
    [CAT]: "C",
    [DOG]: "D",
    [RABBIT]: "R",
    [STINGRAY]: "S"
}

class PetAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3000';
    }

    async getTotalPets() {
        const allPets = await this.getAllPets();
        return allPets.length;
    }

    async getAllPets() {
        const allPets = await this.get('pets');
        return allPets;
    }

    async getAllFamilyPets() {
        const allPets = await this.getAllPets();
        const filterByFamilyPetTypes = byType([CAT, DOG]);
        return allPets.filter(filterByFamilyPetTypes);
    }

    async getAllExoticPets() {
        const allPets = await this.getAllPets();
        const filterByExoticPetTypes = byType([RABBIT, STINGRAY]);
        return allPets.filter(filterByExoticPetTypes);
    }

    async getPetById(id) {
        const pet = await this.get(`pets/${id}`);
        return pet;
    }
}

module.exports = PetAPI;