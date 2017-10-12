---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsCpsConfiguration

## SYNOPSIS

Creates a new collection of Call Park service settings.
Call parking is a service that allows a user to "park" an incoming phone call.
Parking a call transfers it to a number in a specified range, or orbit, and immediately places the call on hold.
Anyone (not just the person who originally answered the call) can resume the conversation from any telephone by entering the correct number.
This cmdlet was introduced in Lync Server.



## SYNTAX

```
New-CsCpsConfiguration [-Identity] <XdsIdentity> [-CallPickupTimeoutThreshold <TimeSpan>]
 [-EnableMusicOnHold <Boolean>] [-MaxCallPickupAttempts <Int32>] [-OnTimeoutURI <String>] [-Force] [-InMemory]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet is used to create a new Call Park service configuration.
When Call Park service is installed, global settings are configured by default and can be updated but cannot be removed.
("Removing" the global settings simply resets them to the default values.) Therefore this cmdlet is used to create only site-specific settings.

A Call Park service configuration specifies what happens to a call once it's parked.
For example, if a parked call isn't answered after a period of time it can be automatically forwarded to someone else, such as an administrator, or to a Response Group.
Calls can be configured to ring after a certain period of time to ensure the call isn't forgotten.
In addition, Call Park service can be configured to play music on hold to the caller while the call is parked.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```
New-CsCpsConfiguration -Identity site:Redmond -EnableMusicOnHold $False
```

The command shown in Example 1 uses the New-CsCpsConfiguration cmdlet to create a Call Park service configuration for site Redmond.
This configuration will be created with default values with the exception of EnableMusicOnHold.
This command sets this property to False, meaning the caller whose call has been parked will not hear anything while on hold.
(EnableMusicOnHold is set to True by default, assuming Call Park service has been deployed.)

### -------------------------- EXAMPLE 2 -------------------------- 
```

New-CsCpsConfiguration -Identity site:Redmond -OnTimeoutURI sip:kenmyer@litwareinc.com
```

The command shown in Example 2 uses the New-CsCpsConfiguration cmdlet to create a Call Park service configuration for site Redmond1.
By default no OnTimeoutURI is supplied, so this example adds a value for that parameter.
In this case the OnTimeoutURI is set to sip:kenmyer@litwareinc.com.
The value passed to this parameter must begin with the string "sip:" and should point to a user or Response Group that will receive parked calls that aren't picked up after a specified number of ringback attempts.


### -------------------------- EXAMPLE 3 -------------------------- 
```

New-CsCpsConfiguration -Identity site:Redmond -MaxCallPickupAttempts 2
```

This command uses the New-CsCpsConfiguration cmdlet to create a Call Park service configuration for site Redmond1.
For this site, the MaxCallPickupAttempts has been set to 2.
That means the call rings back up to two times.


## PARAMETERS

### -Identity
The site to which the settings are applied.
This must be entered in the format site:\<sitename\>, such as site:Redmond.
A configuration will always exist at the global scope and can't be removed, so a global configuration can't be re-created with this cmdlet.

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

### -CallPickupTimeoutThreshold
The amount of time that will elapse after a call has been parked before it will ring back to the phone on which the call was answered.

This must be entered in the format hh:mm:ss (hh = hours, mm = minutes, ss = seconds)

Default: 00:01:30 (90 seconds); Minimum Value: 10 seconds (00:00:10); Maximum Value: 10 minutes (00:10:00)

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

Determines whether music plays for the caller while a call is parked.

Skype for Business Server ships with a default Music on Hold file.
You can change this file (thereby changing the music the caller hears while parked) with the Set-CsCallParkServiceMusicOnHoldFile cmdlet.

Default: True



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

Default: 1; Minimum Value: 1; Maximum Value: 10

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
This cmdlet creates an object of type Microsoft.Rtc.Management.WritableConfig.Settings.CallParkServiceSettings.CallParkServiceSettings.

## NOTES

## RELATED LINKS

[Remove-CsCpsConfiguration]()

[Set-CsCpsConfiguration]()

[Get-CsCpsConfiguration]()

[Set-CsCallParkServiceMusicOnHoldFile]()

