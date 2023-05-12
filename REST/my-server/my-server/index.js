const jwt = require("jsonwebtoken")

const express = require("express")

const app = express()

const STU_ARR = [
    {
        id: "1",
        name: "Xiuyue",
        age: 18,
        gender: "female",
        address: "Palliser Lane"
    }, {
        id: "2",
        name: "Yinjia",
        age: 20,
        gender: "male",
        address: "Honeysuckle Lane"
    }, {
        id: "3",
        name: "Dashen",
        age: 38,
        gender: "male",
        address: "Louise Pl"
    }
]

//引入解析post请求body的中间件
app.use(express.urlencoded({ extended: true }))

//引入JSON格式的中间件
app.use(express.json())

app.use((req, res, next) => {
    // 设置响应头
    //1. origin
    // res.setHeader("Access-Control-Allow-Origin","http://192.168.66.18:5500")
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    // 2. methods  Access-Control-Allow-Methods  允许的请求方式
    res.setHeader("Access-Control-Allow-Methods", "GET,POST")
    // 3. headers  Access-Control-Allow-Headers  允许的请求头
    res.setHeader("Access-Control-Allow-Headers", "Content-type, Authorization")
    next()

})

// 定义获取学生信息的路由
app.get("/students", (req, res) => {
    try{
        //检查用户是否登录
        // 读取请求头
        const token = req.get("Authorization").split(" ")[1]
        // 解码token
        const decodeToken = jwt.verify(token, "sunnyday")
        if(decodeToken.username="admin"){
            //返回学生信息
            res.send({
                status: "ok",
                data: STU_ARR
            })
        }

    }catch(e){
        // 解码错误，token无效
        res.status(403).send({
            status: "error",
            data: "invalid token"
        })

    }



})


//添加学生的路由
app.post("/students", (req, res) => {
    console.log("receive students post request", req.body)
    //获取学生信息
    const { name, age, gender, address } = req.body
    const stu = {
        id: +STU_ARR.at(-1).id + 1 + "",
        name,
        age: +age,
        gender,
        address
    }
    STU_ARR.push(stu)

    //添加成功
    res.send({
        status: "ok",
        data: stu
    })

})

//删除学生信息的路由
app.delete("/students/:id", (req, res) => {
    // get the id from client which will be deleted
    const id = req.params.id
    // delete the stu
    // STU_ARR.pop(item => item.id === id)

    // // return the new array
    // res.send({
    //     status:"ok",
    //     data: STU_ARR
    // })

    //遍历数据
    for (let i = 0; i < STU_ARR.length; i++) {
        if (STU_ARR[i].id === id) {
            const delStu = STU_ARR[i]
            STU_ARR.splice(i, 1)
            // 数据删除成功
            res.send({
                status: "ok",
                data: delStu
            })
            return
        }
    }

    //如果执行到这里，数据没有删除成功
    res.status(403).send({
        status: "error",
        data: "No match id found"
    })


})

//修改学生信息
// app.put("/students", (req,res) => {
//     const {id, name, age, gender, address} = req.body
//     const updateStu = STU_ARR.find(item => item.id===id)
//     if(updateStu){
//         updateStu.name = name, 
//         updateStu.age = age,
//         updateStu.gender = gender,
//         updateStu.address = address

//         res.send({
//             status:"ok",
//             data: updateStu
//         })
//     }

//     res.status(403).send({
//         status:"error",
//         data:"No match student found"
//     })
// })
app.put("/students/:id", (req, res) => {
    const id = req.params.id
    const { name, age, gender, address } = req.body
    const updateStu = STU_ARR.find(item => item.id === id)

    if (updateStu) {
        updateStu.name = name,
            updateStu.age = age,
            updateStu.gender = gender,
            updateStu.address = address

        res.send({
            status: "ok",
            data: updateStu
        })

    }

    res.status(403).send({
        status: "error",
        data: "No match id found"
    })
})

//查询特定id的学生的路由
app.get("/students/:id", (req, res) => {
    const id = req.params.id
    const stu = STU_ARR.find(item => item.id === id)

    //return stu info to client
    res.send({
        status: "ok",
        data: stu
    })
})

//登录的路由
app.post("/login", (req, res) => {
    // get user input - username. password
    const { username, password } = req.body
    if (username === "admin" && password === "123") {
        // login成功，生成token
        const token = jwt.sign({
            id: "12345",
            username: "admin",
            nickname: "super star"
        }, "sunnyday", {
            expiresIn: "1d"
        })
        //login success
        res.send({
            status: "ok",
            data: {
                nickname: "super star",
                token: token
            }
        })
    } else {
        //login fail
        res.status(403).send({
            statas: "error",
            data: "username or password incorrect"
        })
    }
})


app.listen(9000, () => {
    console.log("start sever")
})