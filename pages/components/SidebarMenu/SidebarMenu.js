import { useState } from "react";
import { AiFillRightCircle } from 'react-icons/ai';
import { FcViewDetails, FcComboChart, FcVoicePresentation  } from 'react-icons/fc';
import style from "./SidebarMenu.module.css";
import Modal from "../Modal/Modal";
import { useRouter } from 'next/router'
import SidebarScreen from "../SidebarScreen/SidebarScreen";



const SidebarMenu = ({menuList,parcelaId}) => {
  const [isOpen, setMenu] = useState(false);
  const { pathname } = useRouter()

  function OpenCloseMenu() {
    setMenu(!isOpen);
    if(!isOpen){
      document.getElementById('initialNameImage').style.transform = 'rotate(360deg)';
    }else{
      document.getElementById('initialNameImage').style.transform = 'rotate(00deg)';
    }
  }

  return (
    <div>
      <div className={`${isOpen && style.bigMenu} ${style.navbar}`}>
        <div>
          <div className={`${!isOpen && style.imageTitleShort} ${style.navbarTitleContainer}`}>
            <div id="initialNameImage" className={`${style.initialNameImage}`}>
              IC
            </div>
            <div className={style.nameContainer}>
              <h1 className={`${!isOpen && style.hidden} ${style.navbarTitle}`}>
                Ignacio Cogliatti
              </h1>
              <h1 className={`${!isOpen && style.hidden} ${style.navbarSubitle}`}>
                IxaClient
              </h1>
              <AiFillRightCircle onClick={OpenCloseMenu} className={ `${isOpen && style.buttonToOpen} ${!isOpen && style.openCloseButtonShort} ${style.expandButton}`}/>
            </div>
          </div>
          <div>
            {menuList.map((Menu, index) => (
              <a href={`${Menu.src}`} className={`${style.notTextDecoration}`} key={`${Menu.src}`}>
                <div className={`${(pathname == '/'+Menu.src) && style.navbarTitleContainerOptionsIsSelected} ${!isOpen && style.imageTitleShort} ${style.navbarTitleContainer} ${style.navbarTitleContainerOptions}`}>
                  <div className={`${style.initialNameImageIcon}`}>
                    <Menu.icon className={style.navbarIcon}/>
                  </div>
                  <span className={`${!isOpen && style.hidden} origin-left duration-200`}>
                    {Menu.title}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <SidebarScreen isOpen={isOpen} content={pathname} parcelaId={parcelaId}/>
    </div>
    
  );
};
export default SidebarMenu;
