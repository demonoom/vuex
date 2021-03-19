# vuex-api

## store:容器
## 核心概念
+ ### State：状态树
   + mapState：映射辅助函数，将store中的state映射到局部计算属性，避免在计算属性中冗余的声明
+ ### Getter：store的计算属性，避免多个组件需要使用某个计算属性函数时复制函数
   + 第一个参数：Getter接受state作为第一个参数
   + 第二个参数 ：也可接收其他getter作为第二个参数
   + mapGetters：辅助函数，将store中的getter映射到局部计算属性
+ ### Mutation：用来修改state的状态
   + 第一个参数：Mutation接受state作为第一个参数
   + 第二个参数：接受提交（commit）时的传参
   + mapMutation：辅助函数，将store中的mutations映射到method中
   + mutation都是同步事务
+ ### Action：类似mutation，不同在于action提交mutation，而不直接改变状态；action可以包含异步操作
   + 第一个参数：接受一个与store实例具有相同方法和属性的context对象
   + 第二个参数：接受分发（dispatch）时的传参
   + mapActions：辅助函数，将store.dispatch的调用映射到组件的method中
   + 组合action：利用async、await组合异步调用action
+ ### Module：将store分割成模块，每个模块有自己的state、getter、mutation...
## 可以直接修改state的值吗：
    不可以，在严格模式下任何修改state的操作只要不经过mutation，vue就会报错；并且直接修改state调试工具也无法捕获修改
## v-model和vuex有冲突吗：
    有冲突，v-model=一个vuex store的state值时，用户输入相当于直接修改state，没有经过mutation
   + 解决（2种）
      + 不使用v-model，手动监听input的change事件，在回调中commit
      + v-model=一个带有setter的计算属性，set中进行commit
    <input v-model="message">
    
    computed: {
      message: {
        get () {
          return this.$store.state.obj.message
        },
        set (value) {
          this.$store.commit('updateMessage', value)
        }
      }
    }
