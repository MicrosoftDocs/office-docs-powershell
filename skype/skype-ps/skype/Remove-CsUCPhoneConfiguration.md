---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsUCPhoneConfiguration
schema: 2.0.0
---

# Remove-CsUCPhoneConfiguration

## SYNOPSIS
Removes the specified collection of UC phone configuration settings.
These settings include such things as the required security mode and whether the phone should automatically be locked after a specified period of inactivity.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsUCPhoneConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
UC phones represent the merging of the telephone and Skype for Business Server.
UC phones use special hardware (that is, a Skype for Business-compatible telephone) that can function as a Voice over Internet Protocol (VoIP) telephone.
In addition, this hardware can also act as a Skype for Business-like endpoint: you can set your current status; check the status of your Skype for Business contacts; search for new contacts and carry out many of the other activities you are used to doing with Skype for Business.

Skype for Business Server ships with a number of cmdlets that enable you to manage UC phones; for example, you can control such things as the minimum length of the personal identification number (PIN) used to log on to the phone and whether or not the phone will automatically lock itself after a specified period of inactivity.

Unified communications (UC) phone configuration settings can be applied at either the global scope or at the site scope.
(Settings applied at the site scope take precedence over settings applied at the global scope.) When you first install Skype for Business Server, a single set of UC phone configuration settings is created and applied at the global scope.
However, at any time after that you can use the `New-CsUCPhoneConfiguration` cmdlet to create a collection of settings applied at the site scope.
This lets you tailor UC phone management to the unique needs of each individual site.

Settings created by using the `New-CsUCPhoneConfiguration` cmdlet can later be removed by using the `Remove-CsUCPhoneConfiguration` cmdlet.
When you remove settings from a site the UC phones in that site are not left unmanaged; instead, those phones will automatically come under the jurisdiction of the global settings.

You can also run the `Remove-CsUCPhoneConfiguration` cmdlet against the global settings.
If you do that, however, the global settings will not actually be removed: you cannot remove the global UC phone settings.
Instead, the properties in the global settings will be reset to their default values.
For example, if you have changed the phone lock time interval to 30 minutes, "removing" the global settings will reset the interval to the default value of 10 minutes.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Remove-CsUCPhoneConfiguration -Identity site:Redmond
```

The command shown in Example 1 removes the UC phone configuration settings for the Redmond site (`-Identity site:Redmond`).
When settings are removed from a site scope, users in that site will have their UC phones governed by the global phone configuration settings.


### -------------------------- Example 2 ------------------------
```
Get-CsUCPhoneConfiguration -Filter site:* | Remove-CsUCPhoneConfiguration
```

Example 2 removes all the UC phone settings that have been configured at the site scope.
To do this, the command first uses the `Get-CsUCPhoneConfiguration` cmdlet and the Filter parameter to return all the settings configured at the site scope; the filter value "site:*" limits the returned data to settings where the Identity property (the only property you can filter on) begins with the string value "site:".
This filtered collection is then piped to the `Remove-CsUCPhoneConfiguration` cmdlet, which removes each item in the collection.


### -------------------------- Example 3 ------------------------
```
Get-CsUCPhoneConfiguration | Where-Object {$_.EnforcePhoneLock -eq $False} | Remove-CsUCPhoneConfiguration
```

In Example 3, all the UC phone settings that do not enforce phone locking are removed.
To carry out this task, the command first uses the `Get-CsUCPhoneConfiguration` cmdlet without any parameters in order to return a collection of all the UC phone settings currently in use in the organization.
This collection is piped to the `Where-Object` cmdlet, which picks out only those settings where the EnforceLockProperty is equal to False.
In turn, that filtered collection is piped to the `Remove-CsUCPhoneConfiguration` cmdlet, which removes each item in the collection.


### -------------------------- Example 4 ------------------------
```
Get-CsUCPhoneConfiguration | Where-Object {$_.SIPSecurityMode -ne "High"} | Remove-CsUCPhoneConfiguration
```

Example 4 deletes all the UC phone configuration settings where the SIP security mode is set to either Low or Medium.
To do this, the `Get-CsUCPhoneConfiguration` cmdlet is first called in order to return a collection of all the UC phone settings configured for use in the organization.
This collection is then piped to the `Where-Object` cmdlet, which selects only those settings where the SIPSecurityMode property is set to either Low or Medium; this is done by selecting those settings where the SIPSecurityMode is not equal to High.
(There are three possible values for SIPSecurityMode: Low, Medium, and High.) The filtered collection is then piped to the `Remove-CsUCPhoneConfiguration` cmdlet, which deletes all the settings where SIPSecurityMode is not equal to High.


## PARAMETERS

### -Identity
Unique identifier for the collection of UC phone configuration settings to be removed.
To remove a site collection use syntax similar to this:

`-Identity "site:Redmond"`

To remove (reset) the global collection, use the following syntax:

`-Identity global`

Note that you cannot use wildcards when specifying a policy Identity.


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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.UcPhoneSettings object.
The `Remove-CsUCPhoneConfiguration` cmdlet accepts pipelined instances of the UC phone settings object.

## OUTPUTS

###  
None.
Instead, the cmdlet removes instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.UcPhoneSettings object.

## NOTES

## RELATED LINKS

[Get-CsUCPhoneConfiguration](Get-CsUCPhoneConfiguration.md)

[New-CsUCPhoneConfiguration](New-CsUCPhoneConfiguration.md)

[Set-CsUCPhoneConfiguration](Set-CsUCPhoneConfiguration.md)

