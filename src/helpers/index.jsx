import Atelier from "../components/Atelier"
import Contact from "../components/Contact"
import Games from "../components/Games"
import Home from "../components/Home"
import Order from "../components/Order"

export const selectPage = (selection, style) =>{
    if(selection==="Home"){
        return <Home page={style}/>
    }
    if(selection==="Atelier Project"){
        return <Atelier page={style}/>
    }
    if(selection==="Order Project"){
        return <Order page={style}/>
    }
    if(selection==="Game Project"){
        return <Games page={style}/>
    }
    if(selection==="Contact"){
        return <Contact page={style}/>
    }
}

export const navSelected = (selection, tab) =>{
    if(selection==="Home"&&tab==="Home"){
        return "navSelected"
    }
    if(selection==="Atelier Project"&&tab==="Atelier"){
        return "navSelected"
    }
    if(selection==="Order Project"&&tab==="Order"){
        return "navSelected"
    }
    if(selection==="Game Project"&&tab==="Game"){
        return "navSelected"
    }
    if(selection==="Contact"&&tab==="Contact"){
        return "navSelected"
    }
}