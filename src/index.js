export class Team {
    constructor() {
        this.members = new Set();
    }
    
    add(character) {
        if (this.members.has(character)) {
          throw new Error('Персонаж уже есть в команде');
        }
        this.members.add(character);
    }

    addAll(...elem) {
        elem.forEach(e => this.members.add(e));
    }

    toArray() {
        return Array.from(this.members);
    }
}