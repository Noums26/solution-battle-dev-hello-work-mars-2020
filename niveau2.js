let data = {
    count: 1,
    reference: 0,
    countOld: 0,
    result: 0,
    etude: function(table){
        this.reference = table[0];
        for(let i=1; i<table.length; i++){
            if (table[i] == this.reference) {
                this.count++;
            } else {
                this.reference = table[i];
                this.countOld = this.count <= this.countOld ? this.countOld : this.count;
                this.count = 1;
            }
        }
        return(this.result = this.count >= this.countOld ? this.count : this.countOld)
    },
}
