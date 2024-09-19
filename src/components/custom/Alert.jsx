import React from 'react'
import Swal from 'sweetalert2'

function alert({
    title = 'Are you sure?',
    text,
    type = 'warning',
    showCancelButton = true,
    confirmButtonText = "Confirm",
    cancelButtonText = "Cancel"
}) {
    return Swal.fire({
        title: title,
        text: text,
        type: type,
        showCancelButton: showCancelButton,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText
    })
}

export { alert }
