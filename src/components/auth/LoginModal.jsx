import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, NavLink } from 'reactstrap';
import { CLEAR_ERROR_REQUEST, LOGIN_REQUEST } from '../../redux/types';

function LoginModal() {
  const [modal, setModal] = useState(false);
  const [localMsg, setLocalMsg] =useState('');
  const [form, setValue] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();
  const { errorMsg } = useSelector(state => state.auth);

  useEffect(() => {
    try {
      setLocalMsg(errorMsg);
    } catch (err) {
      console.log(err);
    }
  }, [errorMsg]);

  const handleToggle = () => {
    dispatch({
      type: CLEAR_ERROR_REQUEST
    });
    setModal(!modal);
  }

  const onChange = (event) => {
    const {name, value} = event.target;
    setValue({
      ...form,
      [name]: value
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const {email, password} = form;
    const user = {email, password};
    console.log(user);

    dispatch({
      type: LOGIN_REQUEST,
      payload: user
    });
  }

  return (
    <div>
      <NavLink onClick={handleToggle} href="#">
        Login
      </NavLink>
      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Login</ModalHeader>
        <ModalBody>
          {localMsg ? <Alert color="danger">{localMsg}</Alert> : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input 
                type="email"
                name="email"
                id="email"
                placeholder="이메일을 입력하세요."
                onChange={onChange}
              />
              <Label for="password">Password</Label>
              <Input 
                type="password"
                name="password"
                id="password"
                placeholder="비밀번호를 입력하세요."
                onChange={onChange}
              />
              <Button color="dark" style={{marginTop: '2rem'}} block>
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default LoginModal;