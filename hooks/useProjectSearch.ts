import { useReducer, useCallback } from 'react'
import { Project } from 'types/types'
import data from 'data/projects'

type Action = {
    type: 'CHANGE_INPUT'
    payload: string
}

type State = Project[]

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            const filteredData = data.filter(
                (project) =>
                    project.title
                        .toLowerCase()
                        .includes(action.payload.toLowerCase()) ||
                    project.description
                        .toLowerCase()
                        .includes(action.payload.toLowerCase()) ||
                    project.techstack
                        .toLowerCase()
                        .includes(action.payload.toLowerCase())
            )
            return filteredData
        default:
            return state
    }
}

const useProjectSearch = (initialData: Project[]) => {
    const [state, dispatch] = useReducer(reducer, initialData)

    const onSearch = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({
                type: 'CHANGE_INPUT',
                payload: event.target.value,
            })
        },
        []
    )

    return { state, onSearch }
}

export default useProjectSearch
