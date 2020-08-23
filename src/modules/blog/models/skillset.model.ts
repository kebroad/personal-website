export class SkillSet{
    skillList : string[];
    skillSetName : string;
    
    constructor(skillSetName: string, skillList: string[]){
        this.skillSetName = skillSetName;
        this.skillList = skillList;
    }

}