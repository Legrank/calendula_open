import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { fetchUser } from "../login/accountSlice";

export interface ILoginProps {
  show: boolean;
  onHide(): void;
}

export function Login(props: ILoginProps) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pas, setPas] = useState("");

  return (
    <Modal
      {...props}
      //size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Button className="close" onClick={props.onHide}>
          <span aria-hidden="true">×</span>
        </Button>
        <Form className="d-flex flex-column align-items-center">
          <h2 className="text-center text-nowrap">Личный кабинет</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Пароль"
              value={pas}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPas(e.target.value)
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Button
              onClick={() => {
                dispatch(fetchUser({ email, pas }));
                props.onHide();
                dispatch(push("/lk"));
              }}
              variant="success"
            >
              Войти
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
