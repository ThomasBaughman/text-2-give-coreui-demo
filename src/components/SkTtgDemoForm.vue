<template>
  <CContainer sm>
    <CForm
      class="row g-3 needs-validation"
      novalidate
      :validated="validateFields"
      @submit="handleSubmit"
    >
      <CRow></CRow>
      <CRow>
        <CCol class="mt-4 minorHeader">Give to</CCol>
      </CRow>
      <CRow class="pb-3">
        <CCol class="charlieHeader"
          >First Church <i class="charlieFancy">of</i> Ferndale</CCol
        ></CRow
      >
      <sk-demo-gift-details />
      <CRow class="my-3"> </CRow>
      <sk-demo-payment-details />
      <CRow> </CRow>
      <CRow>
        <CCol class="mt-5 mb-4"></CCol>
      </CRow>
      <CRow>
        <CCol>
          <CButton color="primary" size="lg" type="submit" class="submit-btn rounded-pill"
            ><span><heart-shape /></span> Give $5</CButton
          >
        </CCol>
      </CRow>
      <CRow>
        <CCol align="center" class="mt-2 mb-3">
          <CLabel><lock-outline />Secure online giving powered by <b>Servant Keeper</b></CLabel>
        </CCol>
      </CRow>
    </CForm>
  </CContainer>
</template>

<script setup>
import { ref } from 'vue'
import SkDemoGiftDetails from '@/components/SkDemoGiftDetails.vue'
import SkDemoPaymentDetails from '@/components/SkDemoPaymentDetails.vue'
const validateFields = ref(null)
// METHODS
function handleSubmit(event) {
  const form = event.currentTarget
  if (form.checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
  }
  validateFields.value = true
}
</script>

<style scoped></style>
