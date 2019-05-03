import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hideModal} from '../actions/modalActions';
import BEMHelper from 'react-bem-helper';
import moment from 'moment';

let modalComp = new BEMHelper('modal-comp');
class ModalComponent extends React.Component {

    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal(){
        this.props.hideModal();
    }

    render(){
        const {modalData} = this.props;
        return (
            <div {...modalComp('overlay', '', this.props.modalOpen ? 'show-modal' : 'hide-modal')}>
                <article {...modalComp('container')}>
                    <span {...modalComp('close-icon')} onClick={this.closeModal}></span>
                    <section {...modalComp('left-section')}>
                        <figure {...modalComp('left-section-figure')}>
                            <img {...modalComp('left-section-img')} src={modalData.avatar}/>
                        </figure>
                        <span {...modalComp('left-section-title')}>Job Title: {modalData.jobTitle}</span>
                        <span {...modalComp('left-section-age')}>Age: {modalData.age}</span>
                        <span {...modalComp('left-section-joined')}>Joined On: {moment(modalData.dateJoined).format('DD/MM/YYYY')}</span>
                    </section>
                    <section {...modalComp('right-section')}>
                        <div {...modalComp('right-section-row')}>
                            <span {...modalComp('right-section-fname')}>{modalData.firstName}</span>
                            <span {...modalComp('right-section-lname')}>{modalData.lastName}</span>
                        </div>
                        <p {...modalComp('right-section-paragraph')}>{modalData.bio}</p>
                    </section>
                </article>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        modalOpen: state.modal.show,
        modalData: state.modal.modalData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hideModal: hideModal
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);