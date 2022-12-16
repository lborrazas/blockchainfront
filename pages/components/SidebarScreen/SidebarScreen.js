import React from "react";
import style from "./SidebarScreen.module.css";
import ProductTarget from "../ProductTarget/ProductTarget";
import Dashboard from "../Dashboard/Dashboard";
import CompanyGrafic from "../Grafic/CompanyGrafic/Grafic";
import Modal from "../Modal/Modal";
import { FcViewDetails, FcComboChart, FcVoicePresentation  } from 'react-icons/fc';



function SidebarScreen({isOpen, content, parcelaId}) {

    var thisParcelaId = 0;
    console.log(parcelaId)
    if(parcelaId != undefined){
        thisParcelaId = parcelaId;
    }

    if(content=='/client'){
        return(
            <div className={`${isOpen && style.sidebarScreenContainerMax} ${style.sidebarScreenContainer}`}>
                <Modal />
                <h1>DASHBOARD</h1>
                <div className={style.flexRowContainer}>
                    <Dashboard />
                </div>
                <h2 className={style.subTitle}>Parcelas destacadas</h2>
                <div className={style.flexRowContainer}>
                    <ProductTarget />
                    <ProductTarget />
                    <ProductTarget />
                </div>
                
            </div>
            
        )
    }else if(content=='/company'){
        return(
            <div className={`${isOpen && style.sidebarScreenContainerMax} ${style.sidebarScreenContainer}`}>
                <div className={style.flexRowContainerCompany}>
                    <div>
                        <h1>DASHBOARD</h1>
                        <p>Informacion sobre impacto y metricas de implementacion</p>
                    </div>
                    <div>
                        <input type="datetime" value={'16/12/22'}></input>
                    </div>
                </div>
                <div className={style.flexRowContainerCompany}>
                    <CompanyGrafic/>
                </div>
            </div>
        )
    }else if(content =='/parcelas/[parcela]'){
        return(
            <div className={`${isOpen && style.sidebarScreenContainerMax} ${style.sidebarScreenContainer}`}>
                <Modal />
                <h1>Parcela - {thisParcelaId}</h1>
                <div className={style.flexRowContainer}>
                    <Dashboard />
                </div>
                <h2 className={style.subTitle}>Otras Parcelas</h2>
                <div className={style.flexRowContainer}>
                    <ProductTarget />
                    <ProductTarget />
                    <ProductTarget />
                </div>
                
            </div>
        )
    }
    
}

export default SidebarScreen;