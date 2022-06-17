export class Task {
    title: string;
    date: string;
    isComplete: boolean;
    _id: string;

    [propName: string]: string | boolean;

    constructor(title: string, date: string, isComplete: boolean, _id: string) {
        this.title = title;
        this.date = date;
        this.isComplete = isComplete;
        this._id = _id;
    }

}