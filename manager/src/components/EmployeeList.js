import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import _ from 'lodash';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props
        // that the component with be rendered with
        // this.props is still the old set of props

        this.createDataSource(nextProps);

    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <EmployeeListItem employee={employee} />;
    }


    render() {
        return (
            <ListView
                style={{ paddingTop: 55 }}
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (empl, uid) => {
        return { ...empl, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
