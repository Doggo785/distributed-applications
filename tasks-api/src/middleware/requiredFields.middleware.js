const requireFields = (fields) => {
  return (request, response, next) => {
    const missingFields = [];
    for (const field of fields) {
      if (!request.body[field]) {
        missingFields.push(field);
      }
    }
    if (missingFields.length > 0) {
      return response.status(400).json({ message: 'Champs manquants', missingFields });
    }
    next();
  };
};

module.exports = { requireFields };
