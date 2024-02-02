const inventor = [
  { first: "Mabelle", last: "Brock", year: 1663, passed: 1842 },
  { first: "Myra", last: "Parker", year: 1600, passed: 1809 },
  { first: "Lucas", last: "Holloway", year: 1717, passed: 1823 },
  { first: "Evan", last: "Phelps", year: 1754, passed: 1848 },
  { first: "Elijah", last: "Torres", year: 1711, passed: 1819 },
  { first: "Christine", last: "Kelly", year: 1660, passed: 1811 },
  { first: "Johanna", last: "Huff", year: 1774, passed: 1801 },
];

const people = [
  "Lizzie , Hampton",
  "Elnora , Austin",
  "Randy , Gregory",
  "Ora , Walker",
  "Winifred , Long",
  "Kyle , Castillo",
  "Dennis , Roberts",
  "Victor , Fletcher",
  "Francis , Horton",
  "Vernon , Salazar",
  "Emma , Chapman",
  "Evelyn , Byrd",
  "Emilie , Gomez",
  "Alan , Parsons",
  "Maud , Alvarez",
  "Nathaniel , Hawkins",
  "Hattie , Lambert",
  "Amy , Burke",
  "Richard , Bass",
  "Theresa , Garcia",
  "Luella , Burton",
  "Brent , Garner",
  "Alvin , Foster",
  "Herbert , Watts",
  "Harry , Diaz",
  "Hulda , Snyder",
  "Cole , Moody",
  "Miguel , Murray",
  "Jessie , Neal",
  "Bryan , Thomas",
  "Lily , Lyons",
  "Shane , Rice",
  "Hilda , Goodwin",
  "Celia , Johnson",
  "Lydia , Clarke",
  "Chase , Reese",
  "Leon , Peterson",
  "Nell , Harrison",
  "Luis , Cross",
];

// 1. filter born in the 1600's

// const result = inventor.filter((val)=>val.year >= 1600  && val.year <= 1700)


// 2. map give first nad last name

// const result = inventor.map(val => val.first + ' ' + val.last)


// 3. sort birthdate oldest to youngest

// const result = inventor.sort((a,b)=> a.year > b.year ? 1 :-1)

// 4. how many year  did all the inventore live

// const result = inventor.reduce((a,b)=> {return a+( b.passed - b.year)},0 )


// 5. sort the inventor by year live

// const result = inventor.sort((a,b)=>{
//     const a1 = b.passed - b.year  
//     const a2 = a.passed - a.year
//     return(
//         a1>a2 ?1:-1
//     )
// })


// 6. create a list from web

// const arr = Array.from(document.querySelectorAll('.mw-category-group ul li a'))
// const result = arr.map(link => link.textContent).filter(e => e.includes('result'))



// 7.sort by last name
// const result = people.sort((one , two)=> {
//     const [a1 ,b1 ] = one.split(' , ')
//     const [a2 ,b2 ] = two.split(' , ')
//     // console.log(b);
//     return b1 > b2 ? 1 :-1
// })




// 8. 

const data = ['car', 'data ' ,'car']

const result = data.reduce((a,b)=>{
    if(!a[b]){
        a[b]=0;
    }
    a[b]++
    return a
},{})
console.table(result);