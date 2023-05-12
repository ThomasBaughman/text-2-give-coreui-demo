<template>
  <CRow>
    <CCol>
      <CCard class="CCard">
        <CCardTitle class="mx-3 my-3 minorHeader">Credit Card</CCardTitle>
        <CCardBody
          ><CRow class="mb-3">
            <CCol>
              <CInputGroup>
                <CInputGroupText class="sk-input-border"><account-circle /></CInputGroupText>
                <CFormInput
                  size="lg"
                  type="text"
                  class="sk-input-border"
                  id="floatingInput"
                  required
                  floatingLabel="First Name"
                  placeholder="First Name"
                ></CFormInput> </CInputGroup
            ></CCol>
            <CCol>
              <CInputGroup>
                <CInputGroupText class="sk-input-border"><account-circle /></CInputGroupText>
                <CFormInput
                  size="lg"
                  type="text"
                  id="floatingInput"
                  class="sk-input-border"
                  required
                  floatingLabel="Last Name"
                  placeholder="Last Name"
                /> </CInputGroup></CCol
          ></CRow>

          <CRow class="mb-3">
            <CCol>
              <CInputGroup>
                <CInputGroupText class="sk-input-border"><email-outline /></CInputGroupText>
                <CFormInput
                  size="lg"
                  type="email"
                  id="floatingInput"
                  class="sk-input-border"
                  required
                  floatingLabel="Email"
                  placeholder="name@example.com"
              /></CInputGroup> </CCol
          ></CRow>
          <CRow class="mb-3"> <CCol class="mx-3 border-bottom"></CCol></CRow>
          <CRow class="mb-3">
            <CCol>
              <CInputGroup>
                <CInputGroupText class="sk-input-border"><credit-card-outline /></CInputGroupText>
                <CFormInput
                  size="lg"
                  type="password"
                  id="creditcardnumber"
                  class="sk-input-border"
                  required
                  floatingLabel="Card Number"
                  placeholder="1234567991011121"
              /></CInputGroup> </CCol
          ></CRow>
          <CRow class="mb-3">
            <CCol>
              <CInputGroup>
                <CFormInput
                  size="lg"
                  type="text"
                  class="sk-input-border"
                  required
                  floatingLabel="Expiration"
                  placeholder="Expiration"
                /> </CInputGroup
            ></CCol>
            <CCol>
              <CFormInput
                size="lg"
                class="sk-input-border"
                type="password"
                required
                floatingLabel="Sec. Code"
                placeholder="Sec. Code"
            /></CCol>
            <CCol>
              <CFormInput
                size="lg"
                class="sk-input-border"
                type="text"
                required
                floatingLabel="Zip"
                placeholder="Zip"
              /> </CCol
          ></CRow>
          <CRow>
            <CCol class="my-3"
              ><CFormCheck
                size="lg"
                id="flexCheckDefault"
                label="Save your credit card for future gifts" /></CCol
          ></CRow>
          <CRow
            ><CCol class="my-3"
              ><CFormCheck
                size="lg"
                id="flexCheckDefault"
                label="Cover the processing fees ($0.44)" /></CCol
          ></CRow>
        </CCardBody>
      </CCard> </CCol
  ></CRow>
</template>

<script setup></script>

<style scoped></style>
