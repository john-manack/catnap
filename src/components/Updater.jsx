import Output from '../containers/OutputContainer';
import Nap from '../containers/NapContainer';
import Eat from '../containers/EatContainer';
import Play from '../containers/PlayContainer';

const Updater = () => (
    <>
        <h1>Here's A Kitty App!</h1>
        <Output />
        <Nap/>
        <Eat/>
        <Play/>
    </>
)

export default Updater;