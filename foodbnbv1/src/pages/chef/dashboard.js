import React from 'react'
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"

const MenuItem = ({props}) =>
    <div>
        <div className="card-header">{props.name}</div>
        <div className="card-body">
            <h5 className="card-title">{props.description}</h5>
            <h6 className="card-text">{props.chef}</h6>
        </div>
    </div>

class Dashboard extends React.Component{

    constructor(props){
        super(props)
        this.toggleStatus = this.toggleStatus.bind(this)
    }

    

    state = {
        'items':[],
        'currIndex': 0
    }

    toggleStatus(i){
        let newItems = this.state.items
        console.log(newItems)
        console.log(i)
        console.log(newItems[i])
        newItems[i]['public'] = !newItems[i]['public']
        this.setState({
            'items': newItems,
            'currIndex': i
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
                            "index": index,
                            "id": order.id,
                            "chef": chef.name,
                            "name": order.name,
                            "cuisine": order.tags,
                            "description": order.description,
                            "public": false
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
        console.log(this.state.items)


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
            <div>
                <Nav/>
                <div className='text-center'>
                    <h1 className='text-success mb-5'>Chef Dashboard</h1>
                    <div className='row mt-5'>
                        <div className='col-1'></div>
                        <div id='privateItems' className='col-4 border text-center'>
                            <h3 className='mt-2 mb-2 text-warning'>Saved Meals</h3>
                            <Link to='./jobpost'>Add a Meal</Link>
                            {privateItems.map((meal, i) =>(
                                    <div className="card text-white bg-success mb-3 w-100" key={i}>
                                        <MenuItem props={meal} />
                                        <button type="button" class="btn btn-primary" onClick={(e) => this.toggleStatus(meal['index'])}>Add this Meal</button>
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit Meal</button>
                                    </div>
                            ))}
                        </div>
                        <div className="col-1"></div> 
                        <div id='publicMenu' className='col-5 border text-center'>
                            <h3 className='mt-2 text-warning'>Public Menu</h3>
                            {publicItems.map((meal, i) =>(
                                <div className="card text-white bg-success mb-3 w-100" key={i} onClick={(e) => this.toggleStatus(meal['index'])}>
                                    <MenuItem props={meal} />
                                </div>
                            ))}

                        </div>    
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit Meal</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className='signuppage text-center sticky-top'>
                                    <form>
                                        <h1 className='text-success'>Meal Profile</h1>
                                        <div className="form-group row">
                                            <div className='col-sm-3'></div>
                                            <div className='col-sm-6'>
                                                <label for="Profile" className>Meal Name</label>
                                                <input type="text" class="form-control" value='Fried Calimari'/>
                                            </div>
                                            <div className='col-sm-3'></div>
                                        </div>
                                        <div className="form-group justify-content-center">
                                            <label for="Profile" >Meal Picture</label>
                                            <div className="row text-center">
                                                <input type="file" className="form-control-file col-sm-6"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="Profile">Short Meal Description</label>
                                            <textarea class="form-control" value="This is a savory sea food dish..." rows="3"></textarea>
                                        </div>
                                        <div className="form-group row">
                                            <div className="form-group col-sm-6">
                                                <label for="Profile">Main Cuisine</label>
                                                <select class="form-control">
                                                    <option>American</option>
                                                    <option>Indian</option>
                                                    <option selected>Asian</option>
                                                    <option>Mediterranean</option>
                                                    <option>Middle East</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-sm-6">
                                                <label for="Profile">Zip Code</label>
                                                <input type="text" class="form-control" value="94539"/>
                                            </div>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="Profile">Ingredients(comma separated)</label>
                                            <textarea class="form-control" value="Calimari, bread, egg, oil..." rows="3"></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Finalize</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
    
export default Dashboard