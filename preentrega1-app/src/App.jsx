import { ItemListContainer } from './components/ListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'

export const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Hola Bienvenidos a mi pagina web"}/>
    </>
  )
}