function status(request, response) {
  response
    .status(200)
    .json({ chave: "alunos do curso.dev são brabos de mais" });
}

export default status;
