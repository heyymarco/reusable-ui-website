import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main, Variables } from '../../components/Section'
import { button, toggleButton } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { AccordionItem, Accordion } from '../../components/Accordion'
import { ToggleButton as OriToggleButton, ToggleButtonProps, Control, List, ListItem } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentDisplay } from '../../packages/componentContext'
import { ActiveProperty, ArrivedProperty, EnabledProperty, FocusedProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, PressedProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'
import { ClientSideLinkPropertyOfButton, HrefPropertyOfButton, OnClickPropertyOfButton, ParagraphChangeTagRole } from '../../properties/sections/actionProperties'
import {tag, active, onClick} from '../../properties/propertyList'



const ToggleButton = (props: ToggleButtonProps) => <OriToggleButton {...props} theme={props.theme ?? 'primary'} />



const ToggleButtonPage: NextPage = () => {
    return (<ComponentContextProvider component={toggleButton} baseComponents={button}>
        <Head>
            <title>{`${toggleButton.componentTag} Component`}</title>
            <meta name="description" content={`${toggleButton.componentTag} is a clickable simple box layout component with built-in variants, states, and ${packages.clickable.packageShortName}.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentDisplay /> Component</>}>
                <p>
                    <TheComponentDisplay /> is a {button.packageLink} component with toggleable {active.propertyShortLink} state each time the <TheComponentDisplay /> is clicked.<br />
                </p>
                <p>
                    This is equivalent to a {button.packageLink} with {onClick.propertyShortLink} event handles the {active.propertyShortLink} property via <code>{`useState()`}</code>.
                </p>
                <p>
                    If you want to handle the {active.propertyShortLink} property programatically, thus the <TheComponentDisplay /> becomes <em>useless</em>.
                    So it&apos;s better to use {button.packageLink} <em>directly</em>.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <ToggleButton theme='primary'>Regular</ToggleButton>
                    <ToggleButton theme='success'>Success</ToggleButton>
                    <ToggleButton theme='danger'>Error</ToggleButton>
                    <ToggleButton theme='primary' gradient={true}>Gradient</ToggleButton>
                    <ToggleButton theme='primary' mild={true}>Mild</ToggleButton>
                    <ToggleButton theme='primary' outlined={true}>Outlined</ToggleButton>
                    <ToggleButton theme='primary' buttonStyle='link'>Link</ToggleButton>
                    <ToggleButton theme='primary' size='sm'>Small</ToggleButton>
                    <ToggleButton theme='primary' size='lg'>Big</ToggleButton>
                    <ToggleButton theme='primary' enabled={false}>Disabled</ToggleButton>
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <ClientSideLinkPropertyOfButton />
            <HrefPropertyOfButton />
            <OnClickPropertyOfButton />
            <VariantProperties>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <ToggleButton
                                key={index}
                                size={sizeName}
                            >
                                A {'<ToggleButton>'} with {sizeName ?? 'default'} size
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<ToggleButton
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    A {'<ToggleButton>'} with ${sizeName ?? 'default'} size
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ToggleButton
                                key={index}
                                theme={themeName}
                            >
                                A {'<ToggleButton>'} with {themeName} theme
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
>
    A {'<ToggleButton>'} with ${themeName} theme
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ToggleButton
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                A {'<ToggleButton>'} with gradient mode
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    gradient={true}
>
    A {'<ToggleButton>'} with gradient mode
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ToggleButton
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                A {'<ToggleButton>'} with outlined mode
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    outlined={true}
>
    A {'<ToggleButton>'} with outlined mode
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ToggleButton
                                key={index}
                                theme={themeName}
                                mild={true}
                            >
                                A {'<ToggleButton>'} with mild mode
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    mild={true}
>
    A {'<ToggleButton>'} with mild mode
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ToggleButton
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                A {'<ToggleButton>'} with nude mode
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    nude={true}
>
    A {'<ToggleButton>'} with nude mode
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ToggleButton
                                key={index}
                                theme={themeName}
                                enabled={false}
                            >
                                A {'<ToggleButton>'} with disabled state
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    enabled={false}
>
    A {'<ToggleButton>'} with disabled state
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' enabled={false}>
                                <ToggleButton
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    A {'<ToggleButton>'} with inherit enabled
                                </ToggleButton>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' enabled={false}>
    <ToggleButton
        theme='${themeName}'
        inheritEnabled={true}
    >
        A {'<ToggleButton>'} with inherit enabled
    </ToggleButton>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritEnabledProperty>
                <ReadOnlyProperty />
                <InheritReadOnlyProperty />
                <ActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ToggleButton
                                key={index}
                                theme={themeName}
                                active={true}
                            >
                                A {'<ToggleButton>'} with active state
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    active={true}
>
    A {'<ToggleButton>'} with active state
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' active={true}>
                                <ToggleButton
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                >
                                    A {'<ToggleButton>'} with inherit active
                                </ToggleButton>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' active={true}>
    <ToggleButton
        theme='${themeName}'
        inheritActive={true}
    >
        A {'<ToggleButton>'} with inherit active
    </ToggleButton>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
                <FocusedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <ToggleButton
                                key={index}
                                theme={themeName}
                                focused={true}
                            >
                                A {'<ToggleButton>'} with focus indicator
                            </ToggleButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    focused={true}
>
    A {'<ToggleButton>'} with focus indicator
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </FocusedProperty>
                <ArrivedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <React.Fragment key={index}>
                            <ToggleButton
                                theme={themeName}
                                arrived={false}
                            >
                                A {'<ToggleButton>'} without arrive indicator
                            </ToggleButton>
                            <ToggleButton
                                theme={themeName}
                                arrived={true}
                            >
                                A {'<ToggleButton>'} with arrive indicator
                            </ToggleButton>
                            <ToggleButton
                                theme={themeName}
                                arrived={undefined}
                            >
                                A {'<ToggleButton>'} with auto arrive indicator
                            </ToggleButton>
                        </React.Fragment>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    arrived={false}
>
    A {'<ToggleButton>'} without arrive indicator
</ToggleButton>
<ToggleButton
    theme='${themeName}'
    arrived={true}
>
    A {'<ToggleButton>'} with arrive indicator
</ToggleButton>
<ToggleButton
    theme='${themeName}'
    arrived={undefined}
>
    A {'<ToggleButton>'} with auto arrive indicator
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </ArrivedProperty>
                <PressedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <React.Fragment key={index}>
                            <ToggleButton
                                theme={themeName}
                                pressed={false}
                            >
                                A {'<ToggleButton>'} without pressed indicator
                            </ToggleButton>
                            <ToggleButton
                                theme={themeName}
                                pressed={true}
                            >
                                A {'<ToggleButton>'} with pressed indicator
                            </ToggleButton>
                            <ToggleButton
                                theme={themeName}
                                pressed={undefined}
                            >
                                A {'<ToggleButton>'} with auto pressed indicator
                            </ToggleButton>
                        </React.Fragment>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<ToggleButton
    theme='${themeName}'
    pressed={false}
>
    A {'<ToggleButton>'} without pressed indicator
</ToggleButton>
<ToggleButton
    theme='${themeName}'
    pressed={true}
>
    A {'<ToggleButton>'} with pressed indicator
</ToggleButton>
<ToggleButton
    theme='${themeName}'
    pressed={undefined}
>
    A {'<ToggleButton>'} with auto pressed indicator
</ToggleButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </PressedProperty>
            </StateProperties>
            <InheritedProperties />
            <Variables variables={
                <Accordion>
                    <AccordionItem label='Spacings'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>gapInline</code>
                                <p>The default horizontal spacing between <TheComponentDisplay />&apos;s children.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlock</code>
                                <p>The default vertical spacing between <TheComponentDisplay />&apos;s children.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapInlineSm</code>
                                <p>The horizontal spacing between <TheComponentDisplay />&apos;s children when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlockSm</code>
                                <p>The vertical spacing between <TheComponentDisplay />&apos;s children when <code>{`size='sm'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapInlineLg</code>
                                <p>The horizontal spacing between <TheComponentDisplay />&apos;s children when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>gapBlockLg</code>
                                <p>The vertical spacing between <TheComponentDisplay />&apos;s children when <code>{`size='lg'`}</code>.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Typos'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>whiteSpace</code>
                                <p>Defines how a <strong>white space</strong> inside <TheComponentDisplay /> is handled.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                    <AccordionItem label='Styles'>
                        <List listStyle='flush'>
                            <ListItem>
                                <code>ghostOpacity</code>
                                <p>The default opacity level when <code>{`buttonStyle='ghost'`}</code>.</p>
                            </ListItem>
                            <ListItem>
                                <code>ghostOpacityArrive</code>
                                <p>The opacity level when <code>{`buttonStyle='ghost'`}</code> and a pointer is on the <TheComponentDisplay />.</p>
                            </ListItem>
                        </List>
                    </AccordionItem>
                </Accordion>
            }>
                <TypeScriptCode>{
`
// put this code on the main code: 'App.js' (React app) -or- '_app.js' (Next js)

import {toggleButtons, toggleButtonValues} from '@reusable-ui/toggle-button';

toggleButtons.whiteSpace = 'nowrap';
console.log('whiteSpace variable name: ', toggleButtons.whiteSpace);
console.log('whiteSpace variable value: ', toggleButtonValues.whiteSpace);
`
                }</TypeScriptCode>
            </Variables>
        </Main>
    </ComponentContextProvider>);
}

export default ToggleButtonPage
