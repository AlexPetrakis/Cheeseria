import BounceLoader from "react-spinners/BounceLoader";
import styled from "styled-components";

type Props = {
  loading: boolean;
};

const StyledLoader = styled(BounceLoader)`
  top: 40%;
  left: 50%;
`;

const LoadingIndicator = ({ loading }: Props) => (
  <StyledLoader loading={loading} />
);

export default LoadingIndicator;
