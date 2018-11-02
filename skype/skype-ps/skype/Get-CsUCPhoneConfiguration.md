---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsUCPhoneConfiguration
schema: 2.0.0
---

# Get-CsUCPhoneConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information regarding management options for Microsoft Lync 2010 Phone Edition.
This includes such things as the required security mode and whether or not the phone should automatically be locked after a specified period of inactivity.

**Below Content Applies To:** Lync Server 2013

Returns information regarding management options for Lync Phone Edition.
This includes such things as the required security mode and whether or not the phone should automatically be locked after a specified period of inactivity.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Get-CsUCPhoneConfiguration \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-LocalStore\] \[\<CommonParameters\>\]

Get-CsUCPhoneConfiguration \[-Tenant \<guid\>\] \[-Filter \<string\>\] \[-LocalStore\] \[\<CommonParameters\>\]

**Below Content Applies To:** Skype for Business Server 2015

Returns information regarding management options for UC phones.
This includes such things as the required security mode and whether or not the phone should automatically be locked after a specified period of inactivity.
This cmdlet was introduced in Lync Server 2010.

## SYNTAX

### Identity (Default)
```
Get-CsUCPhoneConfiguration [-Tenant <Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsUCPhoneConfiguration [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
UC phones represent the merging of the telephone and Skype for Business Server.
Lync Phone Edition uses special hardware (that is, a Skype for Business-compatible telephone) that can function as a Voice over Internet Protocol (VoIP) telephone.
In addition, this hardware can also act as a Skype for Business-like endpoint: you can set your current status; check the status of your Skype for Business contacts; search for new contacts; and carry out many of the other activities you are used to doing with Skype for Business.

The CsUCPhoneConfiguration cmdlets enable you to manage your UC phones; for example, you can control such things as the minimum length of the personal identification number (PIN) used to log on to the phone, and whether or not that phone will automatically lock itself after a specified period of inactivity.

Phone configuration settings can be applied at either the global scope or at the site scope.
(Settings applied at the site scope take precedence over settings applied at the global scope.) The Get-CsUCPhoneConfiguration cmdlet enables you to retrieve information about the phone configuration settings current employed throughout your organization.



## EXAMPLES

### -------------------------- Example --------------------------
```
Get-CsUCPhoneConfiguration
```

The command shown in Example 1 returns all of the UC phone configuration settings currently in use in the organization.
Calling the Get-CsUCPhoneConfiguration cmdlet without any parameters always returns a complete collection of phone configuration settings.

### -------------------------- Example --------------------------
```
Get-CsUCPhoneConfiguration -Identity site:Redmond
```

In Example 2, only the UC phone configuration settings that have the Identity site:Redmond are returned.
Because Identities must be unique, this command will never return more than one collection of phone configuration settings.

### -------------------------- Example --------------------------
```
Get-CsUCPhoneConfiguration -Filter site:*
```

In Example 3, all the UC phone settings that have been configured at the site scope are returned.
To do this, the Get-CsUCPhoneConfiguration cmdlet is called, along with the Filter parameter; the filter value "site:*" limits the returned data to settings where the Identity property (the only property you can filter on) begins with the string value "site:".
By definition, any settings that have an Identity that begins with the string value "site:" are settings that have been configured at the site scope.

### -------------------------- Example --------------------------
```
Get-CsUCPhoneConfiguration | Where-Object {$_.SIPSecurityMode -eq "Medium"}
```

Example 4 returns the UC phone configuration settings where the SIP security mode is set to Medium.
(SIP security can be set to Low, Medium, or High.) To carry out this task, the command first uses the Get-CsUCPhoneConfiguration cmdlet without any additional parameters in order to return a collection of all the UC phone settings configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the SIPSecurityMode property is equal to Medium.

### -------------------------- Example --------------------------
```
Get-CsUCPhoneConfiguration | Where-Object {$_.EnforcePhoneLock -eq $False -or $_.MinPhonePinLength -lt 6}
```

In Example 5, UC phone settings are returned that meet one or both of the following criteria: 1) phone locking is not enforced; and/or, 2) the minimum PIN length is less than 6 digits.
To do this, the command first calls the Get-CsUCPhoneConfiguration cmdlet to return a collection of all the UC phone settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects those items that meet one (or both) of the following criteria: 1) the EnforcePhoneLock property is equal to False; and/or, 2) the MinPhonePinLength property is less than 6.

The -or operator tells the Where-Object cmdlet to pick settings that meet either (or both) of the criteria.
To pick settings that meet both the criteria (in this case, meaning that phone locking is not enforced and the PIN length is less than 6) use the -and operator:

Where-Object {$_.EnforcePhoneLock -eq $False -and $_.MinPhonePinLength -lt 6}

## PARAMETERS

### -Identity
Indicates the unique identifier for the collection of unified communications (UC) phone configuration settings you want to return.
To refer to the global settings use this syntax:

-Identity global

To refer to a collection configured at the site scope, use syntax similar to this:

-Identity "site:Redmond"

Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards then include the Filter parameter instead.

If this parameter is not specified then the Get-CsUCPhoneConfiguration cmdlet returns a collection of all the UC phone configuration settings in use in the organization.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcard characters in order to return a collection (or collections) of UC phone configuration settings.
To return a collection of all the settings configured at the site scope, use this syntax:

-Filter site:*

To return a collection of all the settings that have the string value "EMEA" somewhere in their Identity (the only property you can filter for), use this syntax:

-Filter *EMEA*

```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the UC phone configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
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
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job. You can continue to work in the session while the job finishes. The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer. To get the job results, use the Receive-Job cmdlet.

For more information about Windows PowerShell background jobs, see [about_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-6) and [about_Remote_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_jobs?view=powershell-6).

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
None.
The Get-CsUCPhoneConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

### System.Object

###  
The Get-CsUCPhoneConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.UcPhoneSettings object.

## NOTES

## RELATED LINKS

[New-CsUCPhoneConfiguration](New-CsUCPhoneConfiguration.md)

[Remove-CsUCPhoneConfiguration](Remove-CsUCPhoneConfiguration.md)

[Set-CsUCPhoneConfiguration](Set-CsUCPhoneConfiguration.md)

