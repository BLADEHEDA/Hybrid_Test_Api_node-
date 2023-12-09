const todos =[
    { id: 1, description: 'Complete homework', status: 'not done' },
    { id: 2, description: 'Go for a run', status: 'not done' },
    { id: 3, description: 'Read a book', status: 'done' },
    { id: 4, description: 'Buy groceries', status: 'not done' },
    { id: 5, description: 'Write a blog post', status: 'done' },
    { id: 6, description: 'Attend meeting', status: 'not done' },
    { id: 7, description: 'Clean the house', status: 'done' },
    { id: 8, description: 'Practice coding', status: 'not done' },
    { id: 9, description: 'Plan weekend activities', status: 'not done' },
    { id: 10, description: 'Watch a movie', status: 'done' }
  ];
function getAllTodos(){
  console.log(todos);
  return todos
}

module.exports = {
  getAllTodos,
}