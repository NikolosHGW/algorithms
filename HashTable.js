class HashTable {
    constructor(size) {
        this._size = size;
        this._arr = [];
    }

    _hash(value) {
        let index = 0;
        for (let i = 0; i < value.length; i++) {
            index += value.charCodeAt(i) * i;
        }
        return index % this._size;
    }

    setValue(value) {
        let hash = this._hash(value);
        if (!this._arr[hash]) {
            this._arr[hash] = value;
        }
        else {
            if (this._arr[hash] === value) {
                return 'Уже есть такое значение!';
            }
            else {
                let iter = hash + 1;
                for (let i = 0; i < this._size - 1; i++) {
                    if (iter === this._size) {
                        iter = 0;
                    }
                    if (!this._arr[iter]) {
                        this._arr[iter] = value;
                        return iter;
                    }
                    iter++;
                }
                return 'Нет пустого места';
            }
        }
    }

    getKey(value) {
        let hash = this._hash(value);
        if (this._arr[hash] === value) {
            return hash;
        }
        else {
            let iter = hash + 1;
            for (let i = 0; i < this._size - 1; i++) {
                if (iter === this._size) {
                    iter = 0;
                }
                if (this._arr[iter] === value) {
                    return iter;
                }
                iter++;
            }
            return 'Нет такого значения';
        }
    }
    
    deleteValue(value) {
        this._arr[this.getKey(value)] = false;
    }

    getArr() {
        return this._arr;
    }
}

const hashTable = new HashTable(13);
hashTable.setValue('Рома');
hashTable.setValue('Привет');
hashTable.setValue('Дривэ');
hashTable.setValue('Рома2');
hashTable.setValue('Привет2');
hashTable.setValue('Дривэ2');
hashTable.setValue('Рома3');
hashTable.setValue('Привет3');
hashTable.setValue('Дривэ3');
hashTable.setValue('Рома4');
hashTable.setValue('Привет4');
hashTable.setValue('Дривэ4');
hashTable.setValue('Тринадцатый');
console.log(hashTable.setValue('Рома'));
console.log(hashTable.getKey('Рома'));
console.log(hashTable.getKey('Привет'));
console.log(hashTable.getKey('Дривэ'));
console.log(hashTable.getArr());
hashTable.deleteValue('Рома');
console.log(hashTable.getArr());
hashTable.setValue('Новый Рома');
console.log(hashTable.getArr());