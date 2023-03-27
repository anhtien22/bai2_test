import { Button, Modal } from 'react-bootstrap'
import React, { useContext, useState } from 'react';
import StudentEdit from './StudentEdit';
import StudentAdd from './StudentAdd';
import StudentContext from '../../context/StudentContext';
import moment from 'moment';

const StudentClassList = ({ student }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const pContext = useContext(StudentContext);
  const { deleteStudent } = pContext;


  const deleteSaveChanges = (id_student, id_user) => {
    deleteStudent(id_student, id_user);
  }
  return (
    <>
      <Button variant="secondary" className="mx-2" onClick={ handleShow }>
        Xem chi tiết
      </Button>
      <Modal show={ show } style={ { zIndex: '9999' } } onHide={ handleClose }>
        <Modal.Header closeButton>
          <Modal.Title>Danh sách học sinh</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <h3>{ student.name }</h3>
            <span>Sỉ số: { student.students.length } </span>
            { student.students.map((s, index) => {
              return (
                <>
                  <div key={ student.id }>
                    <ul className="list-group  ">
                      <li className="row list-group-item d-flex justify-content-between align-items-start" >
                        <div className="ms-2 me-auto col" >
                          <div className="fw-bold">{ s.name }</div>
                          <div className=' d-flex justify-content-start'>
                            <input type="checkbox" value={ s.id } />
                            <span className="">{ s.gender }</span>
                          </div>
                          <div>DOB: { moment(s.dob).format('DD-MM-YYYY') }</div>
                          <div className="">
                            Điểm trung bình : { s.average_score }

                          </div>
                        </div>
                        <div class="col d-flex flex-column justify-content-end align-items-end gap-3">
                          <StudentEdit student={ s } students={ student } />
                          <Button variant="danger" class="p-3" onClick={ () => deleteSaveChanges(s.id, student.user.id) }>Xóa</Button>
                        </div>
                      </li>
                    </ul>

                  </div>
                </>
              )
            }) }
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ handleClose }>
            Close
          </Button>
          <StudentAdd student={ student } />
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default StudentClassList;