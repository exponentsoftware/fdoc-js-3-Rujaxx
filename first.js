// Destruction of Arrays
let student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

let [names,skills,scores]= student

let [,,jsScores,reactScores] = scores

console.log(names,skills,scores)
console.log(jsScores,reactScores)

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]]


const convertArrayToObject = (array) => {
    const result = array.map((item) => {
        const newObj = {
        name: item[0],
        skills: item[1],
        scores: item[2],
    };
return newObj;
});
return result;

}
console.log(convertArrayToObject(students))

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

let copiedStudent = Object.assign({}, student);

copiedStudent.skills.frontEnd.push([{skill:"BootStrap",level:8}])
copiedStudent.skills.backEnd.push([{skill:"Express",level:9}])
copiedStudent.skills.dataBase.push([{skill:"SQL",level:9}])
copiedStudent.skills.dataScience.push("SQL")


console.log(copiedStudent);

objectKeyLenght = Object.keys(copiedStudent).length
console.log(objectKeyLenght)

objectValueLenght = Object.values(copiedStudent).length
console.log(objectValueLenght)

skillsKeysLenght = Object.keys(copiedStudent.skills).length
console.log(skillsKeysLenght)

skillsKeysLenght = Object.keys(copiedStudent.skills).length
console.log(skillsKeysLenght)

console.log(copiedStudent.hasOwnProperty('graphicDesign'));