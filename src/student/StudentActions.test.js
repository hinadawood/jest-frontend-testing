import * as actions from './StudentActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

const middleWare = [thunk];
const mockStore = configureMockStore(middleWare)

describe('test async call', () => {
    it('should verify API POST student form when POST successful', async () => {
        const store = mockStore ({
            student: {
                firstName: '',
                lastName: '',
                age: ''
            }
        });
        const mockPost = jest.fn().mockImplementation(() => {
            return Promise.resolve(mockResponse(200, 'Success', ''))
        });
        const expectedAction = [
            actions.SAVE_STUDENT_INFO_STARTED,
            actions.SAVE_STUDENT_INFO_SUCCESS
        ]
        await store.dispatch(actions.saveStudentInfo('Jane','Doe','25', mockPost))
        const actualActions = store.getActions().map(action => action.type);
        expect(actualActions).toEqual(expectedAction);
    })
})

describe('test async call', () => {
    it('should verify API POST student form when POST failed', async () => {
        const store = mockStore ({
            student: {
                firstName: '',
                lastName: '',
                age: ''
            }
        });
        const mockPost = jest.fn().mockImplementation(() => {
            return Promise.resolve(mockResponse(400, 'Error', ''))
        });
        const expectedAction = [
            actions.SAVE_STUDENT_INFO_STARTED,
            actions.SAVE_STUDENT_INFO_FAILED
        ]
        await store.dispatch(actions.saveStudentInfo('Jane','Doe','25', mockPost))
        const actualActions = store.getActions().map(action => action.type);
        expect(actualActions).toEqual(expectedAction);
    })
})

function mockResponse(status, statusText, response){
    return new window.Response(response, {
        status,
        statusText,
        headers: {
            'Content-type': 'application/json'
        }
    })
}

describe('test async call', () => {
    it('should verify API POST student form when POST successful using nock', async () => {
        const store = mockStore ({
            student: {
                firstName: '',
                lastName: '',
                age: ''
            }
        });
        nock('http://localhost:9001').post('/student').reply(200, '');
        const expectedAction = [
            actions.SAVE_STUDENT_INFO_STARTED,
            actions.SAVE_STUDENT_INFO_SUCCESS
        ]
        await store.dispatch(actions.saveStudentInfo('Jane','Doe','25'))
        const actualActions = store.getActions().map(action => action.type);
        expect(actualActions).toEqual(expectedAction);
    })
})

describe('test async call', () => {
    it('should verify API POST student form when POST failed using nock', async () => {
        const store = mockStore ({
            student: {
                firstName: '',
                lastName: '',
                age: ''
            }
        });
        nock('http://localhost:9001').post('/student').reply(404, '');
        const expectedAction = [
            actions.SAVE_STUDENT_INFO_STARTED,
            actions.SAVE_STUDENT_INFO_FAILED
        ]
        await store.dispatch(actions.saveStudentInfo('Jane','Doe','25'))
        const actualActions = store.getActions().map(action => action.type);
        expect(actualActions).toEqual(expectedAction);
    })
})