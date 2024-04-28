import { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Gridhome from "../../componets/gridhome";
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
  }, []);

  ////////////////

  return (
    <>
       

      <div id="opçoes">

            {/* <Comidas></Comidas>
            <Comidas></Comidas>
            <Comidas></Comidas>
            <Comidas></Comidas> */}
        <div className="grid-menu" >
          <Gridhome setOnEdit={setOnEdit} users={users} setUsers={setUsers}></Gridhome>

        </div>

    

        {/* <div style={{ display: comidas }} className="grid-menu" >
                    <Gridbebidas setOnEdit={setOnEdit} user={user} setUser={setUser}></Gridbebidas>
                </div> */}




    





      </div>
 


    </>
  )
}
export default Home