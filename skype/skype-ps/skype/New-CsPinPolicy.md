---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsPinPolicy
schema: 2.0.0
---

# New-CsPinPolicy

## SYNOPSIS

Creates a new client personal identification number (PIN) policy.
PIN authentication enables users to access Skype for Business Server by providing a PIN instead of a user name and password.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsPinPolicy [-Identity] <XdsIdentity> [-Description <String>] [-MaximumLogonAttempts <UInt32>]
 [-MinPasswordLength <UInt32>] [-PINHistoryCount <UInt64>] [-PINLifetime <UInt64>] [-Force] [-InMemory]
 [-WhatIf] [-Confirm] [-AllowCommonPatterns <Boolean>] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION

Skype for Business Server enables users to connect to the system or to join public switched telephone network (PSTN) conferences via telephone.
Users typically log on to the system or join a conference by entering a user name or password; however, entering a user name and password can be a problem if you are using a phone that does not have an alphanumeric keypad.
Because of that, Skype for Business Server enables you to supply users with numeric-only PINs; when prompted, users can then log on or join a conference by entering the PIN instead of a user name and password.

Skype for Business Server uses PIN policies to manage PIN authentication properties; for example, you can specify the minimum length for a PIN as well as determine whether you will allow PINs that use "common patterns" such as consecutive digits (for example, a PIN like 123456).
You can use the New-CsPinPolicy cmdlet to create new PIN authentication policies; these new policies can be configured at either the site or the per-user scope.
(There is also a global PIN policy.
However, you cannot create a second global PIN policy; all you can do is modify the existing global policy.)



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

New-CsPinPolicy -Identity "site:Redmond" -MinPasswordLength 10
```

In Example 1, the New-CsPinPolicy cmdlet is used to create a new PIN policy with the Identity site:Redmond.
This command includes just one optional parameter, MinPasswordLength, which is used to set the MinPasswordLength property to 10.
All the remaining policy properties will be configured using the default values.


### -------------------------- EXAMPLE 2 -------------------------- 
```

New-CsPinPolicy -Identity "site:Redmond" -MinPasswordLength 10 -PINHistoryCount 10 -PINLifetime 30
```

The command shown in Example 2 creates a new policy with the Identity site:Redmond.
This command uses the parameters MinPasswordLength, PINHistoryCount, and PINLifetime to explicitly configure three different property values for the new policy.


### -------------------------- EXAMPLE 3 -------------------------- 
```

$x = New-CsPinPolicy -Identity "site:Redmond" -InMemory

$x.MinPasswordLength = 10

$x.PINHistoryCount = 10

$x.PINLifetime = 30

Set-CsPinPolicy -Instance $x
```

The commands shown in Example 3 demonstrate how you can create a new PIN policy in memory only, modify the property values for that policy, and then use the Set-CsPinPolicy cmdlet to turn that in-memory-only policy into an actual PIN policy.
In the first line above, the New-CsPinPolicy cmdlet and the InMemory parameter are used to create an in-memory policy with the Identity site:Redmond; this policy is stored in the variable $x.
If the policy was not assigned to a variable it would be created in memory only and then immediately disappear as soon as the command completed.

After the virtual policy has been assigned to the variable $x, the next three commands are used to modify property values for that policy; for example, line 2 sets the value of the MinPasswordLength property to 10.
After all the properties have been configured, the Set-CsPinPolicy cmdlet is used to create an actual policy with the Identity site:Redmond; this is done by using the Instance parameter and passing the variable $x as the parameter value.
After the Set-CsPinPolicy cmdlet has been called, you will be able to view the policy and its property values by using the Get-CsPinPolicy cmdlet.


### -------------------------- EXAMPLE 4 -------------------------- 
```

$x = Get-CsPinPolicy -Identity "site:Redmond"

New-CsPinPolicy -Identity "site:Paris" -MinPasswordLength $x.MinPasswordLength
```

The commands used in Example 4 create a new PIN policy (site:Paris) that uses one of the property values found in the existing policy site:Redmond.
To achieve this, the first command uses the Get-CsPinPolicy cmdlet to retrieve the PIN policy site:Redmond; the information retrieved for this policy is then stored in the variable $x.

In the second command, the New-CsPinPolicy cmdlet is used to create the policy site:Paris.
In addition, the MinPasswordLength parameter is used to specify the value of the MinPasswordLength property.
However, instead of using a hard-coded numeric value, the command uses $x.MinPasswordLength as the parameter value; this tells the New-CsPinPolicy cmdlet to set the minimum password length to the value of the MinPasswordLength property found in the policy site:Redmond.
The net result is that the value of the MinPasswordLength property will be copied from the existing policy site:Redmond to the new policy site:Paris.


## PARAMETERS

### -Identity

Indicates the unique Identity to be assigned to the policy.
PIN policies can be created at the site or per-user scope.
To create a policy at the site scope, use syntax similar to this:

`-Identity site:Redmond`

To create a policy at the per-user scope, use syntax similar to this:

`-Identity RedmondPinPolicy`



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide explanatory text to accompany a PIN policy.
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

The maximum number of allowed logon attempts also varies with PIN size; this is why the MaximumLogonAttempts property does not show a default value when you run Get-CsPinPolicy.
By default, a PIN length of 4 allows users 10 local logon attempts and 100 global logon attempts.
A PIN length of 5 allows 25 local and 1000 global logon attempts, and PIN lengths greater than 6 allow 25 local tries and 5000 global tries.
If you specify a value for the MaximumLogonAttempts property that value will be used for the maximum allowed number of local logon tries; however, global logon values do not change regardless of the value assigned to MaximumLogonAttempts.

Each time a user successfully logs on using PIN authentication the local failed logon attempts is reset to 0.
The global logon attempts are only reset when an administrator unlocks a user's PIN.

MaximumLogonAttempts can be set to any whole number between 1 and 999, inclusive.
However, it is recommended that you do not modify this property.
When set to a null value (the default value) Skype for Business Server will automatically calculate lockout policies.
This typically provides the most security.



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
The minimum allowed length (that is, the minimum number of digits) in a PIN.
For example, if MinPasswordLength is set to 8 then a PIN of 1259 will be rejected because that PIN only has 4 digits.
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
For example, if the PINHistoryCount is set to 3, then the first three times a user resets his or her PIN they must use a new PIN; on the fourth reset, they can reuse their first PIN.
(And, on the fifth reset, they can reuse their second PIN, and so on.) The PIN history count can be any whole number between 0 and 20, inclusive; 0 means that users can use the same PIN number over and over again.
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
Indicates the length of time (in days) that a PIN remains valid; after the PIN lifetime expires users must select a new PIN number before they will be allowed to use PIN authentication to gain access to the system.
PINLifetime can be set to any whole number between 0 and 999, inclusive; 0 indicates that PIN numbers never expire.
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

### -InMemory

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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

### -AllowCommonPatterns

Indicates whether or not "common patterns" are allowed in PINs.
Common patterns include repeating digits (222222); four or more consecutive digits (123456); and PINs that match a user's phone number or extension number.
If set to True common patterns (such as the PIN 456789, which includes consecutive digits) are allowed; if set to False common patterns are not allowed.
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

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the new PIN policy is being created.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsPinPolicy cmdlet does not accept pipelined input.

## OUTPUTS

###  
Creates a new instance of the Microsoft.Rtc.Management.WritableConfig.Policy.UserPin.UserPolicy object.

## NOTES

## RELATED LINKS

[Get-CsPinPolicy](Get-CsPinPolicy.md)

[Grant-CsPinPolicy](Grant-CsPinPolicy.md)

[Remove-CsPinPolicy](Remove-CsPinPolicy.md)

[Set-CsPinPolicy](Set-CsPinPolicy.md)

