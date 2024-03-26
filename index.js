let shoping = [
    {
      name: "momo",
     type:[
        {taste: 'average', restraunt: 'sandar'},
     ],
}, 
{ 
    name: "pizza",
    type:[
        {taste: 'good', restraunt: 'burgerhub'},
    ],
},
] 

console.log(shoping[0].type[0].taste);
shoping[0].type[0].taste = "excellent";
console.log(shoping);
