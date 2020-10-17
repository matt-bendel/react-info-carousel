# React Text Carousel

React Text Carousel is a library for React apps that allows you to
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
    
    3c. [Custom Renders](#custom)

## Installation
To add this package to your project run:

`npm install react-text-carousel`

or, if you are using yarn:

`yarn add react-text-carousel`

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
to the title key and set isJSX to true. This will render your custom body, however you need more
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

### maxHeight - Required when buttons are at the top
This prop sets the height of the textArea. It is required due to how react-reveal handles its carousel.
#### Format

```javascript
let maxHeight = 300; 
```
## Examples
