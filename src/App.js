import React from 'react';
import './App.css';
import {Carousel} from "./components/react-text-carousel/Carousel";
import {ReactComponent as GitIcon} from './github-logo.svg';
import {ReactComponent as FacebookIcon} from './facebook.svg';

const Git = (className) => <GitIcon className={className} />;
const FB = (className) => <FacebookIcon className={className} />;

const buttons = [
    {text: 'Test Entry 1', icon: Git},
    {text: 'Test Entry 2', icon: FB},
    {text: 'Test Entry 3', icon: Git},
    {text: 'Test Entry 4', icon: FB},
    ];

const rowCon = [
    {title: 'Position 1', subTitle: 'Dates', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius ego nunc auctoritatem sequens idem faciam. Tanti autem aderant vesicae et torminum morbi, ut nihil ad eorum magnitudinem posset accedere. Mihi enim satis est, ipsis non satis. Haec dicuntur fortasse ieiunius; Duo Reges: constructio interrete. Sed ad haec, nisi molestum est, habeo quae velim.'},
    {title: 'Position 2', subTitle: 'Dates', text: 'banana job'},
    {title: 'Position 3', subTitle: 'Dates', text: 'banana job'},
    {title: 'Position 4', subTitle: 'Dates', text: 'banana job'},
    ]
function App() {
  return (
    <div className="App" style={{height: 1000}}>
      <Carousel rowButtons={buttons} rowContent={rowCon} />
    </div>
  );
}

export default App;
