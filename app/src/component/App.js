import Box from './Box';
import './App.scss';
import {useState} from "react";

function App() {

    const headline = "How did we do?";
    const text = "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";

   const [active] = useState(true);

    return (
        <div className="App">
            <Box headline={headline} text={text} />
        </div>
    );
}

export default App;
