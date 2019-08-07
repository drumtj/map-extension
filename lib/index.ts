export default class Mapx extends Map {
	constructor(obj?){
		super();
    if(Array.isArray(obj)){
			if(obj[0].length > 1){
        this.setArray2D(obj);
      }else{
        this.setArray1D(obj);
      }
    }else if(typeof obj === "object"){
			this.setObject(obj);
    }
  }

  get length(){
    return this.size;
  }

  set length(n){
    let i=0;
    this.forEach((v,k)=>{
      if(i++ >= n){
        this.delete(k);
      }
    })
  }

  //[value]
  setArray1D(arr){
    for(let o=0; o<arr.length; o++){
      this.set(o, arr[o]);
    }
    return this;
  }

  //[key, value]
  setArray2D(arr){
    for(let o=0; o<arr.length; o++){
      this.set(arr[o][0], arr[o][1]);
    }
    return this;
  }

  // setArray2DVK(arr){
  //   for(let o=0; o<arr.length; o++){
  //     this.set(arr[o][1], arr[o][0]);
  //   }
  //   return this;
  // }

	setObject(obj){
    for(let o in obj){
      this.set(o, obj[o]);
    }
    return this;
  }

	toArray(){
		let arr = [];
		for(let [k, v] of this.entries()){
			arr.push([k,v]);
    }
		return arr;
  }

	// toArrayVK(){
	// 	let arr = [];
	// 	for(let [k, v] of this.entries()){
	// 		arr.push([v,k]);
  //   }
	// 	return arr;
  // }

	toObject(){
		let obj = {};
		for(let [k, v] of this.entries()){
      if(typeof k === "string" || typeof k === "number"){
  			obj[k] = v;
      }
    }
		return obj;
  }

	mapToArray(c:(value, key, array)=>any):any[]{
    return this.toArray().map((v,k,a)=>{
      return c(v[1], v[0], a);
    });
		// let arr = [];
		// for(let [k, v] of this.entries()){
		// 	arr.push(c(v, k));
    // }
    // return arr;
  }

  clone(){
    return new Mapx(this.toArray());
  }

  map(c:(value, key, map)=>any):Mapx{
    let m = this.clone();
		for(let [k, v] of this.entries()){
			m.set(k, c(v, k, m));
    }
    return m;
  }

	filterToArray(c:(value, key, array)=>boolean):any[]{
    return this.toArray().filter((v,k,a)=>{
      return c(v[1], v[0], a);
    });
		// let arr = [];
		// for(let [k, v] of this.entries()){
		// 	if(c(v, k)){
		// 		arr.push([k, v]);
    //   }
    // }
		// return arr;
  }

  filter(c:(value, key, map)=>boolean):Mapx{
    let m = this.clone();
		for(let [k, v] of this.entries()){
      if(!c(v, k, m)){
  			m.delete(k);
      }
    }
    return m;
  }

  reduce(c:(result, value, key, map)=>any, r):any{
		return this.toArray().reduce((r,v,k,a)=>{
      return c(r, v[1], v[0], a);
    }, r);
  }
}
