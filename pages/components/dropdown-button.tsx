import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ComponentInstallation, HeroSection, InheritedProperties, Main } from '../../components/Section'
import { toggleButton, dropdownButton } from '../../packages/packageList'
import * as packages from '../../packages/packageList'
import { SizeProperty, sizeOptions, ThemeProperty, themeOptions, VariantProperties, GradientProperty, OutlinedProperty, MildProperty, orientationWithDirectionOptions, OrientationWithDirectionProperty } from '../../properties/sections/variantProperties'
import { Preview } from '../../components/Preview'
import { DropdownButton as OriDropdownButton, DropdownButtonProps, Control, CardBody, DropdownExpandedChangeEvent } from '@reusable-ui/components'
import { TypeScriptCode } from '../../components/Code'
import { ComponentContextProvider, TheComponentLink } from '../../packages/componentContext'
import { DefaultExpandedProperty, EnabledProperty, ExpandedProperty, InheritEnabledProperty, OnExpandedChangeProperty, StateProperties } from '../../properties/sections/stateProperties'
import { OnClickPropertyOfButton } from '../../properties/sections/actionProperties'
import { ButtonChildrenProperty, ButtonComponentProperty, ButtonOrientationProperty, ButtonRefProperty, ComponentProperties, DropdownComponentProperty, DropdownOrientationProperty, DropdownRefProperty, ToggleButtonComponentProperty } from '../../properties/sections/componentProperties'
import { useFlipFlop } from '../../hooks/flipFlop'
import { EventHandler, useEvent } from '@reusable-ui/core'
import { DummyUiBig, DummyUiSmall } from '../../components/DummyUi'
import { DropdownCardBody } from '../../components/DropdownCardBody'
import { DropdownUiProperty } from '../../properties/sections/dropdownProperties'
import { LazyProperty } from '../../properties/sections/behaviorProperties'
import { FloatingAutoFlipProperty, FloatingAutoShiftProperty, FloatingOffsetProperty, FloatingOnProperty, FloatingPlacementProperty, FloatingProperties, FloatingShiftProperty, FloatingStrategyProperty, OnFloatingUpdateProperty } from '../../properties/sections/floatableProperties'



const DropdownButton = (props: Partial<DropdownButtonProps>) => <OriDropdownButton {...props} theme={props.theme ?? 'primary'} buttonChildren={
    'Show Menu'
}>
    {React.isValidElement(props.children) ? props.children : <DummyUiBig />}
</OriDropdownButton>

const defaultFloatingChildren = '    <YourComponent />'



const DemoDropdownButton = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    const [expanded, setExpanded] = useState<boolean>(false);
    
    useEffect(() => {
        setExpanded(isFlip);
    }, [isFlip]);
    const handleExpandedChange : EventHandler<DropdownExpandedChangeEvent> = useEvent((event) => {
        setExpanded(event.expanded);
    });
    
    
    return (
        <DropdownCardBody elmRef={viewportRef}>
            <DropdownButton expanded={expanded} onExpandedChange={handleExpandedChange} focused={false} orientation='block-end' />
        </DropdownCardBody>
    );
}
const DemoExpanded = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef} style={{boxSizing: 'content-box', blockSize: '15rem', justifyContent: 'start'}}>
            <p>
                <code>{`<DropdownButton expanded={${isFlip}}>`}</code>
            </p>
            <DropdownButton expanded={isFlip} orientation='block-end' floatingAutoFlip={false} floatingAutoShift={false} />
        </CardBody>
    );
}
const DemoOrientation = () => {
    const [viewportRef, isFlip] = useFlipFlop<boolean, HTMLDivElement>({defaultState: true});
    
    
    
    return (
        <CardBody elmRef={viewportRef}>
            {orientationWithDirectionOptions.map((orientation, index) =>
                <div key={index} style={{
                    display      : 'grid',
                    justifyItems : 'center',
                    alignItems   : 'center',
                    
                    boxSizing : 'border-box',
                    ...(orientation.startsWith('inline') ? {
                        inlineSize     : 'calc(128px + 8rem)',
                        blockSize      : '128px',
                        justifyContent : orientation.endsWith('start') ? 'end' : 'start',
                    } : {
                        blockSize      : 'calc(128px + 3rem)',
                        inlineSize     : '128px',
                        alignContent   : orientation.endsWith('start') ? 'end' : 'start',
                    }),
                }}>
                    <DropdownButton expanded={isFlip} orientation={orientation} floatingAutoFlip={false} floatingAutoShift={false} />
                </div>
            )}
        </CardBody>
    );
}



const DropdownButtonPage: NextPage = () => {
    return (<ComponentContextProvider component={dropdownButton} baseComponents={toggleButton} componentFactory={
        <DropdownButton orientation='block-end' theme='primary' floatingAutoFlip={false} floatingAutoShift={false}>
            <DummyUiBig />
        </DropdownButton>
    }>
        <Head>
            <title>{`${dropdownButton.componentTag} Component`}</title>
            <meta name="description" content={`${dropdownButton.componentTag} is a ${packages.toggleButton.componentTag} component with a ${packages.dropdown.componentTag}.`} />
        </Head>
        <Main nude={true}>
            <HeroSection title={<><TheComponentLink /> Component</>} theme='secondary'>
                <p>
                    <TheComponentLink /> is a {packages.toggleButton.packageLink} component with a {packages.dropdown.packageLink}.
                </p>
                <p>
                    Here the demo:
                </p>
                <Preview display='right' stretch={false} cardBodyComponent={<DemoDropdownButton />} />
            </HeroSection>
            <ComponentInstallation />
            <DropdownUiProperty />
            <ExpandedProperty>
                    <Preview display='down' stretch={false} cardBodyComponent={<DemoExpanded />} />
                    <p></p>
                    <TypeScriptCode>{
`
<DropdownButton
    expanded={true}
    theme='primary'
    orientation='block-end'
    buttonChildren={
        'Show Menu'
    }
>
    <YourComponent />
</DropdownButton>
`
                    }</TypeScriptCode>
            </ExpandedProperty>
            <DefaultExpandedProperty />
            <OnExpandedChangeProperty />
            <OrientationWithDirectionProperty>
                <Preview display='right' stretch={true} cardBodyComponent={<DemoOrientation />} />
                <p></p>
                <TypeScriptCode>{
                    orientationWithDirectionOptions.map((orientation) =>
`
<DropdownButton
    orientation='${orientation}'
    theme='primary'
    buttonChildren={
        'Show Menu'
    }
>
    <YourComponent />
</DropdownButton>
`
                    ).join('\n\n')
                }</TypeScriptCode>
            </OrientationWithDirectionProperty>
            <LazyProperty />
            <OnClickPropertyOfButton tips={false} />
            <FloatingProperties>
                <FloatingOnProperty targetComponent={false} targetTag={false} floatingChildren={defaultFloatingChildren} floatingPlacement='top-end' floatingOffset={-10} floatingShift={20} />
                <FloatingPlacementProperty targetComponent={false} targetTag={false} floatingComponent={<DropdownButton theme='primary'>
                    <DummyUiSmall />
                </DropdownButton>} />
                <FloatingStrategyProperty />
                <FloatingAutoFlipProperty targetComponent={false} targetTag={false} floatingChildren={defaultFloatingChildren} floatingPlacement='bottom' />
                <FloatingAutoShiftProperty targetComponent={false} targetTag={false} floatingChildren={defaultFloatingChildren} floatingComponent={
                    <DropdownButton orientation='inline-end' theme='primary' floatingAutoFlip={false} floatingAutoShift={false}>
                        <DummyUiBig />
                    </DropdownButton>}
                />
                <FloatingOffsetProperty targetComponent={false} targetTag={false} floatingChildren={defaultFloatingChildren} floatingComponent={
                    <DropdownButton orientation='block-start' theme='primary' floatingAutoFlip={false} floatingAutoShift={false}>
                        <DummyUiBig />
                    </DropdownButton>}
                />
                <FloatingShiftProperty targetComponent={false} targetTag={false} floatingChildren={defaultFloatingChildren} floatingComponent={
                    <DropdownButton orientation='block-start' theme='primary' floatingAutoFlip={false} floatingAutoShift={false}>
                        <DummyUiBig />
                    </DropdownButton>}
                />
                <OnFloatingUpdateProperty />
            </FloatingProperties>
            <VariantProperties>
                <SizeProperty>
                    <Preview display='right' stretch={false} cardBodyComponent={<DropdownCardBody />}>
                        {sizeOptions.map((sizeName, index) =>
                            <DropdownButton
                                key={index}
                                size={sizeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {sizeOptions.map((sizeName) =>
`
<DropdownButton
    size='${sizeName}'
    theme='primary'
    buttonChildren={
        'Show Menu'
    }
>
    <YourComponent />
</DropdownButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </SizeProperty>
                <ThemeProperty>
                    <Preview display='right' stretch={false} cardBodyComponent={<DropdownCardBody />}>
                        {themeOptions.map((themeName, index) =>
                            <DropdownButton
                                key={index}
                                theme={themeName}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<DropdownButton
    theme='${themeName}'
    buttonChildren={
        'Show Menu'
    }
>
    <YourComponent />
</DropdownButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </ThemeProperty>
                <GradientProperty>
                    <Preview display='right' stretch={false} cardBodyComponent={<DropdownCardBody />}>
                        {themeOptions.map((themeName, index) =>
                            <DropdownButton
                                key={index}
                                theme={themeName}
                                gradient={true}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<DropdownButton
    gradient={true}
    theme='${themeName}'
    buttonChildren={
        'Show Menu'
    }
>
    <YourComponent />
</DropdownButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </GradientProperty>
                <OutlinedProperty>
                    <Preview display='right' stretch={false} cardBodyComponent={<DropdownCardBody />}>
                        {themeOptions.map((themeName, index) =>
                            <DropdownButton
                                key={index}
                                theme={themeName}
                                outlined={true}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<DropdownButton
    outlined={true}
    theme='${themeName}'
    buttonChildren={
        'Show Menu'
    }
>
    <YourComponent />
</DropdownButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </OutlinedProperty>
                <MildProperty>
                    <Preview display='right' stretch={false} cardBodyComponent={<DropdownCardBody />}>
                        {themeOptions.map((themeName, index) =>
                            <DropdownButton
                                key={index}
                                theme={themeName}
                                mild={true}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<DropdownButton
    mild={true}
    theme='${themeName}'
    buttonChildren={
        'Show Menu'
    }
>
    <YourComponent />
</DropdownButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </MildProperty>
            </VariantProperties>
            <StateProperties>
                <EnabledProperty>
                    <Preview display='right' stretch={false}>
                        {themeOptions.map((themeName, index) =>
                            <DropdownButton
                                key={index}
                                theme={themeName}
                                enabled={false}
                            />
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<DropdownButton
    enabled={false}
    theme='${themeName}'
    buttonChildren={
        'Show Menu'
    }
>
    <YourComponent />
</DropdownButton>
`
                        ).join('')}
                    </TypeScriptCode>
                </EnabledProperty>
                <InheritEnabledProperty>
                    <Preview>
                        {themeOptions.map((themeName, index) =>
                            <Control key={index} theme='primary' enabled={false}>
                                <DropdownButton
                                    key={index}
                                    theme={themeName}
                                    inheritEnabled={true}
                                />
                            </Control>
                        )}
                    </Preview>
                    <p></p>
                    <TypeScriptCode>
                        {themeOptions.map((themeName) =>
`
<Control theme='primary' enabled={false}>
    <DropdownButton
        inheritEnabled={true}
        theme='${themeName}'
        buttonChildren={
            'Show Menu'
        }
    >
        <YourComponent />
    </DropdownButton>
</Control>
`
                        ).join('')}
                    </TypeScriptCode>
                </InheritEnabledProperty>
            </StateProperties>
            <ComponentProperties>
                <ButtonComponentProperty />
                <ButtonRefProperty />
                <ButtonOrientationProperty />
                <ButtonChildrenProperty />
                
                <ToggleButtonComponentProperty />
                
                <DropdownComponentProperty />
                <DropdownRefProperty />
                <DropdownOrientationProperty />
            </ComponentProperties>
            <InheritedProperties />
        </Main>
    </ComponentContextProvider>);
}

export default DropdownButtonPage
