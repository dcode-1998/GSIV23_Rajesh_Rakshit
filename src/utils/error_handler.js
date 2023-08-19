const ErrorHandler = err => {
  alert(err?.message ? err.message : 'Internal Server Error');
  return true;
};

export default ErrorHandler;
