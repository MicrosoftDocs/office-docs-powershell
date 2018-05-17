---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsPinPolicy
schema: 2.0.0
---

# Get-CsPinPolicy

## SYNOPSIS
Returns information about the client personal identification number (PIN) policies configured for use in your organization.
PIN authentication enables users to access Skype for Business Server by providing a PIN instead of a user name and password.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsPinPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Filter
```
Get-CsPinPolicy [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server enables users to connect to the system, or to join public switched telephone network (PSTN) conferences via telephone.
Typically, logging on to the system or joining a conference requires the user to enter a user name or password; unfortunately, entering a user name and password can be a problem if you are using a phone that does not have an alphanumeric keypad.
Because of that, Skype for Business Server enables you to supply users with numeric-only PINs; when prompted, users can then log on to the system or join a conference by entering the PIN instead of a user name and password.

Skype for Business Server uses PIN policies to manage PIN authentication properties; for example, you can specify the minimum length for a PIN and determine whether you will allow PINs that use "common patterns" such as consecutive digits (for example, a PIN like 123456).
You can use the Get-CsPinPolicy cmdlet to retrieve information about the PIN policies currently configured for use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsPinPolicy
```

The command shown in Example 1 returns a collection of all the PIN policies configured for use in the organization.
Calling the Get-CsPinPolicy cmdlet without any parameters always returns the complete set of PIN policies.

### -------------------------- Example 2 --------------------------
```
Get-CsPinPolicy -Identity "site:Redmond"
```

Example 2 returns a single PIN policy: the policy with the Identity site:Redmond.

### -------------------------- Example 3 --------------------------
```
Get-CsPinPolicy -Filter "tag:*"
```

The command shown in Example 3 uses the Filter parameter to return all the policies that have been configured at the per-user scope.
This is done by using the filter value "tag:*"; this value instructs the Get-CsPinPolicy cmdlet to return only those policies that have an Identity that begins with the characters "tag:".

### -------------------------- Example 4 --------------------------
```
Get-CsPinPolicy | Where-Object {$_.AllowCommonPatterns -eq $True}
```

Example 4 returns all the PIN policies where the AllowCommonPatterns property is True.
In this example, the Get-CsPinPolicy cmdlet is first called without any additional parameters; that returns a collection of all the PIN policies configured for use in the organization.
That collection is then passed to the Where-Object cmdlet, which picks out only those policies where the AllowCommonPatterns property is equal to True.

### -------------------------- Example 5 --------------------------
```
Get-CsPinPolicy | Where-Object {$_.PinLifetime -gt 30}
```

Like Example 4, the command shown in Example 5 uses the Where-Object cmdlet to return a subset of the existing PIN policies.
In this case, the Where-Object cmdlet retrieves only those policies where the PinLifetime property is greater than 30.
That means only policies that have PIN expiration times of more than 30 days will be returned.


## PARAMETERS

### -Identity
Unique identity assigned to the policy when it was created.
PIN policies can be assigned at the global, site, or per-user scope.
To refer to the global instance, use this syntax:

`-Identity global`

To refer to a policy at the site scope, use this syntax:

`-Identity site:Redmond`

To refer to a policy at the per-user scope, use syntax similar to this:

`-Identity RedmondPolicy`

Wildcard characters such as the asterisk (*) cannot be used with the Identity parameter.
To do a wildcard search for policies, use the Filter parameter instead.

If neither the Identity nor the Filter parameter is specified the Get-CsPinPolicy cmdlet returns information about all the PIN policies configured for use in your organization.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to do a wildcard search for PIN policies.
For example, to find all the policies configured at the site scope, use this Filter: site:*.
To find the site policies Seattle, Seville, and Saskatoon (all of which start with the letter "S") use this Filter: site:S*.
Note that this parameter can only filter on the Identity property.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the PIN policy data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account whose PIN policies are being returned.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Policy.UserPin.UserPinPolicy


## NOTES


## RELATED LINKS

[Grant-CsPinPolicy](Grant-CsPinPolicy.md)

[New-CsPinPolicy](New-CsPinPolicy.md)

[Remove-CsPinPolicy](Remove-CsPinPolicy.md)

[Set-CsPinPolicy](Set-CsPinPolicy.md)

