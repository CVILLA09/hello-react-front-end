import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreetingRequest, fetchGreetingSuccess, fetchGreetingFailure } from './actions/greetingActions';

function Greeting({ greetingData, dispatch }) {
  useEffect(() => {
    // Here I will make the API call to my Rails backend
    // For now, let's just dispatch a success action with a static message
    dispatch(fetchGreetingRequest());
    dispatch(fetchGreetingSuccess('Hello from Redux!'));
  }, [dispatch]);

  return (
    <div>
      <h2>Greeting Page</h2>
      {greetingData.loading && <p>Loading...</p>}
      {greetingData.greeting && <p>{greetingData.greeting}</p>}
      {greetingData.error && <p>Error: {greetingData.error}</p>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    greetingData: state.greeting
  };
};

export default connect(mapStateToProps)(Greeting);
