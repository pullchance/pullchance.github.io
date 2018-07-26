var app = new Vue({
    el: '#app',
    data: {
        rf: 1,
        bf: 1,
        gf: 1,
        cf: 1,
        r5: 28,
        b5: 20,
        g5: 14,
        c5: 18,
        r4: 28,
        b4: 24,
        g4: 18,
        c4: 24,
        r3: 15,
        b3: 12,
        g3: 9,
        c3: 13,
        pf: 3,
        p5: 3,
        p4: 58,
        p3: 36
    },
    methods: {
        check() {
            
        }
    },
    computed: {
        sf: function () {
            return parseInt(this.rf) + parseInt(this.bf) + parseInt(this.gf) + parseInt(this.cf);
        },
        s5: function () {
            return parseInt(this.r5) + parseInt(this.b5) + parseInt(this.g5) + parseInt(this.c5);
        },
        s4: function () {
            return parseInt(this.r4) + parseInt(this.b4) + parseInt(this.g4) + parseInt(this.c4);
        },
        s3: function () {
            return parseInt(this.r3) + parseInt(this.b3) + parseInt(this.g3) + parseInt(this.c3);
        },
        rfr: function () {
            return this.pf/100*this.rf/this.sf;
        },
        r5r: function () {
            return this.p5/100*this.r5/this.s5;
        },
        r4r: function () {
            return this.p4/100*this.r4/this.s4;
        },
        r3r: function () {
            return this.p3/100*this.r3/this.s3;
        },
        rfu: function() {
            return this.rfr / (this.rfr+this.r5r+this.r4r+this.r3r);
        },
        bfr: function () {
            return this.pf/100*this.bf/this.sf;
        },
        b5r: function () {
            return this.p5/100*this.b5/this.s5;
        },
        b4r: function () {
            return this.p4/100*this.b4/this.s4;
        },
        b3r: function () {
            return this.p3/100*this.b3/this.s3;
        },
        bfu: function() {
            return this.bfr / (this.bfr+this.b5r+this.b4r+this.b3r);
        },
        gfr: function () {
            return this.pf/100*this.gf/this.sf;
        },
        g5r: function () {
            return this.p5/100*this.g5/this.s5;
        },
        g4r: function () {
            return this.p4/100*this.g4/this.s4;
        },
        g3r: function () {
            return this.p3/100*this.g3/this.s3;
        },
        gfu: function() {
            return this.gfr / (this.gfr+this.g5r+this.g4r+this.g3r);
        },
        cfr: function () {
            return this.pf/100*this.cf/this.sf;
        },
        c5r: function () {
            return this.p5/100*this.c5/this.s5;
        },
        c4r: function () {
            return this.p4/100*this.c4/this.s4;
        },
        c3r: function () {
            return this.p3/100*this.c3/this.s3;
        },
        cfu: function() {
            return this.cfr / (this.cfr+this.c5r+this.c4r+this.c3r);
        }
      }
});