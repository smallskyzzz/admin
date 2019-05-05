<template>
  <div>
    <div>
      <el-input placeholder="请输入内容" v-model="title">
        <template slot="prepend">标题</template>
      </el-input>
    </div>
    <div>
      <el-input placeholder="请输入内容" v-model="content">
        <template slot="prepend">内容</template>
      </el-input>
    </div>
    <div>
      <el-select v-model="category" placeholder="请选择类型">
        <el-option v-for="item in options" :value="item" :key="item"></el-option>
      </el-select>
    </div>
    <div>
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
import {add} from '../api/api'
export default {
  name: "note",
  data() {
    return {
      title: '',
      content: '',
      category: '',
      options: ['笔记']
    }
  },
  methods: {
    submit: function () {
      add({
        title: this.title,
        content: this.content,
        category: this.category
      }).then((res) => {
        if(res.data.state) {
          alert('插入成功')
        }else {
          alert('哪里出错了')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
