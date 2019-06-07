import { SAVE_STUDENT_INFO_SUCCESS} from './StudentActions';

export default function studentReducer(state = {}, action = null){
    switch(action.type){
        case SAVE_STUDENT_INFO_SUCCESS: 
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                age: action.payload.age
            }
        default:
            return state;    
    }
}