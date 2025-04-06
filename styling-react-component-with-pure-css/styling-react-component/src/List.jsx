function List(){
    const fruits =['orange','pineApple','mango']
    const listItems = fruits.map(fruit => <li>{fruit}</li>)
    return( <ul>{listItems}</ul>)

}
export default List