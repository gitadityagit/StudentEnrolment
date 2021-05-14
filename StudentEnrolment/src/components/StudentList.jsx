import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import StudentService from '../api/StudentService';

class StudentList extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
            message:'',
            isDeleted:false,
            isUpdated:false
        }
    }


    componentDidMount=()=>{
        this.refreshList();
    }

    refreshList=()=>{
        StudentService.getAllStudents().then(response=>{
            this.setState({
                list:response.data
            })
        })
    }

    deleteStudent=(id)=>{
        StudentService.deleteStudent(id).then(response=>{
            this.setState({
                message:`student successfully deleted of id ${id}`,
                isDeleted:true
            })
            this.refreshList();
        })
    }

    updateStudent=(id)=>{
        this.props.history.push(`/students/${id}`)
    }

    addStudent=()=> {
        this.props.history.push(`/students/-1`)
    }

    render() {
        return (
            <div className="container">
                <button className="btn btn-warning mb-3" onClick={()=> this.addStudent()}>Add Student</button>
                {this.state.isDeleted && <h6 className="alert alert-danger">{this.state.message}</h6>}
                
                <table className="table">
                    <thead >
                        <tr className="text-center">
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Id</th>
                            <th>Student</th>
                            <th>E-mail</th>
                            <th>Phone</th>
                            <th>Standard</th>
                            <th>Marks(%)</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.map(student=>{
                                return(
                                    <tr key={student.id} className="text-center">
                                        <td><button className="btn btn-success" onClick={()=> this.updateStudent(student.id)}>Update</button></td>
                                        <td><button className="btn btn-danger" onClick={() => this.deleteStudent(student.id)}>Delete</button></td>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.phone}</td>
                                        <td>{student.standard}</td>
                                        <td>{student.marks}</td>
                                        <td>{student.date}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentList;