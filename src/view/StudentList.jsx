import React, { useContext, useEffect } from 'react';
import StudentContext from "../context/StudentContext";
import StudentClassList from './subview/StudentClassList';

const StudentList = () => {
  const pContext = useContext(StudentContext);
  const { getStudents, students } = pContext;
  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div>
      <ol className="list-group list-group-numbered">
        { students && students.map((student, index) => {
          return (
            <li className="list-group-item d-flex justify-content-between align-items-start" key={ index }>
              <div className="ms-2 me-auto " >
                <div className="fw-bold">{ student.name }</div>
                <div className="fw-bold d-flex justify-content-between align-items-end">Sỉ số: { student.students.length }</div>
                <div className="fw-bold"> </div>

              </div>
              <div className="d-flex grid gap-3 row-gap-3">
                <StudentClassList student={ student } getStudents={ getStudents } />
              </div>
            </li>
          )
        }) }
      </ol>
      <div> <h4>Tổng số lớp học: { students.length }</h4></div>

    </div>
  );
};

export default StudentList;