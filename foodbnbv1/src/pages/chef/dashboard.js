import React from 'react'
import API from "../../utils/API";

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

    componentWillMount() {
        API.getChefById(1).then(done => {
            const chef = JSON.parse(done.request.response);

            API.getAvailableMeals().then(done => {
                if (done.status == 200) {
                    const response = JSON.parse(done.request.response);
                    const result = new Array(response.length);
                    response.map((order, index) => {
                        result[index] = {
                            "id": order.id,
                            "chef": chef.name,
                            "name": order.name,
                            "cuisine": order.tags,
                            "description": order.description,
                            "public": order.status != "private"
                    }});

                    this.setState({ "items": result });
                }
                else {
                    console.error("Failed received " + done.status)
                }
            })
        });
    }

    render() {
        let privateItems = []
        let publicItems = []
        console.log(publicItems)

        if (this.state.items == undefined) {
            return (
                <div>Fetching data</div>
            )
        }

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
                            <div key={i} onClick={(e) => this.toggleStatus(meal['id'])}>
                                <MenuItem props={meal} />
                            </div>
                    ))}
                </div>
                <div id='publicMenu' className='col'>
                    <h3>Public Meal</h3>
                    {publicItems.map((meal, i) =>(
                        <div key={i} onClick={(e) => this.toggleStatus(meal['id'])}>
                            <MenuItem props={meal} />
                        </div>
                    ))}

                </div>
            </div>
        )
    }
}
    
export default Dashboard