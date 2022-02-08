
/*

To install React on your local machine

  1.  npm install create-react-app -g
  (to install it globally) which i believe is only done once

  2.  create-react-app name-of-react-app

  3.  cd into the project and run
      npm start - to start your project


*/





/*

Arranging a React Folder

  * Best practice is to put every component created into a component folder in src folder eg.

  src
    components
      Person "Folder"
        Person.js "component created"
      List "Folder"
        List.js "component created"

  * Also you could add a container folder to React to seperate the App.js file which is the main container. eg

  src
    components
      Person "Folder"
        Person.js "Actual component"
      List "Folder"
        List.js "Actual component"

    container
      App.js
      App.css
      App.text.js

  * You could do the above but currently i really don't like it

  * Piece of advice: Use as many stateless component as possible (Meaning using a lot of component without state or useState from react hooks)

  * Where a state is created is mainly where it is updated or changed. And any other function or action show adviceably be done in a different component

  *

*/







/*

Debugging!

  * When you are having a problem with your code e.g logical errors, when there is no error but your code isn't working;

  * First inspect you code in the browser and then go to sources

  * In sources open the current js file and observe your code to find the mistake(s) made.

  * To see element that are actually rendered to the real DOM in react or any app specifically
    - Go to the dev tools in chrome
    - Click on 3 vertical dots on the menu
    - Select rendering
    - Click on paint flashing

  *

*/












/*

Creating a Simple Component Using React

  In it's most basic form, A react component is just a function and note that when using react in a codepen's pen add babel in order to configure the code from ES6 to regular js

  HTML
    <div id="app"></div>

  CSS
    .person {
      display: inline-block;
      border: 1px solid #eee;
      width: 200px;
      padding: 20px;
      box-shadow: 0 2px 2px #ccc;
      margin: 10px;
    }

  JS (Babel, React, ReactDOM)
    function Person(props) {
      return (
        <div className="person">
          <h1>{props.name}</h1>
          <p>Your Age: {props.age}</p>
        </div>
      )
    }

    const app = (
      <div>
        <Person name="Max" age="34" />
        <Person name="Manu" age="30" />
        <Person name="Ana" age="25" />
        <Person name="Boris" age="24" />
      </div>
    )

    ReactDOM.render(app, document.querySelector('#app'))

    NOTE: The html like code written in js is called jsX, it is a synthentic sugar that react provides us in order for us to create a component

*/








/*

Understanding JsX

  JsX is js written in html format. What that means is jsX is javascript, the html like code we write is simply compiled imto javascript. e.g

  This jsX code....
  return (
    <div className="App">
      <h1>Does this work now?</h1>
    </div>
  )

  Is then compiled to
  return React.createElement('div', { className="App" }, React.createElement('h1', null, 'Does this work now?'))

  Explanation

  The createElement method in react contains at least 3 properties
    1.  Html Element
    2.  Attributes like class, id, etc.. and if there isn't one add null like in "h1"
    3.  TextContent or child element

*/











/*

Creating a new component in React

  *	It's more Advisable that you create a folder for each component created and the folder name should start with a capital letter. eg Person

  *	And like the App.js in your React project name your files in same way, with capital letter eg Person.js

  *	In it's core React is simply a function that returns jsX so you can either create a new component using react and component or just react like this

  import React from 'react'

  const person = () => {
    // Do something
  }

  export default person;

  *	To write js code in jsX use single parantheses {}. And it can only be a one line code like a function call or using math random and js code that are required to be one-line

  *	Adding properties to any new component created can be done by
  const person = (props) => {
    return <p> {props.anything} </p>
  }..... Or
  if its class based instead of function
  return ...<p> {this.props.anything} </p>...



Adding Children component
  *	One of the major advantages of React props is the '.children' method
  NOTE: It dosent have to be props it's just advisable to call it props, any other name can be chosen

  *	The .children method is used for this example
  ...return (
    <p>My name is John</p>
    <p>{props.children}</p>
  )

  In parent component
  <Person>Add desired form of children
    *	It could be text
    * Another html like div,p, etc
    * Or another custom component like eg. <Agenda />
  </Person>

*/














/*

An insight into React HOOKS

  * React use two types of state there is the class state and the function state which are both different and the same in their own right

  *	In the general App.js it always uses the class state when you install it and you can change it, if you like.

  *	The function Based uses react hooks or can use react hooks, if you want it to

  // CB --> class based ::FB--> function based
  * In the Cb you can use a special property called "state" which can have several item like array, string all in one object but what makes it special is that react constantly looks at the state object and when changes are made, it takes note of it and renders it on our page like a change in it's property value or something like that and normally that can't be done using fb react component, and for that react hooks was created to give the state property to fb react component.

  *	Through the series of this lesson we will see how it's done.


--------------------Class based React Component
// import React, { Component } from 'react';
// Using state and re-rendering using Class based React Component
// class App extends Component {
//   state = {
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Manu", age: 29 },
//       { name: "Stephanie", age: 26 }
//     ],

//     OtherValue: 'Think of something later'
//   }

//   switchNameHandler = () => {
//     // console.log('Hippy ya ye!!')
//     this.setState({ // The setState function only works in state property (state property is a special property in react not a regular custom propety created and one of it's features is that it can be updated and re-rendered quite easily)
//       persons: [
//         { name: "Maximillian", age: 28 },
//         { name: "Manu", age: 27 },
//         { name: "Stephanie", age: 24 }
//       ]
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Does this actually work?</h1>
//         <p>This is really working!!</p>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing, Dancing</Person>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       </div>
//     );
//   }
// }



---------------Function Based React Component using React hooks
// Using state and re-rendering using Function based React Component
// It done using react hooks and the most important react hooks is useState
// Import useState before it can be used eg import React, { useState } from 'react'
const App = () => {
  const [personState, setPersonState] = useState({ ]
    // useState returns 2 parameters. The first is the state like in class based react {this.state} while the other functions like setState({})
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],

    OtherValue: 'Think of something later'
  })

  // Before reading here READ NEXT PARAGRAPH// FIRST BELOW
  // In use of react hooks we can use multiple useStates that is one benefit over class based react component because with more than one useState and also the useState can contain anything it dosen't just have to be an object
  // eg. like useState('something else') || useState(['clearly']) and also you don't have to return it to any variable you could just call useState on it's own like  useState('Think of something later') instead of returning it to a function;  but here we returned it to a function to keep the value gotten
  const [otherState, ] = useState({
    otherState: 'Thing of something later'
  })

  console.log(personState)


  // The major difference between a function and class based react component is that the setPersonState resets the state of the first personState completely and dosen't modify it like the Class based React Component. To fix this problem LOOK AT CODE ABOVE
  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: "Maximillian", age: 28 },
        { name: "Manu", age: 27 },
        { name: "Stephanie", age: 24 }
      ],
      ...otherState,
    })
  }


  return (
    <div className="App">
      <h1>Does this actually work?</h1>
      <p>This is really working!!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Racing, Dancing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
  );
}

*/

















/*

Styling a component

  *	Normal usage is creating a normal css file and import it to js and webpack will take care of the rest.


  INLINE STYLES

    * Create an object in render eg.
  render() {
    const btnStyle = {
      backgroundColor: 'green',
      'font-family': 'cursive' // This method works but it returns an error so it's better to do fontFamily: 'cursive',
    }

    return (
      <button style={btnStyle}></button>
    )
  }

*/












/*

Adding conditionals to React
{
  this.state.showPerson ?
    <div>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} />

      // Note that methods and properties a certain component can be past as reference to the another component like in this instance passing switchNameHandler on click and in the person component we go and call the switchNameHandler function using click
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Max!')}
        changed={this.nameChangedHandler}
      >My Hobbies: Racing, Dancing</Person>

      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age} />
    </div> : null
}

*/










/*

Listing One component multiple times through React js

#Using the state in the class based React Component

state {
  persons: [
    {id: 'eropi', name: 'Max', age: 25}
    {id: 'niui', name: 'Matthew', age: 22}
    {id: 'yuwbn', name: 'Michael', age: 27}
  ]
}


render() {
  return (
    <div>
      {this.state.persons.map(person => {
        return <Person
        name={person.name} age={person.age}
        key={person.id} /> // Note that adding key makes react know each and every element and it knows to re-render only that element and not the entire page when something gets mutated or changed, because if there is no key it re-renders the entire page after every change.
        // And if you don't add key it brings an error in the console.
      })}
    </div>
  )
}

OR


state {
  persons: [
    {id: 'eropi', name: 'Max', age: 25}
    {id: 'niui', name: 'Matthew', age: 22}
    {id: 'yuwbn', name: 'Michael', age: 27}
  ]
}


render () {
  let persons = (
    <div>
      this.state.persons.map(each => {
        return <Person name={each.name} age={each.age} key={each.id} />
      })
    </div>
  )

  return {
    <div>
      {persons}
    </div>
  }
}



*/











/*

Adding Conditions to Inline Styles

// Inline styles...
state {
  showPerson: false,
}

render() {
  const style = {
    backgroundColor: 'green',
    color: '#fff',
    fontFamily: 'cursive',
    padding: '13px 16px',
    border: '1px solid blue',
    margin: '1rem auto',
    cursor: 'pointer'
  }

  if (this.state.showPerson) {
    style.backgroundColor = 'red'
  }

  // Assing when a button get's click
  <p style={style}>Let's change background</p>
}



Changing Classname in React....
 In App.css
.red { color: red; }  .bold { font-weight: bold; }

  In App js
render() {
  const classes = []
  if (this.state.persons.length <= 2) {
    classes.push('red');
  }
  if (this.state.persons.length <= 1) {
    classes.push('bold');
  }

  return (
    <p className={classes.join(' ')}>Let's change classes</p>
  )
}
// The idea  is to understand that there are several ways to change and remove className, this is just one of thme because at the end of the day React is purely Js.

*/









/*

Adding Psuedo Style in inline styles React Using Radium

install 3-party library 'Radium'
npm install --save radium

Then import Radium from 'radium';

Then
render() {
  let styles = [
    backgroundColor: 'red';
    ':hover': {
      backgroundColor: 'salmon'; // Beacaue of Radium in react we can simply add pseudo elements like easily just simply create them in a string eg. ':hover', ':nth-child(2n)'
    }
  ]

  return ( <p style={styles}>Pseudo Styles</p>)
}

NOTE: And dont forget. at the bottom of the react component (react file js)
export default Radium(Name-of-App);

*/









/*

Adding Media Queries to Inline Styles React Using Radium

  Like noraml in the variable
let styles = {
  '@media (max-width: 650px)': {
    'width': '60%',
  }
}

return ( <div style={styles}>Change at media Query</div> )

Note: For this to work go to App the general component and Wrap the entire main div under styleroot from radium eg.
In App.js
import Radium, { StyleRoot } from 'radium';

render() {
  return (
    <StyleRoot>
      // The entire Main App Component.
    </StyleRoot>
  )
}

*/








/*

Adding Media Query using styled-components

First npm install --save styled-components;

Then import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 450px;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media screen and (max-width: 650px) {
    width: 60%;
  }
`

const person = (props) => {
  return (
    <StyledDiv>
      <p> Some Fucking Text</p>
    </StyledDiv>
  )
}

export default person;


It uses backticks install of calling a function and in it ticks you can add the styles and also return it as a react element.

To add more flexibility to it (eg. add styles if something is true like we did before)

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'blue'};
`

class Person extends Component = props => {
  state: {
    showPerson: false,
  }

  render() {
    return (
      // Assuming something changes showPerson
      <StyledButton alt={this.state.showPerson}></StyledButton>

      // If the showPersons is true the background color becomes red and false, blue.
    )
  }
}

*/













/*

CSS Modules

Note: Before we start, note that this works for react scripts of version 1. If it's version 2, it will be something different

  Creating custom css files like in normal React js but it's then not global sytles but for each js component

  To do that first in the command line run 'npm run eject'

  Note: If thrown an error in the command line, It most time means you have to git initialize the folder
    Which means you have to simply do 'git init' then 'git add .' then 'git commit -m "What ever you want to say here"';

  That then gives you access to the config file (What makes react under the hood), So it can be tweaked to prevent global custom css file.

  After ejecting the file go to
    config
      webpack.config.dev.js
      webpack.config.prod.js

  Look for-->
    ...{
      test: /\.css$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,...

  In the options object above after the first props (importLoaders) add, In the ...prod.js there is going to be more property but just add it to after the end of the last props seen there
    modules: true,
    localIdentName: '[name]__[local]__[hash:base64:5]'

  To both files and run npm start again. Note again this only works for scripts version 1.1...



For scripts version 2. and above

  * First thing is,
    You don't need to eject

  * All you have to do is save your css file with .module.css
    App.module.css

  * And then you can import like this
    import anyName from 'App.module.css'


*/













/*

How CSS Modules Work

  * After writing normal css eg
.App {
  text-align: center;
  // Many other styles
}

in JS
  import classes['Any name can be chosen instead of classes'] from './App.css'

render() {
  return (
    <div className={classes.App}></div>
  )
}

  Modules works in the sense of adding all the styles to the name of the object imported into our js and they can be referenced like methods in an object

*/

















/*

Class-Based and Functional Components

  Class Based
    * class nameOfChoice extends Component
    * Access to state
    * Access to Lifecycle Hooks
    * Access state and props via "this" keyword
    * Dosen't use React hooks

  Function Based
    * const nameOfChoice = props =>...
    * Access to state (useState{})
    * Can't access Lifecycle Hooks
    * Access props normally
    * Use React Hook (that create the possibility for using state in functional based React component)

*/


















/*

Component LifeCycle Hooks - Creation

  Note ::Only available in Class Based Components.

Constructor(props)

  # When a component is created first of all the constructor get called. Although constructor isn't a lifecycle hook but a normal ES6 class feature, It does has access to the component props
    - You have to call super(props) in the constructor

  # You only call super(props) only if you add constructor(props) to your project. If you don't add constructor(props), super(props) is called for you by default

  # You can set state in the constructor
    constructor(props) {
      super(props);
      this.state: {...}
    }

  # Don't add side-effect(examples like send http request or send analytics to google etc..) in the constructor because it could have effect on your work.


getDerivedStateFromProps(props, state)

  # Whenever your props change for your class based component you can sync you state to them
    It quite a rare use case.

  #the getDerivedStateFromProps method is a static method so it's called like this
    static getDer...... (props, state) {...}

  # Also, no side-effects like in constructor


render()

  # We already know this method for being the method that returns jsX

  # Note that when the render method is called all the children component in the render method and their life cycle hooks are called will the life cycle of render finish.


componentDidMount()

  # This is a very important lifecycle hook and in this method http request can be made

  # Don't update state directly in the componentDidMount because that will make the component re-run which is bad for performance


  There are more react lifeCycle but these ones are the most used for creation.

*/













/*

Component LifeCycle Hooks - Update

getDerivedStateFromProps(props, state)

  # Like in the creation phase this syncs the state with the props
    Same rules like in creation follows


shouldComponentUpdate(nextProps, nextState)

  # Decide whether continue or not with the update by returning true or false.

  # Again you can't do external or asynchronous stuff here


render()
  # As usual it renders jsX, as well as all the children components in it


getSnapshotBeforeUpdate(prevProps, prevState)

  # Another rarely used method, it retuns a snapshot object which you can freely configure

  # The snapshot object that is returned can be used in the componentDidUpdate

  # No side-effect as well


componentDidUpdate

  # Another important lifecycle hook and note not to update state props/state here as that would trigger re-render



*****For more clarity******

In creation the most used lifecycle hook is ComponentDidMount()
In update the most used lifecycle hooks are shouldComponentUpdate & componentDidUpdate

In hooks like shouldComponentUpdate(nextProps, nextState)...

This is how it's used
shouldComponentUpdate(nextProps, nextState) {
  Do something with 'nextProps.nameOfProps';
}

*/















/*

Lifecycle Hook for Function based React Component "useEffect()"

  + useEffect is the 2nd most important react hooks after useState

  + As taught earlier useState is used for creating states in functional component

  + useEffect is used to the monitor every render-cycle of the component it's on (Meaning every time it re-renders), and it is called AFTER everything has being rendered;

  + useEffect takes in a function with no parameters where you can decide what you wish to do for every render-cycle.. e.g
    useEffect(() => { //Do something })

  + useEffect is basically componentDidMount and componentDidUpdate in one function and you can use multiple useEffect in one component (nameofComponent.js)

  + useEffect can be rendered on conditions, for example
    this useEffect will run only when there is a change in 'props.currentNote'
    useEffect(() => { //Do something }, [props.currentNote])

    Any command in the useEffect will render in the first instance and any other time there is a change in the props.currentNote property

  + And useEffect can take more than take note of more than one property
    useEffect(() => { //Do something }, [props1, props2, etc...])

  + To ensure useEffect run once and not again the shortcut is
    useEffect(() => { //Do something }, [])

    Normally when there a property in useEffect it runs for changes on the property but there is an empty property it runs only once when the page loads/render for the first time and can't run again because there are no changes to an empty array.

*/










/*

Doing clean-Up work
  componentWillUnmount
  useEffect()
  React.memo()

  + Clean-up work is what you do when for example an element has to be removed from the dom after some conditions

  + In real-world cases you have to remove the eventListeners and all that {To free space in workflow}

  + To do we use two things
    For class based Component - componentWillUnmount()
    For function based Component - useEffect()

componentWillUnmount()

  + in componentWillMount() like the rest of the lifecycle hooks it can be called in the class and act like normal


useEffect()

  + In useEffect you have to use the return statement, which returns a function, Now as we remember useEffect is called for every time the component renders even when it's being removed so when we add a return statement in useEffect it's called after the component renders or removed

    useEffect(() => {
      const timer = setTimeout(() => {
        alert('let me say something');
      }, 1000)

      return (() => {
        clearTimeout(timer);
        console.log('successful cleanup')
      })
    })

  + Now if you add an empty property, As we said before it will only run once the component is rendered and once it's removed (return only run when it's removed once).  If you add a property or properties it will render once the component is rendered and any changes to the prop(s);


React.memo()

  + When it comes to updating or re-rendering of components you have to realize that not all components need to rendered for every change and especially not the ones that have nothing to do with the change because that will be weird. And to avoid that we use can use React.memo

  + React.memo is added to name of the component when exported
    export default React.memo(NameOfComponent);

  + Now what React.memo actually do is memorize you element when its was rendered last and if there is changes to your document and nothing affect the component it gives back the one last stored instead of re-rendering the entire Component

  + And note: As a tip if you can avoid that an element re-renders due to external changes, Avoid IT!!

*/












/*

Pure Component

  + If for example you want to check for updates in all your props property another alternative instead of shouldComponentUpdate is PureComponent

  + PureComponent is another method in the react clased based component that we can use instead of the normal component in react

  + By default PureComponent only re-renders when there is a change in any of the props property. What it does is that it checks for changes in all the props related to that component and if there is a change it re-renders

  + Thereby there is no need for shouldComponentUpdate and PureComponent saves us from more code

*/














/*

Understanding Virtual Dom

  + In react as you know there is something called the virtual DOM. React dosen't instantly render to changes to the real DOM

  + First it compares the old Virtual DOM to the new/re-render/future DOM

  + The virtual DOM is a  DOM representation in javascript, Meaning the entire HTML before it gets rendered is created purely first in javascript

  + The new Virtual DOM is one created when the render method is called. And then react makes a comparison between the old and the new DOM, if there are changes it updates only the part that changed and not the entire DOM and if there are no changes it dosen't update anything.

    Which is why shouldComponentUpdate is in React to prevent the render method from calling if there is no change or there is a change and we don't want it

    It's not a must that we must use shouldComponentUpdate to check for changes all the time but if you want to. USE WISELY

  + To see how only the changed elements are rendered go to chrome notice the element change in dev tools; Under elements

*/
















/*

Adjacent Elements

  + Adjacent elements are elements next to each other, normally react needs a root element(div) and it can have as many children as possible

  + That can be avoided by several steps

1.  Return Array

const nameOfComponent = props => {
  return [
    <p key="i1" onClick={props.click}>I'm {props.name}, and i'm {props.age} years old</p>,
    <p key="i2">{props.children}</p>,
    <input key="i3" type="text" onChange={props.changed} defaultValue={props.name} />,
  ]
}

  + Each line has to have a comma (,) at the end

  + Each element has to have a key so that when there is changes react knows which one needs to be updated



2.  Auxiliary

  + Another method is to create a higher Order Component.

  + These are component that wraps other component as children and to create that first we create a js file (preferably in a folder called hoc(Higher order folder))

    It can be named whatever you like it's just a preferred choice and js file preferably called Auxiliary

In Auxiliary.js

const Auxiliary = props => props.children;
export default Auxiliary;

  + In those 2 lines of code the higher order component is created. The 'children' property is property given in react so the Auxiliary js can have children inside and yes you don't have to import react to this file.

In any other js file you like (Can be more than one)

In whateverTheNameYouChoose.js

import Auxiliary from '.....

...return (
  <Auxiliary>
    // HTML CODE OF CHOICE
  </Auxiliary>
)



3. Fragment

  + Fragment is React substitute for Auxiliary.js, Meaning you can use a react method of property instead of using Auxiliary. They both achieve the same thing

  + To use Fragment it has to be imported

i. import React from 'react'

...return (
  <React.Fragment>
    // HTML CODE OF CHOICE
  </React.Fragment>
)

ii. import React, { Fragment } from 'react'

...return (
  <Fragment>
    // HMTL CODE OF CHOICE
  </Fragment>
)

*/













/*

Higher Order Component

  + The idea of creating an higher order component is to wrap other components and adds something to it

  + For example a higher order component that Checks error handling, So you then use to wrap any component in your projects that makes an http request, Or a hoc that adds certain kind of class attributes etc

    const hoc = props => (
      <div className="props.classes">
        {props.children}
      </div>
    )

  + In the above example you begin to see the addition of any specific class to the children div that the hoc will wrap for example

      <hoc classes={any-Specific-Css-Class-For-This-Specific-component}>

  + You begin to see the unique uses of hoc components and it's popularity in react


|| Another Form Of Higher Order Component ||

  + Now this higher order component is more advanced and different

HOC.JS (Choose any name you want but do it wisely so as to recall easily the function of the hoc)
import React from 'react';

const withClass = (WrappedComponent, classN) => {
  return props => {
    <div className={classN}>
      <WrappedComponent />
    </div>
  }
}

export default withClass

  + Let's break down the above code; we already know the top import part so we will start from the withClass function which can be anyName you choose. We are adding className to the parent div and wrapping our element in it so that is why am calling it 'withClass'

  + Now the withClass = (WrappedComponent, classN) => {...

    This is just a normal js function that takes in 2 elements as you can see in the code above the first property is a component that's why it's start with a capital letter

  + After that there is return props => {...

    This return statement now return the props we normally have in simple component. The first div child takes the classN property as a className value (And you can choose what to do with that if you have specific settings)

    And the WrappedComponent being used inside as a component inside the function returned;

  + To use this hoc in another component; In the part where you export default the component you add the hoc like this
    NOTE: You must import it first

    export default withclass(App, classNameOfChoice)

  + This then wraps the component in the div above and add the class in the div from the hoc to the component being exported

  + Note that this is just an idea and more can be done with this. And that you can use hoc for more than one component.


SIDE NOTE::
  + As you notice in the function we set props in the return but never used it.

  + And if we don't use it, the props in the component wrapped wouldn't work because it dosent expect anything

  + To use it correctly is that in the WrappedComponent we spread props like this
    ...<WrappedComponent {...props} />

  + Now this spread the entire props being used so that each property of the props can be used dynamically in any component you called it on


What to use and Where..

  + Well if you use a hoc like the Auxiliary example that just have to wrap the component and maybe add little styles to it using a simple hoc wrapper in return or render() return statement is simple

  + But if you hoc contains more js and invlolve more javascript manipulation and all that (handling http request, error checking etc) use the withclass structure

*/














/*

How to properly use setState in class based component.

  + Although it's written synchronously this.setState isn't called by react instantly, it does do other things first before calling the function

  + In order to avoid that maybe between those other things being done, it updates the main state and then checks the setState which was relying on the data of the previous state not this updated one

  + To avoid that we add a callback function to our setState instead of a normal object, like this...
    this.setState(() => {
      property: //Update property
    })




How to Set Props Correctly

  + You need your props to be very specific eg. strings or number or maybe you want your props as objects, to achieve that you have to install an npm package called prop-types
    npm install --save prop-types

  + After installing
    import PropTypes from 'prop-types'

  + We use proptypes after creating the function/class based component eg
const nameOfComponent = props => {// Do something}...

  You add it here after the component has being rendered and let's assume in your component you have 3 props (name, click, age)
nameOfComponent.propTypes = {
  name: PropTypes.string, // Makes sure its a string
  age: PropTypes.number, // number
  click: PropTypes.func, // function
}

  You will in the 'nameOfComponent.propTypes = {...' the 'propTypes' has a small p starting it. That's because propTypes is a normal property of the component, while the actual PropTypes we downloaded was used in the object to determine their data types.

*/














/*

Ref

  + And what ref does is give us the opportunity to have access to the current element it's in eg. if its in a paragraph we get access to that paragraph in javascript

  + There are 2 ways to getting this done In class based component.

    1.  Using an input //Older Approach
      i. The first thing you can add a function to it and the parameter in that function has access to input
      <input ref={inp => this.inputEl = inp} />

      In the above code what we did is simply add a function to the ref and the parameter has access to the input element and then 'this.inputEl' is a global scope variable which is now set to the inp

      ii. For example if we want to make the inp be focused on when something happens (when a couple of html becomes visible)
      componentDidMount() {
        this.inputEl.focus()
      }

      iii.  Note that the reason we use componentDidMount is because it is called after the render() method in the lifecycle, so it then has access to this.inputEl

    2.  React.createRef() //Newer Approach
      i.  The createRef creates a ref in the constructor
      constructor(props) {
        super(props);
        this.inp = React.createRef();
      }

      ii. In the input
      <input ref={this.inp} />

      iii. In componentDidMount (it is called after render() and constructor())
      componentDidMount() {
        this.inp.current.focus()
      }

      The current is the property with access to the input html(DOM)



  + In Function based Component

      i.  We use a React hook called useRef
      import React, { useRef } from 'react';

      ii. In the function based component (has to be bofore you return jsX OBVIOUSLY)
      const whatEver = useRef(null) // Just add null to it and find out why later.

      iii.  In the button we choose to use
      <button ref={whatEver} />

      We want the button to automatically click (eg button.click()) itself in our react app

      iv. In the useEffect()
      In case you are wondering why we dont automatically call (whatEver.current.click()) in the function based component directly that's because the is the code runs first before the jsX and since we specified in the button the code will not understand the click function so we use useEffect which is called after the jsX

      useEffect(() => {
        whatEver.current.click()
      })



*/