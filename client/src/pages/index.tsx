import { lazy } from "react"
import HomePage from "./home"

const HomePageLazy = lazy(()=>import('./home'))

export { 
    HomePage,
    HomePageLazy
}