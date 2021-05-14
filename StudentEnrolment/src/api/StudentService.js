import axios from 'axios'

class StudentService{
    getAllStudents=()=>{
        return axios.get(`http://localhost:8888/students`)
    }
    getStudent=(id)=>{
        return axios.get(`http://localhost:8888/students/${id}`)
    }
    deleteStudent=(id)=>{
        return axios.delete(`http://localhost:8888/students/${id}`)
    }
    updateStudent=(id,student)=>{
        return axios.put(`http://localhost:8888/students/${id}`,student)
    }
    createStudent=(student)=>{
        return axios.put(`http://localhost:8888/students`,student)
    }
}

export default new StudentService();
