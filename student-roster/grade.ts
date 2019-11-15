import { IRoster } from './interfaces/IRoster'
class Grade {
    private roster: IRoster = {};
    constructor() { }
    addStudent(name: string, grade: string) {
        if (!this.roster[grade]) {
            this.roster[grade] = [];
            this.roster[grade].push(name);
            this.roster[grade].sort();
        }
    }
    listRosterForGrade(grade: string) {
        if (this.roster[grade]) {
            return this.roster[grade];
        }
        return {};
    }
}

export default Grade;