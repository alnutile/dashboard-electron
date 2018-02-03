import swal from 'sweetalert2';

export default {

    alert(title, message, error = false) {
        swal(
            {
                type: error ? "error" : "success",
                title: title,
                text: message
            }
        );
    }

}