<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4 floating-box">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Hello</h3>
        </div>
        <div class="panel-body" data-validator-form>
          <div class="form-group">
            <label class="control-label">Username</label>
            <input v-validator:input.required="{ regex: /^[a-zA-Z]+\w*\s?\w*$/, error: 'has to start with letter' }" type="text" class="form-control" placeholder="username">
          </div>
          <div class="form-group">
            <label class="control-label">password</label>
            <input id="password" v-validator.required="{ regex: /^\w{6,16}$/, error: 'length between 6 - 16' }" type="password" class="form-control" placeholder="fill in password">
          </div>
          <div class="form-group">
            <label class="control-label">re-enter password</label>
            <input v-validator.required="{ target: '#password' }" type="password" class="form-control" placeholder="please re-enter password">
          </div>
          <div class="form-group">
            <label class="control-label">captcha</label>
            <input v-validator.required="{ title: 'captcha' }" type="text" class="form-control" placeholder="captcha">
          </div>
          <div class="thumbnail" title="click" @click="getCaptcha">
            <div class="captcha vcenter" v-html="captchaTpl"></div>
          </div>
          <button type="submit" class="btn btn-lg btn-success btn-block">
            <i class="fa fa-btn fa-sign-in"></i> Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import createCaptcha from '@/utils/createCaptcha'

export default {
  name: 'Register',
  data() {
    return {
      captchaTpl: ''
    }
  },
  created() {
    this.getCaptcha()
  },
  methods: {
    getCaptcha() {
      const { tpl, captcha } = createCaptcha()

      this.captchaTpl = tpl
      this.localCaptcha = captcha
    }
  }
}
</script>

<style scoped>
.thumbnail { width: 170px; margin-top: 10px; cursor: pointer;}
.thumbnail .captcha { height: 46px; background: #E1E6E8;}
.captcha { font-size: 24px; font-weight: bold; user-select: none;}
</style>
