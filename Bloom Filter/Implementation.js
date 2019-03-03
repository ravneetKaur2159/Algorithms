//Instantiation

// Bloom filters has 2 properties : size and number of times to run the hash function (This can be replaced by having 
// different hash functions. Here murmur hash function has been used. FNV can be used in conjunction with murmur)

// The time-complexity reduces to O(3) --> 3 is the number of hashing

// Murmur Hash Function
function murmurHash(key, seed) {
	var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
	
	remainder = key.length & 3; // key.length % 4
	bytes = key.length - remainder;
	h1 = seed;
	c1 = 0xcc9e2d51;
	c2 = 0x1b873593;
	i = 0;
	
	while (i < bytes) {
	  	k1 = 
	  	  ((key.charCodeAt(i) & 0xff)) |
	  	  ((key.charCodeAt(++i) & 0xff) << 8) |
	  	  ((key.charCodeAt(++i) & 0xff) << 16) |
	  	  ((key.charCodeAt(++i) & 0xff) << 24);
		++i;
		
		k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

		h1 ^= k1;
        h1 = (h1 << 13) | (h1 >>> 19);
		h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
		h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
	}
	
	k1 = 0;
	
	switch (remainder) {
		case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
		case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
		case 1: k1 ^= (key.charCodeAt(i) & 0xff);
		
		k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
		h1 ^= k1;
	}
	
	h1 ^= key.length;

	h1 ^= h1 >>> 16;
	h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
	h1 ^= h1 >>> 13;
	h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
	h1 ^= h1 >>> 16;

	return h1 >>> 0;
}



function BloomFilter(bloomFilterLength){
    this.size = bloomFilterLength;
    this.hashCounts = 3;
    this.filterArr = new Array(bloomFilterLength);
    this.filterArr.fill(0);
}

// Adds strings to the bloomFilterBitArray
BloomFilter.prototype.add  = function(string){
    for(var i=0;i<this.hashCounts;i++){
        var result = murmurHash(string,i)%this.size;
        this.filterArr[result] = 1;
    }
}

BloomFilter.prototype.lookUp = function(lookUpString){
    for(var i=0;i<this.hashCounts;i++){
        var result = murmurHash(lookUpString,i)%this.size
        if(this.filterArr[result] == 0){
            console.log("Definitely not present");
            return;
        }
    }
    console.log("Maybe Present");
}


var myFilter = new BloomFilter(10);
myFilter.add("India");
myFilter.add("Chandigarh");
myFilter.add("Mohali");
myFilter.add("Bangalore");

myFilter.lookUp("India"); // Maybe Present
myFilter.lookUp("Jaipur"); // Definitely not present



