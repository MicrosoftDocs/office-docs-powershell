---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: New-CsPresenceProvider
schema: 2.0.0
---

# New-CsPresenceProvider

## SYNOPSIS

Authorizes a new presence provider for use in the organization.
Presence providers represent the PresenceProviders property of a collection of user services configuration settings.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### ParentAndRelativeKey
```
New-CsPresenceProvider -Fqdn <String> -Parent <String> [-Confirm] [-Force] [-InMemory] [-WhatIf]
 [<CommonParameters>]
```

### Identity
```
New-CsPresenceProvider [-Identity] <XdsIdentity> [-Confirm] [-Force] [-InMemory] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

The CsPresenceProvider cmdlets are used to manage the PresenceProviders property found in the User Services configuration settings.
Among other things, these settings are used to maintain presence information, including a collection of authorized presence providers.
That collection is stored in the PresenceProviders property.
You can use the New-CsPresenceProvider cmdlet to add an authorized presence provider to a collection of User Services configuration settings.

Skype for Business Server Control Panel: The functions carried out by the New-CsPresenceProvider cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- 
```

New-CsPresenceProvider -Parent "global" -Fqdn "fabrikam.com"
```

The command shown in Example 1 creates a new presence provider (with the fully qualified domain name "fabrikam.com") that will be added to the global collection of user services configuration settings.


### -------------------------- Example 2 -------------------------- 
```

Get-CsUserServicesConfiguration | ForEach-Object {New-CsPresenceProvider -Parent $_.Identity -Fqdn "fabrikam.com"}
```

Example 2 adds a presence provider with the Fqdn "fabrikam.com" to all the user services configuration collections in the organization.
To do this, the command first uses the Get-CsUserServicesConfiguration cmdlet to return a collection of all the user services settings.
Those settings are then piped to the ForEach-Object, which takes each item in the collection and a creates a new presence provider for that collection, using "fabrikam.com" as the presence provider Fqdn and the Identity of the user services collection as the presence provider Parent.


## PARAMETERS

### -Fqdn
Fully qualified domain name for the presence provider.
For example:

-Fqdn "fabrikam.com"

If you use the Fqdn parameter you must also use the Parent parameter.
However, the Fqdn parameter cannot be used in the same command as the Identity parameter.

Note that FQDNs must be unique at a given scope.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the new presence provider.
The Identity of a presence provider is composed of two parts: the scope (Parent) where the rule has been applied (for example, service:UserServer:atl-cs-001.litwareinc.com) and the provider's fully qualified domain name.
To create a new provider at the global scope use syntax similar to this:

`-Identity "global/fabrikam.com"`

To create a provider at the site scope, use syntax like this:

`-Identity "site:Redmond/fabrikam.com"`

To create a provider at the service scope (for the UserServer service only), use syntax similar to this:

`-Parent "UserServer:atl-cs-001.litwareinc.com"`

You cannot use the Identity parameter in the same command as the Fqdn or the Parent parameter.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parent
Scope where the new presence provider will be created.
To create a new presence provider at the global scope, use syntax similar to this:

`-Parent "global"`

To create a new provider at the site scope use syntax like this:

`-Parent "site:Redmond"`

To create a provider at the service scope (for the UserServer service only), use syntax similar to this:

`-Parent "UserServer:atl-cs-001.litwareinc.com"`

If you use the Parent parameter you must also include the Fqdn parameter.
However, the Parent parameter cannot be used in conjunction with the Identity parameter.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
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

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsPresenceProvider cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsPresenceProvider cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PresenceProvider#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsPresenceProvider]()

[Get-CsUserServicesConfiguration]()

[Remove-CsPresenceProvider]()

[Set-CsPresenceProvider]()
