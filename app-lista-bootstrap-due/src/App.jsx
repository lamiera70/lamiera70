
import './App.css'
import Header from './components/Header/Header'
import AddItem from './components/AddItem/AddItem'
import ItemList from './components/ItemList/ItemList'

export default function App() {
 

  return (
    <>

    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-12 col-md-8 col-lg-6">

          <div className="card p-4 shadow-sm">

            <Header message={"Lista della spesa"}/>
            
            <AddItem />

            <ItemList />

          </div>

        </div>

      </div>
    </div>
    
    </>
  )
}


