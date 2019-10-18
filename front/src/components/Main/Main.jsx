import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react';
import { addUrl } from '../../redux/actions';
import { connect } from 'react-redux';
class Main extends Component {
  state = {
    inputValue: '',
  }
  onChange =  e => {
     this.setState({  inputValue: e.target.value });
  };
  onClick = async e => {
    e.preventDefault();
    const data = {
      url: this.state.inputValue,
    };
    await this.props.addUrl(data);
  };
  render() {
    return (
      <div className='main'>
        <div className="form-field">

          <Form className="regForm">
            <Form.Field>
              <label htmlFor="Название новой группы">Введите ссылку <br />
                Формат ссылки должен быть  " http://cryptoeye.eu/url "
                </label>
              <input type="text" name="Название новой группы" required onChange={this.onChange} />
            </Form.Field>
          </Form>
          <Button positive size='tiny' onClick={this.onClick} >Отправить ссылку </Button>
        </div>
        <h3 className="Error">{this.props.message ? <>{this.props.message}</> : <></>}</h3>
        <h3 className="Url">{this.props.url ? 
        <>
        <a href={`${this.props.url}`}>
          Перейдите по ссылке!
          </a>{this.props.message}
          </> 
          :
           <></>
           }</h3>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // message: state.User.user.message,
    message: state.message,
    url:state.url,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUrl: (data) => dispatch(addUrl(data)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
