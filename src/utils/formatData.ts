const formatDate = (value: Date): string => {
  const date = new Date(value);
  return Intl.DateTimeFormat('en-GB').format(date);
};

export default formatDate;
