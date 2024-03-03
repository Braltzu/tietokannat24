const db = require('../database');

const opintojakso = {
  getById: function(id, callback) {
    return db.query('select * from opintojakso where id_Opintojakso=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (id_opintojakso,koodi,laajuus,nimi) values(?,?,?,?)',
      [opintojakso.id_opintojakso, opintojakso.koodi, opintojakso.laajuus, opintojakso.nimi],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where id_Opintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set id_opintojakso=?,koodi=?,laajuus=?, nimi=? where idOpintojakso=?',
      [opintojakso.id_opintojakso, opintojakso.koodi, opintojakso.laajuus, opintojakso.nimi, id],
      callback
    );
  }
};
module.exports = opintojakso;