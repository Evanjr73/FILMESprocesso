import {db} from "../db.js"


export const getUsers = (_, res ) => {
    const q = "SELECT * FROM filmes";

    db.query(q , (err, data)=>{
        if (err) return res.json(err);
        
        return res.status(200).json(data)
    })
}
export const addUser =  (req , res)=>{
    const q =
    "INSERT INTO filmes(`nome`, `categoria`, `descricao`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.categoria,
    req.body.descricao,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};


export const updateUser = (req, res) =>{
    const q =
    "UPDATE filmes SET `nome` = ?, `categoria` = ?, `descricao` = ?,  WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.categoria,
    req.body.descricao,

  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Filme atualizado com sucesso.");
  });
} 


export const deleteUser = (req, res) =>{
    const q = "DELETE FROM filmes WHERE 'id ' = ?";

    db.query( q , [req.params.id], (err)=>{
        if (err) return res.json(err);
        return res.status(200).json("Filme deletedo com sucesso")
    })
} 



