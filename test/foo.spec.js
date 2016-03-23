function Foo(bar){
  this.bar = bar;
}
describe('Foo', function(){
  it('exists', function(){
    expect(Foo).to.be.ok;
  });

  describe('creating a Foo', function(){
    describe('when bar is set to buzz', function(){
      var foo;
      beforeEach(function(){
        foo = new Foo('buzz');
      });
      it('foo.bar is buzz', function(){
        expect(foo.bar).to.equal('buzz');
      });
    });
  });
});
