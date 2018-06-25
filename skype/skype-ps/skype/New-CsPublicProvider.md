---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsPublicProvider
schema: 2.0.0
---

# New-CsPublicProvider

## SYNOPSIS

Creates a federation relationship with a new public provider.
A public provider is an organization that provides instant messaging, presence, and related services to the general public.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsPublicProvider [-Identity] <XdsGlobalRelativeIdentity> -ProxyFqdn <String> -Enabled <Boolean>
 [-VerificationLevel <VerificationLevelType>] [-Force] [-InMemory] [-WhatIf] [-Confirm] [-IconUrl <String>]
 [-NameDecorationDomain <String>] [-EnableSkypeDirectorySearch <Boolean>] [-EnableSkypeIdRouting <Boolean>]
 [-NameDecorationExcludedDomainList <String>] [-NameDecorationRoutingDomain <String>] [<CommonParameters>]
```

## DESCRIPTION

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When a federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Skype for Business.
Skype for Business Server allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A public provider is an organization which provides SIP communication services for the general public.
When you establish a federation relationship with a public provider, you effectively establish federation with any user who has an account hosted by that provider.
For example, if you federate with Skype your users will be able to exchange instant messages and presence information with anyone who has a Skype instant messaging account.

In order to federate with a public provider you need to create and enable a new public provider.
(In addition, the public provider will need to create a federation relationship with you.) The Set-CsPublicProvider enables you to modify property values for any of the public providers that have been configured for use in your organization.

Note that you cannot federate with a public provider if your Edge servers are configured to use default routing rather than DNS server routing.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

New-CsPublicProvider -Identity "Fabrikam" -ProxyFqdn "proxyserver.fabrikam.com" -Enabled $True
```

The command shown in Example 1 creates a new federation relationship with a public provider that has the Identity Fabrikam.
In addition to specifying the Identity, two other property values (and their corresponding parameters) must be set: ProxyFqdn (set to proxyserver.fabrikam.com) and Enabled (which, in this case, is set to True).


### -------------------------- EXAMPLE 2 -------------------------- 
```

$x = New-CsPublicProvider -Identity "Fabrikam" -ProxyFqdn "proxyserver.fabrikam.com" -Enabled $True -InMemory

$x.VerificationLevel = "AlwaysUnverifiable"

Set-CsPublicProvider -Instance $x

```

Example 2 demonstrates how you can create a new public provider in memory only, modify the properties of that provider, then turn the virtual provider into a real provider that can be used in your organization.
To do this, the first command in the example creates a public provider with the Identity Fabrikam.
In addition to including the required parameters (Identity, ProxyFqdn, and Enabled), the command adds the InMemory parameter; this creates an in-memory-only instance of the provider that is then stored in a variable named $x.

After the in-memory instance of the provider has been created the second command in the example modifies the VerificationLevel of the virtual provider.
The final command then uses the Set-CsPublicProvider cmdlet to turn the virtual provider (stored in $x) into an actual public provider.
If you do not call the Set-CsPublicProvider cmdlet the real provider will not be created.
In turn, the virtual provider will disappear the moment you end your Windows PowerShell session or delete the variable $x.

## PARAMETERS

### -Identity

Unique identifier for the public provider to be created.
The Identity typically the name of the website providing the services.

Identities must be unique not only among public providers, but also among hosting providers.
Suppose you try to create a new public provider with the Identity Fabrikam.
Your command will fail if a public provider or a hosting provider with that Identity already exists.



```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyFqdn
Specifies the fully qualified domain name (FQDN) (for example, proxyserver.fabrikam.com) of the proxy server used by the public provider.

Proxy FQDNs must be unique not only among public providers, but also among hosting providers.
For example, suppose you try to create a new public provider with the proxy FQDN proxyserver.fabrikam.com.
This command will fail if a public provider or a hosting provider with that proxy FQDN already exists.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled

Indicates whether or not the federation relationship between your organization and the public provider is active.
If set to True, users in your organization will be able to exchange instant messages and presence information with users who have accounts hosted on the public provider.
If set to False, users in your organization will not be able to exchange instant messages and presence information with users who have accounts hosted on the public provider.
You can enable and disable federation relationships at any time by using the Enable-CsPublicProvider cmdlet and the Disable-CsPublicProvider cmdlet, respectively.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VerificationLevel

Indicates how (or if) messages sent from a public provider are verified to ensure that they were sent from that provider.
The VerificationLevel must be set to one of the following values:

AlwaysVerifiable.
All messages purportedly sent from this provider will be accepted.
If a verification header is not found in the message it will be added by Skype for Business Server.
This is the default value.

AlwaysUnverifiable.
All messages purportedly sent from a public provider are considered unverified.
They will be delivered only if they were sent from a person who is on the recipient's Contacts list.
For example, if Ken Myer is on your Contacts list you will be able to receive messages from him.
If Pilar Ackerman is not on your Contacts list then you will not be able to receive messages from her.
Note that Skype for Business users can manually override this setting, thereby allowing themselves to receive messages people not on their Contacts list.

UseSourceVerification.
Uses the verification header added to the message by the public provider.
If the verification information is missing the message will be rejected.
This value has been deprecated for use in Skype for Business Server.



```yaml
Type: VerificationLevelType
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IconUrl
URL for the icon used to indicate a Microsoft Skype contact.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NameDecorationDomain

PARAMVALUE: String



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSkypeDirectorySearch
PARAMVALUE: $true | $false

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSkypeIdRouting
PARAMVALUE: $true | $false

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NameDecorationExcludedDomainList
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NameDecorationRoutingDomain
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsPublicProvider cmdlet does not accept pipelined input.

## OUTPUTS

###  
Creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayPublicProvider object.

## NOTES

## RELATED LINKS

[Disable-CsPublicProvider](Disable-CsPublicProvider.md)

[Enable-CsPublicProvider](Enable-CsPublicProvider.md)

[Get-CsPublicProvider](Get-CsPublicProvider.md)

[Remove-CsPublicProvider](Remove-CsPublicProvider.md)

[Set-CsPublicProvider](Set-CsPublicProvider.md)


