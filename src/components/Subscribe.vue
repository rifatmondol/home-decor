<template>
    <div class="subscribe my-5 py-5">
        <div class="container">
            <h2 class="text-center mb-5">
                Subscribe to our newsletter <br>for the latest news and insights
            </h2>
            <form action="#">
                <div class="input-box d-flex w-100 justify-content-start">
                    <span class="input-field">
                        <input type="email" placeholder="Enter your email" v-model="value" @input="validateEmail()">
                        <span class="required-text" v-if="showRequired" @click="closeRequired()">This field is required <span><font-awesome-icon icon="fa-solid fa-xmark" /></span></span>
                        <span class="required-text-2" v-if="showInvalid" @click="closeInvalid()">The email address entered is invalid <span><font-awesome-icon icon="fa-solid fa-xmark" /></span></span>
                    </span>
                    <button type="submit" class="ms-2 d-inline-block" @click.prevent="onSubmit()" id="subscribe" :disabled="isDisabled">Subscribe</button>
                </div>

                <div class="success-message" v-if="formSubmit">
                    <p class="mb-0 text-success">Form submitted successfully!</p>
                </div>
                <div class="checkbox mt-2">
                    <label for="check">
                        <input type="checkbox" id="check" @click="boxClicked()">
                        <span class="d-inline-block ms-2">I agree to my email being stored and used to receive the newsletter</span>
                    </label>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default{
    name:'SubscribeView',
    data(){
        return{
            value:'',
            // isChecked: false,
            isDisabled: true,
            showRequired: false,
            showInvalid: false,
            formSubmit: false
        }
    },
    methods:{
        validateEmail(){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(this.value);
        },
        boxClicked(){
            this.isDisabled = !this.isDisabled;
            document.getElementById('subscribe').classList.toggle('active');

            if(this.value.length == 0){
                this.showRequired = true;
            }
            else if (!this.validateEmail()) {
                this.showInvalid = true;
            } 
            
        },
        
        closeRequired(){
            this.showRequired = false
        },
        closeInvalid(){
            this.showInvalid = false
        },
        onSubmit(){
            if(this.value.length == 0){
                this.showRequired = true;
            }
            else if (!this.validateEmail()) {
                this.showInvalid = true;
            } 
            else{
                setTimeout( ()=>{
                    this.formSubmit = true;
                    this.value= '';
                },700)

                setTimeout( () => {
                    this.formSubmit = false;
                },3000)
            }
        }
    },
    
}
</script>

<style>
form {
    width: 50%;
    margin: 0 auto;
}
span.input-field{
    width: 60%;
    display: inline-block;
    position: relative;
}
.input-box input {
    width: 100%;
    text-indent: 10px;
    height: 50px;
    border: 1px solid var(--extra-light-gray);
    color: var(--dark-cyan);
    border-radius: 5px;
}
.input-box input::placeholder{
    color: var(--dark-cyan);
}
.input-box input:focus,.input-box input:focus-visible{
    outline: none;
}
.input-box span.required-text,.input-box span.required-text-2 {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    color: var(--white);
    background: var(--dark-cyan);
    line-height: 3;
    padding: 0px 15px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
}

.input-box button{
    background: var(--dark-cyan);
    color: var(--white);
    border: none!important;
    padding: 14px 50px;
    border-radius: 5px;
    font-size: 15px;
    cursor: not-allowed!important;
    font-weight: 600;
}
.input-box button.active{
    cursor: pointer!important;
}
.checkbox span{
    color: var(--light-gray);
    font-size: 14px;
}
</style>