import { CarBMW, CarDodge, CarLambo, CarBugatti, CarPagani } from './car/cars';
import { MochiPrep, MochiMix, MochiRise, MochiShape, MochiBake } from './mochi/mochi';

const ANIMATION_REGISTRY = {
    car_bmw: CarBMW,
    car_dodge: CarDodge,
    car_lambo: CarLambo,
    car_bugatti: CarBugatti,
    car_pagani: CarPagani,
    mochi_prep: MochiPrep,
    mochi_mix: MochiMix,
    mochi_rise: MochiRise,
    mochi_shape: MochiShape,
    mochi_bake: MochiBake,
};

export default ANIMATION_REGISTRY;