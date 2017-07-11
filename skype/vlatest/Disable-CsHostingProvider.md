---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Disable-CsHostingProvider

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Disables a hosting provider currently in use in your organization.
A hosting provider is a third-party organization that provides instant messaging, presence, and related services for a domain that you would like to federate with.
Hosting providers, such as Microsoft Lync Online 2010, differ from public providers (such as Yahoo!, MSN, and AOL) in that their services are not offered to the general public.

**Below Content Applies To:** Lync Server 2013

Disables a hosting provider currently in use in your organization.
A hosting provider is a third-party organization that provides instant messaging, presence, and related services for a domain that you would like to federate with.
Hosting providers, such as Microsoft Lync Online 2010, differ from public providers (such as Yahoo!, MSN, and AOL) in that their services are not offered to the general public.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Disables a hosting provider currently in use in your organization.
A hosting provider is a third-party organization that provides instant messaging, presence, and related services for a domain that you would like to federate with.
Hosting providers differ from public providers (such as Yahoo!, MSN, and AOL) in that their services are not offered to the general public.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Disable-CsHostingProvider [[-Identity] <XdsGlobalRelativeIdentity>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Instance
```
Disable-CsHostingProvider [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups. 
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Microsoft Lync 2010.
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
(In addition, the third-party provider will need to create a federation relationship with you.) You can enable a hosting provider at the time that provider is created; alternatively, you can enable the provider after-the-fact by using the Enable-CsHostingProvider cmdlet.
In addition, you can use the Disable-CsHostingProvider cmdlet to disable the relationship at any time.
When you disable a hosting provider that provider remains a valid federation partner; however, all communication activity between your organization and the provider will be suspended until the provider has been re-enabled.

Note that you cannot federate with a hosting provider if your Edge Servers are configured to use default routing rather than Domain Name System (DNS) server routing.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Disable-CsHostingProvider cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Disable-CsHostingProvider"}

**Below Content Applies To:** Lync Server 2013

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Microsoft Lync 2013 Preview.
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
(In addition, the third-party provider will need to create a federation relationship with you.) You can enable a hosting provider at the time that provider is created; alternatively, you can enable the provider after-the-fact by using the Enable-CsHostingProvider cmdlet.
In addition, you can use the Disable-CsHostingProvider cmdlet to disable the relationship at any time.
When you disable a hosting provider that provider remains a valid federation partner; however, all communication activity between your organization and the provider will be suspended until the provider has been re-enabled.

Note that you cannot federate with a hosting provider if your Edge Servers are configured to use default routing rather than Domain Name System (DNS) server routing.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Disable-CsHostingProvider cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Disable-CsHostingProvider"}

**Below Content Applies To:** Skype for Business Server 2015

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Skype for Business.
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
(In addition, the third-party provider will need to create a federation relationship with you.) You can enable a hosting provider at the time that provider is created; alternatively, you can enable the provider after-the-fact by using the Enable-CsHostingProvider cmdlet.
In addition, you can use the Disable-CsHostingProvider cmdlet to disable the relationship at any time.
When you disable a hosting provider that provider remains a valid federation partner; however, all communication activity between your organization and the provider will be suspended until the provider has been re-enabled.

Note that you cannot federate with a hosting provider if your Edge Servers are configured to use default routing rather than Domain Name System (DNS) server routing.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Disable-CsHostingProvider -Identity "Fabrikam.com"
```

The command shown in Example 1 disables the hosting provider Fabrikam.com.
Note that this command will return an error message if Fabrikam.com is already disabled.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 disables the hosting provider Fabrikam.com.
Note that this command will return an error message if Fabrikam.com is already disabled.

Disable-CsHostingProvider -Identity "Fabrikam.com"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 disables the hosting provider Fabrikam.com.
Note that this command will return an error message if Fabrikam.com is already disabled.

Disable-CsHostingProvider -Identity "Fabrikam.com"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsHostingProvider | Where-Object {$_.Enabled -eq $True} | Disable-CsHostingProvider
```

The preceding command disables all the hosting providers that are currently enabled.
To do this, the command first calls Get-CsHostingProvider to return a collection of all the hosting providers configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those providers where the Enabled property is equal to  True.
The filtered collection is then piped to Disable-CsHostingProvider, which disables each provider in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 disables all the hosting providers that are currently enabled.
To do this, the command first calls Get-CsHostingProvider to return a collection of all the hosting providers configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those providers where the Enabled property is equal to True.
The filtered collection is then piped to Disable-CsHostingProvider, which disables each provider in the collection.

Get-CsHostingProvider | Where-Object {$_.Enabled -eq $True} | Disable-CsHostingProvider

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 disables all the hosting providers that are currently enabled.
To do this, the command first calls the Get-CsHostingProvider cmdlet to return a collection of all the hosting providers configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those providers where the Enabled property is equal to True.
The filtered collection is then piped to the Disable-CsHostingProvider cmdlet, which disables each provider in the collection.

Get-CsHostingProvider | Where-Object {$_.Enabled -eq $True} | Disable-CsHostingProvider

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsHostingProvider | Where-Object {$_.VerificationLevel -ne "AlwaysVerifiable" -and $_.Enabled -eq $True} | Disable-CsHostingProvider
```

In Example 3, all the enabled hosting providers where the verification level is not equal to AlwaysVerifiable are disabled.
To carry out this task, the command first uses Get-CsHostingProvider to return a collection of all the hosting providers configured for use in the organization.
This collection is piped to the Where-Object cmdlet, which selects only those providers that meet two criteria: 1) the VerificationLevel property is not equal to  AlwaysVerifiable; and, 2) the Enabled property is equal to True.
The filtered collection is then piped to Disable-CsHostingProvider, which disables each provider in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, all the enabled hosting providers where the verification level is not equal to AlwaysVerifiable are disabled.
To carry out this task, the command first uses Get-CsHostingProvider to return a collection of all the hosting providers configured for use in the organization.
This collection is piped to the Where-Object cmdlet, which selects only those providers that meet two criteria: 1) the VerificationLevel property is not equal to AlwaysVerifiable; and, 2) the Enabled property is equal to True.
The filtered collection is then piped to Disable-CsHostingProvider, which disables each provider in the collection.

Get-CsHostingProvider | Where-Object {$_.VerificationLevel -ne "AlwaysVerifiable" -and $_.Enabled -eq $True} | Disable-CsHostingProvider

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, all the enabled hosting providers where the verification level is not equal to AlwaysVerifiable are disabled.
To carry out this task, the command first uses the Get-CsHostingProvider cmdlet to return a collection of all the hosting providers configured for use in the organization.
This collection is piped to the Where-Object cmdlet, which selects only those providers that meet two criteria: 1) the VerificationLevel property is not equal to AlwaysVerifiable; and, 2) the Enabled property is equal to True.
The filtered collection is then piped to the Disable-CsHostingProvider cmdlet, which disables each provider in the collection.

Get-CsHostingProvider | Where-Object {$_.VerificationLevel -ne "AlwaysVerifiable" -and $_.Enabled -eq $True} | Disable-CsHostingProvider

## PARAMETERS

### -Identity
Unique identifier for the hosting provider to be disabled.
The Identity might be the fully qualified domain (FQDN) name of the hosting provider (for example, fabrikam.com) or perhaps the name of the company providing the services (Fabrikam, Inc.).

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayHostingProvider object.
Disable-CsHostingProvider accepts pipelined instances of the hosting provider object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayHostingProvider object.
The Disable-CsHostingProvider cmdlet accepts pipelined instances of the hosting provider object.

## OUTPUTS

###  
None.
Instead, the cmdlet disables instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayHostingProvider object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/67d67111-aa04-4241-8f41-e8059fd1649c(OCS.14).aspx)

[Enable-CsHostingProvider]()

[Get-CsHostingProvider]()

[New-CsHostingProvider]()

[Remove-CsHostingProvider]()

[Set-CsHostingProvider]()

[Online Version](http://technet.microsoft.com/EN-US/library/67d67111-aa04-4241-8f41-e8059fd1649c(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/67d67111-aa04-4241-8f41-e8059fd1649c(OCS.16).aspx)

