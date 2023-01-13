import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go'
import Button from "./Button";
import "./index.css";

function App(){
    return (
        <div>
            <div>
                <Button success rounded outline><GoBell />Click me!!</Button>
            </div>
            <div>
                <Button danger outline><GoCloudDownload />Buy Now!!</Button>
            </div>
            <div>
                <Button warning><GoDatabase />See Data!</Button>
            </div>
            <div>
                <Button secondary outline>Nice Job!!</Button>
            </div>
            <div>
                <Button primary rounded>Hide Ads!!</Button>
            </div>
        </div>
    );
}

export default App;