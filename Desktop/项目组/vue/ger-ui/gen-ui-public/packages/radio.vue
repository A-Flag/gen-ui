<template>
    <label class="gen-radio" :class="{'is-checked': label == model}">
        <span class="gen-radio_input">
            <span class="gen-radio_inner"></span>
            <input
            type="radio"
            class="gen-radio_original"
            :value="label"
            v-model="model"
            >
            </span>
            <span class="gen-radio_label">
            <slot></slot>
            <!-- 如果没有传值，就把label作为文本显示 -->
            <template v-if="!$slots.default">{{label}}</template>
            
        </span>
    </label>

</template>

<script>
export default {
    name:'GenRadio',
     props: {
        label: {
        type: [String, Number, Boolean],
        defualt: ''
        },
        value: null,
        name: {
            type: String,
            defualt: ''
        },
     },
    inject: {
        RadioGroup: {
            default: ''
        }
    },
    //计算属性
    computed: {
        model: {
            get () {
                return this.isGroup ? this.RadioGroup.value : this.value
                // return this.value
            },
            set (value) {
                // 触发父组件的input事件
                this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
                // this.$emit('input', value)

            }
        },
        // 用于判断radio是否被radioGroup包裹
        isGroup () {
            return !!this.RadioGroup
        }

    },

}
</script>

<style lang="scss" scoped>
  .gen-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    .gen-radio_input{
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .gen-radio_inner{
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after{
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) scale(0);
          transition: transform .15s ease-in;
        }
      }
      .gen-radio_original{
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    .gen-radio_label{
      font-size: 14px;
      padding-left: 10px;;
    }
  }
  // 选中的样式
  .gen-radio.is-checked{
    .gen-radio_input{
      .gen-radio_inner{
        border-color: #409eff;
        background-color: #409eff;
        &:after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
    .gen-radio_label{
      color:#409eff;
    }
  }

</style>