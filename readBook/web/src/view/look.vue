<template>
  <div>
    <van-nav-bar title="查看列表" right-text="新增图书" @click-right="onClickRight" />

    <van-card
      v-for="(site,index) in bookList"
      :key="index"
      :price="site.price"
      :desc="site.info"
      :title="site.title"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
      <div slot="tags">
        <van-tag plain type="danger">{{site.tag}}</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini" @click="edit(site._id)">编辑</van-button>
        <van-button size="mini" @click="dell(site._id,index)">删除</van-button>
      </div>
    </van-card>
  </div>
</template>

<script>
export default {
  created() {
    this.$axios({
      method: "get",
      url: "/getBookList",
      data: null
    }).then(r => {
      this.bookList = r.data;
    });
  },
  data() {
    return {
      bookList: []
    };
  },
  methods: {
    onClickRight() {
      this.$router.push({ path: "/add" });
    },
    edit(id) {
      this.$router.push({ path: "/add?id="+id });
    },
    dell(id,index) {
      this.$axios({
        method: "delete",
        url: "/deleteBook",
        params: {id:id}
      }).then(r => {
        if (r.data == "success") {
            this.$notify({ type: "success", message: "删除成功" });
            this.bookList.splice(index,1)
        }
      });
    }
  }
};
</script>

<style scoped>
</style>