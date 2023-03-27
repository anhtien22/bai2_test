import React, { useState } from 'react'
import StudentContext from './StudentContext'
import axios from 'axios'

const StudentState = (props) => {
  const [students, setStudents] = useState([]);
  // get all Products
  const getStudents = async () => {
    try {
      const response = await axios.get(`https://exam.congdongcode.vn/api/list-class?id_user=3`);
      setStudents(response.data.data);

    } catch (err) {
      console.log(err);
    }
  }
  const addStudent = async (fromData) => {
    console.log(fromData);
    const headers = {
      'Content-Type': 'multipart/form-data',
    }
    try {
      const res = await axios.post(`https://exam.congdongcode.vn/api/create-student?id_class=${fromData.id_class}&id_user=${fromData.id_user}&name=${fromData.name}&gender=${fromData.gender}&dob=${fromData.dob}&average_score=${fromData.average_score}`, { headers })
      alert("Thêm nhật thành công")
      getStudents()
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  const editStudent = async (data) => {
    try {
      console.log("data", data);
      const headers = {
        'Content-Type': 'multipart/form-data',
      }
      const res = await axios.post(`https://exam.congdongcode.vn/api/edit-student?id_student=${data.id_student}&id_user=${data.id_user}&name=${data.name}&gender=${data.gender}&dob=${data.dob}&average_score=${data.average_score}`, { headers })
      alert("Cập nhật thành công")

      getStudents()
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  const deleteStudent = async (id_student, id_user) => {
    try {
      const res = await axios.post(`https://exam.congdongcode.vn/api/delete-student?id_student=${id_student}&id_user=${id_user}`);
      alert("Xóa thành công")
      getStudents()
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <StudentContext.Provider
      value={ {
        students,
        getStudents,
        addStudent,
        editStudent,
        deleteStudent
      } }>
      { props.children }
    </StudentContext.Provider>
  )
}

export default StudentState;