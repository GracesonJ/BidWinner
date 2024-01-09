import Form from 'react-bootstrap/Form';

function CheckBox() {
  return (
    <Form >
      <Form.Check
      style={{color:'blue'}}
        type="switch"
        id="custom-switch"
      />
    </Form>
  );
}

export default CheckBox;