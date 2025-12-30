import CarCruise from './car/CarCruise'
import CarRace from './car/CarRace'
import CarDrift from './car/CarDrift'
import MochiIdle from './mochi/MochiIdle'
import MochiBounce from './mochi/MochiBounce'
import MochiPanic from './mochi/MochiPanic'


const ANIMATION_REGISTRY = {
    'car_cruise': CarCruise,
    'car_race': CarRace,
    'car_drift': CarDrift,
    'mochi_idle': MochiIdle,
    'mochi_bounce': MochiBounce,
    'mochi_panic': MochiPanic
};

export default ANIMATION_REGISTRY;