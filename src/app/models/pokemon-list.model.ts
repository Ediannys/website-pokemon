export class PokemonListModel {

    static getPokemonNames(obj: PokemonListModel): PokemonNameModel[] {
        let data = new Array<PokemonNameModel>();
        data = obj.results.map(x => {
            return {
                name: x.name
            }
        });
        return data;
    }
    constructor(
        public count: number,
        public next: string,
        public previous: null,
        public results: Result[]
    ) { }
}

export interface Result {
    name: string;
    url: string;
}

export interface PokemonNameModel {
    name: string;
}