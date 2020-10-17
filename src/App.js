import React from 'react';
import './App.css';
import {Carousel} from "./components/react-text-carousel/Carousel";
import {ReactComponent as GitIcon} from './github-logo.svg';

const Git = (className) => <GitIcon className={className} />;
const buttons = [{text: 'Test Entry 1', icon: Git}, {text: 'Test Entry 2', icon: Git}, {text: 'Test Entry 3', icon: Git}, {text: 'Test Entry 4', icon: Git}];
const rowCon = [{title: 'Big Job', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius ego nunc auctoritatem sequens idem faciam. Tanti autem aderant vesicae et torminum morbi, ut nihil ad eorum magnitudinem posset accedere. Mihi enim satis est, ipsis non satis. Haec dicuntur fortasse ieiunius; Duo Reges: constructio interrete. Sed ad haec, nisi molestum est, habeo quae velim.'}, {title: 'Other Job', text: 'banana job'}, {title: 'Test Job', text: 'banana job'}, {title: 'Yet sanother Job', text: 'banana job'}]
function App() {
  return (
    <div className="App" style={{height: 1000}}>
      <Carousel rowButtons={buttons} rowContent={rowCon} />
    </div>
  );
}

export default App;
