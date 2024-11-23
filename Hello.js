export default function Hello(app){
    app.get('/hello',(req,res) => {
        res.send('Life is good!')})
    app.get('/', (req, res) => {
        res.send('Welcom to Full Stack Development!')})
}