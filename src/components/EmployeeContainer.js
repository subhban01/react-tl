import React from 'react';
import BEMHelper from 'react-bem-helper';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getEmployees} from '../actions/employeeActions';
import {showModal} from '../actions/modalActions';
import Header from './Header.js';
import EmployeeList from './EmployeeList.js';

class EmployeeContainer extends React.Component {

    constructor(props) {
        super(props);
        this.showModalPopUp = this.showModalPopUp.bind(this);
    }

    componentWillMount() {
        //this.props.showModal(true, {id: '10'});
        this.props.getEmployees();
    }

    showModalPopUp (index) {
        const {employees} = this.props.employeeData.employee;
        this.props.showModal(true, employees[index]);
    }

    render() {
        let {employeeData, modalOpen} = this.props;
        let {companyInfo, employees} = employeeData.employee;

        return (
            <div className='main-container'>
                {(Object.keys(employeeData.employee).length !== 0) ?
                    <div>
                        <Header companyInfo={companyInfo}/>
                        <EmployeeList employees={employees} showModalPopUp={this.showModalPopUp} modalOpen={modalOpen}/>
                    </div> : null
                }
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        employeeData: state.employee,
        modalOpen: state.modal.show,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getEmployees: getEmployees,
        showModal: showModal

    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer);