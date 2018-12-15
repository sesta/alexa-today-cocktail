interface Cocktail {
  name: string
  description: string
}

export function getCocktail(): Cocktail {
  const cocktailIndex = Math.floor(Math.random() * cocktails.length)

  return cocktails[cocktailIndex]
}

const cocktails: Cocktail[] = [
  {
    description: '甘くフルーティーかつアルコール度数も控えめで、お酒が弱い人にもおすすめです。カシスリキュールとオレンジジュースで作ることができます。',
    name: 'カシスオレンジ',
  },
  {
    description: 'フルーティーですが甘さが控えめで、さっぱりと飲めます。カシスリキュールとグレープフルーツジュースで作ることができます。',
    name: 'カシスグレープフルーツ',
  },
  {
    description: '',
    name: '',
  },
]
