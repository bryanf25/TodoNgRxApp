export class Todo{

    public id: number;
    public text : string;
    public completed: boolean

    constructor( text : string , completed = false){
        // this.id = new Date().getTime();
        this.id = Math.random();
        this.text = text
        this.completed = completed
    }
}