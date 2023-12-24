import React from 'react'
import '../platecircle/platecircle.css'
import { food_infos } from '../../data/Data'
import { useState } from 'react'

const PlateCircle = () => {

    const [deyer, setDeyer]=useState(0)
	const [prodName,setProdName]=useState(food_infos[0].name)
	const [prodPrice, setProdPrice]=useState(food_infos[0].price)
	const [prodDescription, setProdDescription]=useState(food_infos[0].info)
	const [theme, setTheme]=useState(food_infos[0].theme_color)


	
	const showInfo=()=>{
		setProdName(food_infos[0].name)
		setProdPrice(food_infos[0].price)
		setProdDescription(food_infos[0].info)
		setTheme(food_infos[0].theme_color)
	}

	const showInfo2=()=>{
		setProdName(food_infos[1].name)
		setProdPrice(food_infos[1].price)
		setProdDescription(food_infos[1].info)
		setTheme(food_infos[1].theme_color)
	}

	const showInfo3=()=>{
		setProdName(food_infos[2].name)
		setProdPrice(food_infos[2].price)
		setProdDescription(food_infos[2].info)
		setTheme(food_infos[2].theme_color)
	}

	const showInfo4=()=>{
		setProdName(food_infos[3].name)
		setProdPrice(food_infos[3].price)
		setProdDescription(food_infos[3].info)
		setTheme(food_infos[3].theme_color)
	}

	const showInfo5=()=>{
		setProdName(food_infos[4].name)
		setProdPrice(food_infos[4].price)
		setProdDescription(food_infos[4].info)
		setTheme(food_infos[4].theme_color)
	}

	const showInfo6=()=>{
		setProdName(food_infos[5].name)
		setProdPrice(food_infos[5].price)
		setProdDescription(food_infos[5].info)
		setTheme(food_infos[5].theme_color)
	}

	const showInfo7=()=>{
		setProdName(food_infos[6].name)
		setProdPrice(food_infos[6].price)
		setProdDescription(food_infos[6].info)
		setTheme(food_infos[6].theme_color)
	}

	const showInfo8=()=>{
		setProdName(food_infos[7].name)
		setProdPrice(food_infos[7].price)
		setProdDescription(food_infos[7].info)
		setTheme(food_infos[7].theme_color)
	}

  return (
    <div className='plate-circle'>

        <div class="box-2">
			<button className="btns" id="spin_minus" onClick={()=>setDeyer(deyer - 40)} style={{backgroundColor:`${theme}`}}>Sola</button>
			<button className="btns" id="spin_plus" onClick={()=>setDeyer(deyer + 40)} style={{backgroundColor:`${theme}`}}>Saga</button>
		</div>

		<div>
        <div class="box-1" >
			<h2 id="product-info" style={{color:`${theme}`}}>{prodPrice}</h2>
			<h2 id="product-info">{prodName}</h2>
			<p id="product-info">{prodDescription}</p>
			<button class="btns" style={{backgroundColor:`${theme}`}}>Order Now</button>
		</div>
    </div>
	
        <div class="circle-box" style={{backgroundColor:`${theme}`}}>
			<div class="circle" id="circle" style={{transform: `rotate(${deyer}deg)`}}>
				<img src={food_infos[0].src} id="plates" width="100%" class="elements element1" onClick={showInfo}/>
				<img src={food_infos[1].src} id="plates" width="100%"  class="elements element2" onClick={showInfo2}/>	
				<img src={food_infos[2].src} id="plates" width="100%"  class="elements element3" onClick={showInfo3}/>	
				<img src={food_infos[3].src} id="plates" width="100%"  class="elements element4" onClick={showInfo4}/>
				<img src="" width="100%"  class="elements element5"/>
				<img src={food_infos[4].src} id="plates" width="100%"  class="elements element6" onClick={showInfo5}/>
				<img src={food_infos[5].src} id="plates" width="100%"  class="elements element7" onClick={showInfo6}/>
				<img src={food_infos[6].src} id="plates" width="100%"  class="elements element8" onClick={showInfo7}/>
				<img src={food_infos[7].src} id="plates" width="100%"  class="elements element9" onClick={showInfo8}/>
			</div>
		</div>
    </div>
  )
}

export default PlateCircle