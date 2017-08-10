---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsPresenceProvider

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Modifies a presence provider configured for use in the organization.
Presence providers represent the PresenceProviders property of a collection of user services configuration settings.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Modifies a presence provider configured for use in the organization.
Presence providers represent the PresenceProviders property of a collection of user services configuration settings.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Identity
```
Set-CsPresenceProvider [[-Identity] <XdsIdentity>] [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsPresenceProvider [-Confirm] [-Force] [-Instance <PSObject>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The CsPresenceProvider cmdlets are used to manage the PresenceProviders property found in the User Services configuration settings.
Among other things, these settings are used to maintain presence information, including a collection of authorized presence providers.
That collection is stored in the PresenceProviders property.

The Set-CsPresenceProvider cmdlet can be used to modify the FQDN of a presence provider currently configured for use in the organization.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsPresenceProvider"}

Lync Server Control Panel: The functions carried out by the Set-CsPresenceProvider cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The CsPresenceProvider cmdlets are used to manage the PresenceProviders property found in the User Services configuration settings.
Among other things, these settings are used to maintain presence information, including a collection of authorized presence providers.
That collection is stored in the PresenceProviders property.

The Set-CsPresenceProvider cmdlet can be used to modify the FQDN of a presence provider currently configured for use in the organization.

Skype for Business Server Control Panel: The functions carried out by the Set-CsPresenceProvider cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 1 demonstrate how you can use the Set-CsPresenceProvider cmdlet to modify the FQDN of an existing presence provider.
To do this, the first command in the example uses Get-CsPresenceProvider to create an object reference to the presence provider with the Identity "global/contoso.com".
This object reference is stored in the variable $x.

In the second command, the FQDN property of the object reference is set to contoso2.com, the new FQDN for the presence provider.
After the FQDN property has been configured, the Set-CsPresenceProvider cmdlet is used, along with the Instance property, to write these changes to the global collection of User Services configuration settings.

$x = Get-CsPresenceProvider -Identity "global/contoso.com"

$x.Fqdn = "contoso2.com"

Set-CsPresenceProvider -Instance $x

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 1 demonstrate how you can use the Set-CsPresenceProvider cmdlet to modify the FQDN of an existing presence provider.
To do this, the first command in the example uses the Get-CsPresenceProvider cmdlet to create an object reference to the presence provider with the Identity "global/contoso.com".
This object reference is stored in the variable $x.

In the second command, the FQDN property of the object reference is set to contoso2.com, the new FQDN for the presence provider.
After the FQDN property has been configured, the Set-CsPresenceProvider cmdlet is used, along with the Instance property, to write these changes to the global collection of User Services configuration settings.

$x = Get-CsPresenceProvider -Identity "global/contoso.com"

$x.Fqdn = "contoso2.com"

Set-CsPresenceProvider -Instance $x

## PARAMETERS

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

### -Identity
Unique identifier for the presence provider to be modified.
The Identity of a presence provider is composed of two parts: the scope (Parent) where the rule has been applied (for example, service:UserServer:atl-cs-001.litwareinc.com) and the provider Fqdn.
To modify a presence provider at the global scope use syntax similar to this:

-Identity "global/fabrikam.com"

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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
Set-CsPresenceProvider accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PresenceProvider#Decorated object.

###  
The Set-CsPresenceProvider cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PresenceProvider#Decorated object.

## OUTPUTS

###  
None.
Instead, Set-CsPresenceProvider modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PresenceProvider#Decorated object.

###  
None.
Instead, the Set-CsPresenceProvider cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PresenceProvider#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsPresenceProvider]()

[Get-CsUserServicesConfiguration]()

[New-CsPresenceProvider]()

[Remove-CsPresenceProvider]()

[Online Version](http://technet.microsoft.com/EN-US/library/3f2e30d1-edb5-4839-a24f-11b77b699a1d(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/3f2e30d1-edb5-4839-a24f-11b77b699a1d(OCS.16).aspx)

