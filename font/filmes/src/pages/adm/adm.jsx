import { useNavigate } from 'react-router-dom';

import Gridhome from '../../componets/gridhome';

function Adm() {
    const history = useNavigate('/')

    const handleClickhome = () => {
        history('/')

    }

    return (
        <div id='adm'>

            <nav onClick={handleClickhome} > <h1>HOME</h1></nav>

            <div id='containeradm' >

                <div id='containeradm-2'>
                    <h1 style={{ display: "flex", marginLeft: "28vw" }}>ADICIONAR FILME</h1>


                    <div >
                        <Gridhome></Gridhome>
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