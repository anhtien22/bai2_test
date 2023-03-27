import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import StudentContext from "../../context/StudentContext";

const StudentAdd = (student) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [data, setData] = useState({
    name: "",
    gender: "",
    dob: "",
    average_score: ""
  })

  const pContext = useContext(StudentContext);
  const { addStudent } = pContext;

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleAddStudent = () => {
    const { name, gender, dob, average_score } = data
    const formData = {
      id_class: student.student.id,
      id_user: student.student.user.id,
      name,
      gender,
      dob,
      average_score
    }
    addStudent(formData)
    setData({
      name: "",
      grender: "",
      dob: "",
      average_score: ""
    })
    setShow(false)
  }
  return (
    <div>
      <Button class="p-3" onClick={ handleShow }>Thêm</Button>
      <Modal show={ show } style={ { zIndex: '9999' } } onHide={ handleClose }>
        <Modal.Header closeButton>
          <Modal.Title>Thêm học sinh</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="name" class="form-label">Tên</label>
              <input
                class="form-control"
                type="text"
                id="name"
                required
                name="name"
                onChange={ handleChange }
                value={ data.name } />
              <div class="invalid-feedback">
                Bạn chưa nhập Tên.
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="gender" class="form-label">Giới tính</label>
              <input
                class="form-control"
                type="text"
                id="gender"
                required
                name="gender"
                onChange={ handleChange }
                value={ data.gender } />
              <div class="invalid-feedback">
                Bạn chưa nhập Giới tính.
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="dob" class="form-label">DOB</label>
              <input
                class="form-control"
                type="date"
                id="dob"
                name="dob"
                required
                onChange={ handleChange }
                value={ data.dob } />
            </div>
            <div className="form-group">
              <label htmlFor="average_score" class="form-label">ĐTB</label>
              <input
                class="form-control"
                type="number"
                id="average_score"
                required
                name="average_score"
                onChange={ handleChange }
                value={ data.average_score } />
              <div class="invalid-feedback">
                Bạn chưa nhập Điểm trung bình.
              </div>
            </div>
            <div class="d-flex justify-content-end align-items-end gap-3 mt-3">
              <button type="button" class="btn btn-secondary" onClick={ handleClose }>
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={ handleAddStudent } >Thêm</button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StudentAdd;