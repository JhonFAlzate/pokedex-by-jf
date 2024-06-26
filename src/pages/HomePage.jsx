import { useRef } from "react"
import { setTrainer } from "../store/slices/trainer.slice"
import { useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import "../components/styles/HomePage.css"

const HomePage = () => {



 const dispatch = useDispatch()

 const navigate = useNavigate()  // useNavigate me permite navegar directamente hacia las rutas

const inputTrainer =  useRef()
const handleSubmit = e => {
  e.preventDefault()
  dispatch(setTrainer(inputTrainer.current.value.trim() ))
  navigate('/pokedex')
}


const trainer = useSelector(states => states.trainer) //El useSelector me permite acceder al estado e imprimirlo en consola para ver su contenido
console.log(trainer)

  return (
    <div className="home_container">
    <div className="home">
      <img className="home_img" src="/pokedex1.png" alt="/pokedex1.png" />
      <p className="home_p"><span className="home_greeting">¡Hi Trainer!</span><br /> if you want to find you favorite pokemon,
        please give me your trainer name
      </p>
      <form className="home_form" onSubmit={handleSubmit} action="">
        <input className="home_input" ref={inputTrainer} type="text"  placeholder="Write your name" />
        <button className="home_button" >Catch them all</button>
      </form>
      </div>
      <footer className="home_lines">
      
          <div className="home_red"></div>
          <div className="home_circle">
              <div className="home_circle_two">
                  <div className="home_circle_3">
                      <div className="home_circle_4"></div>
                  </div>
                </div>
            </div>
      </footer>
    </div>

   
  )
}

export default HomePage