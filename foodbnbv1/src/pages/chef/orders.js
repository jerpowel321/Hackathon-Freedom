import React from 'react'

const IndOrder = ({props}) => 
    <

class Orders extends React.Component {

    render(){
        return (
            <div className='row'>
                <div id='orders' className='col'>
                    <h3>Saved Meals</h3>
                    {privateItems.map((meal, i) =>(
                            <div key={i} onClick={(e) => this.toggleStatus(meal['id'])}>
                                <MenuItem props={meal} />
                            </div>
                    ))}
                </div>
            </div>
        )
    }
}