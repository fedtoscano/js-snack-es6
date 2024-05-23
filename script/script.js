const guests = [
    {tableName:"Tavolo Vip",guestName:"Brad Pitt",place:1},
    {tableName:"Tavolo Vip",guestName:"Johnny Depp",place:2},
    {tableName:"Tavolo Vip",guestName:"Lady Gaga",place:3},
    {tableName:"Tavolo Vip",guestName:"Cristiano Ronaldo",place:4},
    {tableName:"Tavolo Vip",guestName:"Georgina Rodriguez",place:5},
    {tableName:"Tavolo Vip",guestName:"Chiara Ferragni",place:6},
    {tableName:"Tavolo Vip",guestName:"George Clooney",place:7},
    {tableName:"Tavolo Vip",guestName:"Amal Clooney",place:8},
    {tableName:"Tavolo Vip",guestName:"Fedez",place:9},
    {tableName:"Tavolo Vip",guestName:"Amadeus",place:10},
    {tableName:"Tavolo Vip",guestName:"Fiorello",place:11},
]

const typographyList = guests.map((guest)=>{
    console.log(`${guest.guestName} - ${guest.tableName} at place ${guest.place}`)
})

const students = [
    { Id: 213, Name: "Giuseppina della Rovere", Grades: 78 },
    { Id: 110, Name: "Paola Cortellessa", Grades: 96 },
    { Id: 250, Name: "Andrea Mantegna", Grades: 48 },
    { Id: 145, Name: "Gaia Borromini", Grades: 74 },
    { Id: 196, Name: "Luigi Grimaldello", Grades: 68 },
    { Id: 102, Name: "Piero della Francesca", Grades: 50 },
    { Id: 120, Name: "Francesca da Polenta", Grades: 84 }
];

const uppercaseList = students.map((student) =>{
    console.log(student.Name.toUpperCase())
})

const gradesOver70 = students.filter((student) =>{
    if(student.Grades>70)
        return true
})

console.log(gradesOver70)

const gradesAndID = students.filter((student) =>{
    if(student.Grades>70 && student.Id>120)
        return true
})

console.log(gradesAndID)