import React from "react";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import Modal from "../components/Modal/Modal";
import style from "./client.module.css";
import { FcViewDetails, FcComboChart, FcDownload  } from 'react-icons/fc';
import { UserProvider } from '@auth0/nextjs-auth0/client';





function Client() {
    var menusCliente = [
        { title: "Menu", src: "/", icon: FcViewDetails},
        { title: "Dashboard", src: "client", icon: FcComboChart },
        { title: "Descargar reporte", src: "descarga", icon: FcDownload },
      ];

    return(
            <div className={style.allScreenDiv}>
                <SidebarMenu menuList={menusCliente}/>
            </div>
    )
}

export default Client;