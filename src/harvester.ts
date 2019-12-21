import {get} from 'lodash/fp';

export const handleHarvestor = () => {
    const obj = {msg: "handling harvester"};
    console.log(get('msg', obj));
};
