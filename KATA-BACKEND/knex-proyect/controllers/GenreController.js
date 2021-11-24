const create = async (req, res) => {
  const { description } = req.body;
  const newGenre = {
    description,
  };
  try {
    // const result = await GenreService.create(newGenre);
    res.status(200).json({ message: "Row created", result: "success" });
  } catch (error) {
    res.status(400).json({ message: "Error found", error });
  }
};

const recover = () => {};

module.exports = {
  create,
  recover,
};
