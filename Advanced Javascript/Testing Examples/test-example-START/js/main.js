// for the first test write the test first 

export function addNumbers(...numbers) {
	let total = 0;
	numbers.forEach((number) => {
		total += number;
	});
	return total;
};


export function getAnimalOwner() {
	return {
		'name': 'Dan',
		'animals': [
			{
				'name': 'Marshmallow',
				'color': 'White',
				'animal_type': 'cat'			
			},
			{
				'name': 'Ghost',
				'color': 'Beige',
				'animal_type': 'cat'				
			},
			{
				'name': 'Gambit',
				'color': 'Beigeish white kind of',
				'animal_type': 'cat'			
			},
			
		]
	}
}
