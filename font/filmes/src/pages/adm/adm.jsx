import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Grid from '../../componets/grid';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Form from "../../componets/from"
import axios from 'axios';
function Adm() {
    const history = useNavigate('/')

    const handleClickhome = () => {
        history('/')

    }
    const [users, setUsers] = useState([]);
 
    const [onEdit, setOnEdit] = useState(null);
  
    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/");
        setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
      } catch (error) {
        toast.error(error);
      }
    };
  
  
  
    useEffect(() => {
      getUsers();
    }, []);

    return (
        <div id='adm'>

            <nav onClick={handleClickhome} > <h1>HOME</h1></nav>

            <div id='containeradm' >

                <div id='containeradm-2' style={{display:"flex", flexDirection:"column" , alignItems:"center"}}>
                    <h1 style={{ display: "flex",  }}>ADICIONAR FILME</h1>
                    <Form></Form>


                    <div >
                        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers}></Grid>
                        {/* <Admm ></Admm> */}
                    </div>


                </div>


            </div>
            <div >

            </div>

            <footer></footer>
        </div>

    )
}


export default Adm