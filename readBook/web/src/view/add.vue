<template>
  <div>
    <van-nav-bar title="图书管理" left-arrow @click-left="onClickLeft" />

    <van-field v-model="data.title" label="图书标题" />
    <van-field v-model="data.info" label="图书信息" />
    <van-field v-model="data.tag" label="标签" />
    <van-field v-model="data.price" type="number" label="价格" />
    <p>封面</p>
    <van-uploader :after-read="afterRead" />
    <div>
      <van-button type="info" @click="addNewBook" class="addBtn">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id:null,
      data: {
        title: "",
        info: "",
        tag: "",
        price: ""
      }
    };
  },
  created() {
    let id = this.$route.query.id;
    if(id){
      this.id=id;
    this.$axios({
      method: "get",
      url: "/getBookInfo",
      params: {id:id}
    }).then(r => {
      this.data = r.data[0];
    });
    }
  },
  methods: {
    afterRead(file) {
      window.console.log(file);
    },
    onClickLeft() {
      history.go(-1);
    },
    addNewBook() {
      let data = this.data;
      
      if(this.id){
        data.id=this.id;
      this.$axios({
        method: "put",
        url: "/editBook",
        data: data
      }).then(r => {
        if (r.data == "success") {
          this.$notify({ type: "success", message: "新增成功" });
          setTimeout(() => {
            history.go(-1);
          }, 1000);
        }
      });
      
        return 
      }
      this.$axios({
        method: "post",
        url: "/addBook",
        data: data
      }).then(r => {
        if (r.data == "success") {
          this.$notify({ type: "success", message: "新增成功" });
          setTimeout(() => {
            history.go(-1);
          }, 1000);
        }
      });
    }
  }
};
</script>

<style scoped>
.addBtn {
  width: 80%;
  margin-left: 10%;
  margin-top: 20px;
}
</style>