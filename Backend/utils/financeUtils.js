
export const calculateBudgetStatus = (spent, limit) => {
  if (limit <= 0) return 'invalid';
  const percentage = (spent / limit) * 100;
  if (percentage > 100) return 'exceeded';
  if (percentage >= 80) return 'warning';
  return 'ok';
};


export const calculateGoalProgress = (current, target) => {
  if (target <= 0) return 0;
  const progress = (current / target) * 100;
  return Math.min(progress, 100);
};

export const calculateNetBalance = (income, expenses) => {
  return parseFloat(income || 0) - parseFloat(expenses || 0);
};
