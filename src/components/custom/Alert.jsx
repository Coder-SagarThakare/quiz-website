import Swal from 'sweetalert2'

function alert({
    title = 'Are you sure?',
    text,
    icon = 'warning',
    showCancelButton = true,
    confirmButtonText = "Confirm",
    cancelButtonText = "Cancel"
}) {
    return Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: showCancelButton,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText
    })
}

export { alert }
