module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'usuario',
      [
        {
          id: 1,
          gruposistema_id: 1,
          nome: 'Calebe',
          email: 'calebe@clickativo.com.br',
          login: 'calebe@clickativo.com.br',
          senha_hash:
            '$2a$08$uFrjBr6bxTXiND4oGxOXdO27Lk.50i/Xkp/6Nmf9DP/cMeISsxCoi', // 123456
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface) => queryInterface.bulkDelete('usuario', null, {}),
};
