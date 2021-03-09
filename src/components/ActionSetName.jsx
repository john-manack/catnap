const ActionSetName = (props) => (
    <>
        <button onClick={() => props.handleClick('Rosie')}>Rosie</button>
        <button onClick={() => props.handleClick('Boo')}>Boo</button>
        <button onClick={() => props.handleClick('Romeo Chicken Nugget')}>Romeo Chicken Nugget</button>
    </>
);

export default ActionSetName;