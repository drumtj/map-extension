function timestamp(){
	return Date.now();
}

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

  //param:[value, ...], return:[key, ...]
  setArray1D(arr:any[]):string[]{
		let keys = [];
    for(let o=0; o<arr.length; o++){
			let key = timestamp();
      this.set(key, arr[o]);
			keys.push(key);
    }
    return keys;
  }

  //param: [[key, value], ...]
  setArray2D(arr:any[][]){
    for(let o=0; o<arr.length; o++){
      this.set(arr[o][0], arr[o][1]);
    }
		return this;
  }

	setObject(obj){
    for(let o in obj){
      this.set(o, obj[o]);
    }
    return this;
  }

	toArray():any[][]{
		let arr = [];
		for(let [k, v] of this.entries()){
			arr.push([k,v]);
    }
		return arr;
  }

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
  }

  clone():Mapx{
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

	//return key
	push(value): any {
		let key = timestamp();
		this.set(key, value);
		return key;
	}

	//return [key, value];
	pop(): any[] {
		let i=0;
		if(this.size){
			for(let kv of this.entries()){
				if(++i >= this.size){
					this.delete(kv[0]);
					return kv[1];
				}
	    }
		}else{
			return;
		}
	}

	toValues(): any[] {
		let arr = [];
		for(let v of this.values()){
			arr.push(v);
    }
		return arr;
	}

	toKeys(): any[] {
		let arr = [];
		for(let v of this.keys()){
			arr.push(v);
    }
		return arr;
	}

	//return key
	indexOf(value):any {
		for(let kv of this.entries()){
			if(kv[1] === value){
				return kv[0];
			}
		}
		return null;
	}
}
