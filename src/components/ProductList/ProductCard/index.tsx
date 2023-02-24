import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { iProduct } from '../../../providers/UserContext/@types';

const ProductCard = ({ name, category, price, img }: iProduct) => (
  <StyledProductCard>
    <div className='imageBox'>
      <img src={img} alt={name} />
    </div>
    <div className='content'>
      <StyledTitle tag='h3' $fontSize='three'>
        {name}
      </StyledTitle>
      <StyledParagraph className='category'>{category}</StyledParagraph>
      <StyledParagraph className='price'>{price}</StyledParagraph>
      <StyledButton $buttonSize='medium' $buttonStyle='green'>
        Adicionar
      </StyledButton>
    </div>
  </StyledProductCard>
);

export default ProductCard;
