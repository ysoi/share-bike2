export default{
    //格式化数据
    formatDate(unix){
        function fixZero(data){
            return data>=10? ''+data:'0'+data;
        }
        let date=new Date(unix);
        let year=date.getFullYear();
        let month= fixZero(date.getMonth()+1);
        let day=fixZero(date.getDate());
        let hours=fixZero(date.getHours());
        let minutes=fixZero(date.getMinutes());
        let seconds=fixZero(date.getSeconds());
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
}
   