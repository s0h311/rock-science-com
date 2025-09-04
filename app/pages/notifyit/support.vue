<template>
  <h1 class="mb-5">Support</h1>

  <form
    class="grid gap-3 w-full place-items-center"
    @submit.prevent="sendSupportRequest"
  >
    <select
      class="select"
      name="topic"
      required
    >
      <option
        disabled
        selected
      >
        Topic
      </option>
      <option value="accountRemoval">Account removal</option>
      <option value="other">Other</option>
    </select>

    <input
      class="input"
      name="email"
      type="email"
      placeholder="Discord E-Mail Address"
      required
    />

    <textarea
      class="textarea"
      name="content"
      placeholder="Tell us more"
      required
    ></textarea>

    <button
      class="btn btn-primary"
      type="submit"
    >
      Submit
    </button>
  </form>
</template>

<script setup lang="ts">
const { toastSuccess } = useToast()

async function sendSupportRequest(event: Event): Promise<void> {
  const formElement = event.target as HTMLFormElement

  const formData = new FormData(formElement)

  const topic = formData.get('topic')
  const email = formData.get('email')
  const content = formData.get('content')

  if (!topic || !email || !content) {
    return
  }

  const supportRequest = {
    topic,
    email,
    content,
  }

  await fetch('/api/supportRequest/notifyit', {
    method: 'POST',
    body: JSON.stringify(supportRequest),
  })

  toastSuccess('We received your request')

  formElement.reset()
}
</script>
