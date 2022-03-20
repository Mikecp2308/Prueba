import React from 'react'

const Prueba = () => {

     // MAKE THIS SCRIPT RUN WITHOUT ERRORS MODIFYING ONLY BETWEEN THIS COMMENT TAG: [MODIFICATION ALLOWED]

     let stackPointer = 0
     const stateStack = []

     const renderComponent = (Component) => {
     const result = Component()
     // console.log("Este es el result", result)
     stackPointer += 1
     return result
     }

     const renderComponents = (...components) => {
     const renderedComponents = components.map(renderComponent)
     // console.log("Este es el renderedComponents", renderedComponents)
     stackPointer = 0
     return renderedComponents
     }

     const useState = (initialState) => {
     // [MODIFICATION ALLOWED]
     const setter = (toSetValue) => {
         if (typeof toSetValue === 'function') {
         stateStack[stackPointer] = toSetValue(stateStack[stackPointer] || initialState)
         } else {
         stateStack[stackPointer] = toSetValue
         }
     }

     return [stateStack[stackPointer] || initialState, setter]
     // [MODIFICATION ALLOWED]
     }

     let increment
     let decrement

     const IncrementCounter = () => {
     const [counter, setCounter] = useState(0)
     
     increment = () => {
         setCounter((prev) => prev + 1)
     }

     return counter
     }

     const DecrementCounter = () => {
     const [counter, setCounter] = useState(1)
     
     decrement = () => {
         setCounter((prev) => prev - 1)
     }

     return counter
     }

     const assertArray = (original, asserted) => {
         // console.log("original", original)
         // console.log("asserted", asserted)
     if (original.length !== asserted.length) {
         throw new Error(`Arrays have different lengths: ${original} : ${asserted}`)
     }
     original.forEach((originalItem, index, asserted) => {
         // console.log("originalItem", originalItem)
         // console.log("index", index)
         const assertedItem = asserted[index]
         // console.log("assertedItem", assertedItem)
         
         if (originalItem !== assertedItem) {
         throw new Error(`Element at index [${index}] is not equal, expecting: [${originalItem}] found: [${assertedItem}]`)
         }
     })
     }

     const oneRender = () => renderComponents(
     IncrementCounter,
     DecrementCounter,
     )

     const render1 = oneRender()

     // console.log("render1",render1)

     assertArray([0, 1], render1)
     

     increment()
     increment()
     decrement()

     const render2 = oneRender()
     // console.log("render2",render2)

     assertArray([2, 0], render2)

     increment()
     decrement()

     const render3 = oneRender()
     // console.log("render3",render3)

     assertArray([3, -1], render3)

     increment()
     increment()
     increment()
     decrement()

     const render4 = oneRender()
     // console.log("render4",render4)

     assertArray([6, -2], render4)
    return (
        <div>
            <h1>Prueba de codigo sin generar errores</h1>
        </div>
    )
}

export default Prueba
