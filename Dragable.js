let ToDo = document.getElementById('ToDo');
    let Doing = document.getElementById('Doing');
    let TaskDo = document.getElementById('TaskDo');

    Sortable.create(
      ToDo,{
        group: {
          name: "lista"
        }
      }
    )
    Sortable.create(
      Doing,{
        group: {
          name: "lista"
        }
      }
    )
    Sortable.create(
      TaskDo,{
        group: {
          name: "lista"
        }
      }
    )