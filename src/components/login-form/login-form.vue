<template>
  <div class="login" v-if="loginMoadl">
    <div class="login-con">
      <Card icon="md-globe" title="欢迎登录战略平台系统" :bordered="false">
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
            <FormItem prop="name">
              <Input v-model="form.name" placeholder="请输入用户名">
                <span slot="prepend">
                  <Icon :size="16" type="md-contact"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="form.password" placeholder="请输入密码">
                <span slot="prepend">
                  <Icon :size="14" type="ios-lock"></Icon>
                </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button @click="handleSubmit" type="primary" long>登录</Button>
            </FormItem>
          </Form>
        </div>
      </Card>
      <div class="close-modal" @click="closeModalFunc"><Icon type="md-close" /></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginForm",
  props: {
    loginMoadl: {
      type: Boolean,
      default: false
    },
    userNameRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "账号不能为空", trigger: "blur" }];
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [{ required: true, message: "密码不能为空", trigger: "blur" }];
      }
    }
  },
  data() {
    return {
      form: {
        name: "mai",
        password: "123456"
      }
    };
  },
  computed: {
    rules() {
      return {
        name: this.userNameRules,
        password: this.passwordRules
      };
    }
  },
  methods: {
    closeModalFunc() {
      this.$emit('update:loginMoadl', false)
    },
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$emit("on-success-valid", {
            name: this.form.name,
            password: this.form.password
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
  z-index: 99999;
  &-con {
    z-index: 100000;
    background-color: #fff;
    opacity: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    &-header {
      font-size: 16px;
      font-weight: 300;
      text-align: center;
      padding: 20px 0 0;
    }
    .form-con {
      padding: 10px 10px 0;
    }
    .login-tip {
      font-size: 10px;
      text-align: center;
      color: #c3c3c3;
    }
  }
}
.close-modal {
  position: absolute;
  right: 10px;
  top: -8px;
  font-size: 20px !important;
  transition:all .5s;
  transform: rotate(0deg);
}
.close-modal:hover {
  transform: rotate(90deg);
}
</style>

