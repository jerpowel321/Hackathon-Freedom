import React from 'react'

const MenuItem = ({props}) =>
    <div className="card text-white bg-primary mb-3 w-50">
        <div className="card-header">{props.cuisine} cuisine made by {props.chef}</div>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <h6 className="card-text">{props.description}</h6>
        </div>
    </div>

class Dashboard extends React.Component{

    constructor(props){
        super(props)
        this.toggleStatus = this.toggleStatus.bind(this)
    }

    state = {
        'items':[
            {
                'id':0,
                'chef':'Aryan',
                'name':'Chicken Biryani',
                'cuisine': 'Indian',
                'description': 'Spicy Rice with tender chicken',
                'public':false
            },
            {
                'id':1,
                'chef':'Aryan',
                'name':'Chicken Noodle Soup',
                'cuisine': 'Asian',
                'description': 'Udon Noodles served in chicken broth and an assortment of vegetables',
                'public': false
            },
            {
                'id':2,
                'chef':'Aryan',
                'name':'Peanut Butter Sandwich',
                'cuisine': 'American',
                'description': 'Peanut Butter and Jam spreads on toasted whole wheat bread',
                'public': false
            }
        ]
    }

    toggleStatus(i){
        let newItems = this.state.items
        console.log(newItems)
        console.log(i)
        console.log(newItems[i])
        newItems[i]['public'] = !newItems[i]['public']
        this.setState({
            'items': newItems
        })
    }

    render() {
        let privateItems = []
        let publicItems = []
        console.log(publicItems)
        this.state.items.map((meal) => (
            meal.public 
            ? publicItems.push(meal)
            : privateItems.push(meal) 
        ))

        return (
            <div className='row'>
                <div id='privateItems' className='col'>
                    <h3>Saved Meals</h3>
                    {privateItems.map((meal, i) =>(
                            <div key={i} onClick={(e) => this.toggleStatus(i)}>
                                <MenuItem props={meal} />
                            </div>
                    ))}
                </div>
                <div id='publicMenu' className='col'>
                    <h3>Public Meal</h3>
                    {publicItems.map((meal, i) =>(
                        <div key={i} onClick={(i) => this.toggleStatus(i)}>
                            <MenuItem props={meal} />
                        </div>
                    ))}

                </div>
            </div>
        )
    }
}
    
export default Dashboard