#include <stdio.h>
#include <assert.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h> 
#include "main.c"


typedef struct safeList safeList;

struct safeList{
    int list[1000];
    int maxSize;
    int currentSize;
};


int getByIndex(safeList* sl, int index){
    if (index < sl->maxSize && index < sl->currentSize){
        return sl->list[index];
    }
    printf("item is out of scope");
    return -1;
}


void append(safeList* sl, int item){
    if (sl->currentSize < sl->maxSize){
        sl->list[sl->currentSize] = item;
    }
}