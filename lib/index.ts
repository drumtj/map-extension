// import uuid from "uuid/v1";

export default class Mapx extends Map {
	index = 0;
	constructor(obj?){
		super();
    if(Array.isArray(obj)){
			if(Array.isArray(obj[0])){
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
			let key = this.getIndex();//uuid();
      this.set(key, arr[o]);
			keys.push(key);
    }
    return keys;
  }

  //param: [[key, value], ...], return:[key, ...]
  setArray2D(arr:any[][]):string[]{
		let key, keys = [];
    for(let o=0; o<arr.length; o++){
			if(Array.isArray(arr[o])){
				keys.push(arr[o][0]);
	      this.set(arr[o][0], arr[o][1]);
			}else{
				key = this.getIndex();
				keys.push(key);
				this.set(key, arr[o]);
			}
    }
		return keys;
  }

	//param: {}, return:[key, ...]
	setObject(obj){
		let keys = [];
    for(let o in obj){
			keys.push(o);
      this.set(o, obj[o]);
    }
    return keys;
  }

	toArray():any[][]{
		return [...this];
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

	getIndex(){
		let key;
		while(1){
			key = '__'+this.index.toString(32);
			if(!this.has(key)){
				break;
			}
			this.index += 10;
		}
		return key;
	}

	updateIndex(){
		this.index++;
	}

	set(key, value){
		super.set(key, value);
		this.updateIndex();
		return this;
	}

	getFirstItem(){
		return this.entries().next().value;
	}

	getLastItem(){
		let i=0;
		if(this.size){
			for(let kv of this.entries()){
				if(++i >= this.size){
					return kv;
				}
	    }
		}else{
			return [];
		}
	}

	//return key
	push(value): any {
		let key = this.getIndex();//uuid();
		this.set(key, value);
		return key;
	}

	//return [key, value];
	pop(): any[] {
		let v = this.getLastItem();
		this.delete(v[0]);
		return v[1];
		// let i=0;
		// if(this.size){
		// 	for(let kv of this.entries()){
		// 		if(++i >= this.size){
		// 			this.delete(kv[0]);
		// 			return kv[1];
		// 		}
	  //   }
		// }else{
		// 	return;
		// }
	}

	shift():any{
		let v = this.getFirstItem();
		this.delete(v[0]);
		return v[1];
		// let v = this.entries().next();
		// this.delete(v.value[0]);
		// return v.value[1];
	}

	toValues(): any[] {
		return [...this.values()];
	}

	toKeys(): any[] {
		return [...this.keys()];
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
