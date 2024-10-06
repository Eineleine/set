import { Team } from '../index';

test('team create', () => {

    const team = new Team();
    team.add('Ivan');
    team.add('Alex');
    team.addAll('Mary', 'Ivan', 'Ann', 'Elen');
    
    const result = team.toArray();
    const forHceck = ['Ivan', 'Alex', 'Mary', 'Ann', 'Elen']
  
    expect(result).toEqual(forHceck);
  });

test('character already exist', () => {
    const team = new Team();
    team.add('Alex');

    expect(() => team.add('Alex')).toThrow('Персонаж уже есть в команде');
});
