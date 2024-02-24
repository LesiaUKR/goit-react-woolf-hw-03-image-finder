import React, { Component } from 'react';
import { Searchbar } from './SearchBar/SearchBar';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout.js';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchText: '',
    page: 1,
  };

  createSearchText = searchText => {
    this.setState({ searchText });
  };
  render() {
    return (
      <Layout>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.createSearchText} />
        <ImageGallery
          searchQuery={this.state.searchText}
          page={this.state.page}
        />
      </Layout>
    );
  }
}
