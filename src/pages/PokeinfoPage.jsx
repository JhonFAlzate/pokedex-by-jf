import { useParams } from "react-router-dom"
import UseFetch from "../hooks/UseFetch"
import { useEffect } from "react"
import '../components/styles/PokeinfoPage.css'


const PokeinfoPage = ({}) => {

  const { name } = useParams()

const [ pokemon, getPokemon] = UseFetch()

useEffect( () => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  getPokemon(url)
},[name])

console.log(pokemon)

  return (
    <article>
      <header className="header">
          <div className="header_home_red"></div>
          <div className="header_home_black"></div>
          <img className="header_img" src="/pokedex1.png" alt="/pokedex1.png" />
              <div className="header_home_circle">
                  <div className="header_home_circle_two">
                      <div className="header_home_circle_3">
                          <div className="header_home_circle_4"></div>
                  </div>
              </div>
          </div>   
      </header>

      <body className="info_body">

        <section className="info_card">

          <header className="info_card_header">
             <img className="info_card_img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
          </header>

          <h3 className="info_card_id"># {pokemon?.id}</h3>

          <div className="info_card_box_name">
            <hr className="info_card_line_name1"/>
             <h2 className="info_card_name">{pokemon?.name}</h2>
            <hr className="info_card_line_name2"/>
          </div>

          <ul className="info_card_size">
            <li > <span className="info_card_size_t">Weight </span> <br /> <span className="info_card_size_weight1">{pokemon?.weight}</span></li>
            <li > <span className="info_card_size_t">Height </span><br /> <span className="info_card_size_weight1">{pokemon?.height}</span></li>
          </ul>
          <div className="info_card_type_container">
              <h3 className="info_card_title">Types</h3>
              <h3 className="info_card_title">Abilities:</h3>
          </div>    
          <div className="info_card_ul_container">

              <ul className="info_card_types_box">
                <li className="info_card_types1"><span className="info_card_1">{pokemon?.types[0].type.name}</span></li>
                <li className="info_card_types2"><span className="info_card_2">{pokemon?.types[1].type.name}</span></li>
              </ul>


              <ul className="info_card_types_box">
                <li className="info_card_abilities1">{pokemon?.abilities[0].ability.name}</li>
                <li className="info_card_abilities1">{pokemon?.abilities[1].ability.name}</li>
              </ul>
          </div>

          <h3 className="info_card_stats">Stats</h3>
          
          <hr className="info_card_stats_hr" />

          <ul className="info_card_stats_box">
              {
                pokemon?.stats.map(statInfo => (
                  <li className="info_card_stats_list" key={statInfo.stat.url}><span className="stats_label">{statInfo.stat.name} </span ><span className={`poke_         stats_value text_${pokemon?.types[0].type.name}`}>{statInfo.base_stat} / 150</span></li>
                ))
                
              }
              
            </ul>

        </section>

        <div className="info_move_container">
          <h3 className="info_move_title">Movements</h3>
          <hr className="info_move_hr" />

          <ul className="info_move_ul">
              {
                pokemon?.moves.map(statInfo => (
                  <li className="info_move_list" key={statInfo.move.url}><span className="stats_label">{statInfo.move.name} </span ></li>
                ))
              }
            </ul>

         </div>
        </body>
    </article>


  )
}

export default PokeinfoPage

{/* <article className={`poke border_${pokemon?.types[0].type.name}`} onClick={handleNavDetail}>
<header className={`poke_header bg_${pokemon?.types[0].type.name}`}>
  <img className="poke_sprite" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
</header>
<section className="poke_body">
  <h3 className={`poke_name text_${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
  <ul className="poke_types">{pokemon?.types.map(typeInfo => (
      
      <li className="poke_types_item" key={typeInfo.type.url}>{typeInfo.type.name}</li>

  ))
  }
  </ul>
  <hr className="poke_hr" />
  <ul className="poke_stats">
    {
      pokemon?.stats.map(statInfo => (
        <li className="poke_stats_item" key={statInfo.stat.url}><span className="poke_stats_label">{statInfo.stat.name} </span ><span className={`poke_stats_value text_${pokemon?.types[0].type.name}`}>{statInfo.base_stat} </span></li>
      ))
    }
  </ul>
</section>

</article> */}