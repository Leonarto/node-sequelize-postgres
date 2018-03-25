module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    secondSurname: {
      type: Sequelize.STRING
    },
    rut: {
      type: Sequelize.STRING
    },
    telephone: {
      type: Sequelize.STRING
    },
    organDonor: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });
  
  // Default table values
  // force: true will drop the table if it already exists
  User.sync({force: true}).then(() => {
    // Table created
    return User.bulkCreate([
      {
        firstName: 'John',
        lastName: 'Hancock',
        secondSurname: 'Miracles',
        rut: '19.452.345-4',
        telephone: '+569-87654573'
      },
      {
        firstName: 'Moron',
        lastName: 'Dungle',
        secondSurname: 'Flat',
        rut: '19.452.111-6',
        telephone: '+569-32154573'
      },
    ]);
  });
  
  return User;
};