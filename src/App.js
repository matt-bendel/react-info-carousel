import React from 'react';
import './App.css';
import {Carousel} from "react-text-carousel";
import {ReactComponent as FoodIcon} from './vegan-food.svg';
import {ReactComponent as MusicIcon} from './music-note.svg';
import {ReactComponent as MovieIcon} from './movie-player.svg';

const Food = (className) => <FoodIcon className={className} />;
const Music = (className) => <MusicIcon className={className} />;
const Movie = (className) => <MovieIcon className={className} />;

let jobText2 = (
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Qui ita affectus, beatum esse numquam probabis;
            Hoc etsi multimodis reprehendi potest, tamen accipio,
            quod dant. Haec igitur Epicuri non probo, inquam.
        </p>
        <ul>
            <li>Summum ením bonum exposuit vacuitatem doloris;</li>
            <li>Duo Reges: constructio interrete.</li>
            <li>Tria genera cupiditatum, naturales et necessariae, naturales et non necessariae, nec naturales nec necessariae.</li>
            <li>Tum ille: Tu autem cum ipse tantum librorum habeas, quos hic tandem requiris?</li>
        </ul>
    </div>
);

let jobText3 = (
  <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Immo alio genere; Quid de Platone aut de Democrito loquar? Quid est igitur, inquit, quod requiras? Duarum enim vitarum nobis erunt instituta capienda. </p>

      <dl>
          <dt><dfn>Duo Reges: constructio interrete.</dfn></dt>
          <dd>At ille pellit, qui permulcet sensum voluptate.</dd>
          <dt><dfn>Scaevolam M.</dfn></dt>
          <dd>Qui igitur convenit ab alia voluptate dicere naturam proficisci, in alia summum bonum ponere?</dd>
          <dt><dfn>Ille incendat?</dfn></dt>
          <dd>Inquit, an parum disserui non verbis Stoicos a Peripateticis, sed universa re et tota sententia dissidere?</dd>
          <dt><dfn>Sed nimis multa.</dfn></dt>
          <dd>Idem fecisset Epicurus, si sententiam hanc, quae nunc Hieronymi est, coniunxisset cum Aristippi vetere sententia.</dd>
      </dl>
  </div>
);

const buttons = [
    {text: 'Job 1'},
    {text: 'Job 2'},
    {text: 'Job 3'},
];

const rowCon = [
    {title: 'Position 1', subTitle: 'Dates', isJSX: false, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius ego nunc auctoritatem sequens idem faciam. Tanti autem aderant vesicae et torminum morbi, ut nihil ad eorum magnitudinem posset accedere. Mihi enim satis est, ipsis non satis. Haec dicuntur fortasse ieiunius; Duo Reges: constructio interrete. Sed ad haec, nisi molestum est, habeo quae velim.'},
    {title: 'Position 2', subTitle: 'Dates', isJSX: true, text: jobText2},
    {title: 'Position 3', subTitle: 'Dates', isJSX: true, text: jobText3},
]

const secondButtons = [
    {text: 'Movies', icon: Movie},
    {text: 'Music', icon: Music},
    {text: 'Food', icon: Food},
];


let newStyle = {
    color: 'white',                // Text Color
    marginTop: '5%',               // For vertical spacing
    '--inactive-color': 'white',   // Inactive color of buttons
    '--active-text': 'black',    // Active color of buttons
    '--bg-primary': '#6200ee',     // Primary background color
    '--bg-secondary': '#03dac6',   // Background color of active buttons and on hover
    '--title-font': 20,            // Font size of the title text
    '--subtitle-font': 18,         // Font size of the subtitle text
    '--body-font': 16,             // Font size of the body text
    borderRadius: 5,               // Border radius of container
}

const _renderItem = (index) => {
    let title = secondButtons[index].text;
    return(
        <div style={{color: 'white'}}>
            Put content for {title} here!
        </div>
    );
}
function App() {
  return (
    <div className="App" style={{height: 1000}}>
      <Carousel rowButtons={buttons} rowContent={rowCon} buttonPosition={'top'} minHeight={400} />
      <Carousel rowButtons={secondButtons} renderItem={_renderItem} customStyles={newStyle}/>
    </div>
  );
}

export default App;
