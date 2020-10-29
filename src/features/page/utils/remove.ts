import swal from "sweetalert"

export const remove = () => {
  swal({
    title: "Вы серьезно?",
    text: "Удалить элемент?",
    icon: "warning",
    buttons: [true, true],
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Элемент удален!", {
        icon: "success",
      })
    }
  })
}
