interface SkillsMember {
    name: string;
    age: number;
    email: string;
}

function createSkillsMember(name: string, age: number, email: string): SkillsMember {
    return { name, age, email };
}
