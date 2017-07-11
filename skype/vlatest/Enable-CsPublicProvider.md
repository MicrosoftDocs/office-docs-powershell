---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Enable-CsPublicProvider

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Enables a public provider configured for use in your organization.
A public provider is an organization that provides instant messaging, presence, and related services to the general public.
Microsoft Lync Server 2010 ships with three public providers configured but not enabled: Yahoo!; AOL; and MSN.

**Below Content Applies To:** Lync Server 2013

Enables a public provider configured for use in your organization.
A public provider is an organization that provides instant messaging, presence, and related services to the general public.
Lync Server ships with three public providers configured but not enabled: Yahoo!, AIM (AOL), and Messenger (MSN).
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Enables a public provider configured for use in your organization.
A public provider is an organization that provides instant messaging, presence, and related services to the general public.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Enable-CsPublicProvider [[-Identity] <XdsGlobalRelativeIdentity>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Instance
```
Enable-CsPublicProvider [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups. 
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Microsoft Lync 2010.
Lync Server 2010 allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A public provider is an organization which provides SIP communication services for the general public.
When you establish a federation relationship with a public provider, you effectively establish federation with any user who has an account hosted by that provider.
For example, if you federate with MSN, then your users will be able to exchange instant messages and presence information with anyone who has an MSN instant messaging account.

In order to federate with a public provider you need to create and enable a new public provider.
(In addition, the public provider will need to create a federation relationship with you.) Public providers can be enabled at the time they are created, or they can be enabled after-the-fact by using the Enable-CsPublicProvider cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Enable-CsPublicProvider cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Enable-CsPublicProvider"}

**Below Content Applies To:** Lync Server 2013

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Microsoft Lync 2013 Preview.
Lync Server allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A public provider is an organization which provides SIP communication services for the general public.
When you establish a federation relationship with a public provider, you effectively establish federation with any user who has an account hosted by that provider.
For example, if you federate with Messenger (MSN), then your users will be able to exchange instant messages and presence information with anyone who has an MSN Messenger instant messaging account.

In order to federate with a public provider you need to create and enable a new public provider.
(In addition, the public provider will need to create a federation relationship with you.) Public providers can be enabled at the time they are created, or they can be enabled after-the-fact by using the Enable-CsPublicProvider cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Enable-CsPublicProvider cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Enable-CsPublicProvider"}

**Below Content Applies To:** Skype for Business Server 2015

Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Skype for Business.
Skype for Business Server 2015 allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A public provider is an organization which provides SIP communication services for the general public.
When you establish a federation relationship with a public provider, you effectively establish federation with any user who has an account hosted by that provider.
For example, if you federate with Skype your users will be able to exchange instant messages and presence information with anyone who has a Skype instant messaging account.

In order to federate with a public provider you need to create and enable a new public provider.
(In addition, the public provider will need to create a federation relationship with you.) Public providers can be enabled at the time they are created, or they can be enabled after-the-fact by using the Enable-CsPublicProvider cmdlet.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Enable-CsPublicProvider -Identity "MSN"
```

The command shown in Example 1 enables the public provider with the Identity MSN.
This command will return an error if MSN is already enabled.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 enables the public provider with the Identity Messenger.
This command will return an error if Messenger is already enabled.

Enable-CsPublicProvider -Identity "Messenger"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 enables the public provider with the Identity Skype.
This command will return an error if Skype is already enabled.

Enable-CsPublicProvider -Identity "Skype"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsPublicProvider | Where-Object {$_.Enabled -eq $False} | Enable-CsPublicProvider
```

The preceding command enables all the public providers that are currently disabled.
In order to carry out this task, the command first uses Get-CsPublicProvider to return a collection of all the public providers configured for use in the organization.
That collection is piped to the Where-Object cmdlet, which selects only those providers where the Enabled property is equal to False.
The filtered collection is then piped to Enable-CsPublicProvider, which enables each provider in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 enables all the public providers that are currently disabled.
In order to carry out this task, the command first uses Get-CsPublicProvider to return a collection of all the public providers configured for use in the organization.
That collection is piped to the Where-Object cmdlet, which selects only those providers where the Enabled property is equal to False.
The filtered collection is then piped to Enable-CsPublicProvider, which enables each provider in the collection.

Get-CsPublicProvider | Where-Object {$_.Enabled -eq $False} | Enable-CsPublicProvider

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 enables all the public providers that are currently disabled.
In order to carry out this task, the command first uses the Get-CsPublicProvider cmdlet to return a collection of all the public providers configured for use in the organization.
That collection is piped to the Where-Object cmdlet, which selects only those providers where the Enabled property is equal to False.
The filtered collection is then piped to the Enable-CsPublicProvider cmdlet, which enables each provider in the collection.

Get-CsPublicProvider | Where-Object {$_.Enabled -eq $False} | Enable-CsPublicProvider

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsPublicProvider | Where-Object {$_.VerificationLevel -eq "AlwaysVerifiable" -and $_.Enabled -eq $False} | Enable-CsPublicProvider
```

Example 3 enables all the public providers that are not currently enabled, provided the verification level of those providers is set to AlwaysVerifiable.
To do this, the command first calls Get-CsPublicProvider to return a collection of all the public providers currently in use in the organization.
This collection is piped to Where-Object, which picks out those providers that meet two criteria: 1) the VerificationLevel property is equal to AlwaysVerifiable; and, 2) the Enabled property is equal to False.
(The -and operator tells Where-Object that objects must meet all the specified criteria in order to be selected.) This filtered collection is then piped to Enable-CsPublicProvider, which enables each provider in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 enables all the public providers that are not currently enabled, provided the verification level of those providers is set to AlwaysVerifiable.
To do this, the command first calls Get-CsPublicProvider to return a collection of all the public providers currently in use in the organization.
This collection is piped to Where-Object, which picks out those providers that meet two criteria: 1) the VerificationLevel property is equal to AlwaysVerifiable; and, 2) the Enabled property is equal to False.
(The -and operator tells Where-Object that objects must meet all the specified criteria in order to be selected.) This filtered collection is then piped to Enable-CsPublicProvider, which enables each provider in the collection.

Get-CsPublicProvider | Where-Object {$_.VerificationLevel -eq "AlwaysVerifiable" -and $_.Enabled -eq $False} | Enable-CsPublicProvider

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 enables all the public providers that are not currently enabled, provided the verification level of those providers is set to AlwaysVerifiable.
To do this, the command first calls the Get-CsPublicProvider cmdlet to return a collection of all the public providers currently in use in the organization.
This collection is piped to the Where-Object cmdlet, which picks out those providers that meet two criteria: 1) the VerificationLevel property is equal to AlwaysVerifiable; and, 2) the Enabled property is equal to False.
(The -and operator tells the Where-Object cmdlet that objects must meet all the specified criteria in order to be selected.) This filtered collection is then piped to the Enable-CsPublicProvider cmdlet, which enables each provider in the collection.

Get-CsPublicProvider | Where-Object {$_.VerificationLevel -eq "AlwaysVerifiable" -and $_.Enabled -eq $False} | Enable-CsPublicProvider

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier for the public provider to be enabled.
The Identity is typically the name of the website providing the services (for example,, Yahoo!; AOL; and MSN).



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the public provider to be enabled.
The Identity is typically the name of the website providing the services (for example, Yahoo!; AOL; and MSN).



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
Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayPublicProvider object.
Enable-CsPublicProvider accepts pipelined instances of the public provider object.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayPublicProvider object.
The Enable-CsPublicProvider cmdlet accepts pipelined instances of the public provider object.

## OUTPUTS

###  
None.
Instead, the cmdlet enables instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayPublicProvider object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/98370dfd-9a53-41a8-a1f3-bb7a516c3c5e(OCS.14).aspx)

[Disable-CsPublicProvider]()

[Get-CsPublicProvider]()

[New-CsPublicProvider]()

[Remove-CsPublicProvider]()

[Set-CsPublicProvider]()

[Online Version](http://technet.microsoft.com/EN-US/library/98370dfd-9a53-41a8-a1f3-bb7a516c3c5e(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/98370dfd-9a53-41a8-a1f3-bb7a516c3c5e(OCS.16).aspx)

