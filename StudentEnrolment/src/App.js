import React from 'react'
import StudentApp from './components/StudentApp'
import { BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <StudentApp />
        </BrowserRouter>
        
      </div>
    )
  }
}

export default App;