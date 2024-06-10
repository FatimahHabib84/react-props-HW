function Card(props) {
  return (
    <div>
        <div className="cardAbove" id={props.id} style={{borderColor:props.id=='disable'?'gray':props.title=='لقاء'? 'rgb(203 129 250)':
                props.title=='معسكر'? 'rgb(169 173 244)':
                props.title=='برنامج'?'#73dadd':
                'rgb(245, 246, 250)'}}>
            <div className="card">
                <p className="cardTitle">{props.title }</p>
                <h6 className="cardText">{props.text}</h6>
                <div className="cardLocation">
                    <p>الرياض</p>
                    <p>{props.duration}</p>
                </div>
                <div className="cardDate">
                    <p>يبدأ في {props.date}</p>
                    <p id={props.detailsId} className="detailsBtn" style={{borderColor:props.title=='لقاء'? 'rgb(203 129 250)':
                props.title=='معسكر'? 'rgb(169 173 244)':
                props.title=='برنامج'?'#73dadd':
                'rgb(245, 246, 250)',color:props.title=='لقاء'? 'rgb(203 129 250)':
                    props.title=='معسكر'? 'rgb(169 173 244)':
                    props.title=='برنامج'?'#73dadd':
                    'rgb(245, 246, 250)'
                    }}>{props.details}</p>
                </div>
            </div>
        </div>
    </div>
  )
  
// function handleMouseOver(){
//     let div = document.getElementsByClassName('cardAbove')
//     props.title=='لقاء'? div.style.backgroundColor='rgb(203 129 250)':
//         props.title=='معسكر'? div.style.backgroundColor='rgb(169 173 244)':
//         props.title=='برنامج'?div.style.backgroundColor='#73dadd':
//         'rgb(149 162 179)'
            
//     // return 
// }handleMouseOver()
}

export default Card
