// Styling
// http://localhost:3000/isolated/exercise/05.js

// import * as React from 'react'
// import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// const smallBox = <div>small lightblue box</div>
// const mediumBox = <div>medium pink box</div>
// const largeBox = <div>large orange box</div>

// function App() {
//   return (
//     <div>
//       <div
//         style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
//         className="box; box--small"
//       >
//         {smallBox}
//       </div>
//       <div
//         style={{backgroundColor: 'pink', fontStyle: 'italic'}}
//         className="box; box--medium"
//       >
//         {mediumBox}
//       </div>
//       <div
//         style={{backgroundColor: 'orange', fontStyle: 'italic'}}
//         className="box; box--large"
//       >
//         {largeBox}
//       </div>
//     </div>
//   )
// }

// export default App

" - EXTRA Credit 5.1"

// // Styling
// // http://localhost:3000/isolated/exercise/05.js

// import * as React from 'react'
// import '../box-styles.css'

// // 🐨 add a className prop to each div and apply the correct class names
// // based on the text content
// // 💰 Here are the available class names: box, box--large, box--medium, box--small
// // 💰 each of the elements should have the "box" className applied

// // 🐨 add a style prop to each div so their background color
// // matches what the text says it should be
// // 🐨 also use the style prop to make the font italic
// // 💰 Here are available style attributes: backgroundColor, fontStyle

// const smallBox = (
//   <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
//     small lightblue box
//   </Box>
// )
// const mediumBox = (
//   <Box className="box--medium" style={{backgroundColor: 'pink'}}>
//     medium pink box
//   </Box>
// )
// const largeBox = (
//   <Box className="box--large" style={{backgroundColor: 'orange'}}>
//     large orange box
//   </Box>
// )

// function Box({className = '', style, ...otherProps}) {
//   return (
//     <div
//       className={`box ${className}`}
//       style={{fontStyle: 'italic', ...style}}
//       {...otherProps}
//     ></div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <div>
//         {smallBox}
//         {mediumBox}
//         {largeBox}
//         <Box>sizeless box</Box>
//       </div>
//     </div>
//   )
// }

// export default App

// Extra Credit 5.2

// Styling
// http://localhost:3000/isolated/exercise/05.js

// import * as React from 'react'
// import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// function Box({size, style, ...otherProps}) {
//   return (
//     <div
//       className={`box box--${size}`}
//       style={{fontStyle: 'italic', ...style}}
//       {...otherProps}
//     ></div>
//   )
// }
// const smallBox = (
//   <Box size="small" style={{backgroundColor: 'lightblue'}}>
//     small lightblue box
//   </Box>
// )
// const mediumBox = (
//   <Box size="medium" style={{backgroundColor: 'pink'}}>
//     medium pink box
//   </Box>
// )
// const largeBox = (
//   <Box size="large" style={{backgroundColor: 'orange'}}>
//     large orange box
//   </Box>
// )

// function App() {
//   return (
//     <div>
//       <div>
//         {smallBox}
//         {mediumBox}
//         {largeBox}
//         <Box>sizeless box</Box>
//       </div>
//     </div>
//   )
// }

// export default App

// EXTRA Credit 5.2 optional answer 

// Styling
// 💯 accept a size prop to encapsulate styling
// http://localhost:3000/isolated/final/05.extra-2.js

import * as React from 'react'
import '../box-styles.css'

function Box({style, size, ...otherProps}) {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App