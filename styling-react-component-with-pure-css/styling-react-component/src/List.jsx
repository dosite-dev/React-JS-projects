function List(){
    const fruits =[{id:1, name:'orange',calories:20},
                    {id:2,name:'pineApple',calories:90},
                    { id:3, name:'mango',calories:60}
                ]
    fruits.sort((a,b)=>a.name.localeCompare(b.name))//Alphabetical
    fruits.sort((a,b)=>b.name.localeCompare(a.name))//Reverse Alphabetical
    fruits.sort((a,b)=>a.calories-b.calories)//numbers


    const lowCalFruits = fruits.filter(fruit => fruit.calories > 50)


    const listItems =lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.name}>
                                            {lowCalFruit.name}:&nbsp;
                                            <b>{lowCalFruit.calories}</b>
                                        </li>)


    return( <ol>{listItems}</ol>)

}
export default List