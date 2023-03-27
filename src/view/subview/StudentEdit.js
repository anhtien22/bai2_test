import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import StudentContext from "../../context/StudentContext";
import moment from 'moment';
const StudentEdit = ({ student, students }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const pContext = useContext(StudentContext);
  const { editStudent } = pContext;

  const [data, setData] = useState({
    name: '',
    gender: '',
    dob: '',
    average_score: ''
  })
  useEffect(() => {
    setData({
      id_student: student.id,
      id_user: students.user.id,
      name: student.name,
      gender: student.gender,
      dob: student.dob,
      average_score: student.average_score
    })
    // eslint-disable-next-line
  }, [setData])
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSave = () => {
    editStudent(data)
    setShow(false)
  }
  return (
    <div>
      <Button class="p-3" onClick={ handleShow }>Sửa</Button>
      <Modal show={ show } style={ { zIndex: '9999' } } onHide={ handleClose }>
        <Modal.Header closeButton>
          <Modal.Title>Cập nhật học sinh</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label>Tên</label>
                <input class="form-control" type="text"
                  name="name"
                  onChange={ handleChange }
                  value={ data.name } />
              </div>
              <div className="form-group">
                <label>Giới tính</label>
                <input class="form-control" type="text"
                  name="gender"
                  onChange={ handleChange }
                  value={ data.gender }
                />
              </div>
              <div className="form-group">
                <label>DOB</label>
                <input class="form-control" type="date"
                  name="dob"
                  onChange={ handleChange }
                  value={ moment(data.dob).format('YYYY-MM-DD') } />
              </div>
              <div className="form-group">
                <label>ĐTB</label>
                <input class="form-control" type="number"
                  name="average_score"
                  onChange={ handleChange }
                  value={ data.average_score } />
              </div>
            </form>
          </Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ handleClose }>
            Hủy
          </Button>
          <Button type="submit" variant="primary" onClick={ handleSave } >
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StudentEdit;