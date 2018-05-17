---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Enable-CsHostingProvider
schema: 2.0.0
---

# Enable-CsHostingProvider

## SYNOPSIS
Enables a hosting provider for use in your organization.
A hosting provider is a third-party organization that provides instant messaging, presence, and related services for a domain that you would like to federate with.
Hosting providers differ from public providers (such as Yahoo!, MSN, and AOL) in that their services are not offered to the general public.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Enable-CsHostingProvider [[-Identity] <XdsGlobalRelativeIdentity>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Instance
```
Enable-CsHostingProvider [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Skype for Business.
Skype for Business Server allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A hosting provider is an organization which provides SIP communication services for other organizations; for example, Fabrikam, Inc.
might host users from Contoso, Northwind Traders and Wingtip Toys.
When you establish a federation relationship with a hosting provider, you effectively establish federation with any organization hosted by that provider.
For example, if you federate with Fabrikam, your users will be able to exchange instant messages and presence information with users from Contoso, Northwind Traders, and Wingtip Toys.

Hosting providers are also used in split domain scenarios.
In a split domain scenario, some of your Skype for Business Server users have accounts hosted on-premises (that is, hosted on your local implementation of Skype for Business Server).
Other users have their accounts maintained off-premises by the third-party hosting provider.
Federating with the hosting provider enables on-premises and off-premises users to communicate with one another.

In order to federate with a third-party hosting provider, you need to create and enable a new hosting provider.
(In addition, the third-party provider will need to create a federation relationship with you.) You can enable a hosting provider at the time that provider is created; alternatively, you can enable that provider after-the-fact by using the Enable-CsHostingProvider cmdlet

Note that you cannot federate with a hosting provider if your Edge Servers are configured to use default routing rather than Domain Name System (DNS) server routing.

By default, members of the following groups are authorized to run the Enable-CsHostingProvider cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Enable-CsHostingProvider"}`


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Enable-CsHostingProvider -Identity Fabrikam.com
```

In Example 1, the hosting provider with the Identity Fabrikam.com is enabled for use.
Note that this command will return an error if Fabrikam.com has already been enabled for use.

### -------------------------- Example 2 --------------------------
```
Get-CsHostingProvider | Where-Object {$_.Enabled -eq $False} | Enable-CsHostingProvider
```

Example 2 shows how you can enable all the hosting providers that are currently disabled.
To do this, the command first calls the Get-CsHostingProvider cmdlet without any additional parameters in order to return a collection of all the hosting providers currently configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects any provider where the Enabled property is equal to False; by definition, that is any provider that is currently disabled.
This filtered collection is then piped to the Enable-CsHostingProvider cmdlet, which enables each of the providers in the collection.

### -------------------------- Example 3 --------------------------
```
Get-CsHostingProvider | Where-Object {$_.EnabledSharedAddressSpace -eq $True -and $_.Enabled -eq $False} | Enable-CsHostingProvider
```

In Example 3, all of the hosting providers used in a "split domain" setup are enabled for use.
(Split domain means that some of your Skype for Business Server accounts are maintained on-premises while other accounts are maintained by a hosting provider.) To carry out this task, the command first uses the Get-CsHostingProvider cmdlet to return a collection of all the currently-configured hosting providers.
This collection is then piped to the Where-Object cmdlet, which selects only those providers that meet two criteria: 1) the EnabledSharedAddressSpace property is equal to True; and, 2) the Enabled property is equal to False.
After that, the filtered collection is piped to the Enable-CsHostingProvider cmdlet, which enables each provider in the collection.


## PARAMETERS

### -Identity
Unique identifier for the hosting provider to be enabled.
The Identity is might be the fully qualified domain name (FQDN) of the hosting provider (for example, fabrikam.com) or perhaps the name of the company providing the services (Fabrikam, Inc.).

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

### Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayHostingProvider


## OUTPUTS

### None
Instead, the cmdlet enables instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayHostingProvider object.


## NOTES


## RELATED LINKS

[Disable-CsHostingProvider](Disable-CsHostingProvider.md)

[Get-CsHostingProvider](Get-CsHostingProvider.md)

[New-CsHostingProvider](New-CsHostingProvider.md)

[Remove-CsHostingProvider](Remove-CsHostingProvider.md)

[Set-CsHostingProvider](Set-CsHostingProvider.md)
