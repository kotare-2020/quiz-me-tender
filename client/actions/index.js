import request from 'superagent'

export const RECEIVE_NAMES = 'RECEIVE_NAMES'
export const REQUEST_NAMES = 'REQUEST_NAMES'
export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_SCORE = 'RECEIVE_SCORE'

export const requestName = () => {
    return {
      type: REQUEST_NAMES
    }
  }
  
  export const submitName = (team1, team2, team3) => {
    return {
      type: RECEIVE_NAMES,
      team1, team2, team3
    }
  }

export function fetchName () {
    return (dispatch) => {
      dispatch(requestName())
      return request
        .then(res => {
          dispatch(submitName(res.body))
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

export const requestQuestions = () => {
    return {
        type: REQUEST_QUESTIONS,
    }
}

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions: questions
    }
}

export function fetchQuestions() {
    return (dispatch) => {
        dispatch(requestQuestions())
        return request
            .get('/questions')
            .then(res => {
                dispatch(receiveQuestions(res.body))
            })
            .catch(err => {
                console.log(err)
                // dispatch(showError(err.message))
            })
    }
}
  
  export const submitScore = (team1, team2, team3) => {
    return {
      type: RECEIVE_SCORE,
      team1, team2, team3
    }
  }

export function fetchScore () {
    return (dispatch) => {
      return request
      .get('/score')
        .then(res => {
          dispatch(submitScore(res.body))
        })
        .catch(err => {
          console.log(err)
        })
    }
  }