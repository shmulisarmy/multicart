#include <stdio.h>
#include <assert.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h> 
#include "main.c"


#define readTodos for (int i = 0; i < todoCount; i++){printf("todo %d: %s\n", i+1, todos[i]);}


char todos[10][20];
int todoCount;



void addTodo(char todo[20]){
    strcpy(todos[todoCount], todo);
    todoCount++;
}




int main(){
    addTodo("clean room");
    addTodo("learn");
    readTodos;
}