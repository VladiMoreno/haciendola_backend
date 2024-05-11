const Sequelize = require("sequelize");

function handleSequelizeError(error) {
  let statusCode;
  let message;

  switch (true) {
    case error instanceof Sequelize.UniqueConstraintError:
      statusCode = 409; // Conflict
      message = "Unique constraint violation";
      break;
    case error instanceof Sequelize.ValidationError:
      statusCode = 422; // Unprocessable Entity
      message = "Validation error";
      break;
    case error instanceof Sequelize.ForeignKeyConstraintError:
      statusCode = 409; // Conflict
      message = "Foreign key constraint violation";
      break;
    case error instanceof Sequelize.DatabaseError:
      statusCode = 500; // Internal Server Error
      message = "Database error";
      break;
    case error instanceof Sequelize.ConnectionError:
      statusCode = 500; // Internal Server Error
      message = "Database connection error";
      break;
    default:
      statusCode = 404; // Internal Server Error
      message = error.message;
      break;
  }

  return { statusCode, message };
}

module.exports = { handleSequelizeError };
