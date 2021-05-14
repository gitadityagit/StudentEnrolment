import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Header from './Header'
import StudentList from './StudentList'
import Error from './Error'
import StudentForm from './StudentForm'

class StudentApp extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Error}></Route>
                    <Route path="/students/:id" component={StudentForm}></Route>
                    <Route exact path="/students" component={StudentList}></Route>
                </Switch>
            </div>
        );
    }
}

export default StudentApp;