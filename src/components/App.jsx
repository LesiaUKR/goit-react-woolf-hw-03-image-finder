import React, { Component } from 'react';
import { Searchbar } from './SearchBar/SearchBar';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout.js';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { toast } from 'react-toastify';
import { PER_PAGE, fetchImages } from './serviceApi/imagesApi';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
export class App extends Component {
  state = {
    searchText: '',
    images: [],
    isLoading: false,
    error: null,
    loadMore: false,
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    const prevSearchText = prevState.searchText;
    const nextSearchText = this.state.searchText;
    if (
      prevSearchText !== nextSearchText ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
  }

  getImages = () => {
    this.setState({ isLoading: true });
    const { searchText, page } = this.state;
    fetchImages(searchText, page)
      .then(images => {
        if (images.hits.length === 0) {
          return toast.info('Вибачте, картинок не знайдено');
        }

        const totalImages = images.totalHits;
        const perPage = PER_PAGE;
        const totalPages = Math.ceil(totalImages / perPage);
        const hasMorePages = totalPages > this.state.page;

        this.setState(state => ({
          images: [...state.images, ...images.hits],
          loadMore: hasMorePages,
          isLoading: false,
          error: '',
        }));
      })
      .catch(error => this.setState({ error: 'Упссс, щось пішло не так' }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  createSearchText = query => {
    this.setState({
      searchText: query,
      images: [],
      page: 1,
    });
  };

  render() {
    const { error, images, isLoading, loadMore } = this.state;
    return (
      <Layout>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.createSearchText} />
        {error && toast.error(error)}
        {images.length > 0 && (
          <ImageGallery
            images={images}
            searchQuery={this.state.searchText}
            page={this.state.page}
          />
        )}
        {isLoading && <Loader />}
        {!isLoading && images.length !== 0 && loadMore && (
          <LoadMoreBtn onClick={this.handleLoadMore} />
        )}
      </Layout>
    );
  }
}
