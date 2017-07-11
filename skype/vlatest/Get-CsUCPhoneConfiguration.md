---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
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

Get-CsUCPhoneConfiguration \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-LocalStore\] \[-BypassDualWrite \<bool\>\] \[\<CommonParameters\>\]

Get-CsUCPhoneConfiguration \[-Tenant \<guid\>\] \[-Filter \<string\>\] \[-LocalStore\] \[-BypassDualWrite \<bool\>\] \[\<CommonParameters\>\]

**Below Content Applies To:** Skype for Business Server 2015

Returns information regarding management options for UC phones.
This includes such things as the required security mode and whether or not the phone should automatically be locked after a specified period of inactivity.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsUCPhoneConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsUCPhoneConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

###  (Default)
```
Get-CsUCPhoneConfiguration [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>] [-LocalStore]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Lync 2010 Phone Edition represents the merging of the telephone and Microsoft Lync 2010.
Lync 2010 Phone Edition uses special hardware (that is, a Lync 2010-compatible telephone) that can function as a Voice over Internet Protocol (VoIP) telephone.
In addition, this hardware can also act as a Lync 2010-like endpoint: you can set your current status; check the status of your Lync 2010 contacts; search for new contacts; and carry out many of the other activities you are used to doing with Lync 2010.

that the CsUCPhoneConfiguration cmdlets enable you to manage your Lync 2010 phones; for example, you can control such things as the minimum length of the personal identification number (PIN) used to log on to the phone as well as whether or not that phone will automatically lock itself after a specified period of inactivity.

Phone configuration settings can be applied at either the global scope or at the site scope.
(Settings applied at the site scope take precedence over settings applied at the global scope.) The Get-CsUCPhoneConfiguration cmdlet enables you to retrieve information about the phone configuration settings current employed throughout your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsUCPhoneConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsUCPhoneConfiguration"}

**Below Content Applies To:** Lync Server 2013

Lync Phone Edition represents the merging of the telephone and Lync Server.
Lync Phone Edition uses special hardware (that is, a Lync-compatible telephone) that can function as a Voice over Internet Protocol (VoIP) telephone.
In addition, this hardware can also act as a Lync-like endpoint: you can set your current status; check the status of your Lync contacts; search for new contacts; and carry out many of the other activities you are used to doing with Lync.

The CsUCPhoneConfiguration cmdlets enable you to manage your Lync Phone Edition phones; for example, you can control such things as the minimum length of the personal identification number (PIN) used to log on to the phone, and whether or not that phone will automatically lock itself after a specified period of inactivity.

Phone configuration settings can be applied at either the global scope or at the site scope.
(Settings applied at the site scope take precedence over settings applied at the global scope.) The Get-CsUCPhoneConfiguration cmdlet enables you to retrieve information about the phone configuration settings current employed throughout your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsUCPhoneConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsUCPhoneConfiguration"}

**Below Content Applies To:** Skype for Business Online

{{Fill in the Description}}

**Below Content Applies To:** Skype for Business Server 2015

UC phones represent the merging of the telephone and Skype for Business Server 2015.
Lync Phone Edition uses special hardware (that is, a Skype for Business-compatible telephone) that can function as a Voice over Internet Protocol (VoIP) telephone.
In addition, this hardware can also act as a Skype for Business-like endpoint: you can set your current status; check the status of your Skype for Business contacts; search for new contacts; and carry out many of the other activities you are used to doing with Skype for Business.

The CsUCPhoneConfiguration cmdlets enable you to manage your UC phones; for example, you can control such things as the minimum length of the personal identification number (PIN) used to log on to the phone, and whether or not that phone will automatically lock itself after a specified period of inactivity.

Phone configuration settings can be applied at either the global scope or at the site scope.
(Settings applied at the site scope take precedence over settings applied at the global scope.) The Get-CsUCPhoneConfiguration cmdlet enables you to retrieve information about the phone configuration settings current employed throughout your organization.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsUCPhoneConfiguration
```

The command shown in Example 1 returns all of the UC phone configuration settings currently in use in the organization.
Calling Get-CsUCPhoneConfiguration without any parameters always returns a complete collection of phone configuration settings.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns all of the UC phone configuration settings currently in use in the organization.
Calling Get-CsUCPhoneConfiguration without any parameters always returns a complete collection of phone configuration settings.

Get-CsUCPhoneConfiguration

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns all of the UC phone configuration settings currently in use in the organization.
Calling the Get-CsUCPhoneConfiguration cmdlet without any parameters always returns a complete collection of phone configuration settings.

Get-CsUCPhoneConfiguration

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsUCPhoneConfiguration -Identity site:Redmond
```

In Example 2, only the UC phone configuration settings that have the Identity site:Redmond are returned.
Because Identities must be unique, this command will never return more than one collection of phone configuration settings.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, only the UC phone configuration settings that have the Identity site:Redmond are returned.
Because Identities must be unique, this command will never return more than one collection of phone configuration settings.

Get-CsUCPhoneConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, only the UC phone configuration settings that have the Identity site:Redmond are returned.
Because Identities must be unique, this command will never return more than one collection of phone configuration settings.

Get-CsUCPhoneConfiguration -Identity site:Redmond

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsUCPhoneConfiguration -Filter site:*
```

In the preceding command, all the UC phone settings that have been configured at the site scope are returned.
To do this, Get-CsUCPhoneConfiguration is called, along with the Filter parameter; the filter value "site:*" limits the returned data to settings where the Identity property (the only property you can filter on) begins with the string value "site:".
By definition, any settings that have an Identity that begins with the string value "site:" are settings that have been configured at the site scope.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, all the UC phone settings that have been configured at the site scope are returned.
To do this, Get-CsUCPhoneConfiguration is called, along with the Filter parameter; the filter value "site:*" limits the returned data to settings where the Identity property (the only property you can filter on) begins with the string value "site:".
By definition, any settings that have an Identity that begins with the string value "site:" are settings that have been configured at the site scope.

Get-CsUCPhoneConfiguration -Filter site:*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, all the UC phone settings that have been configured at the site scope are returned.
To do this, the Get-CsUCPhoneConfiguration cmdlet is called, along with the Filter parameter; the filter value "site:*" limits the returned data to settings where the Identity property (the only property you can filter on) begins with the string value "site:".
By definition, any settings that have an Identity that begins with the string value "site:" are settings that have been configured at the site scope.

Get-CsUCPhoneConfiguration -Filter site:*

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsUCPhoneConfiguration | Where-Object {$_.SIPSecurityMode -eq "Medium"}
```

Example 4 returns the UC phone configuration settings where the SIP security mode is set to Medium.
(SIP security can be set to Low, Medium, or High.) To carry out this task, the command first uses Get-CsUCPhoneConfiguration without any additional parameters in order to return a collection of all the UC phone settings configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the SIPSecurityMode property is equal to Medium.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns the UC phone configuration settings where the SIP security mode is set to Medium.
(SIP security can be set to Low, Medium, or High.) To carry out this task, the command first uses Get-CsUCPhoneConfiguration without any additional parameters in order to return a collection of all the UC phone settings configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the SIPSecurityMode property is equal to Medium.

Get-CsUCPhoneConfiguration | Where-Object {$_.SIPSecurityMode -eq "Medium"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns the UC phone configuration settings where the SIP security mode is set to Medium.
(SIP security can be set to Low, Medium, or High.) To carry out this task, the command first uses the Get-CsUCPhoneConfiguration cmdlet without any additional parameters in order to return a collection of all the UC phone settings configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the SIPSecurityMode property is equal to Medium.

Get-CsUCPhoneConfiguration | Where-Object {$_.SIPSecurityMode -eq "Medium"}

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
Get-CsUCPhoneConfiguration | Where-Object {$_.EnforcePhoneLock -eq $False -or $_.MinPhonePinLength -lt 6}
```

In Example 5, UC phone settings are returned that meet one or both of the following criteria: 1) phone locking is not enforced; and/or, 2) the minimum PIN length is less than 6 digits.
To do this, the command first calls Get-CsUCPhoneConfiguration to return a collection of all the UC phone settings currently in use in the organization.
This collection is then piped to Where-Object, which selects those items that meet one (or both) of the following criteria: 1) the EnforcePhoneLock property is equal to False; and/or, 2) the MinPhoneLength property is less than 6.

The -or operator tells Where-Object to pick settings that meet either (or both) of the criteria.
To pick settings that meet both the criteria (in this case, meaning that phone locking is not enforced and the PIN length is less than 6) use the -and operator:

Where-Object {$_.EnforcePhoneLock -eq $False -and $_.MinPhonePinLength -lt 6}

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

In Example 5, UC phone settings are returned that meet one or both of the following criteria: 1) phone locking is not enforced; and/or, 2) the minimum PIN length is less than 6 digits.
To do this, the command first calls Get-CsUCPhoneConfiguration to return a collection of all the UC phone settings currently in use in the organization.
This collection is then piped to Where-Object, which selects those items that meet one (or both) of the following criteria: 1) the EnforcePhoneLock property is equal to False; and/or, 2) the MinPhoneLength property is less than 6.

The -or operator tells Where-Object to pick settings that meet either (or both) of the criteria.
To pick settings that meet both the criteria (in this case, meaning that phone locking is not enforced and the PIN length is less than 6) use the -and operator:

Where-Object {$_.EnforcePhoneLock -eq $False -and $_.MinPhonePinLength -lt 6}

Get-CsUCPhoneConfiguration | Where-Object {$_.EnforcePhoneLock -eq $False -or $_.MinPhonePinLength -lt 6}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

In Example 5, UC phone settings are returned that meet one or both of the following criteria: 1) phone locking is not enforced; and/or, 2) the minimum PIN length is less than 6 digits.
To do this, the command first calls the Get-CsUCPhoneConfiguration cmdlet to return a collection of all the UC phone settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects those items that meet one (or both) of the following criteria: 1) the EnforcePhoneLock property is equal to False; and/or, 2) the MinPhonePinLength property is less than 6.

The -or operator tells the Where-Object cmdlet to pick settings that meet either (or both) of the criteria.
To pick settings that meet both the criteria (in this case, meaning that phone locking is not enforced and the PIN length is less than 6) use the -and operator:

Where-Object {$_.EnforcePhoneLock -eq $False -and $_.MinPhonePinLength -lt 6}

Get-CsUCPhoneConfiguration | Where-Object {$_.EnforcePhoneLock -eq $False -or $_.MinPhonePinLength -lt 6}

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Indicates the unique identifier for the collection of unified communications (UC) phone configuration settings you want to return.
To refer to the global settings use this syntax: -Identity global.
To refer to a collection configured at the site scope, use syntax similar to this: -Identity "site:Redmond".
Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards then include the Filter parameter instead.

If this parameter is not specified then Get-CsUCPhoneConfiguration returns a collection of all the UC phone configuration settings in use in the organization.



**Below Content Applies To:** Skype for Business Online

{{Fill Identity Description}}



**Below Content Applies To:** Skype for Business Server 2015

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

### -Filter
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to use wildcard characters in order to return a collection (or collections) of UC phone configuration settings.
To return a collection of all the settings configured at the site scope, use this syntax: -Filter site:*.
To return a collection of all the settings that have the string value "EMEA" somewhere in their Identity (the only property you can filter for), use this syntax: -Filter *EMEA*.



**Below Content Applies To:** Skype for Business Online

{{Fill Filter Description}}



**Below Content Applies To:** Skype for Business Server 2015

Enables you to use wildcard characters in order to return a collection (or collections) of UC phone configuration settings.
To return a collection of all the settings configured at the site scope, use this syntax:

-Filter site:*

To return a collection of all the settings that have the string value "EMEA" somewhere in their Identity (the only property you can filter for), use this syntax:

-Filter *EMEA*



```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Retrieves the UC phone configuration data from the local replica of the Central Management store rather than from the Central Management store itself.



**Below Content Applies To:** Skype for Business Online

{{Fill LocalStore Description}}



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
None.
Get-CsUCPhoneConfiguration does not accept pipelined input.

### None

###  
None.
The Get-CsUCPhoneConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsUCPhoneConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.UcPhoneSettings object.

### System.Object

###  
The Get-CsUCPhoneConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.UcPhoneSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/014bba9e-b5c4-477d-9273-c993e7a7ee9e(OCS.14).aspx)

[New-CsUCPhoneConfiguration]()

[Remove-CsUCPhoneConfiguration]()

[Set-CsUCPhoneConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/014bba9e-b5c4-477d-9273-c993e7a7ee9e(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/014bba9e-b5c4-477d-9273-c993e7a7ee9e(OCS.16).aspx)

