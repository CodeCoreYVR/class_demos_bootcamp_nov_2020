const counter={
    currentCount:0,
    step:1,
    set:function(n){
        this.currentCount=n;
        return this;
    },
    setStep:function(step){
        this.step=step;
    },
    inc:function(){
        // this.currentCount++;
        this.currentCount +=this.step;
        return this;
    },
    dec:function(){
        this.currentCount-=this.step;
        return this
    },
    now:function(){
        // console.log(this.currentCount)
        return this.currentCount;
    }
}

// counter.now();
// counter.set(5);
// counter.now();//5
// counter.inc();
// counter.now();//6
// counter.dec();
// counter.now();//5
counter.setStep(10)
console.log(counter.inc().inc().dec().dec().now());