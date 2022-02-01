'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Books',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
      },
      title:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      author:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      pageQuantity:{
        type: Sequelize.INTEGER,
        allowNull: true
      },
      creatAt:{
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Books')
  }
};
