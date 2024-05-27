'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('actors',[
       { firstName: 'Reza', lastName: 'Rahadian',lastUpdate: new Date(),createdAt:new Date(),updatedAt:new Date(),age:30},
       { firstName: 'Chelsea', lastName: 'Islan',lastUpdate: new Date(),createdAt:new Date(),updatedAt:new Date(),age:20},
       { firstName: 'Nicholas', lastName: 'Saputra',lastUpdate: new Date(),createdAt:new Date(),updatedAt:new Date(),age:23},
       { firstName: 'Dian', lastName: 'Sastrowardoyo',lastUpdate: new Date(),createdAt:new Date(),updatedAt:new Date(),age:35},
       { firstName: 'Adinia', lastName: 'Wirasti',lastUpdate:new Date(),createdAt:new Date(),updatedAt:new Date(),age:40}
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
