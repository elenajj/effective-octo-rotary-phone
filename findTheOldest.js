const people = [
    {
      name: 'Carly',
      yearOfBirth: 2018,
    },
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      yearOfDeath: 1941
    },
  ]


    let orderedOldest = people.sort((a,b) => {
        let firstPerson = (a.yearOfDeath || new Date().getFullYear()) - (a.yearOfBirth|| new Date().getFullYear());
        let secPerson = (b.yearOfDeath || new Date().getFullYear()) - (b.yearOfBirth|| new Date().getFullYear());
        return firstPerson < secPerson ? 1: -1;
      }


//module.exports = findTheOldest
