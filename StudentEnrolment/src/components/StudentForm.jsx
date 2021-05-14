import React, { Component } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'
import StudentService from '../api/StudentService';
import moment from 'moment';


class StudentForm extends Component {
    constructor(props){
        super(props);
        this.state={
            isDateValid:false
        }
    }

    initialValues={
        id:this.props.match.params.id,
        name:'',
        email:'',
        phone:'',
        standard:'',
        marks:'',
        date:moment(new Date()).format("MM-DD-YYYY")
    }

    validationSchema=Yup.object({
        id:Yup.string().required('Required!'),
        name:Yup.string().required('Required!'),
        email:Yup.string().email('Invalid email format!').required('Required!'),
        phone:Yup.string().required('Required!'),
        standard:Yup.string().required('Required!'),
        // marks:Yup.number().max(100),
        marks:Yup.string().required('Required!'),
        date:Yup.string().required('Required!'),
    })

    onSubmit=(values)=>{

        if(this.props.match.params.id===-1){
            StudentService.createStudent({
                id:this.props.match.params.id,
                name:values.name,
                email:values.email,
                phone:values.phone,
                standard:values.standard,
                marks:values.marks,
                date:values.date
            }).then(response=>{
                this.props.history.push("/students")
            })
        }else{
            StudentService.updateStudent(this.props.match.params.id,{
                id:this.props.match.params.id,
                name:values.name,
                email:values.email,
                phone:values.phone,
                standard:values.standard,
                marks:values.marks,
                date:values.date
            }).then(response=>{
                this.props.history.push("/students")
            })
        }

    }

    render() {
        return (
            <div className="container">
                {this.state.isDateValid && <h6 className="alert alert-danger">Please Enter Valid Date !</h6>}
                <Formik 
                    initialValues={this.initialValues}
                    validationSchema={this.validationSchema}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                >
                    <Form>

                        <div className="mb-2" >
                            <label htmlFor="name">Student Name</label>
                            <Field  className="form-control" type="text" id="name" name="name" />
                            <ErrorMessage name="name" >{(msg) => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email">E-mail</label>
                            <Field  className="form-control" type="email" id="email" name="email" />
                            <ErrorMessage name="email" >{(msg) => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="phone">Phone Number</label>
                            <Field  className="form-control" type="text" id="phone" name="phone" />
                            <ErrorMessage name="phone" >{(msg) => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="standard">Standard</label>
                            <Field  className="form-control" type="text" id="standard" name="standard" />
                            <ErrorMessage name="standard" >{(msg) => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="marks">Marks(%)</label>
                            <Field  className="form-control" type="text" id="marks" name="marks" />
                            <ErrorMessage name="marks" >{(msg) => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="date">DOB</label>
                            <Field  className="form-control" type="date" id="date" name="date" />
                            <ErrorMessage name="date" >{(msg) => <div style={{color:'red'}}>{msg}</div>}</ErrorMessage>
                        </div>

                        <div className="text-center mt-3">
                            <button className="btn btn-info mx-auto" type="submit" >Submit</button>
                        </div>
                    </Form>

                </Formik>
            </div>
        );
    }
}

export default StudentForm;        