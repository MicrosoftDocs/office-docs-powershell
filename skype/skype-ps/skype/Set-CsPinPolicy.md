---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsPinPolicy
schema: 2.0.0
---

# Set-CsPinPolicy

## SYNOPSIS
Modifies one or more existing client personal identification number (PIN) policies.
PIN authentication enables users to access Skype for Business Server by providing a PIN instead of a user name and password.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsPinPolicy [[-Identity] <XdsIdentity>] [-AllowCommonPatterns <Boolean>] [-Description <String>]
 [-MaximumLogonAttempts <UInt32>] [-MinPasswordLength <UInt32>] [-PINHistoryCount <UInt64>]
 [-PINLifetime <UInt64>] [-Force] [-WhatIf] [-Confirm] [-Tenant <Guid>] [<CommonParameters>]
```

### Instance
```
Set-CsPinPolicy [-Instance <PSObject>] [-AllowCommonPatterns <Boolean>] [-Description <String>]
 [-MaximumLogonAttempts <UInt32>] [-MinPasswordLength <UInt32>] [-PINHistoryCount <UInt64>]
 [-PINLifetime <UInt64>] [-Force] [-WhatIf] [-Confirm] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server enables users to connect to the system, or to join public switched telephone network (PSTN) conferences via telephone.
Typically, logging on to the system or joining a conference requires the user to enter a user name or password; unfortunately, entering a user name and password can be a problem if you are using a phone that does not have an alphanumeric keypad.
Because of that, Skype for Business Server enables you to supply users with numeric-only PINs; when prompted, users can then log on to the system or join a conference by entering the PIN instead of a user name and password.

Skype for Business Server uses client PIN policies to manage PIN authentication properties; for example, you can specify the minimum length for a PIN as well as determine whether to allow PINs that use "common patterns" such as consecutive digits (for example, a PIN like 123456).
PIN policies can be configured at the global, site, and per-user scopes; you can use the `Set-CsPinPolicy` cmdlet to modify the property values for any of these policies.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsPinPolicy -Identity site:Redmond -MinPasswordLength 10
```

Example 1 modifies the PIN policy assigned to the Redmond site.
In this case, the command changes the value of the MinPasswordLength property to 10; that means that new PINs will have to contain at least 10 digits.


### -------------------------- Example 2 ------------------------
```
Set-CsPinPolicy -Identity RedmondUsersPinPolicy -MinPasswordLength 10 -AllowCommonPatterns $True
```

Example 2 modifies two properties of the per-user PIN policy with the Identity RedmondUsersPinPolicy: it changes the value of the MinPasswordLength and the AllowCommonPatterns properties.


### -------------------------- Example 3 ------------------------
```
Get-CsPinPolicy | Set-CsPinPolicy -MinPasswordLength 10
```

The command shown in Example 3 changes the value of the MinPasswordLength for all the PIN policies configured for use in the organization.
To do this, the command first calls the `Get-CsPinPolicy` cmdlet without any parameters in order to retrieve a collection of all the existing PIN policies.
That collection is then piped to the `Set-CsPinPolicy` cmdlet, which modifies the value of the MinPasswordLength property for each policy in the collection.


### -------------------------- Example 4 ------------------------
```
Get-CsPinPolicy | Where-Object {$_.MinPasswordLength -gt 10} | Set-CsPinPolicy -MaximumLogonAttempts 25
```

Example 4 uses three different cmdlets in order to change the value of the MaximumLogonAttempts property, but only for PIN policies where the MinPasswordLength property is greater than 10.
To do this, `Get-CsPinPolicy` is first used to retrieve a collection of all the PIN policies configured for use in the organization.
That collection is then piped to the `Where-Object` cmdlet, which selects only those policies where the MinPasswordLength property is greater than.
The filtered set of policies is then passed to `Set-CsPinPolicy`, which takes each policy in the collection and changes the value of the MaximumLogonAttempts property to 25.

## PARAMETERS

### -Identity
Unique identifier assigned to the policy when it was created.
PIN policies can be assigned at the global, site, or per-user scope.
To refer to the global instance, use this syntax:

`-Identity global`

To refer to a policy at the site scope, use syntax similar to this:

`-Identity site:Redmond`

To refer to a per-user policy, use syntax similar to this:

`-Identity RedmondPinPolicy`

If you do not specify an Identity, then the `Set-CsPinPolicy` cmdlet will modify the global policy.


```yaml
Type: XdsIdentity
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

### -AllowCommonPatterns
Indicates whether or not "common patterns" are allowed in PINs.
Common patterns include repeating digits (225577); 4 or more consecutive digits (991234); and PINs that match a user's phone number or extension number.
If set to True common patterns (such as the PIN 123456, which includes consecutive digits) are allowed; if set to False common patterns are not allowed.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide additional text to accompany a PIN policy.
For example, the Description might include information about the users the policy should be assigned to.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaximumLogonAttempts
Indicates the number of sequential logon failures that are allowed before a user's PIN is automatically locked.
Logon failures are counted in two different ways: local logon failures and global logon failures.
When a user first tries to logon, a new 30 minute observation window starts; each failed logon during that 30 minute window is recorded as both a local logon failure and a global logon failure.
If the user reaches the MaximumLogonAttempts during that 30 minute observation window then he or she will temporarily be locked out of the system for one hour; during this time they will not be able to logon using PIN authentication even if they supply the correct PIN.

After the lockout period has expired, the user's local logon attempts will be reset to 0.
However, the user's global logon attempts will not be reset.
If the user continually fails to logon, he or she will eventually reach the maximum number of allowed global logon attempts.
Any user who reaches that point will have their PIN locked by the system, and will not be able to use PIN authentication until an administrator has unlocked the PIN.

The maximum number of allowed logon attempts also varies with PIN size; this is why the MaximumLogonAttempts property does not show a default value when you run the `Get-CsPinPolicy` cmdlet.
By default, a PIN length of 4 allows users 10 local logon attempts and 100 global logon attempts.
A PIN length of 5 allows 25 local and 1000 global logon attempts, and PIN lengths greater than 6 allow 25 local tries and 5000 global tries.
If you specify a value for the MaximumLogonAttempts property that value will be used for the maximum allowed number of local logon tries; however, global logon values do not change regardless of the value assigned to MaximumLogonAttempts.

Each time a user successfully logs on using PIN authentication the local failed logon attempts is reset to 0.
The global logon attempts are only reset when an administrator unlocks a user's PIN.

MaximumLogonAttempts can be set to any whole number between 1 and 999, inclusive.
However, we recommend that you do not modify this property.
When set to a null value (the default value) Skype for Business Server will automatically calculate lockout policies.
This typically provides the highest level of security.


```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinPasswordLength
The minimum allowed length (that is, the minimum number of digits) in a PIN number.
For example, if MinPasswordLength is set to 8, then a PIN of 1259 will be rejected because that PIN only has 4 digits.
PIN lengths must have at least 4 digits but no more than 24 digits; the default value is 5.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PINHistoryCount
Indicates how often users are allowed to reuse the same PIN.
For example, if the PINHistoryCount is set to 3, then the first three times users reset their PINs they must use a new PIN; on the fourth reset, they can reuse their first PIN.
(And, on the fifth reset, they can use their second PIN, and so on.) The PIN history count can be any whole number between 0 and 20, inclusive; 0 means that users can use the same PIN over and over again.
By default, PINHistoryCount is set to 0.

If the PINLifetime is set to any value greater than 0 then the PINHistoryCount must also be greater than 0.
For example, you cannot set PINLifetime to 30 and leave PINHistoryCount at 0.

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PINLifetime
Indicates the length of time (in days) that a PIN remains valid; after the PIN lifetime expires, users must select a new PIN before they will be allowed to use PIN authentication to gain access to the system.
PINLifetime can be set to any whole number between 0 and 999, inclusive; 0 indicates that PINs never expire.
By default, the PIN lifetime is set to 0 days.

If you set the PINLifetime to a value greater than 0 then you must also set the PINHistoryCount to a value greater than 0.

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the PIN policy is being modified.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

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
The `Set-CsPinPolicy` cmdlet accepts pipelined input of the PIN policy object.

## OUTPUTS

###  
The `Set-CsPinPolicy` cmdlet does not return a value or object.
Instead, the cmdlet configures one or more instances of the Microsoft.Rtc.Management.WritableConfig.Policy.UserPin.UserPolicy object.

## NOTES

## RELATED LINKS

[Get-CsPinPolicy](Get-CsPinPolicy.md)

[Grant-CsPinPolicy](Grant-CsPinPolicy.md)

[New-CsPinPolicy](New-CsPinPolicy.md)

[Remove-CsPinPolicy](Remove-CsPinPolicy.md)
