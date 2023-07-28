const response = (res, status, message, data) => {
  res.status(status).send({ data, message });
};

module.exports = response;
