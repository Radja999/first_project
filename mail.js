var email=require('nodemailer');
var transporter=email.createTransport({
service:'gmail',
auth:{
user:'nahlaakacem11@gmail.com',
pass:'#radja25'
}
});
var mailOptions={
    from:'nahlaakacem11@gmail.com',
    to:'radjabelarbi30@gmail.com',
    subject:'testing',
    text:'hvdk sahbi,cordialement'
};
transporter.sendMail(mailOptions,function(err,info){
    if(err) console.log(err);
    else console.log('email send'+info.response);

});