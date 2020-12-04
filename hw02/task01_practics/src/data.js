// Створити масив man. { id, name, age, wife_id }
// Створити масив woman. { id, name, age, husband_id }
//
// Поділити сторінку на 3 колонки, в 1 вивести чоловіків, в 2 жінок.
//     В третю колонку ми виводимо пару ( чоловік + жінка, відповідно до id)
//
// Компоненти - Mans, Man, Womens, Woman, MarriedCouples, MarriedCouple

export let men = [
    {id: 1, name: 'John', age: 29, wife_id: 5},
    {id: 2, name: 'Vasya', age: 35, wife_id: 4},
    {id: 3, name: 'Andre', age: 37, wife_id: 3},
    {id: 4, name: 'Alex', age: 19, wife_id: 2},
    {id: 5, name: 'Petya', age: 25, wife_id: 1},
];

export let women = [
    {id: 1, name: 'Dasha', age: 21, husband_id: 1},
    {id: 2, name: 'Masha', age: 24, husband_id: 2},
    {id: 3, name: 'Sasha', age: 32, husband_id: 3},
    {id: 4, name: 'Glasha', age: 37, husband_id: 4},
    {id: 5, name: 'Dorothy', age: 23, husband_id: 5},
];
