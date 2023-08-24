import { makeAutoObservable } from "mobx"
import { http } from '@/utils'

class ChannelStore{
    channelList = []
    constructor(){
        makeAutoObservable(this)
    }

    getChannelList = async () => {
        // 调用接口获取数据
        const channelRes = await http.get('/channels')
        this.channelList = channelRes.data.channels
    }
}

export default ChannelStore
