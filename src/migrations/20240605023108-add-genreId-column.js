'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('movies', 'genreId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'genres', 
        key: 'id', 
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('movies', 'genreId');
  }
};
