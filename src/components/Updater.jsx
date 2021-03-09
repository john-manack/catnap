import Output from '../containers/OutputContainer';
import ActionSetName from '../containers/ActionSetNameContainer';
import ActionSetActivity from '../containers/ActionSetActivityContainer';

const Updater = () => (
    <>
        <h1>Here's A Kitty App!</h1>
        <ActionSetName/>
        <Output />
        <ActionSetActivity/>
        
    </>
)

export default Updater;