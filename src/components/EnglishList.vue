<template>
    <div class="g-englishList-wrapper">
        <ul v-for="(item, key) in englishList" :key="key" class="content">
            <li>
                <h2>{{ key }}</h2>
                <ul v-for="(item_2, key_2) in item" :key="key_2">
                    <li>
                        <h3>{{ key_2 }}</h3>
                        <ul v-for="(item_3, key_3) in item_2" :key="key_3">
                            <li>
                                <p>
                                    {{ key_3 }}:
                                    <a
                                        v-if="typeof item_3 !== 'string'"
                                        v-bind:href="item_3[0]"
                                    >
                                        {{ item_3[0] }}
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import Show from "./Show.vue";
import Header from "./Header.vue";
const list = require("./englishList.json");
export default {
    name: "EnglishList",
    data() {
        return {
            englishList: list
        };
    }
};
</script>

<style scoped rel="stylesheet/less" lang="less">
.g-englishList-wrapper {
    // padding: 0 15px;
    background: url("../assets/bg_edit.png") no-repeat center fixed;
    background-size: cover;
    color: #eee;
    border: 1px solid transparent;
}
.content {
    background: rgba(0, 0, 0, 0.2);
    padding: 10px;
}
</style>
