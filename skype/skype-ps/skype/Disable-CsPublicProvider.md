---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Disable-CsPublicProvider
schema: 2.0.0
---

# Disable-CsPublicProvider

## SYNOPSIS
Disables a public provider configured for use in your organization.
A public provider is an organization that provides instant messaging, presence, and related services to the general public.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Disable-CsPublicProvider [[-Identity] <XdsGlobalRelativeIdentity>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### Instance
```
Disable-CsPublicProvider [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Federation is a means by which two organizations can set up a trust relationship that facilitates communication between the two groups.
When federation has been established, users in the two organizations can send each other instant messages, subscribe for presence notifications, and otherwise communicate with one another using SIP applications such as Skype for Business.
Skype for Business Server allows for three types of federation: 1) direct federation between your organization and another; 2) federation between your organization and a public provider; and, 3) federation between your organization and a third-party hosting provider.

A public provider is an organization that provides Session Initiation Protocol (SIP) communication services for the general public.
When you establish a federation relationship with a public provider, you effectively establish federation with any user who has an account hosted by that provider.
For example, if you federate with Skype your users will be able to exchange instant messages and presence information with anyone who has a Skype instant messaging account.

In order to federate with a public provider you need to create and enable a new public provider.
(In addition, the public provider will need to create a federation relationship with you.) When you create a public provider, you have the option of either enabling or disabling that federation relationship.
If a public provider is enabled, then users in your organization will be able to exchange instant messages and presence information with people who have accounts with the public provider.
If a public provider is disabled, then your ability to communicate with people who have accounts with the public provider will be suspended, and will remain suspended until the provider has been re-enabled.
If you need to temporarily suspend a provider relationship you can do so by using the Disable-CsPublicProvider cmdlet.
If you prefer to delete that provider altogether, use the Remove-CsPublicProvider cmdlet.

By default, members of the following groups are authorized to run the Disable-CsPublicProvider cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Disable-CsPublicProvider"}`


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Disable-CsPublicProvider -Identity "Skype"
```

Example 1 disables the public provider with the Identity Skype.
This command will return an error if Skype is already disabled.

### -------------------------- Example 2 --------------------------
```
Get-CsPublicProvider | Where-Object {$_.Enabled -eq $True} | Disable-CsPublicProvider
```

Example 2 disables all the public providers that are currently enabled.
To do this, the command first uses the Get-CsPublicProvider cmdlet to return a collection of all the public providers currently in use in the organization.
This collection is piped to the Where-Object cmdlet, which picks out only those providers where the Enabled property is equal to True.
In turn, this filtered collection is piped to the Disable-CsPublicProvider cmdlet, which disables each provider in the collection.

### -------------------------- Example 3 --------------------------
```
Get-CsPublicProvider | Where-Object {$_.VerificationLevel -ne "AlwaysVerifiable" -and $_.Enabled -eq $True} | Disable-CsPublicProvider
```

The command shown in Example 3 disables all the public providers that are current enabled and that have a verification level set to AlwaysVerifiable.
To accomplish this task, the command first calls the Get-CsPublicProvider cmdlet to return a collection of all the public providers currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects the providers that meet two criteria: 1) the VerificationLevel property is equal to AlwaysVerifiable; and, 2) the Enabled property is equal to True.
(The -and operator tells the Where-Object cmdlet that objects must meet all the specified criteria in order to be selected.) The filtered collection is then piped to the Disable-CsPublicProvider cmdlet, which disables each provider in that collection.


## PARAMETERS

### -Identity
Unique identifier for the public provider to be disabled.
The Identity is typically the name of the website providing the services.

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

### Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayPublicProvider
The Disable-CsPublicProvider cmdlet accepts pipelined instances of the public provider object.

## OUTPUTS

### None
Instead, the cmdlet disables instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DisplayPublicProvider object.

## NOTES

## RELATED LINKS
[Enable-CsPublicProvider]()

[Get-CsPublicProvider]()

[New-CsPublicProvider]()

[Remove-CsPublicProvider]()

[Set-CsPublicProvider]()