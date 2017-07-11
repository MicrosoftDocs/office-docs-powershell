---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsPresenceProvider

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Returns information about the presence providers configured for use in the organization.
Presence providers represent the PresenceProviders property of a collection of user services configuration settings.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Server 2015

Returns information about the presence providers configured for use in the organization.
Presence providers represent the PresenceProviders property of a collection of user services configuration settings.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Filter
```
Get-CsPresenceProvider [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsPresenceProvider [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

The CsPresenceProvider cmdlets are used to manage the PresenceProviders property found in the User Services configuration settings.
Among other things, these settings are used to maintain presence information, including a collection of authorized presence providers.
That collection is stored in the PresenceProviders property.
The Get-CsPresenceProvider cmdlet provides a way for you to return information about the presence providers that have been authorized for use in your organization.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsPresenceProvider"}

Lync Server Control Panel: The functions carried out by the Get-CsPresenceProvider cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Server 2015

The CsPresenceProvider cmdlets are used to manage the PresenceProviders property found in the User Services configuration settings.
Among other things, these settings are used to maintain presence information, including a collection of authorized presence providers.
That collection is stored in the PresenceProviders property.
The Get-CsPresenceProvider cmdlet provides a way for you to return information about the presence providers that have been authorized for use in your organization.

Skype for Business Server Control Panel: The functions carried out by the Get-CsPresenceProvider cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about all the presence providers configured for use in your organization.

Get-CsPresenceProvider

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about all the presence providers configured for use in your organization.

Get-CsPresenceProvider

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

Example 2 returns information about a single presence provider: the provider with the Identity global/fabrikam.com.

Get-CsPresenceProvider -Identity "global/fabrikam.com"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 returns information about a single presence provider: the provider with the Identity global/fabrikam.com.

Get-CsPresenceProvider -Identity "global/fabrikam.com"

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, information is returned for all the presence providers configured at the site scope.
To do this, the Filter parameter is used along with the filter value "site:*".
That filter value limits returned data to presence providers that have an Identity that begins with the string value "site:".

Get-CsPresenceProvider -Filter "site:*"

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, information is returned for all the presence providers configured at the site scope.
To do this, the Filter parameter is used along with the filter value "site:*".
That filter value limits returned data to presence providers that have an Identity that begins with the string value "site:".

Get-CsPresenceProvider -Filter "site:*"

### -------------------------- Example 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns all the presence providers that have the string value "fabrikam.com" somewhere in their Fqdn property.
To carry out this task, the command first uses Get-CsPresenceProvider to return a collection of all the presence providers configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those providers where the Fqdn property includes (-match) the string value "fabrikam.com".

Get-CsPresenceProvider | Where-Object {$_.Fqdn -match "fabrikam.com"}

### -------------------------- Example 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns all the presence providers that have the string value "fabrikam.com" somewhere in their Fqdn property.
To carry out this task, the command first uses the Get-CsPresenceProvider cmdlet to return a collection of all the presence providers configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those providers where the Fqdn property includes (-match) the string value "fabrikam.com".

Get-CsPresenceProvider | Where-Object {$_.Fqdn -match "fabrikam.com"}

## PARAMETERS

### -Filter
Enables you to use wildcards when specifying the Identity of the presence provider (or providers) to be returned.
For example, to return all the presence providers configured at the service scope use this filter value:

-Filter "service:*"

You cannot use both the Filter parameter and the Identity parameter in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Below Content Applies To: Lync Server 2013

Unique identifier for the presence provider.
The Identity of a presence provider is composed of two parts: the scope (Parent) where the provider has been applied (for example, service:UserServer:atl-cs-001.litwareinc.com) and the provider's fully qualified domain name.
For example, to retrieve a single presence provider use syntax similar to this:

-Identity "global/fabrikam.com"

To return all the presence providers for a specific parent, simply specify the scope.
For example, this syntax returns all the presence providers configured for the global scope:

-Identity "global"

If neither the Identity nor the Filter parameters are included, then Get-CsPresenceProvider returns information about all your providers.



Below Content Applies To: Skype for Business Server 2015

Unique identifier for the presence provider.
The Identity of a presence provider is composed of two parts: the scope (Parent) where the provider has been applied (for example, service:UserServer:atl-cs-001.litwareinc.com) and the provider's fully qualified domain name.
For example, to retrieve a single presence provider use syntax similar to this:

-Identity "global/fabrikam.com"

To return all the presence providers for a specific parent, simply specify the scope.
For example, this syntax returns all the presence providers configured for the global scope:

-Identity "global"

If neither the Identity nor the Filter parameters are included, then the Get-CsPresenceProvider cmdlet returns information about all your providers.



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

### -LocalStore
Retrieves the allowed domains from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsPresenceProvider does not accept pipelined input.

###  
None.
The Get-CsPresenceProvider cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsPresenceProvider returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PresenceProvider#Decorated object.

###  
The Get-CsPresenceProvider cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.UserServices.PresenceProvider#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsUserServicesConfiguration]()

[New-CsPresenceProvider]()

[Remove-CsPresenceProvider]()

[Set-CsPresenceProvider]()

[Online Version](http://technet.microsoft.com/EN-US/library/15f7a7d0-d6d6-491e-a2e3-04fd2d6528d5(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/15f7a7d0-d6d6-491e-a2e3-04fd2d6528d5(OCS.16).aspx)

