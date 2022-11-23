import React, {  } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { basic, badge } from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, BadgeStyleProperty, badgeStyleOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { Badge as OriBadge, BadgeProps, List, ListItem, CardBody } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ExpandedProperty } from '../../properties/sections/stateProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, FloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'



const Badge = (props: BadgeProps) => <OriBadge {...props} theme={props.theme ?? 'danger'} expanded={props.expanded ?? true} />

const defaultFloatingChildren = '    2'



const DemoBadge = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '4rem'}}>
            <Badge expanded={isFlip} size='lg'>
                {defaultFloatingChildren}
            </Badge>
        </CardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '6rem', justifyContent: 'start'}}>
            <p>
                <code>{`<Badge expanded={${isFlip}}>`}</code>
            </p>
            <Badge expanded={isFlip}>
                {defaultFloatingChildren}
            </Badge>
        </CardBody>
    );
}



const BadgePage: NextPage = () => {
    return (<ComponentContextProvider component={badge} baseComponents={basic} componentFactory={<Badge size={'' as any} />}>
        <Head>
            <title>{`${badge.componentTag} Component`}</title>
            <meta name="description" content={`${badge.componentTag} represents counters or labels.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> represents counters or labels.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='down' stretch={false} cardBodyComponent={<DemoBadge />} />
            </HeroSection>
            <ComponentInstallation />
            <ExpandedProperty>
                    <Preview display='down' stretch={true} cardBodyComponent={<DemoExpanded />} />
                    <p></p>
                    <TypeScriptCode>{
`
<Badge
    expanded={true}
    theme='danger'
>
    Hopla!
</Badge>
`
                    }</TypeScriptCode>
            </ExpandedProperty>
            <LazyProperty />
            <FloatingProperties>
                <FloatingOnProperty floatingChildren={defaultFloatingChildren} />
                <FloatingPlacementProperty floatingChildren={defaultFloatingChildren} />
                <FloatingStrategyProperty />
                <FloatingAutoFlipProperty floatingChildren={defaultFloatingChildren} />
                <FloatingAutoShiftProperty floatingChildren={defaultFloatingChildren} />
                <FloatingOffsetProperty floatingChildren={defaultFloatingChildren} />
                <FloatingShiftProperty floatingChildren={defaultFloatingChildren} />
                <OnFloatingUpdateProperty />
            </FloatingProperties>
            <VariantProperties>
                <BadgeStyleProperty>
                    <Preview display='right' stretch={false}>
                        {badgeStyleOptions.map((badgeStyle, index) =>
                            <Badge
                                key={index}
                                badgeStyle={badgeStyle}
                            >
                                {((badgeStyle === 'square') || (badgeStyle === 'circle')) ? null : defaultFloatingChildren}
                            </Badge>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {badgeStyleOptions.map((badgeStyle) =>
`
<Badge
    badgeStyle='${badgeStyle}'
    theme='danger'
${((badgeStyle === 'square') || (badgeStyle === 'circle')) ? '/>' : `>\n${defaultFloatingChildren}\n</Badge>`}
`
                        ).join('')}
                    </TypeScriptCode>
                </BadgeStyleProperty>
                <SizeProperty>
                    <Preview>
                        {sizeOptions.map((sizeName, index) =>
                            <Badge
                                key={index}
                                size={sizeName}
                            >
                                A {'<Badge>'} with {sizeName ?? 'default'} size
                            </Badge>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<Badge
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
    theme='danger'
>
    A {'<Badge>'} with ${sizeName ?? 'default'} size
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Badge
                                key={index}
                                theme={themeName}
                            >
                                A {'<Badge>'} with {themeName} theme
                            </Badge>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Badge
    theme='${themeName}'
>
    A {'<Badge>'} with ${themeName} theme
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Badge
                                key={index}
                                gradient={true}
                                theme={themeName}
                            >
                                A {'<Badge>'} with gradient mode
                            </Badge>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Badge
    gradient={true}
    theme='${themeName}'
>
    A {'<Badge>'} with gradient mode
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Badge
                                key={index}
                                outlined={true}
                                theme={themeName}
                            >
                                A {'<Badge>'} with outlined mode
                            </Badge>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Badge
    outlined={true}
    theme='${themeName}'
>
    A {'<Badge>'} with outlined mode
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Badge
                                key={index}
                                mild={true}
                                theme={themeName}
                            >
                                A {'<Badge>'} without mild mode
                            </Badge>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Badge
    mild={true}
    theme='${themeName}'
>
    A {'<Badge>'} without mild mode
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Badge
                                key={index}
                                nude={true}
                                theme={themeName}
                            >
                                A {'<Badge>'} with nude mode
                            </Badge>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Badge
    nude={true}
    theme='${themeName}'
>
    A {'<Badge>'} with nude mode
</Badge>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Spacings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>paddingInline</code>
                                <p>The default <strong>inner spacing</strong> on the <strong>left &amp; right</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlock</code>
                                <p>The default <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInlineSm</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong> when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlockSm</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingInlineLg</code>
                                <p>The <strong>inner spacing</strong> on the <strong>left &amp; right</strong> when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>paddingBlockLg</code>
                                <p>The <strong>inner spacing</strong> on the <strong>top &amp; bottom</strong> when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Typos'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>whiteSpace</code>
                                <p>Defines how a <strong>white space</strong> inside <TheComponentLink /> is handled.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontSize</code>
                                <p>The default text size.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontSizeSm</code>
                                <p>The text size when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontSizeLg</code>
                                <p>The text size when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>fontWeight</code>
                                <p>The text thickness.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {badges, badgeValues} from '@reusable-ui/badge';

badges.opacity = 0.5;
console.log('opacity variable name: ', badges.opacity);
console.log('opacity variable value: ', badgeValues.opacity);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default BadgePage