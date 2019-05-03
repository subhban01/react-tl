import React, {Component} from 'react';
import BEMHelper from 'react-bem-helper';
import moment from 'moment';

let header = new BEMHelper('header');
class Header extends Component {

    render() {
        const {companyInfo} = this.props;
        return (
            <section {...header()}>
                <div {...header('row1')}>
                    <span {...header('company-name')}>{companyInfo.companyName}</span>
                </div>
                <div {...header('row2')}>
                    <span {...header('company-motto')}>{companyInfo.companyMotto}</span>
                    <span {...header('company-estdate')}>Since {moment(companyInfo.companyEst).format('DD/MM/YYYY')}</span>
                </div>
            </section>
        );
    }
}

export default Header;