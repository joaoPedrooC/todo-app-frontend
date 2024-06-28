import Swal, { SweetAlertIcon } from "sweetalert2"

export const useSwal = (title: string, text: string, icon: SweetAlertIcon = 'success', timer?: number) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    timer: timer,
    customClass: {
      title: 'title__primary',
      container: ['title__primary', 'toast']
    }
  })
}