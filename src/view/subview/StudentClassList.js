import { Button, Modal } from 'react-bootstrap'
import React, { useContext, useEffect, useState } from 'react';
import StudentEdit from './StudentEdit';
import StudentAdd from './StudentAdd';
import Paginator from 'react-hooks-paginator';
import StudentContext from '../../context/StudentContext';
import moment from 'moment';

const StudentClassList = ({ student, getStudents }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  const pageLimit = 5;
  const pContext = useContext(StudentContext);
  const { deleteStudent } = pContext;

  useEffect(() => {
    setCurrentData(student.students.slice(offset, offset + pageLimit));
  }, [offset, student.students]);

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
            { currentData.map((s, index) => {
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
          <div>
            <Paginator
              totalRecords={ student.students.length }
              pageLimit={ pageLimit }
              pageNeighbours={ 2 }
              setOffset={ setOffset }
              currentPage={ currentPage }
              setCurrentPage={ setCurrentPage }
              pageContainerClass="mb-0 mt-0 d-flex "
              pagePrevText="«"
              pageNextText="»"
            />
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