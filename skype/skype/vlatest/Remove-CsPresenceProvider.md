---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsPresenceProvider

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Removes a presence provider previously configured for use in the organization.
Presence providers represent the PresenceProviders property of a collection of user services configuration settings.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Removes a presence provider previously configured for use in the organization.
Presence providers represent the PresenceProviders property of a collection of user services configuration settings.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Remove-CsPresenceProvider [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The CsPresenceProvider cmdlets are used to manage the PresenceProviders property found in the User Services configuration settings.
Among other things, these settings are used to maintain presence information, including a collection of authorized presence providers.
That collection is stored in the PresenceProviders property.

The Remove-CsPresenceProvider cmdlet enables you to remove a presence provider from the PresenceProviders property of one or more collections of User Services configuration settings.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsPresenceProvider"}

Lync Server Control Panel: The functions carried out by the Remove-CsPresenceProvider cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The CsPresenceProvider cmdlets are used to manage the PresenceProviders property found in the User Services configuration settings.
Among other things, these settings are used to maintain presence information, including a collection of authorized presence providers.
That collection is stored in the PresenceProviders property.

The Remove-CsPresenceProvider cmdlet enables you to remove a presence provider from the PresenceProviders property of one or more collections of User Services configuration settings.

Skype for Business Server Control Panel: The functions carried out by the Remove-CsPresenceProvider cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 removes the presence provider with the Identity "global/fabrikam.com".

Remove-CsPresenceProvider -Identity "global/fabrikam.com"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 removes the presence provider with the Identity "global/fabrikam.com".

Remove-CsPresenceProvider -Identity "global/fabrikam.com"

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, all the presence providers configured for use in the organization are removed.
To do this, the command first calls Get-CsPresenceProvider without any parameters; that returns a collection of all the configured presence providers.
That collection is then piped to the Remove-CsPresenceProvider cmdlet, which deletes each item (that is, each provider) in the collection.

Get-CsPresenceProvider | Remove-CsPresenceProvider

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, all the presence providers configured for use in the organization are removed.
To do this, the command first calls the Get-CsPresenceProvider cmdlet without any parameters; that returns a collection of all the configured presence providers.
That collection is then piped to the Remove-CsPresenceProvider cmdlet, which deletes each item (that is, each provider) in the collection.

Get-CsPresenceProvider | Remove-CsPresenceProvider

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

Example 3 shows how you can delete all the presence providers that have an Fqdn that includes the string value "fabrikam.com".
To carry out this task, the command first uses Get-CsPresenceProvider to return a collection of all the available presence providers.
That collection is then piped to the Where-Object cmdlet, which picks out only those providers where the Fqdn property includes (-match) the string value "fabrikam.com".
In turn, that filtered collection is then piped to Remove-CsPresenceProvider, which deletes each provider in the filtered collection.

Get-CsPresenceProvider | Where-Object {$_.Fqdn -match "fabrikam.com"} | Remove-CsPresenceProvider

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 shows how you can delete all the presence providers that have an Fqdn that includes the string value "fabrikam.com".
To carry out this task, the command first uses the Get-CsPresenceProvider cmdlet to return a collection of all the available presence providers.
That collection is then piped to the Where-Object cmdlet, which picks out only those providers where the Fqdn property includes (-match) the string value "fabrikam.com".
In turn, that filtered collection is then piped to the Remove-CsPresenceProvider cmdlet, which deletes each provider in the filtered collection.

Get-CsPresenceProvider | Where-Object {$_.Fqdn -match "fabrikam.com"} | Remove-CsPresenceProvider

## PARAMETERS

### -Identity
Unique identifier of the presence provider to be removed.
To remove a single provider, use the actual Identity of the provider, which includes both the scope and the provider Fqdn:

-Identity "global/fabrikam.com"

To remove all the presence providers configured at a particular scope, simply use the scope as the Identity.
This syntax removes all the providers configured at the global scope:

-Identity "global"

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Remove-CsPresenceProvider accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PresenceProvider#Decorated object.

###  
The Remove-CsPresenceProvider cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PresenceProvider#Decorated object.

## OUTPUTS

###  
None.
Instead, Remove-CsPresenceProvider deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PresenceProvider#Decorated object.

###  
None.
Instead, the Remove-CsPresenceProvider cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PresenceProvider#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsPresenceProvider]()

[Get-CsUserServicesConfiguration]()

[New-CsPresenceProvider]()

[Set-CsPresenceProvider]()

[Online Version](http://technet.microsoft.com/EN-US/library/7e8b540e-484f-4003-8665-18e2b3974f33(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/7e8b540e-484f-4003-8665-18e2b3974f33(OCS.16).aspx)

