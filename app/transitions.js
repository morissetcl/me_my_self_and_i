export default function(){
  var duration = 1200

  this.transition(
    this.fromRoute('about'),
    this.fromRoute('gemstorys'),
    this.fromRoute('articles'),
    this.fromRoute('contact'),
    this.use('toUp', { duration: duration }),
    this.reverse('toUp', { duration: duration })
  );
}
