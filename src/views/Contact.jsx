import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

const Contact = () => {
  return (
    <Form>
      <Form.Group className="mb-4">
        <Form.Label>
          <strong>🧑 Nombre y Apellido</strong>
        </Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu nombre" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>
          <strong>📞 Teléfono de contacto</strong>
        </Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu teléfono" />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>
          <strong>📩 Correo Electrónico</strong>
        </Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu e-mail" />
      </Form.Group>
      <Form.Label>
        <strong>📝 Detalles del pedido</strong>
      </Form.Label>
      <InputGroup className="mb-4">
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
      <Button variant="danger" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default Contact;
