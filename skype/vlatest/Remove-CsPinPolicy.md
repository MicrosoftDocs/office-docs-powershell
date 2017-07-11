---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsPinPolicy

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes the specified personal identification number (PIN) policy.
PIN authentication and PIN policies enable users to access Microsoft Lync Server 2010 by providing a PIN instead of a user name and password.

Below Content Applies To: Lync Server 2013

Removes the specified personal identification number (PIN) policy.
PIN authentication and PIN policies enable users to access Lync Server by providing a PIN instead of a user name and password.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Removes the specified personal identification number (PIN) policy.
PIN authentication and PIN policies enable users to access Skype for Business Server 2015 by providing a PIN instead of a user name and password.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsPinPolicy [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [-Tenant <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Lync Server 2010 enables users to connect to the system or to join public switched telephone network (PSTN) conferences via telephone.
Typically, logging on to the system or joining a conference requires the user to enter a user name or password; unfortunately, entering a user name and password can be a problem if you are using a phone that does not have an alphanumeric keypad.
Because of that, Lync Server enables you to supply users with numeric-only PINs; when prompted, users can then log on to the system or join a conference by entering the PIN instead of a user name and password.

Lync Server uses PIN policies to manage PIN authentication properties; for example, you can specify the minimum length for a PIN as well as determine whether you will allow PINs that use "common patterns" such as consecutive digits (for example, a PIN like 123456).
In addition to the global PIN policy created for you when you install Lync Server 2010 you can create custom PIN policies applied to the site or the per-user scope.

The Remove-CsPinPolicy cmdlet enables you to remove PIN policies that have been configured at either the site scope or the per-user scope.
When you remove a site-scoped policy or a per-user policy, those policies will be deleted and no longer be available for use.
In addition, any users who were assigned those policies will automatically inherit the next policy in the policy hierarchy (global, site, service, per-user).
For example, if you remove a site policy then all the users who were previously affected by that policy will have their PIN settings managed by the global policy.

You can also run Remove-CsPinPolicy against the global policy.
In that case, however, the policy will not be removed: that's because you cannot delete the global policy.
Instead, all the properties of the global policy will be reset to their default values.
For example, suppose you have configured the global policy to use a minimum PIN length of 11 digits.
If you remove the global policy, the minimum PIN length will be reset to the default length of 5 digits.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsPinPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsPinPolicy"}

Below Content Applies To: Lync Server 2013

Lync Server enables users to connect to the system or to join public switched telephone network (PSTN) conferences via telephone.
Typically, logging on to the system or joining a conference requires the user to enter a user name or password; unfortunately, entering a user name and password can be a problem if you are using a phone that does not have an alphanumeric keypad.
Because of that, Lync Server enables you to supply users with numeric-only PINs; when prompted, users can then log on to the system or join a conference by entering the PIN instead of a user name and password.

Lync Server uses PIN policies to manage PIN authentication properties; for example, you can specify the minimum length for a PIN and also determine whether you will allow PINs that use "common patterns" such as consecutive digits (for example, a PIN like 123456).
In addition to the global PIN policy created for you when you install Lync Server you can create custom PIN policies applied to the site or the per-user scope.

The Remove-CsPinPolicy cmdlet enables you to remove PIN policies that have been configured at either the site scope or the per-user scope.
When you remove a site-scoped policy or a per-user policy, those policies will be deleted and no longer be available for use.
In addition, any users who were assigned those policies will automatically inherit the next policy in the policy hierarchy (global, site, service, per-user).
For example, if you remove a site policy then all the users who were previously affected by that policy will have their PIN settings managed by the global policy.

You can also run Remove-CsPinPolicy against the global policy.
In that case, however, the policy will not be removed: that's because you cannot delete the global policy.
Instead, all the properties of the global policy will be reset to their default values.
For example, suppose you have configured the global policy to use a minimum PIN length of 11 digits.
If you remove the global policy, the minimum PIN length will be reset to the default length of 5 digits.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsPinPolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsPinPolicy"}

Below Content Applies To: Skype for Business Server 2015

Skype for Business Server 2015 enables users to connect to the system or to join public switched telephone network (PSTN) conferences via telephone.
Typically, logging on to the system or joining a conference requires the user to enter a user name or password; unfortunately, entering a user name and password can be a problem if you are using a phone that does not have an alphanumeric keypad.
Because of that, Skype for Business Server 2015 enables you to supply users with numeric-only PINs; when prompted, users can then log on to the system or join a conference by entering the PIN instead of a user name and password.

Skype for Business Server 2015 uses PIN policies to manage PIN authentication properties; for example, you can specify the minimum length for a PIN and also determine whether you will allow PINs that use "common patterns" such as consecutive digits (for example, a PIN like 123456).
In addition to the global PIN policy created for you when you install Skype for Business Server 2015 you can create custom PIN policies applied to the site or the per-user scope.

The Remove-CsPinPolicy cmdlet enables you to remove PIN policies that have been configured at either the site scope or the per-user scope.
When you remove a site-scoped policy or a per-user policy, those policies will be deleted and no longer be available for use.
In addition, any users who were assigned those policies will automatically inherit the next policy in the policy hierarchy (global, site, service, per-user).
For example, if you remove a site policy then all the users who were previously affected by that policy will have their PIN settings managed by the global policy.

You can also run the Remove-CsPinPolicy cmdlet against the global policy.
In that case, however, the policy will not be removed: that's because you cannot delete the global policy.
Instead, all the properties of the global policy will be reset to their default values.
For example, suppose you have configured the global policy to use a minimum PIN length of 11 digits.
If you remove the global policy, the minimum PIN length will be reset to the default length of 5 digits.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Remove-CsPinPolicy -Identity RedmondUsersPinPolicy
```

The preceding command removes the per-user PIN policy with the Identity RedmondUsersPinPolicy.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 removes the per-user PIN policy with the Identity RedmondUsersPinPolicy.

Remove-CsPinPolicy -Identity RedmondUsersPinPolicy

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 removes the per-user PIN policy with the Identity RedmondUsersPinPolicy.

Remove-CsPinPolicy -Identity RedmondUsersPinPolicy

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsPinPolicy -Filter "site:*" | Remove-CsPinPolicy
```

The command shown in Example 2 removes all the PIN policies that have been configured at the site scope.
To do this, Get-CsPinPolicy is used, along with the Filter parameter, to return a collection of all the policies that have an Identity that begins with the characters "site:".
This collection is then piped to Remove-CsPinPolicy, which deletes each policy in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 removes all the PIN policies that have been configured at the site scope.
To do this, Get-CsPinPolicy is used, along with the Filter parameter, to return a collection of all the policies that have an Identity that begins with the characters "site:".
This collection is then piped to Remove-CsPinPolicy, which deletes each policy in the collection.

Get-CsPinPolicy -Filter "site:*" | Remove-CsPinPolicy

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 removes all the PIN policies that have been configured at the site scope.
To do this, the Get-CsPinPolicy cmdlet is used, along with the Filter parameter, to return a collection of all the policies that have an Identity that begins with the characters "site:".
This collection is then piped to the Remove-CsPinPolicy cmdlet, which deletes each policy in the collection.

Get-CsPinPolicy -Filter "site:*" | Remove-CsPinPolicy

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsPinPolicy | Where-Object {$_.AllowCommonPatterns -eq $True} | Remove-CsPinPolicy
```

In Example 3, Get-CsPinPolicy, Where-Object, and Remove-CsPinPolicy are used to delete all the PIN policies where the AllowCommonPatterns property is True.
To do this, Get-CsPinPolicy is first used to return a collection of all the PIN policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those policies where AllowCommonPatterns is equal to True.
Finally, that filtered collection is piped to Remove-CsPinPolicy, which deletes each policy in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, Get-CsPinPolicy, Where-Object, and Remove-CsPinPolicy are used to delete all the PIN policies where the AllowCommonPatterns property is True.
To do this, Get-CsPinPolicy is first used to return a collection of all the PIN policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those policies where AllowCommonPatterns is equal to True.
Finally, that filtered collection is piped to Remove-CsPinPolicy, which deletes each policy in the collection.

Get-CsPinPolicy | Where-Object {$_.AllowCommonPatterns -eq $True} | Remove-CsPinPolicy

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, the Get-CsPinPolicy cmdlet, the Where-Object cmdlet, and the Remove-CsPinPolicy cmdlet are used to delete all the PIN policies where the AllowCommonPatterns property is True.
To do this, the Get-CsPinPolicy cmdlet is first used to return a collection of all the PIN policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those policies where AllowCommonPatterns is equal to True.
Finally, that filtered collection is piped to the Remove-CsPinPolicy cmdlet, which deletes each policy in the collection.

Get-CsPinPolicy | Where-Object {$_.AllowCommonPatterns -eq $True} | Remove-CsPinPolicy

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsPinPolicy | Remove-CsPinPolicy
```

The command shown in Example 4 deletes all the PIN policies configured at the per-user and site scopes; this is done by using Get-CsPinPolicy to return a collection of all the PIN policies configured for use in the organization, and then piping that entire collection to Remove-CsPinPolicy.
Note that the global policy will also be included in this collection.
However, the global policy will not be deleted.
Instead, all the properties in the global policy will be reset to their default values.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 deletes all the PIN policies configured at the per-user and site scopes; this is done by using Get-CsPinPolicy to return a collection of all the PIN policies configured for use in the organization, and then piping that entire collection to Remove-CsPinPolicy.
Note that the global policy will also be included in this collection.
However, the global policy will not be deleted.
Instead, all the properties in the global policy will be reset to their default values.

Get-CsPinPolicy | Remove-CsPinPolicy

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 deletes all the PIN policies configured at the per-user and site scopes; this is done by using the Get-CsPinPolicy cmdlet to return a collection of all the PIN policies configured for use in the organization, and then piping that entire collection to the Remove-CsPinPolicy cmdlet.
Note that the global policy will also be included in this collection.
However, the global policy will not be deleted.
Instead, all the properties in the global policy will be reset to their default values.

Get-CsPinPolicy | Remove-CsPinPolicy

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Unique identifier assigned to the policy when it was created.
PIN policies can be assigned at the global, site, or per-user scope.
To refer to the global instance, use this syntax: -Identity global.
To refer to a policy at the site scope, use this syntax: -Identity site:Redmond.
To refer to a policy at the per-user scope, use syntax similar to this: -Identity RedmondPINPolicy.



Below Content Applies To: Skype for Business Server 2015

Unique identifier assigned to the policy when it was created.
PIN policies can be assigned at the global, site, or per-user scope.
To refer to the global instance, use this syntax:

-Identity global

To refer to a policy at the site scope, use this syntax:

-Identity site:Redmond

To refer to a policy at the per-user scope, use syntax similar to this:

-Identity RedmondPINPolicy



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the PIN policy is being removed.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
Remove-CsPinPolicy accepts pipelined input of the PIN policy object.

###  
Microsoft.Rtc.Management.WritableConfig.Policy.UserPin.UserPolicy object.
The Remove-CsPinPolicy cmdlet accepts pipelined input of the PIN policy object.

## OUTPUTS

###  
Remove-CsPinPolicy does not return a value or object.
Instead, the cmdlet removes one or more instances of the Microsoft.Rtc.Management.WritableConfig.Policy.UserPin.UserPolicy object.

###  
The Remove-CsPinPolicy cmdlet does not return a value or object.
Instead, the cmdlet removes one or more instances of the Microsoft.Rtc.Management.WritableConfig.Policy.UserPin.UserPolicy object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/60bebb77-4181-4c5c-9c0e-dd1ece71f1d2(OCS.14).aspx)

[Get-CsPinPolicy]()

[Grant-CsPinPolicy]()

[New-CsPinPolicy]()

[Set-CsPinPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/60bebb77-4181-4c5c-9c0e-dd1ece71f1d2(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/60bebb77-4181-4c5c-9c0e-dd1ece71f1d2(OCS.16).aspx)

