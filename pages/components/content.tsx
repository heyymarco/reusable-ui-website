import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { InheritedProperties, Section, Variables } from '../../components/Section'
import { basic, content } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'  
import { Accordion, AccordionItem, Basic, Carousel, Content as OriContent, ContentProps, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { CommaSeparated, ComponentContextProvider, TheComponentDisplay } from '../../packages/componentContext'



const Content = (props: ContentProps) => <OriContent {...props} theme={props.theme ?? 'primary'} />
export const MediaList = (props: { includeCustom ?: boolean }) => <CommaSeparated components={['figure', 'img', 'svg', 'video', 'picture', 'embed', 'object', ...(props.includeCustom ? ['.media'] : [])].map((item, index) => <code key={index}>{ item.startsWith('.') ? item : `<${item}>` }</code>)} />;
export const LinkList  = (props: { includeCustom ?: boolean }) => <CommaSeparated components={['a', ...(props.includeCustom ? ['.link'] : [])].map((item, index) => <code key={index}>{ item.startsWith('.') ? item : `<${item}>` }</code>)} />;



const ContentPage: NextPage = () => {
    return (<ComponentContextProvider component={content} baseComponents={basic}>
        <Head>
            <title>{`${content.componentTag} Component`}</title>
            <meta name="description" content={`${content.componentTag} is a generic media container with pre-formatted media elements such as images, videos, etc.`} />
        </Head>
        <Section title={<><TheComponentDisplay /> Component</>}>
            <p>
                <TheComponentDisplay /> is a generic <strong>media container</strong> with pre-formatted media elements such as <strong>images</strong>, <strong>videos</strong>, etc.
            </p>
            <p>
                This component is great for creating <code>{`<article>`}</code> or <strong>newspaper-like</strong> content.
            </p>
            <Section title='Images &amp; Media'>
                <p>
                    Media elements such as <MediaList includeCustom={true} /> are styled to <strong>fill</strong> over the <TheComponentDisplay />&apos;s padding.
                </p>
                <p>
                    Here the demonstration:
                </p>
                <Preview>
                    <Content tag='article' theme='primary'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                        </p>
                        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                        </p>
                        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                        </p>
                    </Content>
                </Preview>
                <p></p>
                <TypeScriptCode>{
`
<Content tag='article' theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
`
                }</TypeScriptCode>
                <Section title='Images &amp; Media at the Beginning and End'>
                    <p>
                        If the media position is at <strong>the first</strong> and/or <strong>the last</strong>, the media are bit <strong>clipped</strong> by <TheComponentDisplay />'s <strong>border-radius</strong>.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
                    <Preview>
                        <Content tag='article' theme='secondary' size='lg'>
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                        </Content>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Content tag='article' theme='secondary' size='lg'>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
</Content>
`
                    }</TypeScriptCode>
                </Section>
                <Section title='The Sequence of Images &amp; Media'>
                    <p>
                        If there are multiple media <strong>in a sequence</strong> (without being inserted by another types), the media are <strong>joined together</strong> separated by borders.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
                    <Preview>
                        <Content tag='article' theme='primary'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                            <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                        </Content>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Content tag='article' theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
`
                    }</TypeScriptCode>
                </Section>
                <Section title='Custom Media'>
                    <p>
                        If you need a <strong>custom element</strong> to be treated <strong>as media</strong>, add a <code>'media'</code> to the element&apos;s <code>className</code>.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
                    <Preview>
                        <Content tag='article' theme='primary'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <Carousel theme='success' className='media'>
                                <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                                <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                                <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
                            </Carousel>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <Basic theme='success' className='media' style={{ textAlign: 'center' }}>
                                <p>
                                    hello world!
                                </p>
                            </Basic>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                        </Content>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Content tag='article' theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <Carousel theme='success' className='media'>
        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
        <img alt='lorem image' src='/images/lorem-image-1.svg' style={{ height: '150px' }} />
    </Carousel>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <Basic theme='success' className='media' style={{ textAlign: 'center' }}>
        <p>
            hello world!
        </p>
    </Basic>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
`
                    }</TypeScriptCode>
                </Section>
                <Section title='Excluding Media'>
                    <p>
                        Sometimes we need to put a media <MediaList includeCustom={false} /> <strong>without</strong> to apply the <strong>default styling</strong>.
                        For example an <strong>emoji</strong> of <code>{`<img>`}</code>.
                    </p>
                    <p>
                        Add a <code>'not-media'</code> to the element&apos;s <code>className</code>.
                    </p>
                    <p>
                        Here the demonstration:
                    </p>
                    <Preview>
                        <Content tag='article' theme='primary'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <img alt='lorem image' src='/images/lorem-image-1.svg' className='not-media' style={{ height: '150px' }} />
                            <img alt='lorem image' src='/images/lorem-image-1.svg' className='not-media' style={{ height: '150px' }} />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
                            </p>
                        </Content>
                    </Preview>
                    <p></p>
                    <TypeScriptCode>{
`
<Content tag='article' theme='primary'>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <img alt='lorem image' src='/images/lorem-image-1.svg' className='not-media' style={{ height: '150px' }} />
    <img alt='lorem image' src='/images/lorem-image-1.svg' className='not-media' style={{ height: '150px' }} />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut deserunt nulla iusto quod a est debitis tenetur dolorem? Molestiae unde nulla amet odio eveniet, quis eum libero aperiam natus?
    </p>
</Content>
`
                    }</TypeScriptCode>
                </Section>
            </Section>
            <VariantProperties>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Content
                                key={index}
                                size={sizeName}
                            >
                                An {'<Content>'} with {sizeName ?? 'default'} size
                            </Content>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Content
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    An {'<Content>'} with ${sizeName ?? 'default'} size
</Content>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Content
                                key={index}
                                theme={themeName}
                            >
                                An {'<Content>'} with {themeName} theme
                            </Content>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Content
    theme='${themeName}'
>
    An {'<Content>'} with ${themeName} theme
</Content>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Content
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                An {'<Content>'} with gradient mode
                            </Content>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Content
    theme='${themeName}'
    gradient={true}
>
    An {'<Content>'} with gradient mode
</Content>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Content
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                An {'<Content>'} with outlined mode
                            </Content>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Content
    theme='${themeName}'
    outlined={true}
>
    An {'<Content>'} with outlined mode
</Content>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Content
                                key={index}
                                theme={themeName}
                                mild={false}
                            >
                                An {'<Content>'} without mild mode
                            </Content>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Content
    theme='${themeName}'
    mild={false}
>
    An {'<Content>'} without mild mode
</Content>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Content
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                An {'<Content>'} with nude mode
                            </Content>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Content
    theme='${themeName}'
    nude={true}
>
    An {'<Content>'} with nude mode
</Content>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Borders'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>borderWidth</code>
                                <p>The thickness of border (stroke).</p>
                            </ListItem>
                            
                            <ListItem>
                                <code>borderRadius</code>
                                <p>The rounded corner radius.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Spacings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>paddingInline</code>
                                <p>The default inner spacing on the left &amp; right.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlock</code>
                                <p>The default inner spacing on the top &amp; bottom.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInlineSm</code>
                                <p>The inner spacing on the left &amp; right when <strong>browser&apos;s width</strong> is equal to / bigger than <code>xs</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlockSm</code>
                                <p>The inner spacing on the top &amp; bottom when <strong>browser&apos;s width</strong> is equal to / bigger than <code>xs</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInlineMd</code>
                                <p>The inner spacing on the left &amp; right when <strong>browser&apos;s width</strong> is equal to / bigger than <code>md</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlockMd</code>
                                <p>The inner spacing on the top &amp; bottom when <strong>browser&apos;s width</strong> is equal to / bigger than <code>md</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInlineLg</code>
                                <p>The inner spacing on the left &amp; right when <strong>browser&apos;s width</strong> is equal to / bigger than <code>lg</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlockLg</code>
                                <p>The inner spacing on the top &amp; bottom when <strong>browser&apos;s width</strong> is equal to / bigger than <code>lg</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInlineXl</code>
                                <p>The inner spacing on the left &amp; right when <strong>browser&apos;s width</strong> is equal to / bigger than <code>xl</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlockXl</code>
                                <p>The inner spacing on the top &amp; bottom when <strong>browser&apos;s width</strong> is equal to / bigger than <code>xl</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInlineXxl</code>
                                <p>The inner spacing on the left &amp; right when <strong>browser&apos;s width</strong> is equal to / bigger than <code>xxl</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlockXxl</code>
                                <p>The inner spacing on the top &amp; bottom when <strong>browser&apos;s width</strong> is equal to / bigger than <code>xxl</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {contents, contentValues} from '@reusable-ui/content';

contents.paddingInlineXxxl = '84px';
contents.paddingBlockXxxl = '63px';
console.log('paddingInlineXxxl variable name: ', contents.paddingInlineXxxl);
console.log('paddingInlineXxxl variable value: ', contentValues.paddingInlineXxxl);
`
                }</TypeScriptCode>
            </Variables>
        </Section>
    </ComponentContextProvider>);
}

export default ContentPage