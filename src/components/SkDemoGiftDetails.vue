<template>
  <CRow>
    <CCol>
      <CCard class="CCard">
        <CCardBody>
          <CRow>
            <CButtonGroup role="group" aria-label="Chip Replacement">
              <CCol class="chip-imitator">
                <CFormCheck
                  class="btn-check"
                  type="radio"
                  :button="{ color: 'primary', variant: 'outline' }"
                  name="btnradio"
                  id="btnradio1"
                  autocomplete="off"
                  label="$50"
                  checked
              /></CCol>
              <CCol class="chip-imitator">
                <CFormCheck
                  class="btn-check"
                  type="radio"
                  :button="{ color: 'primary', variant: 'outline' }"
                  name="btnradio"
                  id="btnradio2"
                  autocomplete="off"
                  label="$75"
              /></CCol>
              <!-- This is intentionally here for the demo for discussion reasons. }} -->
              <CCol class="chip-imitator sk-input-border">
                <CFormCheck
                  class="sk-input-border"
                  type="radio"
                  :button="{ color: 'primary', variant: 'outline' }"
                  name="btnradio"
                  id="btnradio3"
                  autocomplete="off"
                  label="$100"
              /></CCol> </CButtonGroup
          ></CRow>
          <CInputGroup class="my-3">
            <CInputGroupText class="sk-input-border" id="inputGroupPrepend">$</CInputGroupText>
            <CFormInput
              size="lg"
              type="text"
              class="sk-input-border"
              id="inputAmt"
              placeholder="Amount"
              aria-describedby="inputGroupPrepend"
              feedbackInvalid="Minumum $5"
              required
            />
          </CInputGroup>
          <CFormSelect size="lg" class="mb-3 pb-0 sk-input-border" required floatingLabel="Fund">
            <option>General Fund</option>
            <option>Pastor's Lambo Fund</option>
            <option>Missions Fund</option>
            <option>Sunday School Supplies</option>
          </CFormSelect>
          <CFormSwitch size="xl" novalidate label="Make a Recurring Gift" />
        </CCardBody> </CCard
    ></CCol>
  </CRow>
</template>

<script setup></script>

<style scoped></style>
