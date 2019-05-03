import * as React from 'react';
import {shallow} from 'enzyme';
import Header from '../Header.js';


describe('Header Component', () => {
    it('should render the Header correctly', () => {
        const companyInfo = {
            "companyName": "Waters - Paterson",
            "companyMotto": "mission-critical whiteboard infomediaries",
            "companyEst": "2015-08-08T11:03:26.973Z"
        }

        const wrapper = shallow(
            <Header companyInfo={companyInfo}/>
        );
        expect(wrapper).toMatchSnapshot();
    });
})
;