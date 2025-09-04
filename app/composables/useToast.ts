type ToastReturnType = {
  toastSuccess: (content: string) => void
}

export default function useToast(): ToastReturnType {
  const toastSuccess = (content: string) => {
    const toastElement = document.createElement('div')
    toastElement.innerText = content

    toastElement.classList.add(
      'fixed',
      'alert',
      'alert-success',
      '-bottom-full',
      'right-5',
      'transition',
      'ease-in-out',
      'duration-500'
    )

    toastElement.classList.toggle('-bottom-full')
    toastElement.classList.toggle('bottom-5')

    document.body.append(toastElement)

    setTimeout(() => {
      toastElement.classList.toggle('-bottom-full')
      toastElement.classList.toggle('bottom-5')
    }, 2000)

    setTimeout(() => toastElement.remove(), 3000)
  }

  return {
    toastSuccess,
  }
}
