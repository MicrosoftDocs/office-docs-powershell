---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsHostingProvider
schema: 2.0.0
---

# New-CsHostingProvider

## SYNOPSIS

Creates a new hosting provider for use in your organization.
A hosting provider is a private third-party organization that provides instant messaging, presence, and related services for a domain that you would like to federate with.
Hosting providers differ from public providers (such as Yahoo!, MSN, and AOL) in that their services are not offered to the general public.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsHostingProvider [-Identity] <XdsGlobalRelativeIdentity> -Enabled <Boolean> -ProxyFqdn <String>
 -EnabledSharedAddressSpace <Boolean> -HostsOCSUsers <Boolean> [-IsLocal <Boolean>]
 [-VerificationLevel <VerificationLevelType>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [-AutodiscoverUrl <String>] [-SipClientPort <UInt64>] [<CommonParameters>]
```

## DESCRIPTION

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Skype for Business.
Skype for Business Server allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A hosting provider is an organization which provides SIP communication services for other organizations; for example, Fabrikam, Inc.
might host users from Contoso, Northwind Traders, and Wingtip Toys.
When you establish a federation relationship with a hosting provider, you effectively establish federation with any organization hosted by that provider.
For example, if you federate with Fabrikam, your users will be able to exchange instant messages and presence information with users from Contoso, Northwind Traders, and Wingtip Toys.

Hosting providers are also used in split domain scenarios.
In a split domain scenario, some of your Skype for Business Server users have accounts hosted on-premises (that is, hosted on your local implementation of Skype for Business Server).
Other users have their accounts maintained off-premises by the third-party hosting provider.
Federating with the hosting provider enables on-premises and off-premises users to communicate with one another.

In order to federate with a third-party hosting provider, you need to create and enable a new hosting provider.
(In addition, the third-party provider will need to create a federation relationship with you.) The New-CsHostingProvider cmdlet enables you to set up three types of hosting provider relationships:

Direct federation with the hosting provider.
To create this type of relationship you must include the three required parameters: Identity; ProxyFqdn; and Enabled.

Split domain, with Skype for Business Server services being hosted.
To create this type of relationship you need to include the three required parameters.
In addition, you must set both the EnabledSharedAddressSpace and HostsOCSUsers properties to True.

Split domain, with non-Skype for Business Server services (such as Microsoft Exchange) being hosted.
To create this type of relationship, you need to include the three required parameters.
In addition, you must set the EnabledSharedAddressSpace to True and HostsOCSUsers to False.

When you create a new hosting provider, both the Identity and the proxy fully qualified domain name (FQDN) for that provider must be unique: you cannot have two hosting providers (or even one hosting provider and one public provider) that share an identity and/or a proxy FQDN.

Note, too that you cannot federate with a hosting provider if your Edge Servers are configured to use default routing rather than Domain Name System (DNS) server routing.



## EXAMPLES


### -------------------------- EXAMPLE 1 -------------------------- 
```
New-CsHostingProvider -Identity Fabrikam.com -ProxyFqdn "proxyserver.fabrikam.com" -Enabled $True
```

In Example 1, a new hosting provider with the Identity Fabrikam.com is created.
In addition to specifying the Identity, the command also includes the other two required parameters: ProxyFqdn (which specifies the proxy server used by Fabrikam.com); and Enabled, which indicates whether or not the new hosting provider is enabled for use.
If you leave out any of the required parameters, the New-CsHostingProvider cmdlet will prompt you to enter those values before continuing.


### -------------------------- EXAMPLE 2 -------------------------- 
```
New-CsHostingProvider -Identity Fabrikam.com -ProxyFqdn "proxyserver.fabrikam.com" -Enabled $True -HostsOCSUsers $True -EnabledSharedAddressSpace $True

```

Example 2 demonstrates how you can create a new hosting provider for use in a split domain scenario.
(Split domain means that some of your Skype for Business Server accounts are maintained on-premises while other accounts are maintained by a hosting provider.) To create this type of hosting provider, you must include the three required parameters (Identity; ProxyFqdn; and Enabled).
In addition, you must include, and set to True, both the HostsOCSUsers and the EnabledSharedAddressSpace parameters.
To create a split domain provider that hosts non-Skype for Business Server services (such as Microsoft Exchange), include these same two parameters but set HostsOCSUsers to False.


## PARAMETERS

### -Identity
Unique identifier for the hosting provider to be created.
The Identity is a string value; the Identity might be the FQDN of the hosting provider (for example, fabrikam.com) or perhaps the name of the company providing the services (Fabrikam, Inc.).

Hosting provider Identities must be unique.
Your command will fail if you try to create a new hosting provider with the same Identity as an existing provider.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
Indicates whether the network connection between your domain and the hosting provider is enabled.
Messages cannot be exchanged between the two organizations until this value is set to True.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyFqdn
The FQDN for the proxy server used by the hosting provider.
Note that this value cannot be modified.
If the hosting provider later changes its proxy server or if you make a mistake when you first specify the proxy FQDN you will need to delete and then recreate the entry for that provider.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnabledSharedAddressSpace
If True, indicates that the hosting provider is being used in a split domain scenario.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostsOCSUsers

If True, indicates that the hosting provider is used to host Skype for Business Server accounts.
If False, that indicates that the provider hosts other account types, such as Microsoft Exchange accounts.
The default value is False.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsLocal

If True, indicates that the proxy server used by the hosting provider is contained within your Skype for Business Server topology.
The default value is False.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VerificationLevel
Indicates the allowed verification level for messages sent to and from the hosted provider.
The VerificationLevel must be set to one of the following values:

AlwaysVerifiable.
Indicates that all messages sent from the hosting provider are considered verifiable.
That means that no messages from the hosting provider will be rejected.

AlwaysUnverifiable.
Indicates that all messages sent from the hosting provider are considered unverifiable.
As a result, messages are passed only if the user on the hosting provider is also in your Contacts list.

UseSourceVerification.
Relies on the verification level included in messages sent from the hosting provider.
If this level is not specified, then the message will be rejected as being unverifiable.

The default value is AlwayVerifiable.

```yaml
Type: VerificationLevelType
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutodiscoverUrl

URL for the autodiscover service used by a hosting provider that hosts Skype for Business Server accounts.
The autodiscover service enables client applications to determine how to access resources such as a user's home pool.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipClientPort
Port used by the provider for communicating with SIP clients; the default value is 443.
Note that, by default, the SipClientPort is not displayed when you run the Get-CsHostingProvider cmdlet.
To see the SipClientPort, use a command similar to this:

`Get-CsHostingProvider | Select-Object *`

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
The New-CsHostingProvider cmdlet does not accept pipelined input.

## OUTPUTS

###  
Creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayHostingProvider object.

## NOTES

## RELATED LINKS

[Disable-CsHostingProvider]()

[Enable-CsHostingProvider]()

[Get-CsHostingProvider]()

[Remove-CsHostingProvider]()

[Set-CsHostingProvider]()

