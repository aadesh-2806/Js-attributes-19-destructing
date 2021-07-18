/////////////////////////////////////////////////////Destructing array////////////////////////////////////////////
const scores = [3985,74597,474757,26469798];

const highScore = scores[0];
const sechighScore = scores[1];

const[gold , silver , bronze]=scores;

/*
gold
3985
silver
74597
bronze
474757
*/
const[fastest ,...everyone_else]=scores;
/*
fastest
3985
everyone_else
(3) [74597, 474757, 26469798]
*/

/////////////////////////////////////////////////////Destructing object////////////////////////////////////////////

movies={
	title:'abraham',
	score: 99,
	tit:'abraha',
	scoz: 98,
     titl:'abrah',
	scoxz: 97
}

const {title,score,tit,scoz,titl}=movies
/*
const {title,score,tit,scoz,titl}=movies
{title: "abraham", score: 99, tit: "abraha", scoz: 98, titl: "abrah", …}
score: 99
scoxz: 97
scoz: 98
tit: "abraha"
titl: "abrah"
title: "abraham"

//in alphabetical order

*/

const {title:name,tit:name_sg}=movies

/*{title: "abraham", score: 99, tit: "abraha", scoz: 98, titl: "abrah", …}
name
"abraham"
name_sg
"abraha"
*/
//////////////////////////////////////////////////////destructing params//////////////////////////////////////////////////////

movies=[
	{
	    title:'abraham',
	    score: 99
	},
	{
	    title:'abraha',
	    score: 89
	},
	{
	    title:'abrah',
	    score: 97
	},
 ]
 movies.filter(({score}) => score >= 90)

 //{score } is destructing para
 /*
 (2) [{…}, {…}]
0: {title: "abraham", score: 99}
1: {title: "abrah", score: 97}
length: 2
__proto__: Array(0)
 */

 movies.map(movie => {
	 return `${movie.title} ${movie.score}`
 } )

 /*
["abraham 99", "abraha 89", "abrah 97"]
0: "abraham 99"
1: "abraha 89"
2: "abrah 97"
length: 3

 */