import React, { Component } from 'react';
import {
  Header,
  Form,
  FormField,
  SearchButton,
  SearchInput,
} from './SearchBar.styled';
import { BiSearchAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSearchQuery = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      return toast.error('Введіть назву картинки');
    }
    this.props.onSubmit(this.state.query);
    event.target.reset();
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <BiSearchAlt size="24" />
          </SearchButton>
          <FormField>
            <SearchInput
              autoComplete="off"
              name="query"
              type="text"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleSearchQuery}
              value={this.state.query}
            />
          </FormField>
        </Form>
      </Header>
    );
  }
}
