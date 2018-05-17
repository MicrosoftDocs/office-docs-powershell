---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsUCPhoneConfiguration
schema: 2.0.0
---

# New-CsUCPhoneConfiguration

## SYNOPSIS
Creates a new collection of settings used to manage UC phone configuration settings.
These settings enable you to configure such things as the required security mode and to specify whether or not the phone should automatically be locked after a specified period of inactivity.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
New-CsUCPhoneConfiguration [-Identity] <XdsIdentity> [-CalendarPollInterval <TimeSpan>]
 [-EnforcePhoneLock <Boolean>] [-LoggingLevel <LoggingLevel>] [-MinPhonePinLength <Byte>]
 [-PhoneLockTimeout <TimeSpan>] [-SIPSecurityMode <SIPSecurityMode>] [-Voice8021p <Byte>]
 [-VoiceDiffServTag <Byte>] [-Force] [-InMemory] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
UC phones represent the merging of the telephone and Skype for Business Server.
UC phones use special hardware (that is, a Skype for Business-compatible telephone) that can function as a Voice over Internet Protocol (VoIP) telephone.
In addition, this hardware can also act as a Skype for Business-like endpoint: you can set your current status; check the status of your Skype for Business contacts; search for new contacts and carry out many of the other activities you are used to doing with Skype for Business.

Skype for Business Server ships with a number of cmdlets that enable you to manage your UC phones; for example, you can control such things as the minimum length of the personal identification number (PIN) used to log on to the phone and whether or not the phone will automatically lock itself after a specified period of inactivity.

Unified communications (UC) phone configuration settings can be applied at either the global scope or at the site scope.
(Settings applied at the site scope take precedence over settings applied at the global scope.) When you first install Skype for Business Server, a single set of UC phone configuration settings is created and applied at the global scope.
However, at any time after that you can use the `New-CsUCPhoneConfiguration` cmdlet to create a collection of settings that are applied at the site scope.
This lets you tailor UC phone management to the unique needs of each individual site.

The `New-CsUCPhoneConfiguration` cmdlet enables you to create new UC phone settings at the site scope.
Note that there can only be one collection of settings per site.
For example, suppose you try to create a collection of settings that has the Identity site:Redmond, but the Redmond site already has a set of UC phone settings assigned to it.
In that case, your command will fail.
Instead, you must do one of two things: either remove the existing settings and then use the `New-CsUCPhoneConfiguration` cmdlet to create a new collection of settings; or simply use the `Set-CsUCPhoneConfiguration` cmdlet to modify the existing settings.

You cannot create a new collection of settings at the global scope.
The only thing you can do at the global scope is use the `Set-CsUCPhoneConfiguration` cmdlet to modify the existing settings.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
New-CsUCPhoneConfiguration -Identity site:Redmond -CalendarPollInterval "00:10:00" -LoggingLevel "Medium"
```

Example 1 creates a new collection of UC phone settings for the Redmond site.
In this example, two optional parameters are included along with the required parameter Identity: CalendarPollInterval, which sets the calendar polling time to every 10 minutes (00 hours: 10 minutes: 00 seconds); and LoggingLevel, which sets the UC phone logging level to Medium.
As soon as this command completes, the new settings will be applied to the Redmond site and users in that site will have their UC phones governed by the new settings.
Note that this command will fail if the Redmond site already has a collection of UC phone settings.


### -------------------------- Example 2 ------------------------
```
$x = New-CsUCPhoneConfiguration -Identity site:Redmond -InMemory

$x.CalendarPollInterval = "00:10:00"

$x.LoggingLevel = "Medium"

Set-CsUCPhoneConfiguration -Instance $x
```

Example 2 demonstrates the use of the InMemory parameter; this parameter enables you to create a new set of UC phone settings that exists in memory only.
(These settings are stored in the variable $x.) After this virtual collection has been created, you can modify the in-memory-only settings using commands similar to those shown in lines 2 and 3 of the example: in line 2, the CalendarPollInterval property is set the 10 minutes (00 hours: 10 minutes: 00 seconds) and in line 3 the LoggingLevel property is set to Medium.

After you have finished modifying the property values, you can then use the `Set-CsUCPhoneConfiguration` cmdlet to turn the virtual settings stored in $x into an actual collection of settings applied to the Redmond site.
Note that, with the use of the InMemory parameter, the settings are not actually applied until you call the `Set-CsUCPhoneConfiguration` cmdlet.
If you do not call this cmdlet, your virtual settings will disappear when you end your Windows PowerShell session or when you delete the variable $x.


## PARAMETERS

### -Identity
Represents the unique identifier to be assigned to the new collection of UC phone configuration settings.
Because you can only create new collections at the site scope, the Identity will always be the prefix "site:" followed by the site name; for example "site:Redmond".

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

### -CalendarPollInterval
Indicates how often the UC device retrieves information from your Outlook calendar.
The value must be specified using the format hours:minutes:seconds; for example, to set the time interval to 1 hour (the maximum allowed interval) use this syntax:

`-CalendarPollInterval "01:00:00"`

The default value is 3 minutes (00:03:00).


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

### -EnforcePhoneLock
Determines whether or not UC phones are automatically locked after the number of minutes specified by PhoneLockTimeout.
The default value is True.

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

### -LoggingLevel
Enables logging on the UC device.
Valid values are Off; Low; Medium; and High.
The default value is Off.

```yaml
Type: LoggingLevel
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinPhonePinLength
Specifies the minimum number of digits required for personal identification numbers (PINs).

Minimum value: 4

Maximum value: 15

Default: 6

```yaml
Type: Byte
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneLockTimeout
Specifies the length of time, in minutes, that a UC phone will remain idle before automatically locking.

This value must be less than 01:00:00 (1 hour).
The default value is 00:10:00 (10 minutes).

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

### -SIPSecurityMode
Specifies the level of security that the server applies to SIP sessions initiated by a UC phone.

Valid values are:

Low (allow any type of authorization or transport).

Medium (NTLM or Kerberos is required for user authentication).

High (NTLM or Kerberos is required for user authentication and TLS is required for SIP connections).

The default value is High.

```yaml
Type: SIPSecurityMode
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Voice8021p
Specifies the user priority value (the 802.1p value) for voice traffic within the Skype for Business Server deployment.

This setting is effective only for networks in which switches and bridges are 802.1p-capable.
The minimum value for this property is 0 and the maximum value is 7.
The default value is 0.


```yaml
Type: Byte
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoiceDiffServTag
Specifies the decimal representation of the 6-bit DiffServ Code Point (DSCP) priority marking.
This marking defines the Per Hop Behavior (PHB) for IP packets passed by the UC phones that are managed by this server.

This value must be between 0 and 63, inclusive.
The default value is 40.

```yaml
Type: Byte
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
The `New-CsUCPhoneConfiguration` cmdlet does not accept pipelined input.

## OUTPUTS

###  
Creates instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.UcPhoneSettings object.

## NOTES

## RELATED LINKS

[Get-CsUCPhoneConfiguration](Get-CsUCPhoneConfiguration.md)

[Remove-CsUCPhoneConfiguration](Remove-CsUCPhoneConfiguration.md)

[Set-CsUCPhoneConfiguration](Set-CsUCPhoneConfiguration.md)
