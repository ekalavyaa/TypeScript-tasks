import { expect } from 'chai';
import Grade from './grade';
let grade = new Grade();

describe('Add student ', () => {
    it('Adds student to the grade', () => {
       grade.addStudent('antony', '1');
    })
});

describe('List students in grade ', () => {
    it('Lists students the grade', () => {
       let students = grade.listRosterForGrade('1');
       expect(students).is.instanceOf(Array);
    })
});