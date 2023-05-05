import { Component } from 'react';
import { data } from '../data/users';
import { UsersList } from './UsersList/UsersList';
import Button from './Button/Button';
import AddUserForm from './AddUserForm/AddUserForm';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    users: data,
    isListShown: false,
    isFormShown: false,
  };

  showList = () => {
    this.setState({ isListShown: true });
  };

  addUser = data => {
    const newUser = { id: nanoid(), ...data };
    this.setState(prevState => {
      return { users: [...prevState.users, newUser] };
    });
  };

  deleteUser = id => {
    this.setState(prevState => {
      return {
        users: prevState.users.filter(user => user.id !== id),
      };
    });
  };

  openForm = () => {
    this.setState({ isFormShown: true });
  };

  closeForm = () => {
    this.setState({isFormShown: false})
  }

  render() {
    const { users, isListShown, isFormShown } = this.state;
    return (
      <div>
        {!isListShown ? (
          <Button text="Show list of users" clickHandler={this.showList} />
        ) : (
          <UsersList users={users} deleteUser={this.deleteUser} />
        )}

        {!isFormShown ? (
          <AddUserForm addUser={this.addUser} onFormClose = {this.closeForm}/>
        ):
        (
          <Button text="Add user" clickHandler={this.openForm} />
        )
        }
      </div>
    );
  }
}

export default App;
