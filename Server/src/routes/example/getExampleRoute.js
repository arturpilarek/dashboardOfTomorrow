module.exports = async (req, res) => {
  try {

    const exampleData = {
      text: "Hello World",
      number: 1234,
    }
    
    res.json(exampleData)

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
