// React.ts

namespace Subjects {
    export interface Teacher {
      experienceTeachingC?: number;
    }
  
    export class React extends Subject {
      getRequirements(): string {
        return "Here is the list of requirements for React";
      }
      
      getAvailableTeacher(): string {
        if(this.teacher && this.teacher.experienceTeachingC !== undefined) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }
  