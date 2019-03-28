import React from 'react';
import { Card, Image, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Contact extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.contact.image} />
            <Card.Header>{this.props.contact.firstName}{this.props.contact.lastName}</Card.Header>
            <Card.Meta>{this.props.contact.address}</Card.Meta>
            <Card.Description>
              {this.props.contact.description}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Contact);

constructor(props) {
  super(props);
  this.onClick = this.onClick.bind(this);
}

onClick() {
  Contacts.remove(this.props.stuff._id, this.deleteCallback);
}

deleteCallback(error) {
  if (error) {
    Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
  } else {
    Bert.alert({ type: 'success', message: 'Delete succeeded' });
    this.formRef.reset();
  }
}

render() {
  return (
      <Card>
        <Card.Content>
      <Table.Cell>
        <Table.Cell>{this.props.contact.name}</Table.Cell>
        <Table.Cell>{this.props.contact.quantity}</Table.Cell>
        <Table.Cell>{this.props.contact.condition}</Table.Cell>
        <Table.Cell>
          <Link to={ /edit/${this.props.contact._id} }>Edit</Link>
        </Table.Cell>
      <Table.Cell>
        <Button onClick={( this.onClick )}>Delete</Button>
      </Table.Cell>
      </Table.Row>
      </Card.Content>
      </Card>
  );
 )
}
 ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
