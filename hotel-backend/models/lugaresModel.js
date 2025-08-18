var pool = require('./bd');

async function getLugares(){
    var query ='select * from lugares';
    var rows = await pool.query(query);
    return rows;
}


async function insertLugares(obj){
    try{
        var query = "insert into lugares set?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error){
        console.log(error);
        throw error;
    }
}

async function deleteLugaresById(id) {
    var query = 'delete from lugares where id=?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getLugarById(id) {
    var query = 'select * from lugares where id=?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarLugaresById(obj, id){
    try {
        var query = 'update lugares set ? where id=?';
        var rows = await pool.query (query, [obj, id]);
        return rows;
    } catch (error){
        throw error;
    }
    
}


module.exports = {getLugares, insertLugares, deleteLugaresById, getLugarById, modificarLugaresById}
