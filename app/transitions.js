export default function(){
  var duration = 1200

  this.transition(
    this.fromRoute('about'),
    this.fromRoute('gems'),
    this.fromRoute('articles'),
    this.fromRoute('contact'),
    this.use('toLeft', { duration: duration }),
    this.reverse('toLeft', { duration: duration })
  );
}
