import React from 'react';
import {
  AlignmentContainer,
  AbsoluteContainer,
} from 'kit';
import Loader from 'spent/view/components/pure/Loader';

const Loading = ({ className }) => (
  <div>
    <AbsoluteContainer top={0} left={0} right={0} bottom={0} style={{background: 'white'}}>
      <AlignmentContainer>
        <Loader />
      </AlignmentContainer>
    </AbsoluteContainer>
  </div>
);

export default Loading;
