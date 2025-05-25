export type Character =
  | 'piper'
  | 'scarlet'
  | 'beowulf'
  | 'snowqueen'
  | 'aladdin'
  | 'melusine'
  | 'geppetto'
  | 'wukong'
  | 'carmilla'
  | 'romeo'
  | 'juliet'
export const AvailableCharacters: {
  id: Character
  name: string
  description: string
  route: string
}[] = [
  {
    id: 'scarlet',
    name: 'Scarlet',
    description: 'Some lil angy girl',
    route: '/ravenswatch/wiki/heroes/scarlet',
  },
  {
    id: 'piper',
    name: 'The Pied Piper',
    description: 'Some twink',
    route: '/ravenswatch/wiki/heroes/piper',
  },
  {
    id: 'beowulf',
    name: 'Beowulf',
    description: 'Bimg man stronk',
    route: '/ravenswatch/wiki/heroes/beowulf',
  },
  {
    id: 'snowqueen',
    name: 'The Snow Queen',
    description: 'Icy bitch',
    route: '/ravenswatch/wiki/heroes/snowqueen',
  },
  {
    id: 'aladdin',
    name: 'Aladdin',
    description: 'Agile boi',
    route: '/ravenswatch/wiki/heroes/aladdin',
  },
  {
    id: 'melusine',
    name: 'Melusine',
    description: 'Fisk lady',
    route: '/ravenswatch/wiki/heroes/melusine',
  },
  {
    id: 'geppetto',
    name: 'Geppetto',
    description: 'Should have one less p',
    route: '/ravenswatch/wiki/heroes/geppetto',
  },
  {
    id: 'wukong',
    name: 'Sun Wukong',
    description: 'Monke',
    route: '/ravenswatch/wiki/heroes/wukong',
  },
  {
    id: 'carmilla',
    name: 'Carmilla',
    description: 'Will bite you',
    route: '/ravenswatch/wiki/heroes/carmilla',
  },
  {
    id: 'romeo',
    name: 'Romeo',
    description: 'Chill guy I guess',
    route: '/ravenswatch/wiki/heroes/romeo',
  },
  {
    id: 'juliet',
    name: 'Juliet',
    description: 'Will fuck you up if you hurt romeo',
    route: '/ravenswatch/wiki/heroes/juliet',
  },
]
