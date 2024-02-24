import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { LoaderBox } from 'components/Loader/Loader.styled';
export const Loader = () => {
  return (
    <LoaderBox>
      <BeatLoader
        color="red"
        aria-label="Loading Spinner"
        visible={'true'}
        loading={'true'}
        size={60}
      />
    </LoaderBox>
  );
};
