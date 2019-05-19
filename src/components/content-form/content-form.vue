<template>
    <div id="content-form" class="form-wrapper">
        <form v-on:submit.prevent="submitHandler" class="form-wrapper_form" id="form-content">
            <div class="form-wrapper_form_form-log" id="form-log">
                <p class="form-log_message">Form submitted successfully</p>
            </div>
            <p v-if="emailUsed" id="error-email-exists" class="form-wrapper_form_email-error">
                <b>This email is taken, please use another</b>
            </p>
            <div class="form-wrapper_form_wrapper">
                <div class="form-wrapper_form_wrapper_userName">
                    <label for="userName">Name</label>
                    <input v-model="name" id="userName" required pattern="[a-zA-Z]{5,10}" title="Invalid Name" placeholder="Enter Name" />
                </div>
                <div class="form-wrapper_form_wrapper_phone">
                    <label for="phoneNumber">Phone</label>
                    <input v-model="phone" id="phoneNumber" required pattern="[0-9]{10}" title="Invalid Phone Number" placeholder="Enter Phone"
                    />
                </div>
                <div class="form-wrapper_form_wrapper_email">
                    <label for="emailUser">Email</label>
                    <input v-model="email" id="emailUser" type="email" placeholder="Enter Email" required/>
                </div>
                <div class="form-wrapper_form_wrapper_password">
                    <label for="password1">Password</label>
                    <input v-model="password" id="password1" required title="Invalid password" name="pass1" type="password" placeholder="Enter Password"
                    />
                </div>
                <!-- <div class="form-wrapper_form_wrapper_password2">
                <label for="password2">Repeat Password</label>
                <input id="password2" required title="Password not matching" name="pass2" type="password" onchange="form.pass1.pattern = this.value"/>
            </div> -->
            </div>
            <div class="form-wrapper_form_submit-wrapper">
                <button value="submit" class="form-wrapper_form_submit-wrapper_submit">
                    Submit
            </button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                errors: [],
                name: null,
                phone: null,
                email: null,
                password: null,
                formSubmited: false,
                emailUsed: false
            }
        },
        methods: {
            submitHandler(e) {
                this.emailUsed = false;  //default state
                let dataStored = localStorage.getObj('formDataLandmark');
                if (dataStored === null) {
                    localStorage.setObj('formDataLandmark', []);
                    dataStored = [];
                }
                let formDetail = {
                    id: dataStored.length + 1,
                    name: this.name,
                    phone: this.phone,
                    email: this.email,
                    password: this.password,
                    time: new Date()
                }
                dataStored.forEach((eachRow) => {
                    if (eachRow.email === this.email) {
                        this.emailUsed = true;
                        return;
                    }
                })
                if (this.emailUsed) {
                    let errorOnEmail = document.getElementById("error-email-exists");
                    if (errorOnEmail) {
                        errorOnEmail.classList.remove("hide");
                    }
                    return false;
                }
                dataStored.push(formDetail);
                localStorage.setObj('formDataLandmark', dataStored);
                let formErrorLog = document.getElementById('form-log');
                if (formErrorLog) {
                    formErrorLog.className += " show-inline";
                }
                document.getElementById('form-content').reset();
                return;
            }
        }
    }

</script>

<style lang="scss" scoped>
    .form-wrapper {
        display: flex;
        justify-content: center;
        margin-left: 2rem;
        .form-wrapper_form {
            #form-log {
                color: green;
                display: none;
            }
            @media only screen and (max-width: 1024px) {
                width: 100%;
                margin-right: 2rem;
            }
            .form-wrapper_form_email-error {
                color: red;
                font-size: 1.2rem;
                @media only screen and (max-width: 1024px) {
                    font-size: 1.6rem;
                }
            }
            .form-wrapper_form_wrapper {
                div {
                    margin-top: 2rem;
                    @media only screen and (max-width: 1024px) {
                        margin-top: 3rem;
                    }
                }
                label {
                    display: block;
                    font-size: 1.6rem;
                    padding-left: 0.3rem;
                    @media only screen and (max-width: 1024px) {
                        font-size: 2rem;
                    }
                }
                input {
                    min-width: 22rem;
                    padding: 0.5rem;
                    border: 0.05rem solid black;
                    @media only screen and (max-width: 1024px) {
                        width: 94%;
                        padding: 1rem;
                        font-size: 1.6rem;
                    }
                }
            }
        }
        .form-wrapper_form_submit-wrapper {
            display: flex;
            justify-content: center;
            .form-wrapper_form_submit-wrapper_submit {
                margin-top: 2rem;
                background-color: white;
                color: black;
                padding: 1rem 3rem;
                font-size: 1.2rem;
                border-radius: 5%;
                cursor: pointer;
                border: 0.05rem solid black;
                @media only screen and (max-width: 1024px) {
                    padding: 28px 56px;
                    width: 30%;
                    font-size: 1.6rem;
                    margin-top: 3rem;
                }
            }
            .form-wrapper_form_submit-wrapper_submit:hover {
                background: #e7e7e7;
            }
        }
    }
</style>