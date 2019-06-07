import StudentReducer from './StudentReducer';
import * as actions from './StudentActions';

describe('Student Reducer', () => {
    it('should handle SAVE_STUDENT_INFO_SUCCESS', () => {
        const testObj = {
            firstName: 'Jane',
            lastName: 'Doe',
            age:25
        }
        expect(StudentReducer({}, {
            type: actions.SAVE_STUDENT_INFO_SUCCESS,
            payload: {
                firstName: 'Jane',
                lastName: 'Doe',
                age:25
            }
        })).toEqual({
            ...testObj
        })
    });
    it('should return the initial state', () => {
        expect(StudentReducer(undefined, {})).toEqual({});
    });
})