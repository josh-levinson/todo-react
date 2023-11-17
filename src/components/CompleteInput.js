const CompleteInput = ({ todo, complete }) => {
  return (
    <button className="complete-button" onClick={() => complete(todo)}><i class="fa-regular fa-square"></i></button>
  )
}

export default CompleteInput;