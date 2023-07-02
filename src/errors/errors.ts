export function notFoundError(element: string) {
    return {
        type: "NotFoundError",
        message: `${element ? element : "It"} was not found`
    }
}

export function conflictError(element: string) {
    return {
        type: "ConflictError",
        message: `${element ? element : "It"} already exists!`
    }
}