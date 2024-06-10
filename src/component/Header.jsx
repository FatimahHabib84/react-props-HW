import React from 'react'
import BurgerBar from '../assets/BurgerBar.png'
import BurgerBarMov from '../assets/BurgerBarMov.png'
function Header() {
  return (
    <div>
        <header className="header">
            <img id="logo" src="https://tuwaiq.edu.sa/img/logos/Logos_White-04.png" alt="Tuwaiq logo"/>
            <ul className="headerList">
                <li><a href="#">الرئيسية</a><a href="#">المعسكرات والبرامج </a><a href="#">حول الأكاديمية</a><a href="#">الأكاديميات التابعة</a><a href="#">مركز الإختبارات</a></li>
            </ul>
            <div className="headerLeft">
                <p className="navbarLeft">تسجيل الدخول</p>
                <p className="navbarLeft">English</p>
            </div>
            <div className="headerMobile">
                <ul id='myLinks'>
                  <li>الرئيسية</li>
                  <li>المعسكرات والبرامج </li>
                  <li>حول الأكاديمية</li>
                  <li>الأكاديميات التابعة</li>
                  <li>مركز الإختبارات</li>
                  <li>تسجيل الدخول</li>
                  <li>English</li>
                </ul>
            </div>
            <div className="humbergerMenue">
              <a className="icon" onClick={myFunction}>
                <img src={BurgerBar} id='humbergerMenueImg'/>
              </a>
            </div>
        </header>
    </div>
  )
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }myFunction()
}
window.onscroll = function (){
    if(window.pageYOffset<=10){
        document.querySelector('#logo').src='https://tuwaiq.edu.sa/img/logos/Logos_White-04.png'
        // document.querySelectorAll('a').forEach((e)=>{e.style.color='white'})
        let a = document.querySelectorAll('.headerList>li>a')
        a.forEach((e)=>{ e.style.color='white'})
        let p = document.querySelectorAll('.navbarLeft')
        p.forEach((e)=>{ e.style.color='white'})
        document.querySelector('header').style.backgroundColor='rgb(78 55 151)'
        document.querySelector('.icon>img').src=BurgerBar
    } else if(window.pageYOffset>10){
        document.querySelector('#logo').src='https://tuwaiq.edu.sa/img/logos/Logos_full%20color.png'
        let a2 = document.querySelectorAll('.headerList>li>a')
        a2.forEach((e)=>{ e.style.color='black'})
        let p2 = document.querySelectorAll('.navbarLeft')
        p2.forEach((e)=>{ e.style.color='black'
          })
        document.querySelector('header').style.backgroundColor='white'
        document.querySelector('.icon>img').src=BurgerBarMov
    }
  }
export default Header