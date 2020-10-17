import React from 'react';
import './App.css';
import {Carousel} from "./components/react-text-carousel/Carousel";
import {ReactComponent as GitIcon} from './github-logo.svg';
import {ReactComponent as FacebookIcon} from './facebook.svg';

const Git = (className) => <GitIcon className={className} />;
const FB = (className) => <FacebookIcon className={className} />;

let newStyle = {
    color: 'yellow',                // Text Color
    marginTop: '5%',               // For vertical spacing
    '--inactive-color': 'white',   // Inactive color of buttons
    '--active-text': 'green',    // Active color of buttons
    '--bg-primary': 'red',     // Primary background color
    '--bg-secondary': 'blue',   // Background color of active buttons and on hover
    '--title-font': 20,            // Font size of the title text
    '--subtitle-font': 18,         // Font size of the subtitle text
    '--body-font': 16,             // Font size of the body text
    borderRadius: 5,               // Border radius of container
}

const buttons = [
    {text: 'Test Entry 1', icon: Git},
    {text: 'Test Entry 2', icon: FB},
    {text: 'Test Entry 3', icon: Git},
    {text: 'Test Entry 4', icon: FB},
    ];

const rowCon = [
    {title: 'Position 1', subTitle: 'Dates', isJSX: false, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius ego nunc auctoritatem sequens idem faciam. Tanti autem aderant vesicae et torminum morbi, ut nihil ad eorum magnitudinem posset accedere. Mihi enim satis est, ipsis non satis. Haec dicuntur fortasse ieiunius; Duo Reges: constructio interrete. Sed ad haec, nisi molestum est, habeo quae velim.'},
    {title: 'Position 2', subTitle: 'Dates', isJSX: false, text: 'banana job'},
    {title: 'Position 3', subTitle: 'Dates', isJSX: false, text: 'banana job'},
    {title: 'Position 4', subTitle: 'Dates', isJSX: false, text: 'banana job'},
    ]

const _renderItem = (index) => {
    return(
        <div style={{color: 'white'}}>
            index
        </div>
    );
}
function App() {
  return (
    <div className="App" style={{height: 1000}}>
      <Carousel rowButtons={buttons} rowContent={rowCon} buttonPosition={'top'} maxHeight={300} customStyles={newStyle} />
    </div>
  );
}

export default App;
