import React from "react";
import style from "./ProductTarget.module.css";

function ProductTarget ({widhtContainer}) {
    return(
        <div className={`${style.ProductTarget}`} style={{width: widhtContainer+"%;"}}>
            <h5 className={`${style.hmargin}`}>Parcela #653</h5>
            <div className={`${style.flexRowContainer}`}><p className={`${style.pmargin}`}>Plantas nuevas en la ultima semana:</p><p className={`${style.pmarginNone}`}> 120</p></div>
            <div className={`${style.flexRowContainer}`}><p className={`${style.pmargin}`}>Cantidad total de Co2 Recuperado:</p><p className={`${style.pmarginNone}`}> 30T</p></div>
            <div className={`${style.flexRowContainer}`}><p className={`${style.pmargin}`}>Coordenadas:</p><p className={`${style.pmarginNone}`}> 2111412:43232</p></div>
            <div className={`${style.flexRowContainer} ${style.pmargin}`}><p className={`${style.pmargin}`}>Ultima vez:</p><p className={`${style.pmarginNone}`}> Ayer</p></div>
        </div>
        
    )
}

export default ProductTarget;