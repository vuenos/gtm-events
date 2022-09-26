import React from 'react';
import TagManager from 'react-gtm-module';

/**
 * 이벤트가 포함된 인수(arguments) 초기화
 */
const tagManagerArgs = {
    gtmId: GTM_ID,
    events: {
        logIn: 'Log in',
        signUp: 'Sign Up',
    }
}

TagManager.initialize(tagManagerArgs);

/**
 * dataLayer 함수 호출
 */
TagManager.dataLayer({
    dataLayer: {
        event: 'Log in', // 이벤트명
        // add more data
    }
});


const app = () => {
  return (
    <div>app</div>
  )
}


export default app