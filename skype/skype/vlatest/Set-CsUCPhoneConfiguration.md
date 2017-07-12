---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsUCPhoneConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Enables you to modify management options for Microsoft Lync 2010 Phone Edition.
This includes such things as the required security mode and whether or not the phone should automatically be locked after a specified period of inactivity.

**Below Content Applies To:** Lync Server 2013

Enables you to modify management options for Lync Phone Edition.
This includes such things as the required security mode and whether or not the phone should automatically be locked after a specified period of inactivity.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Set-CsUCPhoneConfiguration \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-CalendarPollInterval \<timespan\>\] \[-EnforcePhoneLock \<bool\>\] \[-PhoneLockTimeout \<timespan\>\] \[-MinPhonePinLength \<byte\>\] \[-SIPSecurityMode \<SIPSecurityMode\>\] \[-VoiceDiffServTag \<byte\>\] \[-Voice8021p \<byte\>\] \[-LoggingLevel \<LoggingLevel\>\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Set-CsUCPhoneConfiguration \[-Tenant \<guid\>\] \[-CalendarPollInterval \<timespan\>\] \[-EnforcePhoneLock \<bool\>\] \[-PhoneLockTimeout \<timespan\>\] \[-MinPhonePinLength \<byte\>\] \[-SIPSecurityMode \<SIPSecurityMode\>\] \[-VoiceDiffServTag \<byte\>\] \[-Voice8021p \<byte\>\] \[-LoggingLevel \<LoggingLevel\>\] \[-Instance \<psobject\>\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

**Below Content Applies To:** Skype for Business Server 2015

Enables you to modify management options for UC phones.
This includes such things as the required security mode and whether or not the phone should automatically be locked after a specified period of inactivity.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsUCPhoneConfiguration [[-Identity] <XdsIdentity>] [-CalendarPollInterval <TimeSpan>]
 [-EnforcePhoneLock <Boolean>] [-LoggingLevel <LoggingLevel>] [-MinPhonePinLength <Byte>]
 [-PhoneLockTimeout <TimeSpan>] [-SIPSecurityMode <SIPSecurityMode>] [-Voice8021p <Byte>]
 [-VoiceDiffServTag <Byte>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsUCPhoneConfiguration [-Instance <PSObject>] [-CalendarPollInterval <TimeSpan>]
 [-EnforcePhoneLock <Boolean>] [-LoggingLevel <LoggingLevel>] [-MinPhonePinLength <Byte>]
 [-PhoneLockTimeout <TimeSpan>] [-SIPSecurityMode <SIPSecurityMode>] [-Voice8021p <Byte>]
 [-VoiceDiffServTag <Byte>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

###  (Default)
```
Set-CsUCPhoneConfiguration [[-Identity] <Object>] [-BypassDualWrite <Object>] [-CalendarPollInterval <Object>]
 [-Confirm] [-EnforcePhoneLock <Object>] [-Force] [-Instance <Object>] [-LoggingLevel <Object>]
 [-MinPhonePinLength <Object>] [-PhoneLockTimeout <Object>] [-SIPSecurityMode <Object>] [-Tenant <Object>]
 [-Voice8021p <Object>] [-VoiceDiffServTag <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Lync 2010 Phone Edition represents the merging of the telephone and Microsoft Lync 2010.
Lync 2010 Phone Edition uses special hardware (that is, a Lync 2010-compatible telephone) that can function as a Voice over Internet Protocol (VoIP) telephone.
In addition, this hardware can also act as a Lync 2010-like endpoint: you can set your current status; check the status of your Lync 2010 contacts; search for new contacts; and carry out many of the other activities you are used to doing with Lync 2010.

The CsUCPhoneConfiguration cmdlets enable you to use configuration settings to manage phones running Lync 2010 Phone Edition.
For example, you can control such things as the minimum length of the personal identification number (PIN) used to log on to the phone and whether or not the phone will automatically lock itself after a specified period of inactivity.

Unified communications (UC) phone configuration settings can be applied at either the global scope or at the site scope.
When you first install Lync Server, a single set of UC phone configuration settings is created and applied at the global scope.
However, at any time after that you can use the New-CsUCPhoneConfiguration cmdlet to create a collection of settings that are applied at the site scope.
This lets you tailor UC phone management to the unique needs of each individual site.

In addition to creating new collections of UC phone settings, you can use the Set-CsUCPhoneConfiguration cmdlet to modify the property values of an existing collection.
For example, by default logging is disabled for UC phones.
To enable logging at the global level, you can use Set-CsUCPhoneConfiguration to change the value of the global collection's LoggingLevel property to True.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsUCPhoneConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsUCPhoneConfiguration"}

**Below Content Applies To:** Lync Server 2013

Lync Phone Edition represents the merging of the telephone and Lync Server.
Lync Phone Edition uses special hardware (that is, a Lync-compatible telephone) that can function as a Voice over Internet Protocol (VoIP) telephone.
In addition, this hardware can also act as a Lync-like endpoint: you can set your current status; check the status of your Lync contacts; search for new contacts; and carry out many of the other activities you are used to doing with Lync.

The CsUCPhoneConfiguration cmdlets enable you to use configuration settings to manage phones running Lync Server.
For example, you can control such things as the minimum length of the personal identification number (PIN) used to log on to the phone and whether or not the phone will automatically lock itself after a specified period of inactivity.

Unified communications (UC) phone configuration settings can be applied at either the global scope or at the site scope.
When you first install Lync Server, a single set of UC phone configuration settings is created and applied at the global scope.
However, at any time after that you can use the New-CsUCPhoneConfiguration cmdlet to create a collection of settings that are applied at the site scope.
This lets you tailor UC phone management to the unique needs of each individual site.

In addition to creating new collections of UC phone settings, you can use the Set-CsUCPhoneConfiguration cmdlet to modify the property values of an existing collection.
For example, by default logging is disabled for UC phones.
To enable logging at the global level, you can use Set-CsUCPhoneConfiguration to change the value of the global collection's LoggingLevel property to True.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsUCPhoneConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsUCPhoneConfiguration"}

**Below Content Applies To:** Skype for Business Online

{{Fill in the Description}}

**Below Content Applies To:** Skype for Business Server 2015

UC phones represent the merging of the telephone and Skype for Business Server 2015.
UC phones use special hardware (that is, a Skype for Business-compatible telephone) that can function as a Voice over Internet Protocol (VoIP) telephone.
In addition, this hardware can also act as a Skype for Business-like endpoint: you can set your current status; check the status of your Skype for Business contacts; search for new contacts; and carry out many of the other activities you are used to doing with Skype for Business.

The CsUCPhoneConfiguration cmdlets enable you to use configuration settings to manage phones running Skype for Business.
For example, you can control such things as the minimum length of the personal identification number (PIN) used to log on to the phone and whether or not the phone will automatically lock itself after a specified period of inactivity.

Unified communications (UC) phone configuration settings can be applied at either the global scope or at the site scope.
When you first install Skype for Business Server 2015, a single set of UC phone configuration settings is created and applied at the global scope.
However, at any time after that you can use the New-CsUCPhoneConfiguration cmdlet to create a collection of settings that are applied at the site scope.
This lets you tailor UC phone management to the unique needs of each individual site.

In addition to creating new collections of UC phone settings, you can use the Set-CsUCPhoneConfiguration cmdlet to modify the property values of an existing collection.
For example, by default logging is disabled for UC phones.
To enable logging at the global level, you can use the Set-CsUCPhoneConfiguration cmdlet to change the value of the global collection's LoggingLevel property to True.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsUCPhoneConfiguration -Identity global -SIPSecurityMode "Medium"
```

The command shown in Example 1 sets the SIP security mode of the global UC phone settings to Medium.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 sets the SIP security mode of the global UC phone settings to Medium.

Set-CsUCPhoneConfiguration -Identity global -SIPSecurityMode "Medium"

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 sets the SIP security mode of the global UC phone settings to Medium.

Set-CsUCPhoneConfiguration -Identity global -SIPSecurityMode "Medium"

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Set-CsUCPhoneConfiguration -Identity site:Redmond -PhoneLockTimeout "00:30:00"
```

The preceding command modifies the UC phone settings configured for the Redmond site.
In this case, the PhoneLockTimeout property is set to 30 minutes; this is done by including the PhoneLockTimeout parameter and the parameter value "00:30:00" (00 hours: 30 minutes: 00 seconds).

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 modifies the UC phone settings configured for the Redmond site.
In this case, the PhoneLockTimeout property is set to 30 minutes; this is done by including the PhoneLockTimeout parameter and the parameter value "00:30:00" (00 hours: 30 minutes: 00 seconds).

Set-CsUCPhoneConfiguration -Identity site:Redmond -PhoneLockTimeout "00:30:00"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 modifies the UC phone settings configured for the Redmond site.
In this case, the PhoneLockTimeout property is set to 30 minutes; this is done by including the PhoneLockTimeout parameter and the parameter value "00:30:00" (00 hours: 30 minutes: 00 seconds).

Set-CsUCPhoneConfiguration -Identity site:Redmond -PhoneLockTimeout "00:30:00"

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsUCPhoneConfiguration -Filter "site:*" | Set-CsUCPhoneConfiguration -PhoneLockTimeout "00:30:00"
```

Example 3 is a variation of the command shown in Example 2.
This time, however, the PhoneLockTimeout property is modified for all the UC phone settings configured at the site scope.
To do this, the command starts off by calling Get-CsUCPhoneConfiguration; the Filter parameter and the filter value "site:*" limit the returned data to phone settings configured at the site scope.
This filtered collection is then piped to Set-CsUCPhoneConfiguration, which uses the PhoneLockTimeout parameter and the parameter value "00:30:00" (00 hours: 30 minutes: 00 seconds) to set the phone lock timeout value for each item in the collection to 30 minutes.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 is a variation of the command shown in Example 2.
This time, however, the PhoneLockTimeout property is modified for all the UC phone settings configured at the site scope.
To do this, the command starts off by calling Get-CsUCPhoneConfiguration; the Filter parameter and the filter value "site:*" limit the returned data to phone settings configured at the site scope.
This filtered collection is then piped to Set-CsUCPhoneConfiguration, which uses the PhoneLockTimeout parameter and the parameter value "00:30:00" (00 hours: 30 minutes: 00 seconds) to set the phone lock timeout value for each item in the collection to 30 minutes.

Get-CsUCPhoneConfiguration -Filter "site:*" | Set-CsUCPhoneConfiguration -PhoneLockTimeout "00:30:00"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 is a variation of the command shown in Example 2.
This time, however, the PhoneLockTimeout property is modified for all the UC phone settings configured at the site scope.
To do this, the command starts off by calling the Get-CsUCPhoneConfiguration cmdlet; the Filter parameter and the filter value "site:*" limit the returned data to phone settings configured at the site scope.
This filtered collection is then piped to the Set-CsUCPhoneConfiguration cmdlet, which uses the PhoneLockTimeout parameter and the parameter value "00:30:00" (00 hours: 30 minutes: 00 seconds) to set the phone lock timeout value for each item in the collection to 30 minutes.

Get-CsUCPhoneConfiguration -Filter "site:*" | Set-CsUCPhoneConfiguration -PhoneLockTimeout "00:30:00"

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsUCPhoneConfiguration | Where-Object {$_.SIPSecurityMode -ne "High"} | Set-CsUCPhoneConfiguration -EnforcePhoneLock $True -PhoneLockTimeout "00:30:00"
```

The preceding command configures the EnforcePhoneLock and the PhoneLockTimeout properties for all the UC phone settings where the SIP security mode is set to either Low or Medium.
To perform this task, the command first uses Get-CsUCPhoneConfiguration to return all the UC phone configuration settings in the organization; this information is then piped to the Where-Object cmdlet, which picks out only those settings where the SIPSecurityMode property is not equal to High.
(Because SIP security can only be set to Low, Medium, or High, this clause will select all the settings where SIPSecurityMode is set to either Low or Medium.) The filtered collection is then piped to Set-CsUCPhoneConfiguration, which uses the EnforcePhoneLock and the PhoneLockTimeout parameters to modify the phone locking and phone lock timeout properties.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 configures the EnforcePhoneLock and the PhoneLockTimeout properties for all the UC phone settings where the SIP security mode is set to either Low or Medium.
To perform this task, the command first uses Get-CsUCPhoneConfiguration to return all the UC phone configuration settings in the organization; this information is then piped to the Where-Object cmdlet, which picks out only those settings where the SIPSecurityMode property is not equal to High.
(Because SIP security can only be set to Low, Medium, or High, this clause will select all the settings where SIPSecurityMode is set to either Low or Medium.) The filtered collection is then piped to Set-CsUCPhoneConfiguration, which uses the EnforcePhoneLock and the PhoneLockTimeout parameters to modify the phone locking and phone lock timeout properties.

Get-CsUCPhoneConfiguration | Where-Object {$_.SIPSecurityMode -ne "High"} | Set-CsUCPhoneConfiguration -EnforcePhoneLock $True -PhoneLockTimeout "00:30:00"

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 configures the EnforcePhoneLock and the PhoneLockTimeout properties for all the UC phone settings where the SIP security mode is set to either Low or Medium.
To perform this task, the command first uses the Get-CsUCPhoneConfiguration cmdlet to return all the UC phone configuration settings in the organization; this information is then piped to the Where-Object cmdlet, which picks out only those settings where the SIPSecurityMode property is not equal to High.
(Because SIP security can only be set to Low, Medium, or High, this clause will select all the settings where SIPSecurityMode is set to either Low or Medium.) The filtered collection is then piped to the Set-CsUCPhoneConfiguration cmdlet, which uses the EnforcePhoneLock and the PhoneLockTimeout parameters to modify the phone locking and phone lock timeout properties.

Get-CsUCPhoneConfiguration | Where-Object {$_.SIPSecurityMode -ne "High"} | Set-CsUCPhoneConfiguration -EnforcePhoneLock $True -PhoneLockTimeout "00:30:00"

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
Get-CsUCPhoneConfiguration | Where-Object {$_.PhoneLockTimeout -lt "00:10:00"} | Set-CsUCPhoneConfiguration -PhoneLockTimeout "00:10:00"
```

In Example 5, the phone lock timeout value is set to 10 minutes for all the UC phone settings where the PhoneLockTimeout property is currently less than 10 minutes.
(In effect, this makes 10 minutes the minimum phone lock timeout for the entire organization.) To do this, the command first uses Get-CsUCPhoneConfiguration to return a collection of all the UC phone settings currently in use in the organization.
This collection is then piped to Where-Object, which picks out only those settings where the PhoneLockTimeout property is less than  10 minutes (00 hours: 10 minutes: 00 seconds).
In turn, the filtered collection is piped to Set-CsUCPhoneConfiguration, which sets the PhoneLockTimeout value for each item in the collection to 10 minutes.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

In Example 5, the phone lock timeout value is set to 10 minutes for all the UC phone settings where the PhoneLockTimeout property is currently less than 10 minutes.
(In effect, this makes 10 minutes the minimum phone lock timeout for the entire organization.) To do this, the command first uses Get-CsUCPhoneConfiguration to return a collection of all the UC phone settings currently in use in the organization.
This collection is then piped to Where-Object, which picks out only those settings where the PhoneLockTimeout property is less than 10 minutes (00 hours: 10 minutes: 00 seconds).
In turn, the filtered collection is piped to Set-CsUCPhoneConfiguration, which sets the PhoneLockTimeout value for each item in the collection to 10 minutes.

Get-CsUCPhoneConfiguration | Where-Object {$_.PhoneLockTimeout -lt "00:10:00"} | Set-CsUCPhoneConfiguration -PhoneLockTimeout "00:10:00"

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

In Example 5, the phone lock timeout value is set to 10 minutes for all the UC phone settings where the PhoneLockTimeout property is currently less than 10 minutes.
(In effect, this makes 10 minutes the minimum phone lock timeout for the entire organization.) To do this, the command first uses the Get-CsUCPhoneConfiguration cmdlet to return a collection of all the UC phone settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the PhoneLockTimeout property is less than 10 minutes (00 hours: 10 minutes: 00 seconds).
In turn, the filtered collection is piped to the Set-CsUCPhoneConfiguration cmdlet, which sets the PhoneLockTimeout value for each item in the collection to 10 minutes.

Get-CsUCPhoneConfiguration | Where-Object {$_.PhoneLockTimeout -lt "00:10:00"} | Set-CsUCPhoneConfiguration -PhoneLockTimeout "00:10:00"

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Represents the unique identifier assigned to the collection of UC phone configuration settings.
To refer to the global settings, use this syntax: -Identity global.
To refer to a collection configured at the site scope use syntax similar to this: -Identity site:Redmond.
Note that you cannot use wildcard characters when specifying an Identity.

If this parameter is omitted, then Set-CsUCPhoneConfiguration will modify the global settings.



**Below Content Applies To:** Skype for Business Online

{{Fill Identity Description}}



**Below Content Applies To:** Skype for Business Server 2015

Represents the unique identifier assigned to the collection of UC phone configuration settings.
To refer to the global settings, use this syntax:

-Identity global

To refer to a collection configured at the site scope use syntax similar to this:

-Identity site:Redmond

Note that you cannot use wildcard characters when specifying an Identity.

If this parameter is omitted, then the Set-CsUCPhoneConfiguration cmdlet will modify the global settings.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.



**Below Content Applies To:** Skype for Business Online

{{Fill Instance Description}}



```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -CalendarPollInterval
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Indicates how often the UC device retrieves information from your Microsoft Outlook calendar.
The value must be specified using the format hours:minutes:seconds; for example, to set the time interval to 1 hour (the maximum allowed interval) use this syntax: -CalendarPollInterval "01:00:00".
The default value is 3 minutes (00:03:00).



**Below Content Applies To:** Skype for Business Online

{{Fill CalendarPollInterval Description}}



**Below Content Applies To:** Skype for Business Server 2015

Indicates how often the UC device retrieves information from your Outlook calendar.
The value must be specified using the format hours:minutes:seconds; for example, to set the time interval to 1 hour (the maximum allowed interval) use this syntax: -CalendarPollInterval "01:00:00".
The default value is 3 minutes (00:03:00).



```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnforcePhoneLock
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Determines whether or not UC phones are automatically locked after the number of minutes specified by PhoneLockTimeout.
The default value is True.



**Below Content Applies To:** Skype for Business Online

{{Fill EnforcePhoneLock Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LoggingLevel
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Enables logging on the UC device.
Valid values are Off; Low; Medium; and High.
The default value is Off.



**Below Content Applies To:** Skype for Business Online

{{Fill LoggingLevel Description}}



```yaml
Type: LoggingLevel
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinPhonePinLength
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Specifies the minimum number of digits required for personal identification numbers (PINs).

Minimum value: 4

Maximum value: 15

Default: 6



**Below Content Applies To:** Skype for Business Online

{{Fill MinPhonePinLength Description}}



```yaml
Type: Byte
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneLockTimeout
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Specifies the length of time, in minutes, that a UC phone will remain idle before automatically locking.

This value must be less than 01:00:00 (1 hour).
The default value is 00:10:00 (10 minutes).



**Below Content Applies To:** Skype for Business Online

{{Fill PhoneLockTimeout Description}}



```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SIPSecurityMode
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Specifies the level of security that the server applies to SIP sessions initiated by a UC phone.

Valid values are:

Low (allow any type of authorization or transport).

Medium (NTLM or Kerberos is required for user authentication).

High (NTLM or Kerberos is required for user authentication and TLS is required for SIP connections).

The default value is High.



**Below Content Applies To:** Skype for Business Online

{{Fill SIPSecurityMode Description}}



```yaml
Type: SIPSecurityMode
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Voice8021p
**Below Content Applies To:** Lync Server 2010

Specifies the user priority value (the 802.1p value) for voice traffic within the Lync Server  deployment.

This setting is effective only for networks in which switches and bridges are 802.1p-capable.
The minimum value for this property is 0 and the maximum value is 7.
The default value is 0.



**Below Content Applies To:** Lync Server 2013

Specifies the user priority value (the 802.1p value) for voice traffic within the Lync Server deployment.

This setting is effective only for networks in which switches and bridges are 802.1p-capable.
The minimum value for this property is 0 and the maximum value is 7.
The default value is 0.



**Below Content Applies To:** Skype for Business Online

{{Fill Voice8021p Description}}



**Below Content Applies To:** Skype for Business Server 2015

Specifies the user priority value (the 802.1p value) for voice traffic within the Skype for Business Server 2015 deployment.

This setting is effective only for networks in which switches and bridges are 802.1p-capable.
The minimum value for this property is 0 and the maximum value is 7.
The default value is 0.



```yaml
Type: Byte
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoiceDiffServTag
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Specifies the decimal representation of the 6-bit DiffServ Code Point (DSCP) priority marking.
This marking defines the Per Hop Behavior (PHB) for IP packets passed by the UC phones that are managed by this server.

This value must be between 0 and 63, inclusive.
The default value is 40.



**Below Content Applies To:** Skype for Business Online

{{Fill VoiceDiffServTag Description}}



```yaml
Type: Byte
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Suppresses the display of any non-fatal error message that might occur when running the command.



**Below Content Applies To:** Skype for Business Online

{{Fill Force Description}}



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



**Below Content Applies To:** Skype for Business Online

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



**Below Content Applies To:** Skype for Business Online

Prompts you for confirmation before running the cmdlet.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
{{Fill Tenant Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.UcPhoneSettings object.
Set-CsUCPhoneConfiguration accepts pipelined instances of the UC phone settings object.

### System.Management.Automation.PSObject

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.UcPhoneSettings object.
The Set-CsUCPhoneConfiguration cmdlet accepts pipelined instances of the UC phone settings object.

## OUTPUTS

###  
Set-CsUCPhoneConfiguration does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.UcPhoneSettings object.

### System.Object

###  
The Set-CsUCPhoneConfiguration cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.UcPhoneSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/f77456aa-992a-47d2-bdc7-5e3cbbfb6926(OCS.14).aspx)

[Get-CsUCPhoneConfiguration]()

[New-CsUCPhoneConfiguration]()

[Remove-CsUCPhoneConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/f77456aa-992a-47d2-bdc7-5e3cbbfb6926(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/f77456aa-992a-47d2-bdc7-5e3cbbfb6926(OCS.16).aspx)

