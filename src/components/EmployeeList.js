import React from 'react';
import BEMHelper from 'react-bem-helper';

let employeeList = new BEMHelper('employee-list');
class EmployeeList extends React.Component {

    constructor(props) {
        super(props);
        this.onCardClick = this.onCardClick.bind(this);
        this.state = {
            activeItem: -1
        }
    }

    onCardClick(event, index) {
        this.setState({
            activeItem: index
        })
        this.props.showModalPopUp(index);
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.modalOpen) {
            this.setState({
                activeItem: -1
            })
        }
    }

    render(){
        const {employees} = this.props;
        const {activeItem} = this.state;
        const employeeItems = employees.map((employee, index) => {
            return (
                <article {...employeeList('card', '', activeItem === index ?'selected-item' : '')} key={index}>
                    <a {...employeeList('card-anchor')} onClick={(event) => this.onCardClick(event, index)}>
                        <figure {...employeeList('thumbnail')}>
                            <img {...employeeList('thumbnail-img')} src={employee.avatar}/>
                        </figure>
                        <div {...employeeList('card-content')}>
                            <div {...employeeList('card-content', '', 'content-header')}>
                                <span {...employeeList('card-content', '', 'first-name')}>{employee.firstName}</span>
                                <span {...employeeList('card-content', '', 'last-name')}>{employee.lastName}</span>
                            </div>
                            <p {...employeeList('card-content', '', 'paragraph')}>{employee.bio}</p>
                        </div>
                    </a>
                </article>
            )
        });

        return (
            <div {...employeeList('main-area')}>
                <div {...employeeList('main-area', 'centered')}>
                    <section {...employeeList('cards')}>
                        {employeeItems}
                    </section>
                </div>
            </div>
        );
    }
}

export default EmployeeList;