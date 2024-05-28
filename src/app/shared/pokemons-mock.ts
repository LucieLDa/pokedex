import { Pokemon } from "./pokemon.model";

export class PokemonMock {
    //Mock data for the initial pokedex
    private pokemons : Pokemon[] = [
        {
            nom: "Bulbizarre",
            imageUrl : "https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png",
            description : "Bulbizarre est un petit quadrupède vert avec une tête large. Il porte un bulbe sur son dos. Ce dernier lui sert également d'organe de stockage, puisqu'on rapporte notamment qu'en période de sécheresse, il peut survivre plusieurs jours sans manger grâce à l'énergie qui y est accumulée. Il a des taches foncées sur le corps faisant penser à un batracien. Son bulbe grandit en permanence en absorbant les rayons du soleil, et lorsque le poids du bulbe sera trop grand et empêchera Bulbizarre de se dresser sur ses deux pattes arrière, cela signifiera que son évolution en Herbizarre est proche. "
        },
        {
            nom: "Herbizarre",
            imageUrl : "https://www.pokepedia.fr/images/thumb/4/44/Herbizarre-RFVF.png/250px-Herbizarre-RFVF.png",
            description : "Herbizarre est un Pokémon quadrupède, semblable à un dinosaure. Il a un corps bleu vert avec des taches plus foncées. Deux canines supérieures dépassent de sa bouche quand elle est fermée, et par rapport à sa pré-évolution, ses yeux sont plus petits et plus foncés. Il a sur le haut de sa tête deux oreilles pointues remplies de noir. Il a un petit museau rond et une large bouche. Chacun de ses pieds possède trois griffes pointues et blanches. Le bulbe sur son dos a fleuri et est devenu un gros bourgeon rose dont le poids est tel qu'il empêche Herbizarre de se tenir sur ses pattes postérieures trop longtemps. Une petite tige marron, entourée par quatre larges feuilles, soutient le bourgeon. "
        },
        {
            nom: "Florizarre",
            imageUrl : "https://www.pokepedia.fr/images/thumb/4/42/Florizarre-RFVF.png/250px-Florizarre-RFVF.png",
            description : "Florizarre est un imposant quadrupède à la peau verte ayant l'aspect d'un batracien, il est beaucoup plus grand et lourd que Bulbizarre et Herbizarre. Il porte une grande fleur rose tachetée sur son dos, entourée de quatre grandes feuilles. L'intérieur de ses oreilles s'est coloré de rouge et sa peau au niveau de ses pattes est désormais recouverte d'excroissances faisant penser aux verrues d'un crapaud. Sa bouche est ornée de six petites canines. Chacun de ses pas provoque un tremblement du sol. Sa fleur émet un parfum qui calme les esprits et appâte les Pokémon. Ce parfum est plus entêtant après une journée de pluie. La fleur permet aussi à Florizarre d'absorber les rayons du soleil pour se soigner ou être plus efficace en combat. "
        },
        {
            nom: "Salamèche",
            imageUrl : "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/250px-Salam%C3%A8che-RFVF.png",
            description : "Salamèche est un Pokémon bipède et reptilien avec un corps principalement orange, à l'exception de son ventre et de ses plantes de pieds qui sont beiges. Ses bras et ses jambes sont courts, avec respectivement quatre doigts et trois griffes chacune. Une flamme brûle au bout de la svelte queue de Salamèche, et elle flamboie depuis sa naissance. La flamme peut servir d'indication quant à la santé et à l'humeur de Salamèche : elle brûle fièrement quand le Pokémon est en pleine forme, doucement si le Pokémon est faible ou triste, ondoie quand il est heureux et flamboie quand il est en colère. Il est dit qu'un Salamèche meurt si sa flamme s'éteint."
        },
    ];

    public getMockPokemons() : Pokemon[]  {
        return this.pokemons;
    }
}