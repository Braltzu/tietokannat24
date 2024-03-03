const db = require('../database');


const arviointi={
  getAll: function(callback) {
    return db.query('select * from Arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from Arviointi where id_Arviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into Arviointi (paivamaara,arvosana,id_Opiskelija,id_Opintojakso) values(?,?,?,?)',
      [arviointi.paivamaara,arviointi.arvosana,arviointi.id_Opiskelija,arviointi.id_Opintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where id_Arviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set paivamaara=?,arvosana=?, id_Opiskelija=?, id_Opintojakso=? where id_Arviointi=?',
      [arviointi.paivamaara,arviointi.arvosana,arviointi.id_Opiskelija,arviointi.id_Opintojakso, id],
      callback
    );
  }

};
          
module.exports = arviointi;