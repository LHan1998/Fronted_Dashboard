import service from "@/utils/Request";
export function test(){
    return new service({
        url: '/test',
        method: 'get',
        data: {}
    })
}