import { moduleMetadata, Meta, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';

export default {
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'Card',
} as Meta;

const Template: Story = args => ({
    props: {
      ...args,
    },
  });

export const Default = Template.bind({});
Default.args = {    
    Card: {
      id: 1,
      title: 'texto',
      cover: 'https://tm.ibxk.com.br/2021/10/05/05091846887061.jpg?ims=532x336',      
      width: 400,      
      description: 'texto',
      episode: 1,
      quality: 'texto',
      subtitle: 'texto',
      videoUrl: 'https://www.npmjs.com/package/@storybook/addon-controls',
      movie: false,    
    },
};