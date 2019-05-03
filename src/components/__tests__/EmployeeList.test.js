import * as React from 'react';
import {shallow} from 'enzyme';
import EmployeeList from '../EmployeeList.js';


describe('EmployeeList Component', () => {
    it('should render the employeeList correctly', () => {
        const employees = [
            {
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/joannefournier/128.jpg",
                "firstName": "Ali",
                "lastName": "Kiehn",
                "jobTitle": "Dynamic Configuration Representative",
                "age": 17,
                "bio": "Dolorem voluptatibus rem repellat qui repellat fuga quod veniam itaque. Ad fugit repudiandae ut voluptas aut. Iusto fuga eos accusamus et unde alias. Totam et veritatis qui et minus.",
                "dateJoined": "2012-02-13T15:56:38.391Z"
            },
            {
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/alek_djuric/128.jpg",
                "firstName": "Tahlia",
                "lastName": "Rees",
                "jobTitle": "Lead Directives Designer",
                "age": 44,
                "bio": "Quasi iste aspernatur nam voluptatem doloribus. Assumenda molestiae ut ut natus assumenda nemo error. Ab accusamus sunt enim. In possimus dolor quo. Maiores natus voluptatem exercitationem delectus. Error tempore non quo voluptas.",
                "dateJoined": "2017-08-26T12:29:45.996Z"
            },
            {
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/joetruesdell/128.jpg",
                "firstName": "Isabella",
                "lastName": "D'amore",
                "jobTitle": "Regional Operations Coordinator",
                "age": 50,
                "bio": "Odit possimus dolores mollitia aperiam labore. Qui tempore culpa illo iusto beatae a voluptatem atque rerum. Aliquid atque quibusdam et qui dolorem ut voluptatem.",
                "dateJoined": "2014-02-26T16:05:16.483Z"
            },
        ]

        const wrapper = shallow(
            <EmployeeList employees={employees}/>
        );
        expect(wrapper).toMatchSnapshot();
    });
})
;