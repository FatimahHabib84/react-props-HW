import './App.css'
import Header from './component/Header'
import Card from './component/Card'
import Circle from './component/Circle'
import Footer from './component/Footer'
function App() {
  return (
    <>
      <Header/>
      <nav><h1 className='headerTitle'>أكاديمية طويق</h1></nav>
      <section className='campAndProgramHeader'>
        <h1>المعسكرات والبرامج</h1>
        <div>
          <p className='campAndProgramDetails old'>الكبار</p>
          <p className='campAndProgramDetails young'>الناشئون</p>
        </div>
        <img src="https://tuwaiq.edu.sa/img/filter.svg" alt="" />
      </section>

      <section className='cardContainer'>
        <Card id="undisable" title='لقاء' text='فعالية WWDC24 Watch Party' duration='يوم واحد' date="10/6/2024" detailsId='leqaBtn' details='التفاصيل'/>
        <Card id="undisable" title='معسكر' text='هندسة الحوسبة السحابية المتقدمة AWS' duration='4 أسابيع' date="23/6/2024" detailsId='campBtn' details='التفاصيل'/>
        <Card id="undisable" title='برنامج' text='إدارة خدمات تقنية المعلومات (ITIL)' duration='أسبوع واحد' date="23/6/2024" detailsId='programBtn' details='التفاصيل'/>
        <Card id="disable" title='برنامج' text='أساسيات علوم الشبكات NETWORK+' duration='إسبوعان' date="15/10/2023" detailsId='disableBtn' details='مغلق'/>
        <Card id="disable" title='برنامج' text='البنية المؤسسية بمنهجية وإطار TOGAF' duration='أسبوع واحد' date="15/10/2023" detailsId='disableBtn' details='مغلق'/>
        <Card id="disable" title='برنامج' text='أمن وحماية المعلومات في osi model' duration='أسبوع واحد' date="15/10/2023" detailsId='disableBtn' details='مغلق'/>

      </section>

      <p className='btnMore'>تحميل المزيد</p>
      <section className='registrationSteps'>
        <Circle src='https://tuwaiq.edu.sa/img/course-step-1.svg' text='الانضمام إلى المنصة'/>
        <img src="https://tuwaiq.edu.sa/img/horizontal_line.svg" alt="" />
        <Circle src='https://tuwaiq.edu.sa/img/course-step-2.svg' text='التــســــــــجيــــــــــــل في المعسكر أو البرنامج'/>
        <img src="https://tuwaiq.edu.sa/img/horizontal_line.svg" alt="" />
        <Circle src='https://tuwaiq.edu.sa/img/course-step-3.svg' text='انتظار رسالة القــــبــــــــــــول'/>
      </section>

      <Footer/>
    </>
  )
}
export default App
