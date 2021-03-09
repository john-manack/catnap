import Output from '../components/Output';
import ActionNewCat from './ActionNewCat';
import ActionSetActivity from '../components/ActionSetActivity';

const Updater = () => (
    <>
        <h1>Cat Reducer 🐈</h1>
        <ActionNewCat/>
        <Output />
        <ActionSetActivity/>
    </>
)

export default Updater;