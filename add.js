const oddnumber = [1,3,5,7,9];
const even = oddnumber.map(n => n+1)

//  numbere.reduce((p, caerwnt)=> p+ caerwnt,0) 
const array = [33,50,79,78,90,101,30]
const tent = array.find(n=> n%10 == 0)
// console.log(tent);
const roud = [33,50,79,78,90,101,30]
const round = roud.reduce((p, c)=> p + c,0)
// console.log(round);




const pople =[
    {name : 'Menge', age: 12},
    {name : 'amit', age: 20},
    {name : 'Ripov', age: 22},
    {name : 'paul', age: 22},
]
    let totals = 0
for (let i = 0; i < pople.length; i++) {
    const element = pople[i];
    const tom =element.age
    totals = totals + tom
    
}

// roud.reduce((p, c)=> p + c,0)

const sum =pople.reduce((p, c)=> p+ c,0)