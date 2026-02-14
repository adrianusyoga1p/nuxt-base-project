<script setup lang="ts">
const schema = z.object({
  name: z.string().min(1, { message: "required" }),
  email: z.string().min(1, { message: "required" }).email(),
});
const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(schema),
  initialValues: {
    name: "",
    email: "",
  },
});

const onSubmit = handleSubmit(async (values) => {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(values));
});
</script>

<template>
  <form
    class="flex flex-col gap-2 w-1/3"
    @submit.prevent="onSubmit"
  >
    <p>Name</p>

    <VeeField
      name="name"
      type="text"
      placeholder="Name"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    />

    <VeeErrorMessage name="name" />

    <p>Email</p>

    <VeeField
      name="email"
      type="email"
      placeholder="Email"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    />

    <VeeErrorMessage name="email" />

    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      Submit
    </button>
  </form>
</template>
