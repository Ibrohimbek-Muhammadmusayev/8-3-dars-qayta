export type Movie = {
    id: number,
    name: string,
    enName?: string,
    year: number,
    type: string,
    description?: string,
    shortDescription?: string,
    poster: {
        url: string,
        previewUrl: string
    },
    backdrop: {
        url: string,
        previewUrl: string
    },
}