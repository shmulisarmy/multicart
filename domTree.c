#include <stdio.h>
#include <assert.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h> 
#include "main.c"




typedef struct element element;

struct element {
    char tagName[10];
    char className[10];

    linkedList attributes;

    element* parent;
    int structCurrentViewers;
    int structWriteMutex;

    element* children[10];
    int childCount;
    int currentChildViewers;
    int childWriteMutex;
};

element* elementPointers[1000];
int elementPointerCount = 0;

void appendChild(element* parent, element* child) {
    while (child->structWriteMutex || child->structCurrentViewers) {
        usleep(1000);
    }
    child->structWriteMutex = 1;
    child->parent = parent;
    child->structWriteMutex = 0;

    while (parent->childWriteMutex || parent->currentChildViewers) {
        usleep(1000);
    }
    parent->childWriteMutex = 1;
    parent->children[parent->childCount] = child;
    parent->childCount++;
    parent->childWriteMutex = 0;
}

element* createElement(char tagName[10], char className[10]) {
    element* ne = (element*)malloc(sizeof(element));
    assert(ne);
    elementPointers[elementPointerCount] = ne;
    elementPointerCount++;
    strcpy(ne->tagName, tagName);
    strcpy(ne->className, className);
    ne->parent = NULL; // Initialize parent to NULL
    ne->childCount = 0; // Initialize childCount to 0
    ne->structCurrentViewers = 0; // Initialize structCurrentViewers to 0
    ne->structWriteMutex = 0; // Initialize structWriteMutex to 0
    ne->currentChildViewers = 0; // Initialize currentChildViewers to 0
    ne->childWriteMutex = 0; // Initialize childWriteMutex to 0
    ne->attributes = *createlinkedList("", "");
    return ne;
}


void eraseElementPoints(){
    for (size_t i = 0; i < elementPointerCount; i++)
    {
        printf("about to eroase %p\n", elementPointers[i]);
        free(elementPointers[i]);
    }
    
}

void displayElement(element* elem, int indent) {
    for (int i = 0; i < indent; i++) {
        printf("  ");
    }
    printf("<\033[34m%s\033[0m", elem->tagName); 

    if (strcmp(elem->className, "") != 0) {
        printf(" class=\"%s\"", elem->className);
    }
    
    linkedList* llp = &(elem->attributes);
    while (llp->next){
        llp = llp->next;
        printf(" %s='%s'" , llp->key, llp->value);
    }

    printf(">\n");

    for (int i = 0; i < elem->childCount; i++) {
        displayElement(elem->children[i], indent + 1);
    }

    for (int i = 0; i < indent; i++) {
        printf("  ");
    }
    printf("</\033[34m%s\033[0m>\n", elem->tagName); 
}

void setAttribute(element* el, char key[10], char value[10]){
    set(&(el->attributes), key, value);
}
char* getAttribute(element* el, char key[10]){
    return get(&(el->attributes), key);
}


int main() {
    element* document = createElement("document", "main");
    element* nav = createElement("nav", "second");
    element* nav2 = createElement("nav", "second");
    element* nav3 = createElement("nav", "second");
    setAttribute(document, "type", "big");
    appendChild(document, nav);
    appendChild(document, nav2);
    appendChild(nav2, nav3);

    displayElement(document, 0); 
    eraseElementPoints();
}
