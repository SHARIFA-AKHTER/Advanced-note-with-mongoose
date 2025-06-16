export  interface INotes{
    title : string,
    content : string,
    category : "personal" | "Work" | "study" |
    "other",
    pinned : boolean,
    tags : {
        label : string,
        color : string
    }
}