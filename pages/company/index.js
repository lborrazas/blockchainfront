import React from "react";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import style from "./company.module.css";
import { FcViewDetails, FcComboChart, FcDownload  } from 'react-icons/fc';



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