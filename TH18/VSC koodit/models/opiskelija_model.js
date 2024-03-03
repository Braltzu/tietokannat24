const db = require('../database');

const opiskelija = {
  getById: function(id, callback) {
    return db.query('select * from opiskelija where id_Opiskelija=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'insert into opiskelija (id_opiskelija, etunimi,sukunimi,osoite,luokkatunnus) values(?,?,?,?,?)',
      [opiskelija.id_opiskelija, opiskelija.etunimi, opiskelija.sukunimi, opiskelija.osoite,opiskelija.luokkatunnus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opiskelija where id_opiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    return db.query(
      'update opiskelija set etunimi=?,sukunimi=?, osoite=?, luokkatunnus=? where id_Opiskelija=?',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.osoite,opiskelija.luokkatunnus, id],
      callback
    );
  }
};
module.exports = opiskelija;