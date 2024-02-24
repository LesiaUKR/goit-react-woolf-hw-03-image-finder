import { LoadMore, BtnWrapper } from './LoadMoreBtn.styled';

export function LoadMoreBtn({ onClick }) {
  return (
    <BtnWrapper>
      <LoadMore type="button" onClick={onClick}>
        Load more
      </LoadMore>
    </BtnWrapper>
  );
}
