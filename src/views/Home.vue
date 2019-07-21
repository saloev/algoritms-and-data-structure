<template>
  <div class="home">
    <PreviewBlock title="Grokking Algorithms" :text="previewText" />
    <AccrodionList :listItems="list" title="Table of content" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { FirebaseFirestore, DocumentSnapshot, QuerySnapshot } from '@firebase/firestore-types';

import PreviewBlock from '@/components/PreviewBlock.vue';
import AccrodionList from '@/components/accordion/List.vue';

@Component({
  components: {
    PreviewBlock,
    AccrodionList,
  },
})
export default class Home extends Vue {

  private previewText: string = `tasks with solution from book
   <a href="https://www.manning.com/books/grokking-algorithms" style="display: inline-flex">Grokking Algorithms</a>`;

  // @ts-ignore TODO fix this
  private db: FirebaseFirestore = this.$firebase.firestore();

  private list: any = [];

  private mounted() {
    this.db
      .collection('chapters')
      .get()
      .then((snap: QuerySnapshot) => {
        snap.forEach((doc: DocumentSnapshot) => {
          this.list = [...this.list, { type: 'link', id: doc.id, title: doc!.data()!.title }];
          // this.db.collection('chapters').doc(doc.id).collection('tasks').get()
          //  .then((snap: QuerySnapshot) => {
          //    snap.forEach((doc: DocumentSnapshot) => {
          //      console.log(doc.data());
          //    });
          //  })
          //  .catch((err: any) => {
          //   console.error(err);
          //  });

          console.log(doc.data(), this.list);
        });
      }).catch((err: any) => {
        console.error(err);
      });

    console.log(this.list);
  }
}
</script>
