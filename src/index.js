import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';
import Stories from './components/Stories';
import Posts from './components/Posts';
import Sidebar from './components/Sidebar';
import FundoMobile from './components/FundoMobile';

function App() {
    return (
        <div>
            <Navbar />
            <div className="corpo">
                <div className="esquerda">
                    <Stories />
                    <Posts />
                </div>
            <Sidebar />
            </div>
            <FundoMobile />
        </div>
    );
}


const app = App();
ReactDOM.render(app, document.querySelector(".root")); 