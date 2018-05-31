<template>
  <footer class="footer">
    <div class="container">
      <div class="row footer-top">
        <div class="col-sm-5 col-lg-5">
          <p class="padding-top-xsm">{{ description }}</p>

          <div class="text-md">
            <a v-for="item in contacts" v-title="item.title" :href="item.link" :style="contactStyle" target="_blank">
              <i :class="`fa fa-${item.icon}`"></i>
            </a>
          </div>

        </div>

        <div class="col-sm-6 col-lg-6 col-lg-offset-1 text-right">
          <span v-html="designer"></span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import title from '@/directives/title'

export default {
  name: 'TheFooter',
  directives: {
    title
  },
  data() {
    return {
      description: 'VuejsCaff',
      contacts: [
        {
          icon: 'envelope',
          title: 'report',
          link: ''
        },
        {
          icon: 'weibo',
          title: 'weibo',
          link: ''
        },
        {
          icon: 'weixin',
          title: 'WeChat',
          link: ''
        }
      ],
      contactStyle: {
        paddingRight: '8px'
      },
      designer: `
        <span style="font-size:0.9em">
          <a href="https://github.com/fann0128" target="_blank" style="color:inherit">fann0128</a>
        </span>
      `
    }
  }
}
</script>

<style scoped>
a:hover, a:focus { color: #e27575; transition: color .15s;}
</style>
