---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsPinPolicy
schema: 2.0.0
---

# Remove-CsPinPolicy

## SYNOPSIS
Removes the specified personal identification number (PIN) policy.
PIN authentication and PIN policies enable users to access Skype for Business Server by providing a PIN instead of a user name and password.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsPinPolicy [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [-Tenant <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server enables users to connect to the system or to join public switched telephone network (PSTN) conferences via telephone.
Typically, logging on to the system or joining a conference requires the user to enter a user name or password; unfortunately, entering a user name and password can be a problem if you are using a phone that does not have an alphanumeric keypad.
Because of that, Skype for Business Server enables you to supply users with numeric-only PINs; when prompted, users can then log on to the system or join a conference by entering the PIN instead of a user name and password.

Skype for Business Server uses PIN policies to manage PIN authentication properties; for example, you can specify the minimum length for a PIN and also determine whether you will allow PINs that use "common patterns" such as consecutive digits (for example, a PIN like 123456).
In addition to the global PIN policy created for you when you install Skype for Business Server you can create custom PIN policies applied to the site or the per-user scope.

The `Remove-CsPinPolicy` cmdlet enables you to remove PIN policies that have been configured at either the site scope or the per-user scope.
When you remove a site-scoped policy or a per-user policy, those policies will be deleted and no longer be available for use.
In addition, any users who were assigned those policies will automatically inherit the next policy in the policy hierarchy (global, site, service, per-user).
For example, if you remove a site policy then all the users who were previously affected by that policy will have their PIN settings managed by the global policy.

You can also run the `Remove-CsPinPolicy` cmdlet against the global policy.
In that case, however, the policy will not be removed: that's because you cannot delete the global policy.
Instead, all the properties of the global policy will be reset to their default values.
For example, suppose you have configured the global policy to use a minimum PIN length of 11 digits.
If you remove the global policy, the minimum PIN length will be reset to the default length of 5 digits.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Remove-CsPinPolicy -Identity RedmondUsersPinPolicy
```

Example 1 removes the per-user PIN policy with the Identity RedmondUsersPinPolicy.


### -------------------------- Example 2 ------------------------
```
Get-CsPinPolicy -Filter "site:*" | Remove-CsPinPolicy
```

The command shown in Example 2 removes all the PIN policies that have been configured at the site scope.
To do this, the `Get-CsPinPolicy` cmdlet is used, along with the Filter parameter, to return a collection of all the policies that have an Identity that begins with the characters "site:".
This collection is then piped to the `Remove-CsPinPolicy` cmdlet, which deletes each policy in the collection.


### -------------------------- Example 3 ------------------------
```
Get-CsPinPolicy | Where-Object {$_.AllowCommonPatterns -eq $True} | Remove-CsPinPolicy
```

In Example 3, the `Get-CsPinPolicy` cmdlet, the `Where-Object` cmdlet and the `Remove-CsPinPolicy` cmdlet are used to delete all the PIN policies where the AllowCommonPatterns property is True.
To do this, the `Get-CsPinPolicy` cmdlet is first used to return a collection of all the PIN policies configured for use in the organization.
This collection is then piped to the `Where-Object` cmdlet, which selects only those policies where AllowCommonPatterns is equal to True.
Finally, that filtered collection is piped to the `Remove-CsPinPolicy` cmdlet, which deletes each policy in the collection.


### -------------------------- Example 4 ------------------------
```
Get-CsPinPolicy | Remove-CsPinPolicy
```

The command shown in Example 4 deletes all the PIN policies configured at the per-user and site scopes; this is done by using the `Get-CsPinPolicy` cmdlet to return a collection of all the PIN policies configured for use in the organization and then piping that entire collection to the `Remove-CsPinPolicy` cmdlet.
Note that the global policy will also be included in this collection.
However, the global policy will not be deleted.
Instead, all the properties in the global policy will be reset to their default values.


## PARAMETERS

### -Identity
Unique identifier assigned to the policy when it was created.
PIN policies can be assigned at the global, site, or per-user scope.
To refer to the global instance, use this syntax:

`-Identity global`

To refer to a policy at the site scope, use this syntax:

`-Identity site:Redmond`

To refer to a policy at the per-user scope, use syntax similar to this:

`-Identity RedmondPINPolicy`


```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the PIN policy is being removed.
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

###  
Microsoft.Rtc.Management.WritableConfig.Policy.UserPin.UserPolicy object.
The `Remove-CsPinPolicy` cmdlet accepts pipelined input of the PIN policy object.

## OUTPUTS

###  
The `Remove-CsPinPolicy` cmdlet does not return a value or object.
Instead, the cmdlet removes one or more instances of the Microsoft.Rtc.Management.WritableConfig.Policy.UserPin.UserPolicy object.

## NOTES

## RELATED LINKS

[Get-CsPinPolicy](Get-CsPinPolicy.md)

[Grant-CsPinPolicy](Grant-CsPinPolicy.md)

[New-CsPinPolicy](New-CsPinPolicy.md)

[Set-CsPinPolicy](Set-CsPinPolicy.md)

