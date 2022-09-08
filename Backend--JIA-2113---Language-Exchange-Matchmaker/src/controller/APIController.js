import pool from '../configs/connectDB';
let getAllUsers = async (req, res) => {
    
    const [rows, fields] = await pool.execute(`SELECT * FROM users`);
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

let createNewUser = async (req, res) => { 
    let { firstName, lastName, Email, Address } = req.body;
    if (!firstName || !lastName || !Email || !Address) { 
        return res.status(200).json({
            message: 'missing @params'
        })
    }
    await pool.execute('insert into Users(firstName, lastName, Email, Address) values(?, ?, ?, ?)', [firstName, lastName, Email, Address]);
    return res.status(200).json({
        message: 'ok'
    })
}



let updateUser = async (req, res) => { 
    let { firstName, lastName, Email, Address, id } = req.body;
    if (!firstName || !lastName || !Email || !Address || !id) { 
        return res.status(200).json({
            message: 'missing @params'
        })
    }

    await pool.execute('update Users set firstName = ?, lastName= ?, Email = ?, Address= ? WHERE id = ?',
        [firstName, lastName, Email, Address, id]);
    return res.status(200).json({
        message: 'ok'
    })
    
}

let deleteUser = async (req, res) => { 
     let userId = req.params.id;
     if (!userId) { 
        return res.status(200).json({
            message: 'missing @params'
        })
    }

    await pool.execute('delete from Users where id = ?', [userId])

      return res.status(200).json({
        message: 'ok'
    })
}

module.exports = { 
    getAllUsers, createNewUser, updateUser, deleteUser
}