function List(){
    const fruits =['orange','pineApple','mango']
    const listItems = fruits.map(fruit => <li>{fruit}</li>)
    return( <ol>{listItems}</ol>)

}
export default List