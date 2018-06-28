---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsPresenceProvider
schema: 2.0.0
---

# Remove-CsPresenceProvider

## SYNOPSIS
Removes a presence provider previously configured for use in the organization.
Presence providers represent the PresenceProviders property of a collection of user services configuration settings.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Remove-CsPresenceProvider [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The CsPresenceProvider cmdlets are used to manage the PresenceProviders property found in the User Services configuration settings.
Among other things, these settings are used to maintain presence information, including a collection of authorized presence providers.
That collection is stored in the PresenceProviders property.

The `Remove-CsPresenceProvider` cmdlet enables you to remove a presence provider from the PresenceProviders property of one or more collections of User Services configuration settings.

Skype for Business Server Control Panel: The functions carried out by the `Remove-CsPresenceProvider` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsPresenceProvider -Identity "global/fabrikam.com"
```

The command shown in Example 1 removes the presence provider with the Identity "global/fabrikam.com".


### -------------------------- Example 2 --------------------------
```
Get-CsPresenceProvider | Remove-CsPresenceProvider
```

In Example 2, all the presence providers configured for use in the organization are removed.
To do this, the command first calls the `Get-CsPresenceProvider` cmdlet without any parameters; that returns a collection of all the configured presence providers.
That collection is then piped to the `Remove-CsPresenceProvider` cmdlet, which deletes each item (that is, each provider) in the collection.


### -------------------------- Example 3 --------------------------
```
Get-CsPresenceProvider | Where-Object {$_.Fqdn -match "fabrikam.com"} | Remove-CsPresenceProvider
```

Example 3 shows how you can delete all the presence providers that have an Fqdn that includes the string value "fabrikam.com".
To carry out this task, the command first uses the `Get-CsPresenceProvider` cmdlet to return a collection of all the available presence providers.
That collection is then piped to the `Where-Object` cmdlet, which picks out only those providers where the Fqdn property includes (-match) the string value "fabrikam.com".
In turn, that filtered collection is then piped to the `Remove-CsPresenceProvider` cmdlet, which deletes each provider in the filtered collection.


## PARAMETERS

### -Identity
Unique identifier of the presence provider to be removed.
To remove a single provider, use the actual Identity of the provider, which includes both the scope and the provider Fqdn:

`-Identity "global/fabrikam.com"`

To remove all the presence providers configured at a particular scope, simply use the scope as the Identity.
This syntax removes all the providers configured at the global scope:

`-Identity "global"`

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The `Remove-CsPresenceProvider` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PresenceProvider#Decorated object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsPresenceProvider` cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PresenceProvider#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsPresenceProvider](Get-CsPresenceProvider.md)

[Get-CsUserServicesConfiguration](Get-CsUserServicesConfiguration.md)

[New-CsPresenceProvider](New-CsPresenceProvider.md)

[Set-CsPresenceProvider](Set-CsPresenceProvider.md)

