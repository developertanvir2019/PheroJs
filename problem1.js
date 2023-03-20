function vaxTrail(persons) {
    const A = [];
    const B = [];
    const C = [];
    const D = [];

    for (let i = 0; i < persons.length; i++) {
        const { name, age, temperature } = persons[i];

        if (age >= 20 && age <= 30 && temperature < 100) {
            A.push({ name, age, temperature });
        } else if (age >= 31 && age <= 40 && temperature < 100) {
            B.push({ name, age, temperature });
        } else if (age >= 41 && age <= 50 && temperature < 100) {
            C.push({ name, age, temperature });
        } else if (temperature >= 100) {
            D.push({ name, age, temperature });
        }
    }
    A.sort((a, b) => a.age % 2 === 0 ? (b.age % 2 === 0 ? a.age - b.age : -1) : 1);
    B.sort((a, b) => a.age % 2 === 0 ? (b.age % 2 === 0 ? a.age - b.age : -1) : 1);
    C.sort((a, b) => a.age % 2 === 0 ? (b.age % 2 === 0 ? a.age - b.age : -1) : 1);
    D.sort((a, b) => a.age % 2 === 0 ? (b.age % 2 === 0 ? a.age - b.age : -1) : 1);

    return { A, B, C, D };
}

const answer = vaxTrail([
    { name: 'Nayem', age: 50, temperature: 100 },
    { name: 'Sabnaj', age: 51, temperature: 101 },
    { name: 'Rahul', age: 37, temperature: 99 },
    { name: 'Kabir', age: 36, temperature: 99 },
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'Kat', age: 41, temperature: 98 },
    { name: 'Paul', age: 42, temperature: 98 },
])
console.log(answer);