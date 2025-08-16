import Chai from "./chai"

function App() {

  return (

    //in jsx u can only return one element so we should use div class as it returns only one element and u can put as many as element inside it
  //   <div>
  //    <Chai/>
  //    <h1>chai or react</h1>
  //    <p>test the aragraph hererere</p>
  // )
  //   </div>
//-------------------------------------------------
  //<> fragment
  <>
    <Chai/>
    <h1>chai or react</h1>
    <p>test the aragraph hererere</p>
  </>
  )
}

export default App
