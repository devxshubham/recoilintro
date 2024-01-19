import {atom} from 'recoil'

export const todoAtom = atom({
    key : 'todoAtom',
    default : [
        {
            title : "gym",
            description : "go to gym daily"
        },
        {
            title : "code",
            description : "code daily"
        },
        {
            title : "web projects",
            description : "make projects every week"
        },
        {
            title : "eat",
            description : "eat healthy food"
        },
        {
            title : "exercise",
            description : "exercise daily 1 hour"
        },
        {
            title : "jacky",
            description : "daily give lots of love to jacky"
        },
        {
            title : "parents",
            description : "give time to parents"
        }
    ]
})

