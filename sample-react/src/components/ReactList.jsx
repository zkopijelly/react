const ReactList = props => {
    
    const items = ['rice', 'chicken', 'adobo', 'Jolly Spaghetti'];
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

    return (
        <>
            {/* <h2>Menu For Lunch:</h2>
            <ol>
                {items.map(item => <li>{item}</li>)}
            </ol>
            <ol>
                {weekdays.map(day => <li>{day}</li>)}
            </ol> */}
            <div className='react-list'>
                <h2>React List Component</h2>
                <h2> {props.points}</h2>
            </div>
        </>
    )
}

export default ReactList;