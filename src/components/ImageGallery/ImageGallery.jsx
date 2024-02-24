import { PER_PAGE, fetchImages } from '../serviceApi/imagesApi';
import React, { Component } from 'react';
import { ImageList } from './ImageGallery.styled';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { toast } from 'react-toastify';

export class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    page: 1,
    loadMore: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchQuery;
    const nextName = this.props.searchQuery;
    if (prevName !== nextName) {
      this.setState({ images: [], page: 1, loadMore: false }, () => {
        this.getImages();
      });
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.getImages();
    }
  }

  getImages = () => {
    this.setState({ loading: true });
    fetchImages(this.props.searchQuery, this.state.page)
      .then(images => {
        console.log(images);
        if (images.hits.length === 0) {
          return toast.info('Вибачте, картинок не знайдено');
        }

        const totalImages = images.totalHits;
        const perPage = PER_PAGE;
        const totalPages = Math.ceil(totalImages / perPage);

        const hasMorePages = totalPages > this.state.page;

        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          loadMore: hasMorePages,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleLoadMore = () => {
    this.setState(prevPage => ({
      page: prevPage.page + 1,
    }));
  };

  render() {
    const { error, images, loading, loadMore } = this.state;
    return (
      <>
        <ImageList>
          {error && <h2>{error.message}</h2>}
          {images.length > 0 &&
            images.map(image => {
              return (
                <ImageGalleryItem
                  key={image.id}
                  image={image}
                  onClick={this.props.onClick}
                />
              );
            })}
        </ImageList>
        {loading && <Loader />}
        {!loading && images.length !== 0 && loadMore && (
          <LoadMoreBtn onClick={this.handleLoadMore} />
        )}
      </>
    );
  }
}
