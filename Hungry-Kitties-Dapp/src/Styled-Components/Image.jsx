import styled from 'styled-components';

const Image = styled.img`
  /* Width of the image */
  width: ${props => props.width ? props.width : 'auto'};

  /* Height of the image */
  height: ${props => props.height ? props.height : 'auto'};

  /* Maximum width of the image */
  max-width: ${props => props.maxWidth ? props.maxWidth : '100%'};

  /* Maximum height of the image */
  max-height: ${props => props.maxHeight ? props.maxHeight : '100%'};

  /* The method used to scale the image to fit its container */
  object-fit: ${props => props.objectFit ? props.objectFit : 'cover'};

  /* The position of the image within its container */
  object-position: ${props => props.objectPosition ? props.objectPosition : 'center'};

  /* The border radius of the image */
  border-radius: ${props => props.borderRadius ? props.borderRadius : '0'};
`;

export default Image;