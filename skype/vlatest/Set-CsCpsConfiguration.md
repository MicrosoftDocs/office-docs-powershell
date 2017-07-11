---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsCpsConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies an existing collection of Call Park service settings.
Call parking is a service that allows a user to "park" an incoming phone call.
Parking a call transfers it to a number in a specified range, or orbit, and then immediately places the call on hold.
Anyone (not just the person who originally answered the call) can resume the conversation from any telephone simply by entering the correct number.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Modifies an existing collection of Call Park service settings.
Call parking is a service that allows a user to "park" an incoming phone call.
Parking a call transfers it to a number in a specified range, or orbit, and then immediately places the call on hold.
Anyone (not just the person who originally answered the call) can resume the conversation from any telephone simply by entering the correct number.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsCpsConfiguration [[-Identity] <XdsIdentity>] [-CallPickupTimeoutThreshold <TimeSpan>]
 [-EnableMusicOnHold <Boolean>] [-MaxCallPickupAttempts <Int32>] [-OnTimeoutURI <String>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsCpsConfiguration [-Instance <PSObject>] [-CallPickupTimeoutThreshold <TimeSpan>]
 [-EnableMusicOnHold <Boolean>] [-MaxCallPickupAttempts <Int32>] [-OnTimeoutURI <String>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

This cmdlet is used to modify an existing Call Park service configuration.
A Call Park service configuration specifies what happens to a call once it's parked.
For example, if a parked call isn't answered after a period of time, it can be automatically forwarded to someone else, such as an administrator, or to a Response Group.
Calls can be configured to ring after a certain period of time to ensure the call isn't forgotten.
In addition, Call Park service can be configured to play music on hold to the caller while the call is parked.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsCpsConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsCpsConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

This cmdlet is used to modify an existing Call Park service configuration.
A Call Park service configuration specifies what happens to a call once it's parked.
For example, if a parked call isn't answered after a period of time, it can be automatically forwarded to someone else, such as an administrator, or to a Response Group.
Calls can be configured to ring after a certain period of time to ensure the call isn't forgotten.
In addition, Call Park service can be configured to play music on hold to the caller while the call is parked.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsCpsConfiguration -Identity site:Redmond1 -MaxCallPickupAttempts 2
```

The command shown in Example 1 modifies the Call Park service configuration with the Identity site:Redmond1 by setting the maximum number of times a parked call will ring back to the answering phone to 2.
This is done by including the MaxCallPickupAttempts parameter and setting the parameter value to 2.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 modifies the Call Park service configuration with the Identity site:Redmond1 by setting the maximum number of times a parked call will ring back to the answering phone to 2.
This is done by including the MaxCallPickupAttempts parameter and setting the parameter value to 2.

Set-CsCpsConfiguration -Identity site:Redmond1 -MaxCallPickupAttempts 2

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 modifies the Call Park service configuration with the Identity site:Redmond1 by setting the maximum number of times a parked call will ring back to the answering phone to 2.
This is done by including the MaxCallPickupAttempts parameter and setting the parameter value to 2.

Set-CsCpsConfiguration -Identity site:Redmond1 -MaxCallPickupAttempts 2

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsCpsConfiguration | Set-CsCpsConfiguration -MaxCallPickupAttempts 2
```

Example 2 is a variation of the command shown in Example 1; in this case, however, we set all (not just one) Call Park service configurations to have a MaxCallPickupAttempts property value of 2.
To do this, Get-CsCpsConfiguration is used to retrieve a collection of all the Call Park service settings in use in the organization.
This collection is then piped to the Set-CsCpsConfiguration cmdlet, which takes each individual item in the collection and sets the value of the MaxCallPickupAttempts property to 2.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 is a variation of the command shown in Example 1; in this case, however, we set all (not just one) Call Park service configurations to have a MaxCallPickupAttempts property value of 2.
To do this, Get-CsCpsConfiguration is used to retrieve a collection of all the Call Park service settings in use in the organization.
This collection is then piped to the Set-CsCpsConfiguration cmdlet, which takes each individual item in the collection and sets the value of the MaxCallPickupAttempts property to 2.

Get-CsCpsConfiguration | Set-CsCpsConfiguration -MaxCallPickupAttempts 2

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 is a variation of the command shown in Example 1; in this case, however, we set all (not just one) Call Park service configurations to have a MaxCallPickupAttempts property value of 2.
To do this, the Get-CsCpsConfiguration cmdlet is used to retrieve a collection of all the Call Park service settings in use in the organization.
This collection is then piped to the Set-CsCpsConfiguration cmdlet, which takes each individual item in the collection and sets the value of the MaxCallPickupAttempts property to 2.

Get-CsCpsConfiguration | Set-CsCpsConfiguration -MaxCallPickupAttempts 2

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Set-CsCpsConfiguration -Identity site:Redmond1 -CallPickupTimeoutThreshold 00:00:45
```

This example modifies the call park configuration for site Remond1 by setting the amount of time that will elapse before a parked call will ring back (contained in the CallPickupTimeoutThreshold property) to 45 seconds.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This example modifies the call park configuration for site Redmond1 by setting the amount of time that will elapse before a parked call will ring back (contained in the CallPickupTimeoutThreshold property) to 45 seconds.

Set-CsCpsConfiguration -Identity site:Redmond1 -CallPickupTimeoutThreshold 00:00:45

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This example modifies the call park configuration for site Redmond1 by setting the amount of time that will elapse before a parked call will ring back (contained in the CallPickupTimeoutThreshold property) to 45 seconds.

Set-CsCpsConfiguration -Identity site:Redmond1 -CallPickupTimeoutThreshold 00:00:45

## PARAMETERS

### -Identity
A unique identifier of the configuration you want to modify.
The Identity specifies the scope at which the configuration is applied, either Global or a specific site (in the format site:\<sitename\>, such as site:Redmond).

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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

An object reference to a Call Park service configuration object, of type Microsoft.Rtc.Management.WritableConfig.Settings.CallParkServiceSettings.CallParkServiceSettings.
This object can be retrieved by calling the Get-CsCpsConfiguration cmdlet.
The object can then be changed and the changes saved by passing the object back to Set-CsCpsConfiguration in this parameter.



**Below Content Applies To:** Skype for Business Server 2015

An object reference to a Call Park service configuration object, of type Microsoft.Rtc.Management.WritableConfig.Settings.CallParkServiceSettings.CallParkServiceSettings.
This object can be retrieved by calling the Get-CsCpsConfiguration cmdlet.
The object can then be changed and the changes saved by passing the object back to the Set-CsCpsConfiguration cmdlet in this parameter.



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

### -CallPickupTimeoutThreshold
The amount of time that will elapse after a call has been parked before it will ring back to the phone on which the call was answered.

This must be entered in the format hh:mm:ss (hh = hours, mm = minutes, ss = seconds)

Minimum Value: 10 seconds (00:00:10); Maximum Value: 10 minutes (00:10:00)

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableMusicOnHold
**Below Content Applies To:** Lync Server 2010

Determines whether music plays for the caller while a call is parked.

Microsoft Lync Server 2010 ships with a default Music on Hold file.
You can change this file (thereby changing the music the caller hears while parked) with the Set-CsCallParkServiceMusicOnHoldFile cmdlet.



**Below Content Applies To:** Lync Server 2013

Determines whether music plays for the caller while a call is parked.

Lync Server ships with a default Music on Hold file.
You can change this file (thereby changing the music the caller hears while parked) with the Set-CsCallParkServiceMusicOnHoldFile cmdlet.



**Below Content Applies To:** Skype for Business Server 2015

Determines whether music plays for the caller while a call is parked.

Skype for Business Server 2015 ships with a default Music on Hold file.
You can change this file (thereby changing the music the caller hears while parked) with the Set-CsCallParkServiceMusicOnHoldFile cmdlet.



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

### -MaxCallPickupAttempts
The number of times a parked call will ring back to the answering phone before giving up and forwarding the call to the fallback Uniform Resource Identifier (URI).
The fallback URI is set with the OnTimeoutURI parameter.

Minimum Value: 1; Maximum Value: 10

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnTimeoutURI
The SIP address of the user or Response Group to which unanswered parked calls will be routed.
The parked call will be routed after the number of ringbacks defined with the MaxCallPickupAttempts parameter.
If that parameter is set to Null, the OnTimeoutURI will be ignored and the parked call will be disconnected after unsuccessful ringback attempts.

Values must be SIP URIs, beginning with the string sip:.
For example, sip:rgs1@litwareinc.com.

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

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.CallParkServiceSettings.CallParkServiceSettings object.
Accepts pipelined input of Call Park service configuration objects.

## OUTPUTS

###  
Modifies an object of type Microsoft.Rtc.Management.WritableConfig.Settings.CallParkServiceSettings.CallParkServiceSettings.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/9c2c0ad1-12f8-47b6-a7ec-60d91c9685bf(OCS.14).aspx)

[New-CsCpsConfiguration]()

[Remove-CsCpsConfiguration]()

[Get-CsCpsConfiguration]()

[Set-CsCallParkServiceMusicOnHoldFile]()

[Online Version](http://technet.microsoft.com/EN-US/library/9c2c0ad1-12f8-47b6-a7ec-60d91c9685bf(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/9c2c0ad1-12f8-47b6-a7ec-60d91c9685bf(OCS.16).aspx)

