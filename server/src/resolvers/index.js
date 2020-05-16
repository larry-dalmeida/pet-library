const Query = require("./Query");
const { CAT, DOG, RABBIT, STINGRAY } = require("../constants");

const resolvers = {
  FamilyPet: {
    __resolveType({ sleepAmount, good }) {
      if (sleepAmount) return CAT;
      if (good) return DOG;
      return null;
    },
  },
  ExoticPet: {
    __resolveType({ favoriteFood, chill }) {
        if (favoriteFood) return RABBIT;
        if (chill) return STINGRAY;
        return null;
      },
  },
  Pet: {
    __resolveType({ sleepAmount, good, favoriteFood, chill }) {
      if (sleepAmount) return CAT;
      if (good) return DOG;
      if (favoriteFood) return RABBIT;
      if (chill) return STINGRAY;
      return null;
    },
  },
  Query,
};

module.exports = resolvers;
