import { selector } from "recoil";
import {countAtom } from '../store/atoms/count'

export const OddEvenSelector = selector({
    key : "OddEvenSelector",
    get : ( {get} ) => {
        const count = get(countAtom)
        return count%2==0;
    }
})