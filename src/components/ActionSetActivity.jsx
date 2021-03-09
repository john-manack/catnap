const ActionSetActivity = (props) => (
    <>
        <button onClick={() => props.handleClick('playing')}>Play</button>
        <button onClick={() => props.handleClick('eating')}>Eat</button>
        <button onClick={() => props.handleClick('napping')}>Nap</button>
    </>
);

export default ActionSetActivity;