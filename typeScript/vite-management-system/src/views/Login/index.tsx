import {useEffect} from 'react';
import styles from "./login.module.scss"
import { Divider } from 'antd';
// import initLoginBg from "./init.ts"

function Login(props) {

    // loading background
    useEffect(()=>{
        // initLoginBg();
        // window.onresize = function(){initLoginBg()};
    }, [])

    return (
        <div className={styles.loginPage}>
            {/* background box in canvas */}
            <canvas id='canvas' style={{display: "block"}}></canvas>

            <div className={styles.loginBox}>
                <div className={styles.loginTitle} >
                    <h1>Sysytem Management - Front end</h1>
                    <p>Strive everyday</p>
                </div>
            </div>
        </div>
    );
}

export default Login;