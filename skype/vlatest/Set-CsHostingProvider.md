---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsHostingProvider

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Modifies a hosting provider currently in use in your organization.
A hosting provider is a third-party organization that provides instant messaging, presence, and related services for a domain that you would like to federate with.
Hosting providers, such as Microsoft Lync Online 2010, differ from public providers (such as Yahoo!, MSN, and AOL) in that their services are not offered to the general public.

Below Content Applies To: Lync Server 2013

Modifies a hosting provider currently in use in your organization.
A hosting provider is a third-party organization that provides instant messaging, presence, and related services for a domain that you would like to federate with.
Hosting providers, such as Microsoft Lync Online 2010, differ from public providers (such as Yahoo!, MSN, and AOL) in that their services are not offered to the general public.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Modifies a hosting provider currently in use in your organization.
A hosting provider is a third-party organization that provides instant messaging, presence, and related services for a domain that you would like to federate with.
Hosting providers differ from public providers (such as Yahoo!, MSN, and AOL) in that their services are not offered to the general public.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsHostingProvider [[-Identity] <XdsGlobalRelativeIdentity>] [-Enabled <Boolean>]
 [-EnabledSharedAddressSpace <Boolean>] [-HostsOCSUsers <Boolean>] [-IsLocal <Boolean>]
 [-VerificationLevel <VerificationLevelType>] [-Force] [-WhatIf] [-Confirm] [-AutodiscoverUrl <String>]
 [-SipClientPort <UInt64>] [<CommonParameters>]
```

### Instance
```
Set-CsHostingProvider [-Instance <PSObject>] [-Enabled <Boolean>] [-EnabledSharedAddressSpace <Boolean>]
 [-HostsOCSUsers <Boolean>] [-IsLocal <Boolean>] [-VerificationLevel <VerificationLevelType>] [-Force]
 [-WhatIf] [-Confirm] [-AutodiscoverUrl <String>] [-SipClientPort <UInt64>] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups. 
When a federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Lync 2010.
Microsoft Lync Server 2010 allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A hosting provider is an organization that provides SIP communication services for other organizations; for example, Fabrikam, Inc.
might host users from Contoso, Northwind Traders, and Wingtip Toys.
When you establish a federation relationship with a hosting provider, you effectively establish federation with any organization hosted by that provider.
For example, if you federate with Fabrikam, your users will be able to exchange instant messages and presence information with users from Contoso, Northwind Traders, and Wingtip Toys.

Hosting providers are also used in split domain scenarios.
In a split domain scenario, some of your Lync Server 2010 users have accounts hosted on-premises (that is, hosted on your local implementation of Lync Server).
Other users have their accounts maintained off-premises by the third-party hosting provider.
Federating with the hosting provider enables on-premises and off-premises users to communicate with one another.

In order to federate with a third-party hosting provider you need to create and enable a new hosting provider.
(In addition, the third-party provider will need to create a federation relationship with you.) After a hosting provider has been created, you can use the Set-CsHostingProvider cmdlet to modify the properties of that provider.
For example, you can use this cmdlet to change the fully qualified domain name (FQDN) of the provider's proxy server, or use the cmdlet to change the verification level for that provider.

Note that you cannot federate with a hosting provider if your Edge Servers are configured to use default routing rather than Domain Name System (DNS) server routing.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsHostingProvider cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsHostingProvider"}

Below Content Applies To: Lync Server 2013

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When a federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Microsoft Lync 2013 Preview.
Lync Server allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A hosting provider is an organization that provides SIP communication services for other organizations; for example, Fabrikam, Inc.
might host users from Contoso, Northwind Traders, and Wingtip Toys.
When you establish a federation relationship with a hosting provider, you effectively establish federation with any organization hosted by that provider.
For example, if you federate with Fabrikam, your users will be able to exchange instant messages and presence information with users from Contoso, Northwind Traders, and Wingtip Toys.

Hosting providers are also used in split domain scenarios.
In a split domain scenario, some of your Lync Server users have accounts hosted on-premises (that is, hosted on your local implementation of Lync Server).
Other users have their accounts maintained off-premises by the third-party hosting provider.
Federating with the hosting provider enables on-premises and off-premises users to communicate with one another.

In order to federate with a third-party hosting provider you need to create and enable a new hosting provider.
(In addition, the third-party provider will need to create a federation relationship with you.) After a hosting provider has been created, you can use the Set-CsHostingProvider cmdlet to modify the properties of that provider.
For example, you can use this cmdlet to change the fully qualified domain name (FQDN) of the provider's proxy server, or use the cmdlet to change the verification level for that provider.

Note that you cannot federate with a hosting provider if your Edge Servers are configured to use default routing rather than Domain Name System (DNS) server routing.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsHostingProvider cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsHostingProvider"}

Below Content Applies To: Skype for Business Server 2015

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When a federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Skype for Business.
Skype for Business Server 2015 allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A hosting provider is an organization that provides SIP communication services for other organizations; for example, Fabrikam, Inc.
might host users from Contoso, Northwind Traders, and Wingtip Toys.
When you establish a federation relationship with a hosting provider, you effectively establish federation with any organization hosted by that provider.
For example, if you federate with Fabrikam, your users will be able to exchange instant messages and presence information with users from Contoso, Northwind Traders, and Wingtip Toys.

Hosting providers are also used in split domain scenarios.
In a split domain scenario, some of your Skype for Business Server 2015 users have accounts hosted on-premises (that is, hosted on your local implementation of Skype for Business Server 2015).
Other users have their accounts maintained off-premises by the third-party hosting provider.
Federating with the hosting provider enables on-premises and off-premises users to communicate with one another.

In order to federate with a third-party hosting provider you need to create and enable a new hosting provider.
(In addition, the third-party provider will need to create a federation relationship with you.) After a hosting provider has been created, you can use the Set-CsHostingProvider cmdlet to modify the properties of that provider.
For example, you can use this cmdlet to change the fully qualified domain name (FQDN) of the provider's proxy server, or use the cmdlet to change the verification level for that provider.

Note that you cannot federate with a hosting provider if your Edge Servers are configured to use default routing rather than Domain Name System (DNS) server routing.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsHostingProvider -Identity "Fabrikam.com" -VerificationLevel "AlwaysUnverifiable"
```

The preceding command modifies the hosting provider with the Identity Fabrikam.com.
In this example, the VerificationLevel property is set to AlwaysUnverifiable.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 modifies the hosting provider with the Identity Fabrikam.com.
In this example, the VerificationLevel property is set to AlwaysUnverifiable.

Set-CsHostingProvider -Identity "Fabrikam.com" -VerificationLevel "AlwaysUnverifiable"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 modifies the hosting provider with the Identity Fabrikam.com.
In this example, the VerificationLevel property is set to AlwaysUnverifiable.

Set-CsHostingProvider -Identity "Fabrikam.com" -VerificationLevel "AlwaysUnverifiable"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsHostingProvider | Set-CsHostingProvider -VerificationLevel "AlwaysUnverifiable"
```

Example 2 is a variation of the command shown in Example 1; in this case, however, the verification level for all the hosting providers is set to AlwaysUnverifiable.
To do this, Get-CsHostingProvider is first used to return a collection of all the hosting providers configured for use in the organization.
This collection is then piped to Set-CsHostingProvider, which modifies the VerificationLevel property for each provider in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 is a variation of the command shown in Example 1; in this case, however, the verification level for all the hosting providers is set to AlwaysUnverifiable.
To do this, Get-CsHostingProvider is first used to return a collection of all the hosting providers configured for use in the organization.
This collection is then piped to Set-CsHostingProvider, which modifies the VerificationLevel property for each provider in the collection.

Get-CsHostingProvider | Set-CsHostingProvider -VerificationLevel "AlwaysUnverifiable"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 is a variation of the command shown in Example 1; in this case, however, the verification level for all the hosting providers is set to AlwaysUnverifiable.
To do this, Get-CsHostingProvider is first used to return a collection of all the hosting providers configured for use in the organization.
This collection is then piped to Set-CsHostingProvider, which modifies the VerificationLevel property for each provider in the collection.

Get-CsHostingProvider | Set-CsHostingProvider -VerificationLevel "AlwaysUnverifiable"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsHostingProvider | Where-Object {$_.EnabledSharedAddressSpace -eq $True -and $_.HostsOCSUsers -eq $True} | Set-CsHostingProvider -EnabledSharedAddressSpace $False -HostsOCSUsers $False
```

In Example 3 all the hosting providers currently configured for use in a split domain setup are modified so that they are no longer used for split domain federation.
In this example, Get-CsHostingProvider is first called in order to return a collection of all the available hosting providers.
This collection is then piped to the Where-Object cmdlet, which selects only those providers that meet two criteria: 1) the HostsOCSUsers property is equal to True; and, 2) the EnabledSharedAddressSpace property is equal to True.
This filtered collection is then piped to Set-CsHostingProvider, which sets both the EnabledSharedAddressSpace and the HostsOCSUsers properties to False.
When this is done any hosting providers in the collection will still be enabled for federation; however, they will no longer be used in a split domain scenario.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3 all the hosting providers currently configured for use in a split domain setup are modified so that they are no longer used for split domain federation.
In this example, Get-CsHostingProvider is first called in order to return a collection of all the available hosting providers.
This collection is then piped to the Where-Object cmdlet, which selects only those providers that meet two criteria: 1) the HostsOCSUsers property is equal to True; and, 2) the EnabledSharedAddressSpace property is equal to True.
This filtered collection is then piped to Set-CsHostingProvider, which sets both the EnabledSharedAddressSpace and the HostsOCSUsers properties to False.
When this is done any hosting providers in the collection will still be enabled for federation; however, they will no longer be used in a split domain scenario.

Get-CsHostingProvider | Where-Object {$_.EnabledSharedAddressSpace -eq $True -and $_.HostsOCSUsers -eq $True} | Set-CsHostingProvider -EnabledSharedAddressSpace $False -HostsOCSUsers $False

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3 all the hosting providers currently configured for use in a split domain setup are modified so that they are no longer used for split domain federation.
In this example, Get-CsHostingProvider is first called in order to return a collection of all the available hosting providers.
This collection is then piped to the Where-Object cmdlet, which selects only those providers that meet two criteria: 1) the HostsOCSUsers property is equal to True; and, 2) the EnabledSharedAddressSpace property is equal to True.
This filtered collection is then piped to Set-CsHostingProvider, which sets both the EnabledSharedAddressSpace and the HostsOCSUsers properties to False.
When this is done any hosting providers in the collection will still be enabled for federation; however, they will no longer be used in a split domain scenario.

Get-CsHostingProvider | Where-Object {$_.EnabledSharedAddressSpace -eq $True -and $_.HostsOCSUsers -eq $True} | Set-CsHostingProvider -EnabledSharedAddressSpace $False -HostsOCSUsers $False

## PARAMETERS

### -Identity
Unique identifier for the hosting provider to be modified.
The Identity might be the FQDN of the hosting provider (for example, fabrikam.com) or perhaps the name of the company providing the services (Fabrikam, Inc.).

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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

Required: False
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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostsOCSUsers
Below Content Applies To: Lync Server 2010

If True, indicates that the hosting provider is used to host Lync Server 2010 accounts.
If False, that indicates that the provider hosts other account types, such as Microsoft Exchange Server accounts.
The default value is False.



Below Content Applies To: Lync Server 2013

If True, indicates that the hosting provider is used to host Lync Server accounts.
If False, that indicates that the provider hosts other account types, such as Microsoft Exchange Server accounts.
The default value is False.



Below Content Applies To: Skype for Business Server 2015

If True, indicates that the hosting provider is used to host Skype for Business Server 2015 accounts.
If False, that indicates that the provider hosts other account types, such as Microsoft Exchange Server accounts.
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

### -IsLocal
Below Content Applies To: Lync Server 2010, Lync Server 2013

If True, indicates that the proxy server used by the hosting provider is contained within your own Lync Server topology.
The default value is False.



Below Content Applies To: Skype for Business Server 2015

If True, indicates that the proxy server used by the hosting provider is contained within your own Skype for Business Server 2015 topology.
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

The default value is AlwaysVerifiable.

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
Below Content Applies To: Lync Server 2013

URL for the autodiscover service used by a hosting provider that hosts Lync Server accounts.
The autodiscover service enables client applications such as Microsoft Lync Mobile to determine how to access resources such as a user's home pool.



Below Content Applies To: Skype for Business Server 2015

URL for the autodiscover service used by a hosting provider that hosts Skype for Business Server 2015 accounts.
The autodiscover service enables client applications such as Microsoft Lync Mobile to determine how to access resources such as a user's home pool.



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

Get-CsHostingProvider | Select-Object *

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayHostingProvider object.
Set-CsHostingProvider accepts pipelined instances of the hosting provider object.

## OUTPUTS

###  
Set-CsHostingProvider does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayHostingProvider object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/709567e3-1af6-4829-b9ce-5f488f9db372(OCS.14).aspx)

[Disable-CsHostingProvider]()

[Enable-CsHostingProvider]()

[Get-CsHostingProvider]()

[New-CsHostingProvider]()

[Remove-CsHostingProvider]()

[Online Version](http://technet.microsoft.com/EN-US/library/709567e3-1af6-4829-b9ce-5f488f9db372(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/709567e3-1af6-4829-b9ce-5f488f9db372(OCS.16).aspx)

