import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Grid from "../../componets/grid";
/////////////////////////////////////////

function Home() {





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
  }, [setUsers]);

  ////////////////

  return (
    <>
       

      <div id="opçoes">

            {/* <Comidas></Comidas>
            <Comidas></Comidas>
            <Comidas></Comidas>
            <Comidas></Comidas> */}
        <div className="grid-menu" >
          <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers}></Grid>

        </div>

    

        {/* <div style={{ display: comidas }} className="grid-menu" >
                    <Gridbebidas setOnEdit={setOnEdit} user={user} setUser={setUser}></Gridbebidas>
                </div> */}




    





      </div>
 


    </>
  )
}
export default Home