import fetch from 'cross-fetch'

export const SAVE_STUDENT_INFO_STARTED = 'SAVE_STUDENT_INFO_STARTED'
export const SAVE_STUDENT_INFO_SUCCESS = 'SAVE_STUDENT_INFO_SUCCESS' 
export const SAVE_STUDENT_INFO_FAILED = 'SAVE_STUDENT_INFO_FAILED'

async function saveStudentInfoAsync(dispatch, firstName, lastName, age, _fetch){
    try {
        const response = await _fetch('http://localhost:9001/student', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName,
                lastName,
                age
            })
        })
        if (response.ok){
            dispatch({
                type: SAVE_STUDENT_INFO_SUCCESS,
                payload: {
                    firstName,
                    lastName,
                    age
                }
            })
        } else {
            throw response
        }
    }
    catch (err){
        dispatch({
            type: SAVE_STUDENT_INFO_FAILED
        })
    }
}

export function saveStudentInfo(firstName, lastName, age, _fetch=fetch){
    return (dispatch, getState) => {
        dispatch({
            type: SAVE_STUDENT_INFO_STARTED
        })
        return saveStudentInfoAsync(dispatch, firstName, lastName, age, _fetch);
    }
}

