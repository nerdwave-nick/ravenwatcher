export enum Character {
  Piper = 'the_pied_piper',
  Scarlet = 'scarlet',
  Beowulf = 'beowulf',
  Snowqueen = 'the_snow_queen',
  Aladdin = 'aladdin',
  Melusine = 'melusine',
  Geppetto = 'geppetto',
  Wukong = 'sun_wukong',
  Carmilla = 'carmilla',
  Romeo = 'romeo',
  Juliet = 'juliet',
}

export type CharacterInfo = {
  name: string
  breadcrumb: string
}

export function getCharacterWikiRoute(c: Character): string {
  return `/ravenswatch/wiki/heroes/${c}`
}

export const CharacterRoutes: { [k in Character]: CharacterInfo } = {
  [Character.Scarlet]: {
    name: 'Scarlet',
    breadcrumb: 'scarlet',
  },
  [Character.Piper]: {
    name: 'The Pied Piper',
    breadcrumb: 'the pied piper',
  },
  [Character.Beowulf]: {
    name: 'Beowulf',
    breadcrumb: 'beowulf',
  },
  [Character.Snowqueen]: {
    name: 'The Snow Queen',
    breadcrumb: 'the snow queen',
  },
  [Character.Aladdin]: {
    name: 'Aladdin',
    breadcrumb: 'aladdin',
  },
  [Character.Melusine]: {
    name: 'Melusine',
    breadcrumb: 'melusine',
  },
  [Character.Geppetto]: {
    name: 'Geppetto',
    breadcrumb: 'geppetto',
  },
  [Character.Wukong]: {
    name: 'Sun Wukong',
    breadcrumb: 'sun wukong',
  },
  [Character.Carmilla]: {
    name: 'Carmilla',
    breadcrumb: 'carmilla',
  },
  [Character.Romeo]: {
    name: 'Romeo',
    breadcrumb: 'romeo',
  },
  [Character.Juliet]: {
    name: 'Juliet',
    breadcrumb: 'juliet',
  },
}
