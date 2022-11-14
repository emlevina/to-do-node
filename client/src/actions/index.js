export const checkTask = async (id, isCompleted) => {
    fetch(`api/v1/tasks/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            completed: !isCompleted,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export const deleteTask = async (id) => {
    fetch(`api/v1/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        //.then((json) => console.log(json));
}

export const showTasks = async (setState) => {
    fetch("/api/v1/tasks")
        .then(response => response.json())
        .then(result => {
            setState(result.tasks)
        })
        .catch(error => console.log('error', error));
}

export const addTask = async (input) => {
    fetch(`api/v1/tasks/`, {
        method: 'POST',
        body: JSON.stringify({
            name: input,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        //.then((json) => console.log(json));
};
