#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct linkedList {
    char key[10];
    char value[10];
    struct linkedList* next; // Corrected to struct linkedList
} linkedList;

linkedList* linkedListPointers[1000]; // Declaration moved here
int linkedListAmount = 0; // Initialization of linkedListAmount

linkedList* createlinkedList(char key[10], char value[10]) {
    linkedList* nllp = (linkedList*)malloc(sizeof(linkedList));
    if (nllp == NULL) {
        fprintf(stderr, "Memory allocation failed\n");
        exit(EXIT_FAILURE);
    }
    linkedListPointers[linkedListAmount] = nllp;
    linkedListAmount++;
    strcpy(nllp->key, key);
    strcpy(nllp->value, value);
    nllp->next = NULL; // Initialize next pointer to NULL
    return nllp;
}

void set(linkedList* llp, char key[10], char value[10]) {
    while (llp) {
        if (strcmp(llp->key, key) == 0) {
            strcpy(llp->value, value);
            return;
        }
        if (llp->next == NULL)
            break;
        llp = llp->next;
    }
    llp->next = createlinkedList(key, value);
}

char* get(linkedList* llp, char key[10]) {
    while (llp) {
        if (strcmp(llp->key, key) == 0)
            return llp->value;
        llp = llp->next;
    }
    return NULL;
}

void freeLinkedListPointers() {
    for (int i = 0; i < linkedListAmount; i++) {
        free(linkedListPointers[i]);
    }
}







// int main() {
//     linkedList* llh = createlinkedList("name", "shmuli");
//     set(llh, "last", "keller");
//     printf("%s\n", get(llh, "last"));
//     freeLinkedListPointers();
//     return 0;
// }
