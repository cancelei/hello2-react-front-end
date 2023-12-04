export const fetchGreeting = () => async dispatch => {
  try {
    const response = await fetch('http://localhost:3000/random_greeting');
    const data = await response.json();

    dispatch({
      type: 'FETCH_GREETING',
      payload: data.message,
    });
  } catch (error) {
    console.error('Error fetching greeting:', error);
  }
};
