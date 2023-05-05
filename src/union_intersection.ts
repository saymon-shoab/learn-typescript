type NoobDeveloper = {
    name: string,
}

type JuniorDev = NoobDeveloper &{
    expertise: string;
    experieence: number;
}

enum Level{
    junior= 'junior',
    mid='mid',
    senior='senior'
}

type NextLevelDeveloper = JuniorDev & {
    leadershipExperience: number,
    level: Level
}

const newDeveloper: NoobDeveloper | JuniorDev = {
    name: 'mojnu',
    expertise: 'javascript',
    experieence: 1,
}

const developer: NextLevelDeveloper = {
    name: 'saymon shoab',
    expertise: 'typescript',
    experieence: 1.4,
    leadershipExperience: 1,
    level: Level.junior,
}