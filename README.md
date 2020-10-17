# React Text Carousel

React Text Carousel is a library for React apps that allows you to
create a dynamic, interactive carousel to display information.

You can either pass the Carousel component all of your text, or you
can render custom content instead!

This library depends on react-reveal.

##Table of Contents

-[Installation](#installation)

-[Examples](#examples)
    -[Work Experience](#work-experience)
    -[Product Descriptions](#product-descriptions)
    -[Custom Renders](#custom)

-[Props](#props)

##Installation
To add this package to your project run:

`npm install react-text-carousel`

or, if you are using yarn:

`yarn add react-text-carousel`

##Examples

##Props
Note: If you use a custom render function there is no need to pass rowContent.
###customStyles
This prop allows you to override default styles.
####Format
```javascript
let newStyle = {
    color: 'white',                // Text Color
    marginLeft: '35%',             // Adjust margin depending on width
    marginTop: '5%',               // For vertical spacing
    width: '30%',                  // Width of container
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


###rowButtons
This prop provides the buttons with their information. It is an array of objects with keys
text, for the button text, and icon, for an svg icon of your choosing.

Each icon must be an svg. You can define your icons as follows:

First, import it using the following syntax:
```javascript
import {ReactComponent as MyIcon} from './myicon.svg';
```
Then create the icon component that will be passed in the object:
```javascript
const Icon = (className) => <MyIcon className={className} />;
```
####Format
```javascript
let rowButtons = [
    {text: 'Item 1', icon: Icon1},
    {text: 'Item 2', icon: Icon2},
    {text: 'Item 3', icon: Icon3},
    {text: 'Item 4', icon: Icon4},
]
```
