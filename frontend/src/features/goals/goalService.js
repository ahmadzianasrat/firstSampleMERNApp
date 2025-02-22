import axios from "axios";

const API_URL = "/api/goals/";

// create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, goalData, config);
  return response.data
};

// get all goals
const getGoals = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await axios.get(API_URL, config);
    return response.data
  };

  // delete goal
const deleteGoal = async (goalID, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + goalID, config);
  return response.data
};


const goalService = {
    createGoal,
    getGoals,
    deleteGoal
}

export default goalService
