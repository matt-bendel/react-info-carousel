# React Info Carousel
** React Info Carousel is not currently responsive on mobile, you will need to find an alternative
solution until an update is published

React Info Carousel is a library for React apps that allows you to
create a dynamic, interactive carousel to display information.

You can either pass the Carousel component all of your text, or you
can render custom content instead!

This library depends on react-reveal.

## Table of Contents

1. [Installation](#installation)

2. [Props](#props)

3. [Examples](#examples)
    
    3a. [Work Experience](#work-experience)
    
    3b. [Product Descriptions](#product-descriptions)

## Installation
To add this package to your project run:

`npm i react-info-carousel`

or, if you are using yarn:

`yarn add react-info-carousel`

## Props
Note: If you use a custom render function there is no need to pass rowContent.
### customStyles
This prop allows you to override default styles for the top level container. You can modify more than what you see below, those
are just the only styles explicitly set. 

Only change the width when buttons are on the left.

Note: You only need to modify styles that don't work for you.
#### Format
```javascript
let newStyle = {
    color: 'white',                // Text Color
    marginTop: '5%',               // For vertical spacing
    '--inactive-color': 'white',   // Inactive color of buttons
    '--active-text': '#ff7eee',    // Active color of buttons
    '--bg-primary': '#23232e',     // Primary background color
    '--bg-secondary': '#141418',   // Background color of active buttons and on hover
    '--title-font': 20,            // Font size of the title text
    '--subtitle-font': 18,         // Font size of the subtitle text
    '--body-font': 16,             // Font size of the body text
    borderRadius: 5,               // Border radius of container
}
```


### rowButtons - Required
This prop provides the buttons with their information. It is an array of objects with keys
text, for the button text, and icon, for an svg icon of your choosing.

Each icon must be an svg. You can define your icons as follows:

First, import it using the following syntax:
```javascript
import {ReactComponent as MyIcon} from './myicon.svg';
```
Then create the icon component that will be passed to the Carousel:
```javascript
const Icon = (className) => <MyIcon className={className} />;
```
#### Format
```javascript
let rowButtons = [
    {text: 'Item 1', icon: Icon1},
    {text: 'Item 2', icon: Icon2},
    {text: 'Item 3', icon: Icon3},
    {text: 'Item 4', icon: Icon4},
]
```

### rowContent - Required if not using a custom render function
This prop provides the content that is animated. Each element needs to corespond to an
element of the same index in rowButtons. It is an array of objects with keys
title, subTitle, and text. If you only want a custom body you can pass a JSX variable
to the title key and set isJSX to true. This will render your custom body, however if you need more
control you will need to use the renderItem prop.

#### Format
```javascript
let rowContent = [
    {title: 'My Title 1', subTitle: 'My sub title', isJSX: false, text: 'My body text'},
    {title: 'My Title 2', subTitle: 'My sub title', isJSX: false, text: 'My body text'},
    {title: 'My Title 3', subTitle: 'My sub title', isJSX: false, text: 'My body text'},
    {title: 'My Title 4', subTitle: 'My sub title', isJSX: false, text: 'My body text'},
]
```
### renderItem
This prop allows you to pass a custom rendering function for the content that is
animated. The function takes the current index as an argument.

#### Format
```javascript
_renderItem = () => {
    return(
        <div>
            Hello World
        </div>
    );
}
```

### buttonPosition
This prop allows you to place the buttons at the top, or on the left. The default behavior is to the left.

Note: On mobile buttons automatically move to the top

#### Format
```javascript
let buttonPosition = 'left'; //top to place buttons at the top
```

### minHeight - Required when buttons are at the top
This prop sets the height of the textArea. It is required due to how react-reveal handles its carousel.
#### Format

```javascript
let minHeight = 300; 
```
## Examples
Below are a couple examples to give you some ideas!
### Work Experience
```javascript
import React from "react";
import "./styles.css";
import { Carousel } from "./react-info-carousel/Carousel";

// JSX instead of a string for job 2
let jobText2 = (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui ita affectus,
      beatum esse numquam probabis; Hoc etsi multimodis reprehendi potest, tamen
      accipio, quod dant. Haec igitur Epicuri non probo, inquam.
    </p>
    <ul>
      <li>Summum ením bonum exposuit vacuitatem doloris;</li>
      <li>Duo Reges: constructio interrete.</li>
      <li>
        Tria genera cupiditatum, naturales et necessariae, naturales et non
        necessariae, nec naturales nec necessariae.
      </li>
      <li>
        Tum ille: Tu autem cum ipse tantum librorum habeas, quos hic tandem
        requiris?
      </li>
    </ul>
  </div>
);
// JSX instead of a string for job 3
let jobText3 = (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Immo alio genere;
      Quid de Platone aut de Democrito loquar? Quid est igitur, inquit, quod
      requiras? Duarum enim vitarum nobis erunt instituta capienda.{" "}
    </p>

    <dl>
      <dt>
        <dfn>Duo Reges: constructio interrete.</dfn>
      </dt>
      <dd>At ille pellit, qui permulcet sensum voluptate.</dd>
      <dt>
        <dfn>Scaevolam M.</dfn>
      </dt>
      <dd>
        Qui igitur convenit ab alia voluptate dicere naturam proficisci, in alia
        summum bonum ponere?
      </dd>
      <dt>
        <dfn>Ille incendat?</dfn>
      </dt>
      <dd>
        Inquit, an parum disserui non verbis Stoicos a Peripateticis, sed
        universa re et tota sententia dissidere?
      </dd>
      <dt>
        <dfn>Sed nimis multa.</dfn>
      </dt>
      <dd>
        Idem fecisset Epicurus, si sententiam hanc, quae nunc Hieronymi est,
        coniunxisset cum Aristippi vetere sententia.
      </dd>
    </dl>
  </div>
);

// Button text, there are no icons here
// It is heavily advised to use icons either for all of them,
// or none of them
let buttons = [{ text: "Job 1" }, { text: "Job 2" }, { text: "Job 3" }];

// Manually defined row content
let rowCon = [
  {
    title: "Position 1",
    subTitle: "Dates",
    isJSX: false,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius ego nunc auctoritatem sequens idem faciam. Tanti autem aderant vesicae et torminum morbi, ut nihil ad eorum magnitudinem posset accedere. Mihi enim satis est, ipsis non satis. Haec dicuntur fortasse ieiunius; Duo Reges: constructio interrete. Sed ad haec, nisi molestum est, habeo quae velim."
  },
  { title: "Position 2", subTitle: "Dates", isJSX: true, text: jobText2 },
  { title: "Position 3", subTitle: "Dates", isJSX: true, text: jobText3 }
];

export default function App() {
  return (
    <div className="App">
      <Carousel
        rowButtons={buttons}
        rowContent={rowCon}
        buttonPosition={"top"}
        minHeight={400}
      />
    </div>
  );
}


```
[![Edit infallible-snowflake-yjw9f](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/infallible-snowflake-yjw9f?fontsize=14&hidenavigation=1&theme=dark)

### Personal Hobbies
```javascript
import React from "react";
import "./styles.css";
import { ReactComponent as FoodIcon } from "./vegan-food.svg";
import { ReactComponent as MusicIcon } from "./music-note.svg";
import { ReactComponent as MovieIcon } from "./movie-player.svg";
import { Carousel } from "./react-info-carousel/Carousel";

// Creating custom styles
let newStyle = {
  color: "white", // Text Color
  marginTop: "5%", // For vertical spacing
  "--inactive-color": "white", // Inactive color of buttons
  "--active-text": "black", // Active color of buttons
  "--bg-primary": "#6200ee", // Primary background color
  "--bg-secondary": "#03dac6", // Background color of active buttons and on hover
  "--title-font": 20, // Font size of the title text
  "--subtitle-font": 18, // Font size of the subtitle text
  "--body-font": 16, // Font size of the body text
  borderRadius: 5 // Border radius of container
};

// Importing and creating SVG Icons
const Food = (className) => <FoodIcon className={className} />;
const Music = (className) => <MusicIcon className={className} />;
const Movie = (className) => <MovieIcon className={className} />;

// Defining button content with icons
const buttons = [
  { text: "Movies", icon: Movie },
  { text: "Music", icon: Music },
  { text: "Food", icon: Food }
];

// Custom rendering function for content inside the main body
const _renderItem = (index) => {
  let title = buttons[index].text;
  return <div style={{ color: "white" }}>Put content for {title} here!</div>;
};

export default function App() {
  return (
    <div className="App">
      <Carousel
        rowButtons={buttons}
        renderItem={_renderItem}
        customStyles={newStyle}
      />
    </div>
  );
}
```

[![Edit romantic-jennings-swgxy](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/romantic-jennings-swgxy?fontsize=14&hidenavigation=1&theme=dark)

