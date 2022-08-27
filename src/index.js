document.addEventListener("DOMContentLoaded", () => {
  let form =document.querySelector("form")
  form.addEventListener("sumbit", (e)=>{
    taskBuild(e.target.new-task-description.value)
  e.preventDefault()
    form.reset()
  })
  
  });

  function taskBuild(doing){
    let p = document.createElement("p")
    let btn = document.createElement("button")
    btn.addEventListener("click", doDelete)
    btn.textContent = "M"
    p.textContent = `${doing}`
    p.appendChild(btn)
    console.log(p)
    document.querySelector(`#container`).appendChild(p)
  }
  function toogleDelete (e) {
    e.target.parentNode.remove()
  }