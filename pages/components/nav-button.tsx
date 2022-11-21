import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main } from '../../components/Section'
import { button, navButton } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, NudeProperty, OrientationProperty, orientationOptions, ButtonStyleProperty, buttonStyleOptions } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { NavButton as OriNavButton, NavButtonProps, Control } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { ActiveProperty, ArrivedProperty, EnabledProperty, FocusedProperty, InheritActiveProperty, InheritEnabledProperty, InheritReadOnlyProperty, PressedProperty, ReadOnlyProperty, StateProperties } from '../../properties/sections/stateProperties'
import { ClientSideLinkPropertyOfButton, HrefPropertyOfButton, OnClickPropertyOfButton } from '../../properties/sections/actionProperties'
import {active} from '../../properties/propertyList'
import { ButtonComponentProperty, ComponentProperties } from '../../properties/sections/componentProperties'
import { NavigationProperties, CaseSensitiveProperty, EndProperty } from '../../properties/sections/navigationProperties'
import Link from 'next/link'



const NavButton = (props: NavButtonProps) => <OriNavButton {...props} theme={props.theme ?? 'primary'} />



const NavButtonPage: NextPage = () => {
    return (<ComponentContextProvider component={navButton} baseComponents={button}>
        <Head>
            <title>{`${navButton.componentTag} Component`}</title>
            <meta name="description" content={`${navButton.componentTag} is a ${button.componentTag} component with managed ${active.propertyName} state depends on current page URL.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a {button.packageLink} component with managed {active.propertyShortLink} state depends on <strong>current page URL</strong>.
                </p>
                <p>
                    If you want to handle the {active.propertyShortLink} property programatically, thus the <TheComponentLink /> becomes <em>useless</em>.
                    So it&apos;s better to use {button.packageLink} <em>directly</em>.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false}>
                    <NavButton theme='primary'>
                        <Link href='/'>Home</Link>
                    </NavButton>
                    <NavButton theme='primary'>
                        <Link href='/core'>Core</Link>
                    </NavButton>
                    <NavButton theme='primary'>
                        <Link href='/components'>Components</Link>
                    </NavButton>
                </Preview>
            </HeroSection>
            <ComponentInstallation />
            <NavigationProperties>
                <CaseSensitiveProperty />
                <EndProperty />
            </NavigationProperties>
            <ClientSideLinkPropertyOfButton />
            <HrefPropertyOfButton />
            <OnClickPropertyOfButton />
            <VariantProperties>
                <ButtonStyleProperty>
                    <Preview display='right' stretch={false}>
                        {buttonStyleOptions.map((buttonStyle, index) =>
                            <NavButton
                                key={index}
                                buttonStyle={buttonStyle}
                            >
                                A {'<NavButton>'} with {buttonStyle} style
                            </NavButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {buttonStyleOptions.map((buttonStyle) =>
`
<NavButton
    buttonStyle='${buttonStyle}'
>
    A {'<NavButton>'} with ${buttonStyle} style
</NavButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </ButtonStyleProperty>
                <OrientationProperty>
                    <Preview display='right' stretch={false}>
                        {orientationOptions.map((orientationName, index) =>
                            <NavButton
                                key={index}
                                orientation={orientationName}
                            >
                                <span>A {'<NavButton>'}</span>
                                <span>with</span>
                                <span>{orientationName} oriented</span>
                            </NavButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {orientationOptions.map((orientationName) =>
`
<NavButton
    orientation='${orientationName}'
>
    <span>A {'<NavButton>'}</span>
    <span>with</span>
    <span>${orientationName} oriented</span>
</NavButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </OrientationProperty>
                <SizeProperty>
                    <Preview display='right' stretch={false}>
                        {sizeOptions.map((sizeName, index) =>
                            <NavButton
                                key={index}
                                size={sizeName}
                            >
                                A {'<NavButton>'} with {sizeName ?? 'default'} size
                            </NavButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<NavButton
    size=${sizeName ? `'${sizeName}'` : '{undefined}'}
>
    A {'<NavButton>'} with ${sizeName ?? 'default'} size
</NavButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <NavButton
                                key={index}
                                theme={themeName}
                            >
                                A {'<NavButton>'} with {themeName} theme
                            </NavButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<NavButton
    theme='${themeName}'
>
    A {'<NavButton>'} with ${themeName} theme
</NavButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <NavButton
                                key={index}
                                theme={themeName}
                                gradient={true}
                            >
                                A {'<NavButton>'} with gradient mode
                            </NavButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<NavButton
    theme='${themeName}'
    gradient={true}
>
    A {'<NavButton>'} with gradient mode
</NavButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <NavButton
                                key={index}
                                theme={themeName}
                                outlined={true}
                            >
                                A {'<NavButton>'} with outlined mode
                            </NavButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<NavButton
    theme='${themeName}'
    outlined={true}
>
    A {'<NavButton>'} with outlined mode
</NavButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <NavButton
                                key={index}
                                theme={themeName}
                                mild={true}
                            >
                                A {'<NavButton>'} with mild mode
                            </NavButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<NavButton
    theme='${themeName}'
    mild={true}
>
    A {'<NavButton>'} with mild mode
</NavButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
                <NudeProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <NavButton
                                key={index}
                                theme={themeName}
                                nude={true}
                            >
                                A {'<NavButton>'} with nude mode
                            </NavButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<NavButton
    theme='${themeName}'
    nude={true}
>
    A {'<NavButton>'} with nude mode
</NavButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </NudeProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <NavButton
                                key={index}
                                theme={themeName}
                                enabled={false}
                            >
                                A {'<NavButton>'} with disabled state
                            </NavButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<NavButton
    theme='${themeName}'
    enabled={false}
>
    A {'<NavButton>'} with disabled state
</NavButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' enabled={false}>
                                <NavButton
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                >
                                    A {'<NavButton>'} with inherit enabled
                                </NavButton>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' enabled={false}>
    <NavButton
        theme='${themeName}'
        inheritEnabled={true}
    >
        A {'<NavButton>'} with inherit enabled
    </NavButton>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritEnabledProperty>
                <ReadOnlyProperty />
                <InheritReadOnlyProperty />
                <ActiveProperty outlinedMildWarning={false}>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <NavButton
                                key={index}
                                theme={themeName}
                                active={true}
                            >
                                A {'<NavButton>'} with active state
                            </NavButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<NavButton
    theme='${themeName}'
    active={true}
>
    A {'<NavButton>'} with active state
</NavButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </ActiveProperty>
                <InheritActiveProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' active={true}>
                                <NavButton
                                    key={index}
                                    theme={themeName}
                                    inheritActive={true}
                                >
                                    A {'<NavButton>'} with inherit active
                                </NavButton>
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' active={true}>
    <NavButton
        theme='${themeName}'
        inheritActive={true}
    >
        A {'<NavButton>'} with inherit active
    </NavButton>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritActiveProperty>
                <FocusedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <NavButton
                                key={index}
                                theme={themeName}
                                focused={true}
                            >
                                A {'<NavButton>'} with focus indicator
                            </NavButton>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<NavButton
    theme='${themeName}'
    focused={true}
>
    A {'<NavButton>'} with focus indicator
</NavButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </FocusedProperty>
                <ArrivedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <React.Fragment key={index}>
                            <NavButton
                                theme={themeName}
                                arrived={false}
                            >
                                A {'<NavButton>'} without arrive indicator
                            </NavButton>
                            <NavButton
                                theme={themeName}
                                arrived={true}
                            >
                                A {'<NavButton>'} with arrive indicator
                            </NavButton>
                            <NavButton
                                theme={themeName}
                                arrived={undefined}
                            >
                                A {'<NavButton>'} with auto arrive indicator
                            </NavButton>
                        </React.Fragment>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<NavButton
    theme='${themeName}'
    arrived={false}
>
    A {'<NavButton>'} without arrive indicator
</NavButton>
<NavButton
    theme='${themeName}'
    arrived={true}
>
    A {'<NavButton>'} with arrive indicator
</NavButton>
<NavButton
    theme='${themeName}'
    arrived={undefined}
>
    A {'<NavButton>'} with auto arrive indicator
</NavButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </ArrivedProperty>
                <PressedProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) => <React.Fragment key={index}>
                            <NavButton
                                theme={themeName}
                                pressed={false}
                            >
                                A {'<NavButton>'} without pressed indicator
                            </NavButton>
                            <NavButton
                                theme={themeName}
                                pressed={true}
                            >
                                A {'<NavButton>'} with pressed indicator
                            </NavButton>
                            <NavButton
                                theme={themeName}
                                pressed={undefined}
                            >
                                A {'<NavButton>'} with auto pressed indicator
                            </NavButton>
                        </React.Fragment>)}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<NavButton
    theme='${themeName}'
    pressed={false}
>
    A {'<NavButton>'} without pressed indicator
</NavButton>
<NavButton
    theme='${themeName}'
    pressed={true}
>
    A {'<NavButton>'} with pressed indicator
</NavButton>
<NavButton
    theme='${themeName}'
    pressed={undefined}
>
    A {'<NavButton>'} with auto pressed indicator
</NavButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </PressedProperty>
            </StateProperties>
            <ComponentProperties>
                <ButtonComponentProperty />
            </ComponentProperties>
            <InheritedProperties />
        </Main>
    </ComponentContextProvider>);
}

export default NavButtonPage
