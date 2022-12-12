# Javascript arrays, objects gyakorlás

## Példa adat a feladatok megoldásához

```js
const data = {
	allTimeFavoriteBookId: 1,
	authors: [
		{
			authorId: 1,
			name: 'J. K. Rowling',
		},
		{
			authorId: 2,
			name: 'George R. R. Martin',
		},
		{
			authorId: 3,
			name: 'Stephen King',
		},
	],
	books: [
		{
			bookId: 1,
			title: 'Harry Potter és a Bölcsek Köve',
			authorId: 1,
			score: 12,
			releaseDate: 1997,
		},
		{
			bookId: 2,
			title: 'Trónok Harca',
			authorId: 2,
			score: 8,
			releaseDate: 2002,
		},
		{
			bookId: 3,
			title: 'Harry Potter és a Titkok Kamrája',
			authorId: 1,
			score: 16,
			releaseDate: 1998,
		},
		{
			bookId: 4,
			title: 'Tortúra',
			authorId: 3,
			score: 4,
			releaseDate: 1987,
		},
	],
};
```

## Feladatok

1. Írd ki a legtöbben kedvelt könyv címét. (allTimeFavoriteBookId a legtöbbet kedvelt könyv ID-ját tartalmazza.)
Segítség: array.find method

2. Írd ki a legtöbben kedvelt könyv szerzőjének nevét. (authors tömbben lévő authorId-val van kapcsolatban.)
Segítség: array.find method, mindkét esetben

3. Írd ki azoknak a könyvenknek az adatait (cím + szerző) amelyek pontszáma (score) nagyobb mint 8.
Segítség: array.filter method

4. Írd ki azoknak a könyvenknek az adatait (cím + szerző) amelyek megjelenési dátuma 2000 előtt volt.
Segítség: array.filter method
