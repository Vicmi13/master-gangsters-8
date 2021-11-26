const genericKnex = (knexInstance, tableName, columns, tableId) => {
  const create = (bodyGenre) => {
    return knexInstance(tableName).insert(bodyGenre);
  };

  const getAll = () => {
    return knexInstance(tableName).select(columns);
  };

  const getById = (id) => {
    // objecto.
    // objecto['shoe_id']
    return knexInstance(tableName)
      .where({ [tableId]: id })
      .select(columns);
  };

  const updateById = (id, body) => {
    return knexInstance(tableName)
      .where({ [tableId]: id })
      .update(body);
  };

  const deleteById = (id) => {
    return knexInstance(tableName)
      .del()
      .where({ [tableId]: id });
  };

  return {
    create,
    getAll,
    getById,
    updateById,
    deleteById,
  };
};

module.exports = genericKnex;

// DRY Dont repeat yourself

// KISS Keep it simple stupid
