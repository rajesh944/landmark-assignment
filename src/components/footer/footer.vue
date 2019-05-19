<template>
    <div id="footer-comp" class="landmark-footer">
        <div class="landmark-footer_form-wrapper">
            <button class="landmark-footer_form-wrapper_form-button" @click="viewChangeData(true)">Form</button>
        </div>
        <div class="landmark-footer_view-wrapper">
            <button class="landmark-footer_view-wrapper_view-button" @click="viewChangeData(false)">View</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            viewChangeData(flag) {
                let dataStored = localStorage.getObj('formDataLandmark');
                if (dataStored === null) {//If someone cleared localstorage after app load
                    this.$store.dispatch('settabularList', []);
                    this.$store.dispatch('setFormEnabled', flag);
                    return
                }
                dataStored.reduce((updatedArray, eachSubmittedObject) => {
                    let timeDiff = timeLogic(eachSubmittedObject.time);
                    eachSubmittedObject.time = `${timeDiff}min`;
                    updatedArray.push(eachSubmittedObject);
                    return updatedArray;
                }, [])
                function timeLogic(submitDateObj) {
                    if (!submitDateObj instanceof Date) {
                        return;
                    }
                    const currentDate = new Date();
                    const submittedDate = new Date(submitDateObj);
                    let milliSecondDiff = currentDate.getTime() - submittedDate.getTime();
                    return Math.round(milliSecondDiff / 60000);
                }
                this.$store.dispatch('settabularList', dataStored);
                this.$store.dispatch('setFormEnabled', flag);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .landmark-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        height: 5rem;
        button {
            padding: 1rem 4rem;
            border-radius: 4%;
            font-size: 1.2rem;
            cursor: pointer;
            background-color: white;
            border: 0.05rem solid black;
            @media only screen and (max-width: 1024px) {
                font-size: 1.6rem;
                width: 100%;
            }
        }
        button:hover {
            background: #e7e7e7;
        }
        .landmark-footer_form-wrapper {
            padding: 0rem 2rem;
            @media only screen and (max-width: 1024px) {
                width:100%;
            }
        }
        .landmark-footer_view-wrapper {
            @media only screen and (max-width: 1024px) {
                width:100%;
            }
        }
    }
</style>