<template>
  <div id="home">
    <div class="header">
      <h2>拆小鹤</h2>
      <span v-if="loginStatus === false" @click="showLogin">登录</span>
      <span v-else @click="showLogout">注销</span>
    </div>
    <div class="container">
      <p>小鹤音形拆字、赛文、成绩记录系统</p>
    </div>
    <div class="footer">
      拆小鹤记录系统（开发中）
    </div>
    <!-- 遮罩层 -->
    <div class="mask" :class="{ active: toggleLoginBox }" @click="hiddenLogin"></div>
    <div class="login" :class="{ active: toggleLoginBox }">
      <el-card class="card-box">
        <template v-if="loginOrRegister === 0">
        <div slot="header" class="tip">登录</div>
        <el-form :model="formDataLogin" label-width="60px" label-position="top">
          <el-form-item label="用户名">
            <el-input v-model="formDataLogin.username" placeholder="请输入用户名" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="formDataLogin.password" placeholder="请输入密码" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="btn" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
        <div class="info">
          <span>还没有账号？ <span @click="toRegister" class="btn">马上注册</span></span>
        </div>
        </template>
        <template v-else>
        <div slot="header" class="tip">注册</div>
        <el-form :model="formDataRegister" label-width="60px" label-position="top">
          <el-form-item label="用户名">
            <el-input v-model="formDataRegister.username" placeholder="请输入用户名" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="formDataRegister.email" placeholder="请输入邮箱" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="formDataRegister.password" placeholder="请输入密码" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="btn" @click="register">注册</el-button>
          </el-form-item>
        </el-form>
        <div class="info">
          <span>已有账号？<span @click="toLogin" class="btn">马上登录</span> </span>
        </div>
        </template>
      </el-card>
    </div>
    <div class="logout">
      <el-dialog title="注销" :visible.sync="logoutDialog">
        <span>您确定要退出吗？？？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="hiddenLogout">取 消</el-button>
          <el-button type="primary" @click="logout">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 未登录状态 还是已经登录 false 代表未登录， true表示已经登录
      loginStatus: false,
      // 未登录状态 显示/隐藏 登录框 false 表示隐藏 true 表示显示
      toggleLoginBox: false,
      // 已登录状态 需要一个注销对话框
      logoutDialog: false,
      // 切换 登录注册 0代表登录 1代表注册
      loginOrRegister: 0,
      // 登录字段
      formDataLogin: {
        username: '',
        password: ''
      },
      // 注册字段
      formDataRegister: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    showLogin () {
      this.toggleLoginBox = true
    },
    hiddenLogin () {
      this.toggleLoginBox = false
    },
    showLogout () {
      this.logoutDialog = true
    },
    hiddenLogout () {
      this.logoutDialog = false
    },
    toRegister () {
      this.loginOrRegister = 1
    },
    toLogin () {
      this.loginOrRegister = 0
    },
    login () {
      console.log('登录成功')
      this.toggleLoginBox = false
      this.loginStatus = true
    },
    register () {
      console.log('注册成功')
      this.toggleLoginBox = false
      this.loginStatus = true
    },
    logout () {
      console.log('你已退出')
      this.logoutDialog = false
      this.loginStatus = false
    }
  },
  mounted () {
    this.loginStatus = false
  }
}
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
  background: #ccc;
  position: relative;
  display: flex;
  flex-direction: column;
  .header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    box-sizing: border-box;
    background: #242424;
    h2 {
      color: #fff;
    }
    span {
      color: #787878;
      cursor: pointer;
      &:hover {
        color: blue;
      }
    }
  }
  .container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }
  .footer {
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .mask {
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    &.active {
      display: block;
    }
  }
  .login {
    position: absolute;
    z-index: 1001;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    user-select: none;
    &.active {
      display: block;
    }
    .card-box {
      width: 400px;
      .tip {
        font-size: 20px;
        text-align: center;
        height: 100%;
        line-height: 100%;
      }
      .el-form-item {
        .btn {
          width: 100%;
          background:#666b6f;
          color: #fff;
        }
      }
      .info {
        padding-top: 20px;
        .btn {
          color: #75bdba;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
