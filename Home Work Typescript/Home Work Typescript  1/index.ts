
// Exercise 1

function areTheyInLove(flower1: number, flower2: number): boolean {
    return (flower1 % 2 !== flower2 % 2);
  }
  
  // Example usage
  console.log(areTheyInLove(4, 7)); // true
  console.log(areTheyInLove(2, 4)); // false

  
//Exercise 2
// index.ts

// Define the Person interface
interface Person {
    name: string;
    age: number;
    gender: 'male' | 'female';
  }
  
  // Define the filterByProperty function
  function filterByProperty<T extends keyof Person>(
    people: Person[],
    property: T,
    value: Person[T]
  ): Person[] {
    return people.filter(person => person[property] === value);
  }
  
  // Example usage
  const people: Person[] = [
    { name: 'irena ', age: 30, gender: 'female' },
    { name: 'dogi', age: 23, gender: 'male' },
    { name: 'kika', age: 24, gender: 'female' },
  ];
  
  // Filter people by age
  const resultByAge = filterByProperty(people, 'age', 30);
  console.log('Filtered by age:', resultByAge);
  
  // Filter people by gender
  const resultByGender = filterByProperty(people, 'gender', 'female');
  console.log('Filtered by gender:', resultByGender);
  