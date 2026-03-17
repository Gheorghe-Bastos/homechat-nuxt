<script setup>
import { inject } from 'vue'

const { arrayUsuario, usuario } = inject('estado')
const toast = useToast()

function verificar(state) {
  const errors = []
  if (!state.email) errors.push({ name: 'email', message: 'Email é obrigatório' })
  if (!state.senha) errors.push({ name: 'senha', message: 'Senha é obrigatória' })

  if (state.email && state.senha) {
    const usuarioExiste = buscar(state.email)

    if (usuarioExiste && usuarioExiste.senha !== state.senha) {
      errors.push({ name: 'senha', message: 'Senha incorreta' })
    }
  }
  return errors
}

function buscar(emailRetornar) {
  for (let i = 0; i < arrayUsuario.value.length; i++) {
    const usuarioEncontrado = arrayUsuario.value[i]
    if (usuarioEncontrado.email === emailRetornar) {
      return usuarioEncontrado
    }
  }
  return null
}

async function redirecionar() {
  const usuarioExiste = buscar(usuario.value.email)

  if (!usuarioExiste) {
    arrayUsuario.value.push({
      email: usuario.value.email,
      senha: usuario.value.senha
    })

    toast.add({ title: 'Bem Vindo', description: 'Redirecionando para o chat...' })
    await navigateTo('/chat')
  } else if (usuarioExiste.senha !== usuario.value.senha) {
    toast.add({ title: 'Falha no Login!', description: 'Senha incorreta.', color: 'error' })
  } else {
    toast.add({ title: 'Bem Vindo', description: 'Redirecionando para o chat...' })
    await navigateTo('/chat')
  }
}
</script>

<template>
  <div class="flex flex-col gap-22 justify-center items-center">
    <h1 id="hero">
      Homechat | O lar da conversa
    </h1>
    <div
      id="divForm"
      class="flex items-center justify-center w-md p-5 rounded-xl"
    >
      <UForm
        :validate="verificar"
        :state="usuario"
        class="flex flex-col space-y-4 w-full"
        @submit="redirecionar"
      >
        <UFormField
          label="Email"
          name="email"
          class="w-full"
        >
          <UInput
            v-model="usuario.email"
            placeholder="Digite seu email"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Password"
          name="senha"
          class="w-full"
        >
          <UInput
            v-model="usuario.senha"
            placeholder="Digite sua senha"
            type="password"
            class="w-full"
          />
        </UFormField>
        <div class="mt-2 flex w-full">
          <UButton
            type="submit"
            variant="subtle"
            class="flex justify-center items-center w-full"
          >
            Confirmar
          </UButton>
        </div>
      </UForm>
    </div>
    <div />
  </div>
</template>
