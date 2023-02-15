const baseURL = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars'

const urls = {
    cars: {
        base: cars,
        byId: (id: string): string => `${cars}/${id}`
    }
}

export {
    baseURL,
    urls
}
