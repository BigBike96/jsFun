const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties
                    .filter(kitty => kitty.color === 'orange')
                    .map(kitty => kitty.name);
    console.log(result);
    return result;

    // Annotation:
    // Take in an array of kitties objects, return an array of the names of the kitties that are orange
    // Use .filter() method to iterate through the array of kitties
    // For each iteration, return only orange kitties
    // Use a map (method) to return the kitty name for each element
  },

  sortByAge() {
    // Sort the kitties by their age
    //.sort((a, b) => b - a)
    const sortByAge = kitties.sort((firstKitty, nextKitty) => nextKitty.age - firstKitty.age);
    console.log(sortByAge);
    return sortByAge;

    // const arrangeKitties = kittens.sort((kittenA, kittenB) => a - b);
    // return arrangeKitties

    // // Annotation:
    // Take in array of kitties objects, return kitties sorted by age
    // Use sort method to order kittys from oldest to youngest
    // return sorted array
  },

  growUp() {
    // iterate over kitties using map adding 2 to age

    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map(element => {

      element.age += 2;
      return element;
    });
    return result;

    // Take in array of kitties objects, return kitties with age increased two years
    // Use map method to iterate throught kitties
    // Add two years to each kitties age
    // return kitty
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------



// DATASET: clubs from ./datasets/clubs
const clubPrompts = {

  membersBelongingToClubs(clubMembers) {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. reduce()

    // or... iterate clubMembers and filter names
    // const namesAndClubs = clubMembers.reduce((acc, element) => {
    //   acc
    //   return acc;
    // },[]);
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }  /3'

    console.log(clubMembers);

    const result = Object.values(clubs)
    console.log(result);
    return result;

    // Annotation:
    // input: array of objects with 2 key value pairs
    // output: object with name values as keys
          // club as values
    // destructure members into keys
    // assign the sport
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






    // DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]
    // iterate over mods and divide studens by instructors using reduce()
    //  set this value to studentsPerMod and return array of objects
        const studentTeacherRatio = mods.map(element => {
          const modInfo = { mod: element['mod'], studentsPerInstructor : element['students'] / element['instructors']};
          return modInfo;
        })
        return studentTeacherRatio;


    // const result = mods.map(e => {
    //   let obj = {mod : e.mod , studentsPerInstructor : e.students / e.instructors};
    //   return obj;
    // });
    // return result;

    // Annotation:
    // Iterate through mods array
    // on each element, divide students by instructors
    // return new array of objects
    // mpa, reduce
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {


    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // use map to assign flavor to cakes.cakeFlavor and inStock to cakes.inStockCakes
    const findFlavorAndQuanity = cakes.map(cake => {
      const flavorAndQuanity = {flavor : cake.cakeFlavor, inStock : cake.inStock};
      return flavorAndQuanity;
    })
    return findFlavorAndQuanity;
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]



    //
    // const result = cakes.map(e =>  ({flavor : e.cakeFlavor, inStock : e.inStock}));
    // return result;

    // Annotation:
    // iterate over cakes with filter
    // find cakeFlavor string and inStock number
    // return array of objects with flavor and inStock properties
  },

  onlyInStock() {


    // Return an array of only the cakes that are in stock
    // iterate over cakes and return filtered array of cakesInStock

    const getCakeInStock = cakes.filter(cake => cake.inStock > 0);
    return getCakeInStock;
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    // Answer:
    // console.log(cakes);
    // const inStockCakes = cakes.filter(cake => cake.inStock > 0);
    //
    // const result = inStockCakes;
    // return result;

    // Annotation:
    // Iterate over cakes array and filter
    // return all cakes that are inStock
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59
    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<STUCK>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    const findTotalCakes = cakes.reduce((totalCakes, cake) => {
      totalCakes += cake.inStock;
      return totalCakes;
    },0);
    return findTotalCakes;



    // const totalCakeInStock = cakes.reduce((acc, cake) => {
    //    acc += cake.inStock
    //    return acc;
    // },0);
    // const result = totalCakeInStock;
    // return result;

    // Annotation:
    // Iterate over cakes and reduce total cakes inStock
    // }

  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]
    // iterate cakes with reduce
    // check if each cake.toppings includes what is in the accumulator array

    // const result = cakes.reduce((topList, cake) => {
    //   console.log(cake.toppings);
    //
    //   topList += cake.toppings;
    //   // finalList.includes
    //   console.log(topList);
    //   return topList;
    // },[])
    //     const toppings = [];
    //
    // const result = cakes.forEach((cake) => {
    //   cake.toppings.forEach((topping) => {
    //     if(!toppings.inculdes(topping)) {
    //       toppings.push(topping);
    //     }
    //   })
    // })
    // result()

    //
    // cakes.forEach(cake => {
    //   if (!arrToppings.includes(cake.toppings)) {
    //     arrToppings.push(...cake.toppings)
    //   }
    // });
    // const removeDuplicates = arrToppings.reduce((newArray, topping) => {
    //
    //   return array;
    // },[])
    // console.log(arrToppings);
    // return arrToppings;
    // return spread;

    // const result = [];
    // const findTopping = () => {
    //   cakes.forEach(cake => {
    //   if (!result.includes(cake)) {
    //     result.push(cake)
    //   }
    //   });
    // }
    // return result;

    // Annotation:
    // find,
    // iterate over cakes
    // iterate over toppings

  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.

    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    // Annotation: iterate cakes
    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;


  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]
    // iterate over classrooms and filter all FE classes

    const result = classrooms.filter(room => {
      return room.program === 'FE';
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }
    // iterate classrooms and reduce to object with keys feCapacity and beCapacity to total values
    let fCap = 0;
    let bCap = 0;
    const result = classrooms.reduce((objCap, room) => {
      if (room.program === 'FE') {
        fCap += room.capacity
      } else {
        bCap += room.capacity
      }
      objCap = {feCapacity : fCap, beCapacity : bCap};
      return objCap;
    },{})
      // const cap = {feCapacity : `${room.program === 'FE' ? ++capacity : null}`, beCapacity : `${room.program === 'BE' ? ++capacity : null}`};


    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)
    // iterate classrooms and return rooms, sorted least to greatest
    const result = classrooms.sort((room1, room2) => {


      const orderedList = room1.capacity - room2.capacity;
      console.log(orderedList);
      return orderedList;
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime.
    // iterate books and reduce to array with no true crime or horror

    const result = books.reduce((array, book) => {
       !book.genre.includes('True Crime') && !book.genre.includes('Horror') ? array.push(book.title) : null;
       return array;
    },[])
    // Eg:
    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

    // const result = books.reduce((acc, book) => {
    //   !book.genre.includes('Horror') || !book.genre.includes('True Crime') ? acc.push(book.title) : null;
    //   return acc;
    // }, []);
    // return result;


    // const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    // iterate books. reduce to title and year properties for each year greater than 1990


    const result = books.reduce((arrOfObj, book) => {
      book['published'] > 1990 ? arrOfObj.push({ title: book.title, year: book.published}) : null;
      return arrOfObj;
    },[])
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]
    // iterate weather, get temperature key, find average of values and return averages

    const result = weather.map(city => (city.temperature.high + city.temperature.low) / 2
    );
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]
    // iterate weather, get location and types sunny and mostly sunny and interpolate values into string
    const sunnyIsh = [];
      const result = weather.forEach(city => {
      city.type.includes('sunny') ? sunnyIsh.push(`${city.location} is ${city.type}.`) : null;
    });

      return sunnyIsh;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }
    // iterate weather, compare humidity values,
    // find highst value and return city element

    const humidNums = [];
    weather.forEach(city => humidNums.push(city.humidity));
    const highToLow = humidNums.sort();
    const highHumid = highToLow.pop();
    const result = weather.find(city => city.humidity === highHumid);
    return result;

    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    const visited  = [];
    const notVisited  = [];
    nationalParks.forEach(park => {
      park.visited ? visited.push(park.name) : notVisited.push(park.name);
    });


    return {parksToVisit : notVisited, parksVisited : visited};

    // Annotation: iterate nationalParks. for each park, send to correct visit array
    // assign arrays to keys and return in object
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    const result = nationalParks.map(park => {
      const obj = {};
      obj[park.location] = park.name;
      return obj;
    })

    return result;

    // Annotation:
    // iterate nationalParks, on each park get name and location
    //  set location as key and name as value
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = [];
    nationalParks.forEach(park => {
      park.activities.forEach(activity => {
        result.includes(activity) ? null : result.push(activity);
      });
    });
    return result;

    // Annotation:
    // Iterate nationalParks and go to 'activities' key in park object
    // return array of activities all strings, minus duplicates
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((total, brewery) => {
      total += brewery.beers.length;
      return total;
    }, 0);
    return result;

    // Annotation:
    // iterate breweries, on each brewery, get to beers array length
    // return total of all lengths
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map(brewery => {
      return { name : brewery.name,  beerCount : brewery.beers.length };
    });
     return result;

    // Annotation:
    // iterate breweries, create empty object
    // assign brewery name to object key
    // assign length of beers to object value
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
    const result = breweries.filter(brewery => {
      const sorted = brewery.beers.sort((beer, nextBeer) => beer.ibu - nextBeer.ibu);

    });
    return result;
    // Annotation:
    // iterate breweries, find beers and iterate to find and return highest ABV beer
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.reduce((newArray, instructor) => {
      let instructorCount = {};
      cohorts.find(cohort => {
        if (cohort.module === instructor.module) {
          instructorCount = { name: instructor['name'], studentCount: cohort['studentCount']};
          newArray.push(instructorCount);
        }
      });
      return newArray;
    },[]);

    console.log(result);
    return result;

    // Annotation:
    // iterate instructors, find name and module
    // iterate cohorts, match module then find student count
    // return teacher name to studnetCount
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 15,
    // cohort1804: 7
    // }

    const result = cohorts.reduce((studPerTeach, cohortInfo) => {
      const teacherPerMod = instructors.reduce((totalTeachers, instructor) => {
        instructor['module'] === cohortInfo['module'] ? totalTeachers ++ : null;
        return totalTeachers;
      },0);
      studPerTeach[`cohort${cohortInfo['cohort']}`] = cohortInfo['studentCount'] / teacherPerMod ;
      return studPerTeach;
    },{});
    return result;

    // Annotation:
    // iterate cohorts, get to module and studentCount
    // iterate instructors, match module and increment counter
    // divide studentCount by counter, set to object value
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = instructors.reduce((skillsLObj, instructor) => {
      const modNums = instructor['teaches'].reduce((arrayOfModNums, subject) => {
        cohorts.forEach(cohort => {
          if (cohort['curriculum'].includes(subject) && !arrayOfModNums.includes(cohort['module'])) {
            arrayOfModNums.push(cohort['module']);
          }
        });
        return arrayOfModNums;
      },[]);
      skillsLObj[instructor['name']] = modNums.sort();
      return skillsLObj;
    },{});
    return result;

    // Annotation:
    // iterate instructors, find and iterate teaches
    // iterate cohorts, find and iterate curriculum and match with iterate teaches
    // return module numbers in an array set to the teacher name
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }
    const listOfSubjects = [];
    cohorts.forEach(cohort => cohort['curriculum'].forEach(subject => {
      if (!listOfSubjects.includes(subject)) {
        listOfSubjects.push(subject);
      }
    }));
    const result = listOfSubjects.reduce((obj, subject) => {
      const arrayOfInstructors = instructors.reduce((arr, instructor) => {
        instructor['teaches'].forEach(subj => {
          if (subj === subject) {
            arr.push(instructor.name);
          }
        });
        return arr;
      },[]);
      obj[subject] = arrayOfInstructors;
      return obj;
    },{});
    return result;

    // Annotation:
    // iterate cohorts and make array of all subjects
    // iterate instructors. get teaches and compare with subject
    // add instructor name to array if match
    // add array as value to subject key
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]
    const bossesArray = Object.values(bosses);
    const bossNameArray = [];
    bossesArray.forEach(boss => bossNameArray.push(boss.name));
    const result = bossNameArray.reduce((arr, bossName) => {
      let sidekickLoyalTotal = 0;
      const bossObj = sidekicks.reduce((obj, sidekick) => {
        if (sidekick.boss === bossName) {
            sidekickLoyalTotal += sidekick.loyaltyToBoss;
        }
        obj = { bossName : bossName, sidekickLoyalty : sidekickLoyalTotal };
        return obj;
      },{})
      arr.push(bossObj);
      return arr;
    },[])


    return result;

    // Annotation:
    // search bosses, find name value for each object and push to array
    // assign each name to a bossName
    // assign sum of loyalty from iterating sidekicks and totaling loyalty to boss
    // return array of objects
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    let eachConst = Object.values(constellations);
    eachConst.forEach()
    const result = stars.reduce((arr, star) => {
      // eachConst.stars
      return arr;
    },[]);
    return result;

    // Annotation:
    // search constellations, on each constellations, find the stars key
    // itereate stars array(not in constellations) if name matches star from consellation, push star
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }
    const colors = [];
    stars.forEach(star => {
      if (!colors.inculdes(star.color)) {
        colors.push(star.color);
      }
    })


    console.log(colors);

    const starColors = colors.reduce((obj, color) => {
      const starArray = stars.reduce((array, star) => {
        if (color === star.color ) {
          obj[star]
        }
        return array;
      },[])
      return obj;
    },{})

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // iterate stars, get color
    // set color as object keys
    // iterate stars and push corisponding stars to array
    // output: object with color keys and array values
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
