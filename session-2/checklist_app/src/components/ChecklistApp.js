import {useState} from 'react'
import './ChecklistApp.css'
import darkBackground from '../images/bg-desktop-dark.jpg'
import addIcon from '../images/plus-solid.svg'


function ChecklistApp() {

    const [userInput, setUserInput] = useState('');
    const [checklist, setChecklist] = useState([]);
    const [removedItems, setRemovedItems] = useState([]);

    // Add an Item/s
    const addChecklistItem = () => {
        if (userInput !== '') {
            setChecklist([...checklist, userInput]);
            setUserInput('');
        }
    }

    // Remove an Item/s
    const removeChecklistItem = (index) => {
            // This function takes an 'index' parameter representing the index of the item to be removed from the checklist.
        setChecklist(checklist.filter((item, i) => i !== index));
            // The 'setChecklist' is the resulting filtered array and set as the new value for the checklist
                // The 'filter' is used to iterate over each item in the checklist array and only keep the items whose index is not equal to the provided index.
        setRemovedItems([...removedItems, index]);
            // The 'setRemovedItems' adds the index value to the removedItems array using the spread operator (...). It creates a new array that includes all the existing items from removedItems followed by the index value. 
    }

    // TODO: Add a filter components that show "all" , "active", "complete/removed" items.
    // TODO: Add dark and light mode

    return (
        <>
            <div className="container">
                <div className="img-container">
                    <img className="img" src={darkBackground} alt="desktop-dark-background" />
                </div>
                <h1 className="title">Checklist</h1>
                <div className="app-container">
                    <div className="input-container">
                        <input
                            type = "text"
                            value = {userInput}
                            placeholder = "Add a checklist item"
                            onChange = {e => setUserInput(e.target.value)}
                                // the state variable will be updated with the current value of the input field every time the user types or modifies the content in the input field.
                            className="user-input"
                        />
                        <button className="add-btn" onClick={addChecklistItem}><img className="icon" src={addIcon} alt='plus-icon'/></button>
                    </div>
                    <ul className="checklist">
                        {checklist.map((item, index) => (
                            <li key={index} onClick={() => removeChecklistItem(index)}>{item}</li>
                            // The 'map' function has two parameters: item and index. 'item' represents the current item in the checklist array, and 'index' represents the index of that item in the array.
                            // The 'key' creates a unique identifier for each item in the checklist array. The key attribute is set to the index value, which helps React efficiently update and re-render the list when it changes.
                            // The 'onClick' creates an event handler that calls the removeChecklistItem function with the corresponding index when the <li> element is clicked.
                        ))}
                        {checklist.length > 0 && (
                            // If it is true, the following JSX code inside the parentheses will be rendered.
                                // The && operator allows you to control what elements are displayed in the UI based on the state or the values of variables in your component.
                            <div className='filter'>
                                <span className='filter-item'>All</span>
                                <span className='filter-item'>Active</span>
                                <span className='filter-item' >Completed</span>
                            </div>
                        )}
                    </ul>
                </div>
                <div className='footer'>
                    <p>&copy; <a href='https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW/hub'>FrontEnd Mentor</a> | Created by Joshua Zarate</p>
                </div>
            </div>
        </>
    );
}

export default ChecklistApp


/*  CHECKLIST APP

Create an application that takes in text input from a user, and renders the inputs as part of an unordered list (a checklist). When the user clicks on the checklist item (specifically, the <li> element), that should be removed from the UI.

Hints:
√ 1) checklist.map((item, index) => {})
√ 2) Spread Operator 
√ 3) Only one way to mutate state 

FUTURE CHALLENGE FOR ME:
1. Create a filter for:
    - "All" will show all the checklist even the completed ones(but the complete ones will have an underline and the icon will be checked out)
    - "Active" will show only the active checklist
    - "Completed" will show only the completed checklist with text-decoration of underline

2. add dark mode

√ 3. Add a footer 

*/